module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  //Added this line to transorm inline imports with babel
  "plugins": [
    [
      "babel-plugin-inline-import",
      {
        "extensions": [".svg"]
      }
    ]
  ]
};
