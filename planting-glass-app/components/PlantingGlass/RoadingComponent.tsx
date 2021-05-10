import React from 'react';
import { PlantingGlass as S } from '../../style/PlantingGlass'
import { Glass } from './container';

const colorGenerator = (avg: number, value: number): string => {
  if (value === 0) {
    return "#EBEDF0"
  }
  else if (value <= avg / 2) {
    return "#E6E6E6"
  }
  else if (value <= avg) {
    return "#BCBCBC"
  }
  else if (value <= avg + avg / 2) {
    return "#989898"
  }
  else {
    return "#727272"
  }
}

const RoadingComponent = () => {

  let result: Glass[] = [];
  let now = new Date();
  for (let index = 0; index < 24 * 7 - (7 - now.getDay() - 1); index++) {
    let date = new Date();
    let g: Glass = {
      date: String(new Date(date.setDate(now.getDate() - index)).getTime()),
      count: Math.floor(Math.random() * 10)
    }
    result.push(g);
  }

  let avg = 0;
  result.forEach(value => {
    avg += value.count;
  })

  avg = avg/result.length;

  let array = [];
  while(result.length) array.push(result.splice(0,7));

  return (
    <S.Card>
      <S.Grid>
        {array.map((e: Glass[], i: number) => (
          <S.WeekItem key={'i_' + i}>
            <S.WeekGrid key={'g_' + i}>
              {e.map((item: Glass, j: number) => (
                <S.DayItem color={colorGenerator(avg, item.count)} key={i + '-' + j}  id={item.date}/>
              ))}
            </S.WeekGrid>
          </S.WeekItem>
        ))}
      </S.Grid>
    </S.Card>
  );
};

export default RoadingComponent;