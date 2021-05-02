import { GetServerSideProps, InferGetServerSidePropsType } from "next"
import styled from "styled-components";

interface DateTime {
  date: number,
  count: number
}

type Glass = {
  date: string,
  count: number
}
const GlassGridItemGridItem = styled.div<{ color: string }>`
  display: flex;
  justify-content: center;
  background-color: ${(props) => props.color};
  border-radius: 3px;
`;

const GlassGridItemGrid = styled.div`
  display: grid;
  grid-template-columns: 10px;
  grid-template-rows: repeat(7, 10px);
  grid-gap: 4px;
`;

const GlassGridItem = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 3px;
`;

const GlassGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(24, 10px);
  grid-template-rows: 94px;
  grid-gap: 4px;
`;

const GlassCard = styled.div`
  background-color:white;
  padding: 8px 10px;
  box-shadow: 0px 0px 3px rgba(0,0,0,0.3);
  border-radius: 10px;
  width: 332px;
  margin: auto;
`;

const PlantingGlass = ({ json }: InferGetServerSidePropsType<typeof getServerSideProps>) => {

  let avg = 0;
  let glass = json.map((e: DateTime): Glass => {
    var week = new Array('일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일');
    let dt = new Date(e.date)
    let y = dt.getFullYear()
    let m = dt.getMonth() + 1
    let d = dt.getDate()
    let w = dt.getDay()
    avg += e.count;
    return {date: `${y}-${m}-${d} (${week[w]})` , count: e.count}
  })

  avg = avg / glass.length

  const newArr = [];
  while(glass.length) newArr.push(glass.splice(0,7));

  return (
    <GlassCard>
      <GlassGrid>
      {newArr.map((e: Glass[]) => (
        <GlassGridItem>
          <GlassGridItemGrid>
          {e.map((item: Glass) => (
            <GlassGridItemGridItem color={colorGenerator(avg, item.count)} id={item.date}/>
          ))}
          </GlassGridItemGrid>
        </GlassGridItem>
      ))}
      </GlassGrid>
    </GlassCard>
  )
}

const colorGenerator = (avg: number, value: number): string => {
  if(value === 0){
    return "#ffffff"
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