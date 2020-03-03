 var RecipeTweaker = libcd.require("libcd.recipe.RecipeTweaker");
 var TweakerUtils = libcd.require("libcd.util.TweakerUtils");

/* This following removes the adorn items from the stonecutter */
var modId = 'adorn';
var mod_woods = ['acacia', 'birch', 'dark_oak', 'jungle', 'oak', 'spruce', 
    'terrestria_cypress',  'terrestria_hemlock',  'terrestria_japanese_maple',
    'terrestria_rainbow_eucalyptus',  'terrestria_redwood',  'terrestria_rubber',
    'terrestria_sakura', 'terrestria_willow', 'traverse_fir'];

var mod_items = ['platform', 'post', 'step'];

log.info('Checking for ' + modId + ' mod...')

top: for (var i = 0; i <= mod_woods.length - 1; i++) {
    for (var j = 0; j <= mod_items.length - 1; j++) {
        var item = mod_woods[i] + '_' + mod_items[j];
        var itemFound = TweakerUtils.getItem(modId + ':' + item);

        if (itemFound.toString().indexOf('air') >= 0) {
            log.info(modId + ' not found. Moving on...');
            break top;
        }

        if (itemFound.toString() === item) {
            log.info(item + ' found. Removing stonecutting recipe');
            RecipeTweaker.removeRecipesFor(modId + ':' + item, "minecraft:stonecutting");
        } else {
            log.info(item + ' not found. Moving on...');
            continue;
        }

    }
    
}

log.info(modId + ' setup complete...');