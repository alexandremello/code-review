describe("#createForm", () => {
  describe("when service is Potato", () => {
    it("validates the form");
    it("validates PotatoConfig");
    it("saves into database");
  });

  describe("when service is Carrot", () => {
    it("validates the form");
    it("does NOT validate PotatoConfig");
    it("saves into database");
  });
});

describe("#fetchForm", () => {
  describe("when service is Potato", () => {
    it("fetches form from the database");
    it("builds form model");
    it("build PotatoConfig");
    it("returns the form");
  });

  describe("when service is Carrot", () => {
    it("fetches form from the database");
    it("builds form model");
    it("does NOT build PotatoConfig");
    it("returns the form");
  });
});
