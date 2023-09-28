import { createCanvas, loadImage } from "canvas";
import { NextApiRequest, NextApiResponse } from "next";
import path from "path";

const users = new Map();
setInterval(() => users.clear(), 10 * 1000);

export default async (req: NextApiRequest, res: NextApiResponse) => {
        const id = req.query.id;
        if (!id) return res.status(400).send({ status: 400, message: "No ID provided!" })

        const data = users.get(id) ?? await fetch(`https://api.ch1ll.dev/users/${id}`).then(res => res.json()).catch(() => null);
        if (data?.status === 200) {
                const user = data?.content;
                users.set(id, data);

                const canvas = createCanvas(400, 80);
                const context = canvas.getContext("2d");
                const discordImage = await loadImage(path.join("./", "/public/images/discord.png"))
                const discordPfp = await loadImage(`https://cdn.discordapp.com/avatars/${user?.id}/${user?.avatar}`);

                // context.fillStyle = "#ffffff";
                // context.fillRect(0, 0, canvas.width, canvas.height);

                // Title
                context.font = "Bold 18px Arial";
                context.textAlign = "left";
                context.textBaseline = "middle";
                context.fillStyle = "#ffffff";
                context.fillText(`${user.username}${user?.discriminator ? `#${user?.discriminator}` : ""}`, 90, 20);

                // Description
                const desc = user?.activities?.[0]?.text ?? user?.status?.text;
                context.font = "12px Arial";
                context.textAlign = "left";
                context.textBaseline = "middle";
                context.fillStyle = "#ffffff";
                context.fillText(desc ? (desc.length > 55 ? desc?.slice(0, 55) + "..." : desc) : (user?.status?.state?.text ?? ""), 90, 50);

                // Discord Branding
                context.drawImage(discordImage, canvas.width - 85, 10, 75, 15);

                // Profile
                context.save();
                context.beginPath();
                context.arc(40, 40, 32.5, 40, Math.PI * 2, true);
                context.clip();
                context.closePath();
                context.drawImage(discordPfp, 5, 5, 70, 70);
                context.restore();

                // Add the small grey background in the corner of the profile picture
                const xDot = 65;
                const yDot = 62.5;
                context.save();
                context.beginPath();
                context.arc(xDot, yDot, 6, 15, Math.PI * 2, true);
                context.lineWidth = 3
                context.stroke()
                context.closePath();
                context.clip();
                context.fillStyle = user?.status?.state?.color ?? "#80848E";
                context.fillRect(xDot - 10, yDot - 10, 20, 20);
                context.restore();

                const buffer = Buffer.from(canvas.toBuffer() as unknown as string, "base64");
                res.writeHead(200, { "Content-Type": "image/png" });
                return res.end(buffer, "binary");
        } else res.status(500).send({ status: 500, message: "Internal server error." })
}
