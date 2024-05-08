 
 var xmlDoc = document.implementation.createDocument(null, 'cadastro_jogadores');


 var jogador = xmlDoc.createElement('jogador');
 var nome = xmlDoc.createElement('nome');
 nome.textContent = 'João';
 var numeroCamisa = xmlDoc.createElement('numero_camisa');
 numeroCamisa.textContent = '10';

 
 jogador.appendChild(nome);
 jogador.appendChild(numeroCamisa);
 xmlDoc.documentElement.appendChild(jogador);

 var xmlString = new XMLSerializer().serializeToString(xmlDoc);


 var xmlContent = document.getElementById('xmlContent');
 var pre = document.createElement('pre');
 pre.textContent = xmlString;
 xmlContent.appendChild(pre);