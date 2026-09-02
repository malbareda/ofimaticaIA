/**
 * Plugin remark que elimina del TOC els headings que estan dins d'un bloc
 * <Activitat num={N}> quan l'activitat N està desactivada.
 *
 * Docusaurus genera el TOC a partir de l'AST del markdown, no del React
 * renderitzat, de manera que sense aquest plugin els títols de l'activitat
 * apareixen al TOC lateral encara que el component els oculti.
 */
import activitats from '../config/activitats.js';

function remarkHideActivitatToc() {
  return (tree) => {
    let insideHidden = false;
    const nodesToRemove = [];

    for (let i = 0; i < tree.children.length; i++) {
      const node = tree.children[i];

      // Detect opening <Activitat num={N}>
      if (node.type === 'mdxJsxFlowElement' && node.name === 'Activitat') {
        const numAttr = node.attributes?.find(
          (a) => a.name === 'num'
        );
        if (numAttr) {
          // The value can be {expression} or literal
          let num;
          if (numAttr.value?.type === 'mdxJsxAttributeValueExpression') {
            num = parseInt(numAttr.value.value, 10);
          } else {
            num = parseInt(numAttr.value, 10);
          }

          if (!isNaN(num) && activitats[num] !== true) {
            // Activity is hidden — remove headings from children
            removeHeadingsDeep(node);
          }
        }
      }
    }
  };
}

/**
 * Recursively remove heading nodes from the AST subtree so they
 * don't appear in the table of contents.
 */
function removeHeadingsDeep(node) {
  if (!node.children) return;
  node.children = node.children.filter((child) => {
    if (child.type === 'heading') return false;
    // Recurse into nested containers
    removeHeadingsDeep(child);
    return true;
  });
}

export default remarkHideActivitatToc;
