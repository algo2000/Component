import React from 'react';
import { useRecoilValueLoadable } from 'recoil';
import { plantingGlassState } from './container'
import Component from './Component';
import RoadingComponent from './RoadingComponent';

const PlantingGlass = () => {
  const user = useRecoilValueLoadable(plantingGlassState);

  switch (user.state){
    case 'hasValue':
      return <><Component/></>
    case 'loading':
      return <><RoadingComponent/></>
    case 'hasError':
      return <div>error...</div>
  }
}

export default PlantingGlass;
