function santaSecretHelper(input) {
   let pattern = /@(?<name>[A-Za-z]+)[^@\-!:>]*!(?<type>G|N)!/g;
   let n = Number(input.shift());
   let command = input.shift();

   while (command !== 'end') {
      let decrypt = '';

      for (const el of command) {
         let ascii = el.charCodeAt() - n;
         decrypt += String.fromCharCode(ascii);
      }

      let match = pattern.exec(decrypt);

      if (match) {
         let type = match.groups['type'];

         if (type === 'G') {
            let name = match.groups['name'];
            console.log(name);
         }
      } else {
         command = input.shift();
      }
   }
}
santaSecretHelper([
   '4',
   '~lwzjkl~jenlymfDFsffmiCwozwlzjln%K%',
   '0zfjrl}xnrlDWeqqmi/wnznlwzjnn%K%onhfhnf',
   ';:<lyiljz{onzDPere=;=9<;8=rhknlf%K%',
   "Wonvfkmwzkmpwvzkm'lhjnlDWeqerxle0wlnzj{nz%K%nohwn",
   'DReh}e=<4lhzj1%K%',
   'end',
]);
