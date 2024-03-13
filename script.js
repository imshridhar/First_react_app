// const heading = React.createElement('h1',null,"Hello React");
// const para= React.createElement('p',{className:'para'},"Welcome to React")
// const button =React.createElement('button',{className:'btn'},'Click');

// const div =React.createElement('div',{className:'app',children:[heading,para,button]});

// ReactDOM.createRoot(document.getElementById('root')).render(div);

// React: React-script-tag is an npm package that provides a React <script> tag which
// supports universal rendering. With this library, we can create react components, that
// is, a plain javascript object with some properties.

// React-DOM: React-DOM basically converts the javascript object returned by React
// script tag to HTML nodes that can be rendered in the browser.


let arr = ['lala','03' , 'React'];
function App () {
    let name='Shri';
    let age=22;
    let sub =['HTML ','CSS ','JAVASCRIPT' ];
    // let sub1 ={catagary:'Java', catagary:'Javascript',catagary:'NodeJS'};
    let isnumber=true; 
    let a=undefined;
    let jsxE = <h2>Good luck bro</h2>;
    let add = (a,b) => a+b;
    // let filter1=sub1.filter(item =>item.catagary==='Java')
    return ( 
        <>
            <h1>Hello {name!=""?name:"World"}</h1>
            <h1>Hello {"World" && name || 'World'}</h1>
            <h1>Hello {name || 'World'}</h1>
            <h1>Your age is {age}</h1>
            {sub.map((subjects,l)=> {return <p key={l}>{subjects}</p>})}
            <p>Hii {isnumber}</p>
            <p>{add(40,20)}</p>
            <button>Click</button>
            {jsxE}
            <hr/>
            <hr/>
        </>
    )
};

function Button(){
    return (
        <>
        <table border={20}>

            <tr>
                <th>Student Name</th>
                <th>Roll No</th>
                <th>Subjects</th>
            </tr>
            <tr>
                <td>Shridhar</td>
                <td>01</td>
                <td>ReactJS</td>
            </tr>
            <tr>
                <td>Amar</td>
                <td>02</td>
                <td>NodeJS</td>
            </tr>
            <tr>
                {arr.map((el,i)=>{return <td key={i}>{el}</td>})}
            </tr>

        </table>
        </>
    )
};

 
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <>
    <App/>
    <Button/>
    </>
);