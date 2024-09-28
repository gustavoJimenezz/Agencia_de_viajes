'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('tourist-destinations', [
      {
        city: 'Córdoba',
        description: 'Ubicada en el corazón de Argentina, Córdoba es conocida por su arquitectura colonial, vibrante vida estudiantil y las sierras que la rodean, ofreciendo una combinación única de naturaleza y cultura. Sus numerosos festivales y museos hacen que sea un destino ideal para quienes buscan historia y entretenimiento.',
        img: 'cordoba.jpg',
        active: true,
      },
      {
        city: 'Mendoza',
        description: 'Famosa por sus viñedos de renombre mundial y el imponente Aconcagua, Mendoza es un destino imperdible para los amantes del vino, la gastronomía y la aventura. La región ofrece actividades como rafting, senderismo, y paseos en globo, rodeados por paisajes de montañas y valles encantadores.',
        img: 'mendoza.jpg',
        active: true,
      },
      {
        city: 'Bariloche',
        description: 'Ubicada en la Patagonia argentina, Bariloche es famosa por sus montañas, lagos cristalinos y su reputación como la capital del chocolate artesanal. Además de deportes de invierno como el esquí, la ciudad ofrece rutas de trekking, paseos en kayak y una vibrante vida nocturna para todos los gustos.',
        img: 'bariloche.jpg',
        active: true,
      },
      {
        city: 'Salta',
        description: 'Salta, conocida cariñosamente como "la linda", combina la cultura andina con arquitectura colonial y paisajes montañosos de gran belleza. Los viajeros pueden disfrutar de la hospitalidad local, explorar los valles Calchaquíes, y descubrir su música folclórica y sus vinos de altura únicos.',
        img: 'salta.jpg',
        active: true,
      },
      {
        city: 'Rosario',
        description: 'A orillas del majestuoso río Paraná, Rosario es una ciudad clave en la historia argentina, conocida por su arquitectura modernista, vida cultural vibrante y su importancia como puerto. Es hogar del icónico Monumento a la Bandera, y un lugar donde los visitantes pueden disfrutar de paseos por el río y una gastronomía local excepcional.',
        img: 'rosario.jpg',
        active: true,
      },
      {
        city: 'Ushuaia',
        description: 'Conocida como la ciudad más austral del mundo, Ushuaia se distingue por sus paisajes salvajes, glaciares, y su proximidad a la Antártida. Este destino es ideal para los amantes de la aventura, quienes pueden disfrutar de caminatas por el Parque Nacional Tierra del Fuego, navegar por el Canal Beagle y conocer la rica historia de esta remota ciudad.',
        img: 'ushuaia.jpg',
        active: true,
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('tourist-destinations', null, {});
  }
};
