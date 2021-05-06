import React from 'react';
import { useRecoilValueLoadable } from 'recoil';
import { plantingGlassState } from './container'
import Test from './Test';

const PlantingGlass = () => {
  const user = useRecoilValueLoadable(plantingGlassState);

  switch (user.state){
    case 'hasValue':
      return <><Test/></>
    case 'loading':
      return <div>Loading...</div>
    case 'hasError':
      return <div>error...</div>
  }
}

export default PlantingGlass;
