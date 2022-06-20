import useSWR from 'swr'
import { useRouter } from 'next/router'
import {request} from "graphql-request";
import Ladder from "../../components/Ladder";
import {NextPage} from "next";
import Box from "@mui/material/Box";

const fetcher = query => request('/api', query)

const LadderPage: NextPage = () => {
    const router = useRouter()
    const qs  = "{ leagues(filters: {id: {exact: " + router.query.pid + "}}) {name, seasons (filters: {isCurrentSeason: true}){id, name, standings { position, points, gamesPlayed, team { name, slug, logo}}}}}"

    const { data : leagues, error } = useSWR(qs, fetcher)
    if (error) return <div>Error {qs}</div>
    if (!leagues) return <div>loading...</div>
    const season = leagues['leagues'][0]['seasons'][0]
    return (
        <Box
        sx={{
          my: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
    <div><Ladder seasonData={season} /></div>
</Box>

    )
}

export default LadderPage;