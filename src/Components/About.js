import { useEffect, useState } from "react"
import { ShimmerTable } from "react-shimmer-effects";

const About = () => {
    const [git, setGit] = useState(null);

    const fetchMenu = async () => {
        const data = await fetch("https://api.github.com/users/pradeepsaranbishnoi");
        const json = await data.json();
        setGit(json)
    }

    useEffect(() => {
        fetchMenu();
    }, []);

    if (git === null) return <ShimmerTable row={5} col={5} />

    const { name, location,avatar_url,bio } = git;
    console.log(git)

    return (
        <>
        <div className="flex my-16 gap-10">
            <div>
                <img className="w-50 m-auto rounded-xl" src={avatar_url} alt="avatar" />
            </div>
            <div>
                <h1 className="text-2xl font-extrabold">My Name is: {name}</h1>
                <h2>{bio}</h2>
                <h2>I am from: {location}</h2>
            </div>
        </div>
            
        </>
    )
}
export default About