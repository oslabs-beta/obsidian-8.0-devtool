export type Route = {
  [key: string]: JSX.Element
}

export type DOMMessage = {
  type: string,
  hit: boolean,
  name: number,
  time: number
};

export type dashboardProps = {
  [key: string]: string | number | boolean
}

export type action = {
  type: string,
  payload: any
}