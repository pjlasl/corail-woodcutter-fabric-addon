var RecipeTweaker = libcd.require("libcd.recipe.RecipeTweaker");
var TweakerUtils = libcd.require("libcd.util.TweakerUtils");

/* This following removes the adorn items from the stonecutter */
var modId = 'blockus';
var mod_woods = ['bamboo'];
var mod_items = ['planks'];

log.info('Checking for ' + modId + ' mod...')

top: for (var i = 0; i <= mod_woods.length - 1; i++) {
   for (var j = 0; j <= mod_items.length - 1; j++) {
       var item = mod_woods[i] + '_' + mod_items[j];
       var itemFound = TweakerUtils.getItem(modId + ':' + item);

       if (itemFound.toString().indexOf('air') >= 0) {
           log.info(modId + ' not found. Moving on...');
           break top;
       }

   }
   
}

log.info(modId + ' setup complete...');