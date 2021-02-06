export function getAllRestaurants(req: any, res: any) {
  res.send({
    retaurants: [
      {
        name: "restaurant1",
        snippet: "",
      },
      {
        name: "restaurant2",
        snippet: "",
      },
      {
        name: "restaurant3",
        snippet: "",
      },
      {
        name: "restaurant4",
        snippet: "",
      },
    ],
  });
}

export function getRestaurantInfo(req: any, res: any) {
  res.send({
    name: "restaurant1",
    snippet: "",
    menu: [
        {
            name: "Plat1",
            description: "Menoum menoum",
            snippet: "",
            price: 10.04
        },
        {
            name: "Plat2",
            description: "Menoum menoum",
            snippet: "",
            price: 1.00
        },
        {
            name: "Plat3",
            description: "Menoum menoum",
            snippet: "",
            price: 23.50
        },
    ]
  });
}

export function postReservation(req: any, res: any) {
  res.send("TODO");
}

// time nb of ppl