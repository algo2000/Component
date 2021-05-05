import React from 'react';
import { useRecoilValue, useRecoilValueLoadable } from 'recoil';
import { PlantingGlass as S } from '../../style/PlantingGlass'
import {countAvg, Glass, plantingGlassState, platingGlass2dArray} from './container'

const PlantingGlass = () => {
  const user = useRecoilValueLoadable(plantingGlassState);
  const array = useRecoilValue(platingGlass2dArray);
  const avg = useRecoilValue(countAvg);

  switch (user.state){
    case 'hasValue':
      return (
        <S.Card>
          <S.Grid>
            {array.map((e: Glass[], i:number) => (
              <S.WeekItem>
                <S.WeekGrid key={i}>
                  {e.map((item: Glass, j:number) => (
                    <S.DayItem key={i+'-'+j} color={colorGenerator(avg, item.count)} id={item.date} />
                  ))}
                </S.WeekGrid>
              </S.WeekItem>
            ))}
          </S.Grid>
        </S.Card>
      )
    case 'loading':
      return <div>Loading...</div>
    case 'hasError':
      return <div>error...</div>
  }
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

export default PlantingGlass;
