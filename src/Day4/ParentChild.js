 export default function Parent()
{
    return(
        <div>
            <h1>Hi I am from parent </h1>
            <Child res={1000}/>

        </div>
    )
}

function Child(props)
{
    return(
        <div>
            <h1>Chils component</h1>
            <h1>The value id is {props.res} </h1>
        </div>
    )
}