import { Dimensions } from "react-native";

const {width, height} = Dimensions.get('window')





const API_KEY="accbcfc7b4176186d61e12c389d6cded";
const token ="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhY2NiY2ZjN2I0MTc2MTg2ZDYxZTEyYzM4OWQ2Y2RlZCIsIm5iZiI6MTcxNjAyMDE3My45MjksInN1YiI6IjY2NDg2M2NkOGVlN2Y4MWUyZDkyNjNhYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nGasgKB_JgAYcv_biG0KaCufLzStaKqrX3I8SyDZ-bk";


const sections=[{
    title:"Top Rated",
    id:1
  },
  {
    title:"Popular",
    id:2
  },
  {
    title:"UpComing",
    id:3
  },
  {
    title:"My List",
    id:4
  },
  {
    title:"New Releases",
    id:5
  },
  {
    title:"Ensemble TV Shows",
    id:6
  }

]



export{width, height, API_KEY, token, sections}