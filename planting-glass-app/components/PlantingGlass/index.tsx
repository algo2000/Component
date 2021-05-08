import React from 'react';
import { useRecoilValueLoadable } from 'recoil';
import { plantingGlassState } from './container'
import Component from './Component';

const PlantingGlass = () => {
  const user = useRecoilValueLoadable(plantingGlassState);

  switch (user.state){
    case 'hasValue':
      return <><Component/></>
    case 'loading':
      return <div>Loading...</div>
    case 'hasError':
      return <div>error...</div>
  }
}

export default PlantingGlass;
