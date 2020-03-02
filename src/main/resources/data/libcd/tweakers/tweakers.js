 var RecipeTweaker = libcd.require("libcd.recipe.RecipeTweaker");
 var TweakerUtils = libcd.require("libcd.util.TweakerUtils");
// // This removes Minecraft Vanilla Recipes

log.info('Doing some cleanup on stonecutting recipes if necessary...')

/* This following removes the adorn items from the stonecutter */

var woodtypes = ['acacia', 'birch', 'dark_oak', 'jungle', 'oak', 'spruce', 
    'terrestria_cypress',  'terrestria_hemlock',  'terrestria_japanese_maple',
    'terrestria_rainbow_eucalyptus',  'terrestria_redwood',  'terrestria_rubber',
    'terrestria_sakura', 'terrestria_willow', 'traverse_fir'];

var adorn_items = ['platform', 'post', 'step'];

top: for (var i = 0; i <= woodtypes.length - 1; i++) {
    for (var j = 0; j <= adorn_items.length - 1; j++) {
        var item = woodtypes[i] + '_' + adorn_items[j];
        var itemFound = TweakerUtils.getItem('adorn:' + item)

        if (itemFound.toString().indexOf('air') >= 0) {
            log.info('Adorn not found. Moving on...');
            break top;
        }

        if (itemFound.toString() === item) {
            log.info(item + ' found. Removing stonecutting recipe');
            RecipeTweaker.removeRecipesFor('adorn:' + item, "minecraft:stonecutting");
        } else {
            log.info(item + ' not found. Moving on...');
            continue;
        }

    }
    
}

log.info('Cleanup complete...')