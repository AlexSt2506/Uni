/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */


setInterval(() => {
  const now = new Date();
  postMessage(now.toLocaleTimeString());
}, 1000);
