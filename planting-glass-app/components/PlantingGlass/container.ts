import { atom, selector } from "recoil";

export type DateTime = {
  date: number,
  count: number
}

export type Glass = {
  date: string,
  count: number
}

export const plantingGlassState = atom<Glass[]>({
  key: 'plantingGlassState',
  default: selector({
    key: 'plantingGlassState/default',
    get: async () => {
      try{
        const res = await fetch(`http://localhost:3001/1/glass`)
        sleep(3000)
        const json: DateTime[] = await res.json()
        let glass = json.map((e: DateTime): Glass => {
          var dayOfWeek = new Array('일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일');
          let dt = new Date(e.date)
          let y = dt.getFullYear()
          let m = dt.getMonth() + 1
          let d = dt.getDate()
          let dw = dt.getDay()
          return {date: `${y}-${m}-${d} (${dayOfWeek[dw]})` , count: e.count}
        });
        return glass;
      }
      catch{
        return [];
      }
    }
  })
});

export const countAvg = selector({
  key: 'countAvg',
  get: ({get}) => {
    const json = get(plantingGlassState);
    let avg = 0;
    json.forEach(value => {
      avg += value.count;
    })

    avg = avg/json.length;

    return avg;
  }
})

export const platingGlass2dArray = selector({
  key: 'platingGlass2dArray',
  get: ({get}) => {
    let json = [...get(plantingGlassState)];
    let array = [];
    while(json.length) array.push(json.splice(0,7));

    return array;
  }
})

function sleep(ms: number) {
  const wakeUpTime = Date.now() + ms
  while (Date.now() < wakeUpTime) {}
}