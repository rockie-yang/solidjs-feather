import { createSignal } from 'solid-js'
import solidLogo from './assets/solid.svg'
import viteLogo from '/vite.svg'
import IconFeather from "solidjs-feather/IconFeather.jsx";
import './App.css'
import AlignCenter from "solidjs-feather/IconAlignCenter.jsx";

function App() {
  const [count, setCount] = createSignal(0)

  return (
    <>
      <div>

        <a href="https://solidjs.com" target="_blank">
          <img src={solidLogo} class="logo solid" alt="Solid logo" />
        </a>
          <a href="https://github.com/rockie-yang/jsx-feather" target="_blank" style="font-size: 110px; color: Orange">
              <IconFeather/>
          </a>
      </div>
      <h1>Solid + Feather</h1>
        <h3>A thin wrapper with JSX on <a href="https://feathericons.com/">feather icons</a></h3>
        <p>All icons has default value, while they can be customized with different value if needed</p>
        <div style="font-size: 1rem">
            <pre><code>&lt;IconFeather strokeWidth={"{1}"}/&gt;</code></pre>
            <span style="font-size: 30px">
            <IconFeather strokeWidth={1}/></span>
        </div>
        <div style="font-size: 1rem">
            <pre><code>&lt;IconFeather strokeWidth={"{3}"}/&gt;</code></pre>
            <span style="font-size: 30px">
            <IconFeather strokeWidth={3}/>
            </span>
        </div>
        <div style="font-size: 1rem">
            <span>default linecap and linejoin are round</span>
            <pre><code>&lt;AlignCenter /></code></pre>
            <span style="font-size: 30px">
                <AlignCenter  />
            </span>
        </div>
        <div style="font-size: 1rem">
            <pre><code>&lt;AlignCenter strokeLinejoin={"{\"square\"}"} strokeLinecap={"{\"square\"}"}/></code></pre>
            <span style="font-size: 30px">
                <AlignCenter strokeLinejoin={"square"} strokeLinecap={"square"} />
            </span>
        </div>
    </>
  )
}

export default App
