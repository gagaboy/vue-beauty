export default function (router) {
  router.map({
    '/': {
      name: 'index',
      component: function index(resolve) {
        require(['./views/components.vue'], resolve);
      },
    },
    'components': {
      component: function index(resolve) {
        require(['./views/components.vue'], resolve);
      },
      subRoutes: {
        '/alert': {
          name: 'alert',
          component: function index(resolve) {
            require(['./views/alert.vue'], resolve);
          },
        },
        '/badge': {
          name: 'badge',
          component: function index(resolve) {
            require(['./views/badge.vue'], resolve);
          },
        },
        '/card': {
          name: 'card',
          component: function index(resolve) {
            require(['./views/card.vue'], resolve);
          },
        },
        '/collapse': {
          name: 'collapse',
          component: function index(resolve) {
            require(['./views/collapse.vue'], resolve);
          },
        },
        '/dropdown': {
          name: 'dropdown',
          component: function index(resolve) {
            require(['./views/dropdown.vue'], resolve);
          },
        },
        '/button': {
          name: 'button',
          component: function index(resolve) {
            require(['./views/button.vue'], resolve);
          },
        },
        '/switch': {
          name: 'switch',
          component: function index(resolve) {
            require(['./views/switch.vue'], resolve);
          },
        },
        '/rate': {
          name: 'rate',
          component: function index(resolve) {
            require(['./views/rate.vue'], resolve);
          },
        },
        '/input-number': {
          name: 'input-number',
          component: function index(resolve) {
            require(['./views/input-number.vue'], resolve);
          },
        },
        '/input': {
          name: 'input',
          component: function index(resolve) {
            require(['./views/input.vue'], resolve);
          },
        },
        '/slider': {
          name: 'slider',
          component: function index(resolve) {
            require(['./views/slider.vue'], resolve);
          },
        },
        '/checkbox': {
          name: 'checkbox',
          component: function index(resolve) {
            require(['./views/checkbox.vue'], resolve);
          },
        },
        '/notification': {
          name: 'notification',
          component: function index(resolve) {
            require(['./views/notification.vue'], resolve);
          },
        },
        '/message': {
          name: 'message',
          component: function index(resolve) {
            require(['./views/message.vue'], resolve);
          },
        },
        '/affix': {
          name: 'affix',
          component: function index(resolve) {
            require(['./views/affix.vue'], resolve);
          },
        },
        '/back-top': {
          name: 'back-top',
          component: function index(resolve) {
            require(['./views/back-top.vue'], resolve);
          },
        },
        '/steps': {
          name: 'steps',
          component: function index(resolve) {
            require(['./views/steps.vue'], resolve);
          }
        },
        '/radio': {
          name: 'radio',
          component: function index(resolve) {
            require(['./views/radio.vue'], resolve);
          },
        },
        '/modal': {
          name: 'modal',
          component: function index(resolve) {
            require(['./views/modal.vue'], resolve);
          }
        },
        '/table/1': {
          name: 'table1',
          component: function index(resolve) {
            require(['./views/table/1.vue'], resolve);
          },
        },
        '/table/2': {
          name: 'table2',
          component: function index(resolve) {
            require(['./views/table/2.vue'], resolve);
          },
        },
        '/table/3': {
          name: 'table3',
          component: function index(resolve) {
            require(['./views/table/3.vue'], resolve);
          },
        },
        '/table/4': {
          name: 'table4',
          component: function index(resolve) {
            require(['./views/table/4.vue'], resolve);
          },
        },
        '/table/5': {
          name: 'table5',
          component: function index(resolve) {
            require(['./views/table/5.vue'], resolve);
          },
        },
        '/table/6': {
          name: 'table6',
          component: function index(resolve) {
            require(['./views/table/6.vue'], resolve);
          },
        },
        '/table/7': {
          name: 'table7',
          component: function index(resolve) {
            require(['./views/table/7.vue'], resolve);
          },
        },
        '/table/8': {
          name: 'table8',
          component: function index(resolve) {
            require(['./views/table/8.vue'], resolve);
          },
        }
      }
    },
    //404路由
		'*': {
			component: function(resolve) {
				require(['./views/components.vue'], resolve);
			}
		}
  });
  router.redirect({
	  '/':'/components/alert'
	})
}
