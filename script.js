const a = ['ZmxhZ3t0aGlzX2lzX2EfdHJhcH0=', 'c2VjcmV0X2tleV8xMjM='];

function b() {
  return "CUET{w0w_y0u_h4v3_d0n3_a_g00d_j0b_4a3cd9}";
}

(function() {
  const c = [
    '435545547b',
    '353075726333',
    '5f63306433',
    '5f346e346c79',
    '3569355f6330',
    '6d706c3374337d'
  ];
  window.cUeT = function() {
    let d = c.join('');
    let e = d.match(/.{1,2}/g).map(x => parseInt(x, 16));
    return String.fromCharCode(...e);
  };
})();

document.getElementById('startBtn').addEventListener('click', function() {
  document.getElementById('output').textContent = 'Analyzing...';
  setTimeout(() => {
    console.log(b());
  }, 600);
});