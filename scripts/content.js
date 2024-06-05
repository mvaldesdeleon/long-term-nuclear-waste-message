let observer = new MutationObserver(mutations => {
  swapMessages();
});

observer.observe(document, { childList: true, subtree: true });
swapMessages();

function swapMessages() {
  const blockedXPath = "//span[text()='This Post is from an account you blocked.']";
  const iterator = document.evaluate(blockedXPath, document, null, XPathResult.ORDERED_NODE_ITERATOR_TYPE, null);

  const spans = [];
  let next = iterator.iterateNext();
  while (next) {
    spans.push(next);
    next = iterator.iterateNext();
  }

  for (let span of spans) {
    span.innerHTML = 'This place is not a place of honor... no highly esteemed deed is commemorated here... nothing valued is here.<br><br>What is here was dangerous and repulsive to us. This message is a warning about danger.';
  }
}