import './App.css';
import { useState } from "react"

const buttonsData = [
  {
    content: "AC",
    type: "top"
  },
  {
    content: "+/-",
    type: "top"
  },
  {
    content: "%",
    type: "top"
  },
  {
    content: "/",
    type: "sybm"
  },
  {
    content: "7",
    type: "num"
  },
  {
    content: "8",
    type: "num"
  },
  {
    content: "9",
    type: "num"
  },
  {
    content: "*",
    type: "sybm"
  },
  {
    content: "4",
    type: "num"
  },
  {
    content: "5",
    type: "num"
  },
  {
    content: "6",
    type: "num"
  },
  {
    content: "-",
    type: "sybm"
  },
  {
    content: "1",
    type: "num"
  },
  {
    content: "2",
    type: "num"
  },
  {
    content: "3",
    type: "num"
  },
  {
    content: "+",
    type: "sybm"
  },
  {
    content: "0",
    type: "num"
  },
  {
    content: "DEL",
    type: "del"
  },
  {
    content: ".",
    type: "num"
  },
  {
    content: "=",
    type: "sybm"
  },


]


function Theme({ theme, updateTheme }) {
  const handleTheme = (e) => {
    updateTheme(e.target.id)
  }
  return (
    <div className="theme">
      <div className={`one box ${theme === "black" ? "active" : ""}`} id="black" onClick={handleTheme}></div>
      <div className={`two box ${theme === "white" ? "active" : ""}`} id="white" onClick={handleTheme}></div>
      <div className={`three box ${theme === "blue" ? "active" : ""}`} id="blue" onClick={handleTheme}></div>
    </div>
  )
}


function CustomButtom({ content, type, textState, textUpdate, theme }) {
  const handleClick = () => {
    if (type === "num") {
      if (textState == "0") {
        textUpdate(content)
      } else {
        textUpdate(textState + content)
      }
    }
    if (content === "AC") {
      textUpdate("0")
    }
    if (content === "+/-") {
      textUpdate(eval(textState) * -1)
    }
    if (content === "%") {
      textUpdate(eval(textState) / 100)
    }
    if (content === "DEL") {
      if (textState.length <= 1) {
        textUpdate("0")
      } else {
        if (typeof (textState) === "number") {
          textUpdate("0")
        } else {
          textUpdate(textState.substring(0, textState.length - 1))
        }
      }
    }
    if (type === "sybm") {
      textUpdate(textState + content)
    }

    if (content === "=") {
      textUpdate(eval(textState))
    }
  }

  if (type === "top") {
    return (
      <button className={`${type}`} style={{ backgroundColor: `var(--${theme}_top)`, color: `var(--${theme}_topContent)` }} onClick={handleClick}>{content}</button>
    )
  }

  if (type === "num") {
    return (
      <button className={`${type}`} style={{ backgroundColor: `var(--${theme}_num)`, color: `var(--${theme}_numContent)` }} onClick={handleClick}>{content}</button>
    )
  }

  if (type === "sybm") {
    return (
      <button className={`${type}`} style={{ backgroundColor: `var(--${theme}_sybm)` }} onClick={handleClick}>{content}</button>
    )
  }
  if (type === "del") {
    return (
      <button className={`${type}`} onClick={handleClick}>{content}</button>
    )
  }
}


function App() {
  const [value, setValue] = useState("0")
  const [themes, setThemes] = useState("black")
  return (
    <div className="App" style={{ backgroundColor: `var(--${themes}_overBg)` }}>
      <Theme theme={themes} updateTheme={setThemes} />
      <div className="calculator" style={{ backgroundColor: `var(--${themes}_bg)` }}>

        <p id="text" style={{ color: `var(--text_${themes})` }}>{value}</p>

        <div className="buttons">

          {/* default buttons */}
          {/* <button>AC</button>
          <button>+/-</button>
          <button>%</button>
          <button>/</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>*</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>-</button>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>+</button>
          <button>0</button>
          <button>del</button>
          <button>.</button>
          <button>=</button> */}



          {/* <CustomButtom content={"AC"}/>
          <CustomButtom content={"+/-"}/>
          <CustomButtom content={"%"}/>
          <CustomButtom content={"/"}/>
          <CustomButtom content={"7"}/>
          <CustomButtom content={"8"}/>
          <CustomButtom content={"9"}/>
          <CustomButtom content={"*"}/>
          <CustomButtom content={"4"}/>
          <CustomButtom content={"5"}/>
          <CustomButtom content={"6"}/>
          <CustomButtom content={"-"}/>
          <CustomButtom content={"1"}/>
          <CustomButtom content={"2"}/>
          <CustomButtom content={"3"}/>
          <CustomButtom content={"+"}/>
          <CustomButtom content={"0"}/>
          <CustomButtom content={"DEL"}/>
          <CustomButtom content={"."}/>
          <CustomButtom content={"="}/> */}


          {buttonsData.map((data, index) => (
            <CustomButtom key={index} content={data.content} type={data.type} textState={value} theme={themes} textUpdate={setValue} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;


