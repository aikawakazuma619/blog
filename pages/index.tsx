import type { NextPage } from 'next'
import { type } from 'os'
import {getAllPostsData} from '../lib/api'

const Home = ({posts}) => {
  console.log(posts);
  return (
    <div>
      <h1>api</h1>
    </div>

   )         
  } 
export default Home

export const getStaticProps = async () => {
  const posts = await getAllPostsData();
  return {
    props: {posts}
  };
}