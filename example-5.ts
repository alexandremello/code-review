public prepareFormDataTranslation(snsModel: SnsModel, formMapping: Array<IDBFormMapping>): Promise<Array<translatorMap>> {
  const formData: object = snsModel.message["formData"];
  const configurator: ConfiguratorEntity = snsModel.message["configurator"];

  const arMapping = formMapping.map(mapping => mapping.mappings);
  const arMap = arMapping.map(mappings => mappings.map(attributes => {
    return `${attributes.serviceAttribute}:${formData[attributes.formAttribute]}`;
  }));
  const arFormDataMap = arMap.map(mappings => { return this.buildFormDataMap(mappings); });
  const arTranslatedFormData: Array<translatorMap> = formMapping.map((formMap, index) => {
    return this.buildFormTranslatedMap(formMap, arFormDataMap[index], configurator);
  });

  return arTranslatedFormData;
}
