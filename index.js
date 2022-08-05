
const container = document.querySelector("#box")
var root = ReactDOM.createRoot(container)

function App() {
  return (
    <ul>
      <li>b1: git add . add tat ca file vao statring</li>
      <li>b2: git commit -m  them ghi chu thay doi</li>
      <li>b3: git push origin master main them nhung thay doi vao nhanh brach </li>
    </ul>
  )
}
root.render(<App/>)
console.log("them js")