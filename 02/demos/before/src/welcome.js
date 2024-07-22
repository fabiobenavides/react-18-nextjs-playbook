export default function Welcome(name) {
    function handleClick(name) {
        alert('click: ' + name);
    }


    return <h1 onClick={() => handleClick(name)}>Hello, {name}!</h1>
}