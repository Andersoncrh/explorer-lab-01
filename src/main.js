import "./css/index.css"

const ccBgColor01 = document.querySelector(
  ".cc-bg svg > g g:nth-child(1) path"
)
const ccBgColor02 = document.querySelector(
  ".cc-bg svg > g g:nth-child(2) path"
)
const ccLogo = document.querySelector(
  ".cc-logo span:nth-child(2) img"
)

function setCardType(type){
  const colors = {
    visa: ["#1839E5", "#EC9444"],
    mastercard: ["#C69347", "#980606"],
    elo: ["#00A4E0", "#EF4123"],
    alelo: ["#007858", "#FFFFFF"],
    default: ["black", "grey"],
  }
  ccBgColor01.setAttribute("fill", colors[type][0])
  ccBgColor02.setAttribute("fill", colors[type][1])
  ccLogo.setAttribute("src", `cc-${type}.svg`)
}
globalThis.setCardType = setCardType