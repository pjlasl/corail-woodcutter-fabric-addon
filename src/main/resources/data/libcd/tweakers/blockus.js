var RecipeTweaker = libcd.require("libcd.recipe.RecipeTweaker");
var TweakerUtils = libcd.require("libcd.util.TweakerUtils");

/* This following removes the adorn items from the stonecutter */
var modId = 'blockus';
var mod_woods = ['bamboo'];
var mod_items = ['planks'];

log.info('Checking for ' + modId + ' mod...');

for (var i = 0; i <= mod_woods.length - 1; i++) {
    for (var j = 0; j <= mod_items.length - 1; j++) {
        var item = mod_woods[i] + '_' + mod_items[j];
        var itemFound = TweakerUtils.getItem(modId + ':' + item);
        
        if (eval(itemFound) == item) {
            log.info(item + ' found. Removing stonecutting recipe');
            RecipeTweaker.removeRecipesFor(modId + ':' + item, "minecraft:stonecutting");
        }
    }
}

log.info(modId + ' setup complete...');