import { useAuth } from "../context/auth";
// import { useSearch } from "../context/search";

const Home=()=> {
  const [auth, setAuth] = useAuth();
  // const [search,setSearch]=useSearch()

  return (
    <div>
   
      <pre>{JSON.stringify(auth, null, 4)}</pre>
        {/* <pre>{JSON.stringify(search,null,4)}</pre> */}
    </div>
  );
}

export default Home;
