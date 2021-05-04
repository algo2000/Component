import { GetServerSideProps, InferGetServerSidePropsType } from "next"
import styled, { css } from "styled-components";

interface DateTime {
  date: number,
  count: number
}

type Glass = {
  date: string,
  count: number
}
const DayItem = styled.div<{ color: string }>`
  display: flex;
  justify-content: center;
  ${(props) => {
    if(props.color == '#EBEDF0'){
      return css `
        background-color: ${props.color};
        border: solid 1px #E0E2E6;
      `
    }
    else{
      return css `background-color: ${props.color}; `
    }
  }}
  border-radius: 3px;
`;

const WeekGrid = styled.div`
  display: grid;
  grid-template-columns: 10px;
  grid-template-rows: repeat(7, 10px);
  grid-gap: 4px;
`;

const WeekItem = styled.div`
  display: flex;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(24, 10px);
  grid-template-rows: 94px;
  grid-gap: 4px;
`;

const GlassCard = styled.div`
  background-color:white;
  padding: 0.5em 0.625em;
  box-shadow: 0px 0px 3px rgba(0,0,0,0.3);
  border-radius: 10px;
  max-width: 332px;
  margin: auto;
`;

const PlantingGlass = ({ json }: InferGetServerSidePropsType<typeof getServerSideProps>) => {

  let avg = 0;
  let glass = json.map((e: DateTime): Glass => {
    var dayOfWeek = new Array('일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일');
    let dt = new Date(e.date)
    let y = dt.getFullYear()
    let m = dt.getMonth() + 1
    let d = dt.getDate()
    let dw = dt.getDay()
    avg += e.count;
    return {date: `${y}-${m}-${d} (${dayOfWeek[dw]})` , count: e.count}
  })

  avg = avg / glass.length

  const platingGlass2dArray = [];
  while(glass.length) platingGlass2dArray.push(glass.splice(0,7));

  return (
    <GlassCard>
      <Grid>
      {platingGlass2dArray.map((e: Glass[]) => (
        <WeekItem>
          <WeekGrid>
          {e.map((item: Glass) => (
            <DayItem color={colorGenerator(avg, item.count)} id={item.date}/>
          ))}
          </WeekGrid>
        </WeekItem>
      ))}
      </Grid>
    </GlassCard>
    // <PlantingGlass>
    //   <PlantingGlass.Grid>
    //     {platingGlass2dArray.map((e: Glass[]) => (
    //     <PlantingGlass.WeekItem>
    //       <PlantingGlass.WeekGrid>
    //       {e.map((item: Glass) => (
    //         <PlantingGlass.DayItem color={colorGenerator(avg, item.count)} id={item.date}/>
    //       ))}
    //       </PlantingGlass.WeekGrid>
    //     </PlantingGlass.WeekItem>
    //   ))}
    //   </PlantingGlass.Grid>
    // </PlantingGlass>
  )
}

const colorGenerator = (avg: number, value: number): string => {
  if(value === 0){
    return "#EBEDF0"
  }
  else if(value <= avg/2){
    return "#FFEDE2"
  }
  else if(value <= avg){
    return "#FFD0B1"
  }
  else if(value <= avg + avg/2){
    return "#FF9E5F"
  }
  else {
    return "#FF8433"
  }
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(`http://localhost:3001/1/glass`)
  const json: Date[] = await res.json()
  
  return { props: {json} };
}

export default PlantingGlass