var kittens = ["Milo","Otis","Garfield"]
function destructivelyAppendKitten(name)
{
  kittens.push(name)
}
function destructivelyPrependKitten(name)
{
  kittens.unshift(name)
}
function destructivelyRemoveLastKitten()
{
  return kittens.pop()
}
function destructivelyRemoveFirstKitten()
{
  return kittens.shift()
}
function appendKitten(name)
{
  var changed = [...kittens,name]
  return changed
}
function prependKitten(name)
{
  var changed = [name,...kittens]
  return changed
}
function removeLastKitten()
{
  kittens.slice(-kittens.length-1)
  return kittens
  
}
function removeFirstKitten()
{
  kittens.slice(kittens.length-1)
  return kittens
}