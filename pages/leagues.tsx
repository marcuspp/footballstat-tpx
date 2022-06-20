import useSWR from 'swr'
import League from "../components/League"
import { request } from 'graphql-request'
import {NextPage} from "next";
import Box from "@mui/material/Box";
import * as React from "react";

const fetcher = query => request('/api', query)


const LeaguePage: NextPage = () => {
    const {data, error} = useSWR('{ leagues { id,name,fullName,logo } }', fetcher)
    if (error) return <div>Shit</div>
    if (!data) return <div>loading...</div>
    return (
        <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      ><div><h1>Leagues</h1>{data.leagues.map(function (league: {}) {
            return <League leagueData={league} />;
        })}</div></Box>
    )
};

export default LeaguePage;