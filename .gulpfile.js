		scripts: {
			src: [
				'node_modules/jquery/dist/jquery.min.js',
				base.teplica + '/libs/animate/animate-css.js',
				base.teplica + '/libs/lazyload.min.js',
				base.teplica + '/libs/waypoint.js',
				base.teplica + '/js/map.js',
				base.teplica + '/js/common.js', // Custom scripts. Always at the end
			],
			dest:       base.teplica + '/js',
			output:     'scripts.min.js',
		},