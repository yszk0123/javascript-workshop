export default class Extractor {
  constructor() {
    this.rules = [];
  }

  addRule(pattern, handler) {
    this.rules.push({
      pattern: typeof pattern === "string" ? new RegExp(pattern): pattern,
      handler
    });

    return this;
  }

  execute(input) {
    for (let i = 0; i < this.rules.length; i += 1) {
      const rule = this.rules[i];
      const match = rule.pattern.exec(input);
      if (match) {
        return rule.handler.apply(this, match);
      }
    }

    return null;
  }
}
