"use client";

import { useState, useEffect } from "react";
import { Tooltip } from "@nextui-org/react";
import { formatDistanceToNow } from "date-fns";

import { FaCheckCircle, FaExclamationTriangle } from "react-icons/fa";

import { chakra, Box, Container, VStack, HStack, Text, useColorModeValue, Tag, Skeleton, TagLeftIcon, TagLabel, SkeletonText, Wrap, WrapItem, Heading } from "@chakra-ui/react";

import config from "../../../config";
import Navbar from "../../(components)/navbar";

const CCheckCircle = chakra(FaCheckCircle);
const CAlert = chakra(FaExclamationTriangle);

const status_colors = [
  "green.300", // == Ready
  "yellow.300", // == Connecting
  "yellow.300", // Reconnecting
  "red.300", // Idle
  "red.300", // Nearly
  "red.300", // Disconnected
  "red.300", // WaitingForGuilds
  "yellow.300", // Resuming
  "yellow.300", // WaitingForGuilds
]

export default function Render() {
  const [data, setData] = useState(null);
  const [allOnline, setAllOnline] = useState(true);

  useEffect(() => {
    async function getData() {
      return fetch(`${config.api}/stats`)
        .then((res) => res.json())
        .then(data => {
          setData(data);
          data.forEach(cluster => cluster.status !== 0 && setAllOnline(false));
        }).catch(err => console.error(err));
    }

    if (!data) getData();
    setInterval(() => { setData(null); getData(); }, 15000)
  }, [setData, setAllOnline]);

  const ClusterInfo = ({ cluster }) => {
    return (<div>
      <h3 style={{ fontSize: "20px" }}>Cluster {cluster.id + 1}</h3>
      <p>Guilds: {cluster.totalGuilds}</p>
      <p>Shards: {Math.min(cluster.shards) + 1} - {Math.max(cluster.shards) + 1}</p>
      <p>Ping: {cluster.ping}</p>
      <p>Uptime: {formatDistanceToNow(new Date(cluster.uptime) / 1000, { addSuffix: true })}</p>
    </div>)
  }

  return (<>
    <Navbar />

    {/* Hero */}
    <HStack width={"full"} py={"2rem"}>
      <HStack width={"full"}>
        {!data ? <SkeletonText width="100px" height="50px" /> : (<VStack>
          <Text fontSize={"2xl"} fontWeight={"bold"} color={"white"} textAlign={"center"} style={{ marginInlineStart: "20px" }}>
            DisPing Status
          </Text>
          <Text>This page auto updates every 15 seconds.</Text>
        </VStack>)}
      </HStack>
      <HStack width={"full"} maxW={"175px"}>
        {!data ? (<Skeleton width="100px" height="35px" />) : (
          <Tooltip content={`${formatDistanceToNow(new Date(), { addSuffix: true })} (${new Date().toLocaleString()})`}>
            <Tag size={"lg"} colorScheme={allOnline ? "green" : "red"}>
              <TagLeftIcon as={allOnline ? CCheckCircle : CAlert} />
              <TagLabel>{allOnline ? `Online (${data.length}/${data.length})` : `Outage (${data?.filter(c => c.status !== 0)?.length + 1}/${data?.length})`}</TagLabel>
            </Tag>
          </Tooltip>
        )}
      </HStack>
    </HStack>

    {/* Clusters */}
    <Wrap as={HStack} gap={4} maxW={"full"} pb={"8rem"} justifyContent={"center"}>
      {!data ? (<>
        <Skeleton width={"45px"} height={"45px"} />
        <Skeleton width={"45px"} height={"45px"} />
        <Skeleton width={"45px"} height={"45px"} />
        <Skeleton width={"45px"} height={"45px"} />
        <Skeleton width={"45px"} height={"45px"} />
        <Skeleton width={"45px"} height={"45px"} />
        <Skeleton width={"45px"} height={"45px"} />
        <Skeleton width={"45px"} height={"45px"} />
        <Skeleton width={"45px"} height={"45px"} />
        <Skeleton width={"45px"} height={"45px"} />
      </>) : (<>
        {data && data.map(cluster => (<>
          <Box padding={"10px"} w={"250px"} h={"250px"} rounded={"lg"} textAlign={"center"} style={{ background: "var(--dark-blue-2)" }}>
            <Heading>Cluster {cluster.id}</Heading>
            {cluster.shards.map(n => <Tooltip color={"primary"} content={<ClusterInfo cluster={n} />}>
              <Box padding={"10px"} w={"45px"} h={"45px"} rounded={"lg"} textAlign={"center"} style={{ background: "var(--dark-blue-3)" }}>
                <Text color={status_colors[cluster.status]} maxW={"300px"} className={"w-full mt-3 mb-5 text-2xl font-bold"} width={"100%"} height={"100%"}>
                  {cluster.id + 1}
                </Text>
              </Box>
            </Tooltip>)}
          </Box>
        </>))}
      </>)}
    </Wrap>
  </>);
};
