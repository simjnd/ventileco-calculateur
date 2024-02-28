const motors = {
  231020: [{
    name: "Moteur DD 139/190 - 900 m3/h",
    img: "https://ventileco.fr/3506-large_default/moteur-dd133190-pour-hotte-semi-pro-alvene-et-saftair-ou-vmc-900-m3h.jpg",
    url: "https://ventileco.fr/114-moteur-dd133190-pour-hotte-semi-pro-alvene-et-saftair-ou-vmc-900-m3h.html",
    vario: "15"
  }, {
    name: "Moteur DD 146/190 - 900 m3/h",
    img: "https://ventileco.fr/3506-large_default/moteur-dd133190-pour-hotte-semi-pro-alvene-et-saftair-ou-vmc-900-m3h.jpg",
    url: "https://ventileco.fr/718-moteur-type-dd146190-pour-hotte-ou-vmc-900-m3h.html",
    vario: "15"
  }],
  232130: [{
    name: "Moteur DD 7/7 - 1500 m3/h",
    img: "https://ventileco.fr/3453-large_default/moteur-ventil1500-m3h-dd77-compatible-toutes-hottes.jpg",
    url: "https://ventileco.fr/77-moteur-ventil1500-m3h-dd77-compatible-toutes-hottes.html",
    vario: "77"
  }, {
    name: "Moteur DDM 7/7 - 1700 m3/h",
    img: "https://ventileco.fr/3453-large_default/moteur-ventil1500-m3h-dd77-compatible-toutes-hottes.jpg",
    url: "https://ventileco.fr/362-moteur-ventil1700-m3h-top-qualite-robustesse-ddm77.html",
    vario: "77"
  }],
  302130: [{
    name: "Moteur DDM 7/9 - 2600 m3/h",
    img: "https://ventileco.fr/3452-large_default/moteur-ventilateur-ventil2600-m3h-ddm79-compatible-toutes-hottes-230v.jpg",
    url: "https://ventileco.fr/80-moteur-ventilateur-ventil2600-m3h-ddm79-compatible-toutes-hottes-230v.html",
    vario: "77"
  }],
  302633: [{
    name: "Moteur 8/9 - 3000 m3/h",
    img: "https://ventileco.fr/3450-large_default/moteur-ventil3000-m3h-89-99r-compatible-toutes-hottes-230v.jpg",
    url: "https://ventileco.fr/81-moteur-ventil3000-m3h-89-99r-compatible-toutes-hottes-230v.html",
    vario: "77"
  }],
  252639: [{
    name: "Moteur DDM 9/7 - 2900 m3/h",
    img: "https://ventileco.fr/3451-large_default/moteur-ventil2900-m3h-ddm97-230v.jpg",
    url: "https://ventileco.fr/82-moteur-ventil2900-m3h-ddm97-230v.html",
    vario: "99"
  }],
  302639: [{
    name: "Moteur DDM 9/9 - 3600 m3/h",
    img: "https://ventileco.fr/3454-large_default/moteur-ventil3600-m3h-performance-ddm99.jpg",
    url: "https://ventileco.fr/84-moteur-ventil3600-m3h-performance-ddm99.html",
    vario: "99"
  }, {
    name: "Moteur DD 9/9 - 3600 m3/h",
    img: "https://ventileco.fr/914-large_default/moteur-4002h-3600-m3h-dd99.jpg",
    url: "https://ventileco.fr/155-moteur-4002h-3600-m3h-dd99.html",
    vario: "99"
  }],
  322944: [{
    name: "Moteur 10/10 - 4000 m3/h",
    img: "https://ventileco.fr/3456-large_default/moteur-ventil4000-1010-4000-m3h-pour-caisson-550w-230v.jpg",
    url: "https://ventileco.fr/85-moteur-ventil4000-1010-4000-m3h-pour-caisson-550w-230v.html",
    vario: "99"
  }],
  383453: [{
    name: "Moteur 12/12 - 6000 m3/h",
    img: "https://ventileco.fr/3457-large_default/moteur-ventil6000-m3h-1212-nicotra-pour-caisson.jpg",
    url: "https://ventileco.fr/86-moteur-ventil6000-m3h-1212-nicotra-pour-caisson.html",
    vario: "99"
  }],
  504063: [{
    name: "Moteur 15/15 - 9000 m3/h",
    img: "https://ventileco.fr/3068-large_default/moteur-ventil9000-m3h-1515-tri-pour-caisson.jpg",
    url: "https://ventileco.fr/692-moteur-ventil9000-m3h-1515-tri-pour-caisson.html",
    vario: "99"
  }]
}

const varios = {
  15: {
    name: "Variateur 1.5A",
    img: "https://ventileco.fr/550-large_default/variateur-15a-pour-tourelle-t11-ou-petit-moteur.jpg",
    url: "https://ventileco.fr/142-variateur-15a-pour-tourelle-t11-ou-petit-moteur.html"
  },
  77: {
    name: "Variateur 4.5A",
    img: "https://ventileco.fr/3460-large_default/variateur-base-77-79-89.jpg",
    url: "https://ventileco.fr/129-variateur-base-77-79-89.html"
  },
  99: {
    name: "Variateur 8A",
    img: "https://ventileco.fr/3461-large_default/variateur-99-et-1010.jpg",
    url: "https://ventileco.fr/132-variateur-99-et-1010.html"
  }
}

let highlighted = 'a'

const $ = (sel) => document.querySelector(sel)

const highlight = (sel) => {
  $(`#${highlighted}-input-group`).classList.toggle('opacity-10')
  $(`#${highlighted}-highlight`).classList.toggle('opacity-10')
  highlighted = sel
  $(`#${sel}-input-group`).classList.toggle('opacity-10')
  $(`#${sel}-highlight`).classList.toggle('opacity-10')
  $('#length-to-measure').innerText = sel.toUpperCase()
}

const display_motor = (m) => {
  return `
  <a href="${m.url}">
    <div class="flex gap-4 p-4 bg-white border hover:shadow-lg transition">
      <img class="max-h-28" src="${m.img}">
      <div class="flex flex-col justify-center gap-1">
        <p class="font-bold text-lg">${m.name}</p>
        <p class="text-sm text-blue-400">Voir la page du produit ></p>
      </div>
    </div>
  </a>
  `
}

const display_vario = (v) => {
  return `
  <p class="text-center">Et le variateur correspondant</p>
  <a href="${v.url}">
    <div class="flex gap-4 p-4 bg-white border hover:shadow-lg transition">
      <img class="max-h-28" src="${v.img}">
      <div class="flex flex-col justify-center gap-1">
        <p class="font-bold text-lg">${v.name}</p>
        <p class="text-sm text-blue-400">Voir la page du produit ></p>
      </div>
    </div>
  </a>
  `
}

const closest = (v, opts, margin) => {
  v = parseInt(v)
  let delta_min = Number.POSITIVE_INFINITY
  let possible_opts = []
  for (const opt of opts) {
    if ((v == 35 || v == 36)  && margin == 3 && opt == 33) {
      continue;
    }
    if (Math.abs(v - opt) <= margin) {
      possible_opts.push(`${opt}`)
    }
  }
  return possible_opts
}

const find_motor = () => {
  if ($('#a-input').value && $('#b-input').value && $('#c-input').value) {
    let as = closest($('#a-input').value, [23, 25, 30, 32, 38, 50], 2)
    let bs = closest($('#b-input').value, [10, 21, 26, 29, 34, 40], 2)
    let cs = closest($('#c-input').value, [20, 30, 33, 39, 44, 53, 63], 3)
    let ids = new Set()
    for (const a of as) {
      for (const b of bs) {
        for (const c of cs) {
          ids.add(a + b + c)
        }
      }
    }

    saved_motors = []
    ids.forEach(e => {
      if (!motors[e]) {
        ids.delete(e)
      }
    })

    $('#results').innerHTML = ''
    if (ids.size == 0) {
      $('#results').innerHTML = `
      <div class="bg-neutral-200 p-6">
        <p class="text-center font-bold text-neutral-600">Aucun moteur correspondant</p>
      </div>
      `
    } else {
      ids.forEach(id => {
        if ($('#results').innerHTML != '') {
          $('#results').innerHTML += `<p class="text-center my-2 text-xs font-bold text-neutral-500">OU</p>`
        }
        motors[id].forEach(m => {
          $('#results').innerHTML += display_motor(m)
        })
        $('#results').innerHTML += display_vario(varios[motors[id][0].vario])
      })
    }
  }
}
