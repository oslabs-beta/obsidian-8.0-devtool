export type Route = {
  [key: string]: JSX.Element
}

export type DOMMessage = {
  [key: string]: any
};

export type dashboardProps = {
  [key: string]: string | number | boolean | null
}

export type action = {
  type: string,
  payload: any
}

export type ListItemType = {
  data: {
    [key: string]: string | number | boolean;
  },
}

export type DisplayRouteType = {
  [key: string]: JSX.Element
}