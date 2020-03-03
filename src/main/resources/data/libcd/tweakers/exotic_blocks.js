 var RecipeTweaker = libcd.require("libcd.recipe.RecipeTweaker");
 var TweakerUtils = libcd.require("libcd.util.TweakerUtils");

/* This following removes the adorn items from the stonecutter */
var modId = 'exotic-blocks';
var mod_woods = ['acacia', 'birch', 'dark_oak', 'jungle', 'oak', 'spruce'];

var mod_items = ['capped_round_column', 'capped_square_column', 'inset_panel', 'omni_slab', 'omni_stair_inside',
    'omni_stair_outside', 'omni_stair', 'round_capped_round_column', 'round_column', 'square_column',
    'wedge_cap', 'wedge_inside', 'wedge_outside' , 'wedge_straight'];

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
        }

    }
    
}

log.info(modId + ' setup complete...');