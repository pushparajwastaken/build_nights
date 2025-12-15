const players: string[] = ["Haaland", "Foden"];
const wages: number[] = [500, 100];

const rating: Array<number> = [4.0, 5.0];

//array of objects

type player = {
  position: string;
  gamePlayed: number;
};
const players1: player[] = [{ position: "striker", gamePlayed: 5 }];
const playersWithContracts: readonly string[] = ["Haaland", "Dias"];
const table: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
];

//tuple
let PlyaerType: [string, number];
PlyaerType = ["Haaland", 9];

let PlayerInfo: [string, number, boolean?];

enum Positions {
  GK,
  DEFENSE,
  MIDFIELD,
  ATTACKER,
}
const playerPosition = Positions.GK;

enum PlayerNum {
  Haaland = 7,
  Dias,
  Gvardiol,
}

const enum Players2 {
  Oscar,
  Savinho,
}
let t: [string, number] = ["tea", 10];
t.push("extra");
