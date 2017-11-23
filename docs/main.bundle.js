/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 69);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GraphQLError = __webpack_require__(11);

Object.defineProperty(exports, 'GraphQLError', {
  enumerable: true,
  get: function get() {
    return _GraphQLError.GraphQLError;
  }
});

var _syntaxError = __webpack_require__(80);

Object.defineProperty(exports, 'syntaxError', {
  enumerable: true,
  get: function get() {
    return _syntaxError.syntaxError;
  }
});

var _locatedError = __webpack_require__(34);

Object.defineProperty(exports, 'locatedError', {
  enumerable: true,
  get: function get() {
    return _locatedError.locatedError;
  }
});

var _formatError = __webpack_require__(81);

Object.defineProperty(exports, 'formatError', {
  enumerable: true,
  get: function get() {
    return _formatError.formatError;
  }
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GraphQLNonNull = exports.GraphQLList = exports.GraphQLInputObjectType = exports.GraphQLEnumType = exports.GraphQLUnionType = exports.GraphQLInterfaceType = exports.GraphQLObjectType = exports.GraphQLScalarType = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.isType = isType;
exports.assertType = assertType;
exports.isInputType = isInputType;
exports.assertInputType = assertInputType;
exports.isOutputType = isOutputType;
exports.assertOutputType = assertOutputType;
exports.isLeafType = isLeafType;
exports.assertLeafType = assertLeafType;
exports.isCompositeType = isCompositeType;
exports.assertCompositeType = assertCompositeType;
exports.isAbstractType = isAbstractType;
exports.assertAbstractType = assertAbstractType;
exports.getNullableType = getNullableType;
exports.isNamedType = isNamedType;
exports.assertNamedType = assertNamedType;
exports.getNamedType = getNamedType;

var _invariant = __webpack_require__(2);

var _invariant2 = _interopRequireDefault(_invariant);

var _isNullish = __webpack_require__(9);

var _isNullish2 = _interopRequireDefault(_isNullish);

var _kinds = __webpack_require__(3);

var Kind = _interopRequireWildcard(_kinds);

var _assertValidName = __webpack_require__(25);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /**
                                                                                                                                                           * Copyright (c) 2015-present, Facebook, Inc.
                                                                                                                                                           *
                                                                                                                                                           * This source code is licensed under the MIT license found in the
                                                                                                                                                           * LICENSE file in the root directory of this source tree.
                                                                                                                                                           *
                                                                                                                                                           * 
                                                                                                                                                           */

// Predicates & Assertions

/**
 * These are all of the possible kinds of types.
 */
function isType(type) {
  return type instanceof GraphQLScalarType || type instanceof GraphQLObjectType || type instanceof GraphQLInterfaceType || type instanceof GraphQLUnionType || type instanceof GraphQLEnumType || type instanceof GraphQLInputObjectType || type instanceof GraphQLList || type instanceof GraphQLNonNull;
}

function assertType(type) {
  !isType(type) ? (0, _invariant2.default)(0, 'Expected ' + String(type) + ' to be a GraphQL type.') : void 0;
  return type;
}

/**
 * These types may be used as input types for arguments and directives.
 */
function isInputType(type) {
  return type instanceof GraphQLScalarType || type instanceof GraphQLEnumType || type instanceof GraphQLInputObjectType || type instanceof GraphQLNonNull && isInputType(type.ofType) || type instanceof GraphQLList && isInputType(type.ofType);
}

function assertInputType(type) {
  !isInputType(type) ? (0, _invariant2.default)(0, 'Expected ' + String(type) + ' to be a GraphQL input type.') : void 0;
  return type;
}

/**
 * These types may be used as output types as the result of fields.
 */
function isOutputType(type) {
  return type instanceof GraphQLScalarType || type instanceof GraphQLObjectType || type instanceof GraphQLInterfaceType || type instanceof GraphQLUnionType || type instanceof GraphQLEnumType || type instanceof GraphQLNonNull && isOutputType(type.ofType) || type instanceof GraphQLList && isOutputType(type.ofType);
}

function assertOutputType(type) {
  !isOutputType(type) ? (0, _invariant2.default)(0, 'Expected ' + String(type) + ' to be a GraphQL output type.') : void 0;
  return type;
}

/**
 * These types may describe types which may be leaf values.
 */
function isLeafType(type) {
  return type instanceof GraphQLScalarType || type instanceof GraphQLEnumType;
}

function assertLeafType(type) {
  !isLeafType(type) ? (0, _invariant2.default)(0, 'Expected ' + String(type) + ' to be a GraphQL leaf type.') : void 0;
  return type;
}

/**
 * These types may describe the parent context of a selection set.
 */
function isCompositeType(type) {
  return type instanceof GraphQLObjectType || type instanceof GraphQLInterfaceType || type instanceof GraphQLUnionType;
}

function assertCompositeType(type) {
  !isCompositeType(type) ? (0, _invariant2.default)(0, 'Expected ' + String(type) + ' to be a GraphQL composite type.') : void 0;
  return type;
}

/**
 * These types may describe the parent context of a selection set.
 */
function isAbstractType(type) {
  return type instanceof GraphQLInterfaceType || type instanceof GraphQLUnionType;
}

function assertAbstractType(type) {
  !isAbstractType(type) ? (0, _invariant2.default)(0, 'Expected ' + String(type) + ' to be a GraphQL abstract type.') : void 0;
  return type;
}

/**
 * These types can all accept null as a value.
 */
function getNullableType(type) {
  return type instanceof GraphQLNonNull ? type.ofType : type;
}

/**
 * These named types do not include modifiers like List or NonNull.
 */
function isNamedType(type) {
  return type instanceof GraphQLScalarType || type instanceof GraphQLObjectType || type instanceof GraphQLInterfaceType || type instanceof GraphQLUnionType || type instanceof GraphQLEnumType || type instanceof GraphQLInputObjectType;
}

function assertNamedType(type) {
  !isNamedType(type) ? (0, _invariant2.default)(0, 'Expected ' + String(type) + ' to be a GraphQL named type.') : void 0;
  return type;
}

/* eslint-disable no-redeclare */
function getNamedType(type) {
  /* eslint-enable no-redeclare */
  if (type) {
    var unmodifiedType = type;
    while (unmodifiedType instanceof GraphQLList || unmodifiedType instanceof GraphQLNonNull) {
      unmodifiedType = unmodifiedType.ofType;
    }
    return unmodifiedType;
  }
}

/**
 * Used while defining GraphQL types to allow for circular references in
 * otherwise immutable type definitions.
 */


function resolveThunk(thunk) {
  return typeof thunk === 'function' ? thunk() : thunk;
}

/**
 * Scalar Type Definition
 *
 * The leaf values of any request and input values to arguments are
 * Scalars (or Enums) and are defined with a name and a series of functions
 * used to parse input from ast or variables and to ensure validity.
 *
 * Example:
 *
 *     const OddType = new GraphQLScalarType({
 *       name: 'Odd',
 *       serialize(value) {
 *         return value % 2 === 1 ? value : null;
 *       }
 *     });
 *
 */

var GraphQLScalarType = exports.GraphQLScalarType = function () {
  function GraphQLScalarType(config) {
    _classCallCheck(this, GraphQLScalarType);

    (0, _assertValidName.assertValidName)(config.name);
    this.name = config.name;
    this.description = config.description;
    this.astNode = config.astNode;
    !(typeof config.serialize === 'function') ? (0, _invariant2.default)(0, this.name + ' must provide "serialize" function. If this custom Scalar ' + 'is also used as an input type, ensure "parseValue" and "parseLiteral" ' + 'functions are also provided.') : void 0;
    if (config.parseValue || config.parseLiteral) {
      !(typeof config.parseValue === 'function' && typeof config.parseLiteral === 'function') ? (0, _invariant2.default)(0, this.name + ' must provide both "parseValue" and "parseLiteral" ' + 'functions.') : void 0;
    }
    this._scalarConfig = config;
  }

  // Serializes an internal value to include in a response.


  GraphQLScalarType.prototype.serialize = function serialize(value) {
    var serializer = this._scalarConfig.serialize;
    return serializer(value);
  };

  // Determines if an internal value is valid for this type.
  // Equivalent to checking for if the parsedValue is nullish.


  GraphQLScalarType.prototype.isValidValue = function isValidValue(value) {
    return !(0, _isNullish2.default)(this.parseValue(value));
  };

  // Parses an externally provided value to use as an input.


  GraphQLScalarType.prototype.parseValue = function parseValue(value) {
    var parser = this._scalarConfig.parseValue;
    return parser && !(0, _isNullish2.default)(value) ? parser(value) : undefined;
  };

  // Determines if an internal value is valid for this type.
  // Equivalent to checking for if the parsedLiteral is nullish.


  GraphQLScalarType.prototype.isValidLiteral = function isValidLiteral(valueNode) {
    return !(0, _isNullish2.default)(this.parseLiteral(valueNode));
  };

  // Parses an externally provided literal value to use as an input.


  GraphQLScalarType.prototype.parseLiteral = function parseLiteral(valueNode) {
    var parser = this._scalarConfig.parseLiteral;
    return parser ? parser(valueNode) : undefined;
  };

  GraphQLScalarType.prototype.toString = function toString() {
    return this.name;
  };

  return GraphQLScalarType;
}();

// Also provide toJSON and inspect aliases for toString.


GraphQLScalarType.prototype.toJSON = GraphQLScalarType.prototype.inspect = GraphQLScalarType.prototype.toString;

/**
 * Object Type Definition
 *
 * Almost all of the GraphQL types you define will be object types. Object types
 * have a name, but most importantly describe their fields.
 *
 * Example:
 *
 *     const AddressType = new GraphQLObjectType({
 *       name: 'Address',
 *       fields: {
 *         street: { type: GraphQLString },
 *         number: { type: GraphQLInt },
 *         formatted: {
 *           type: GraphQLString,
 *           resolve(obj) {
 *             return obj.number + ' ' + obj.street
 *           }
 *         }
 *       }
 *     });
 *
 * When two types need to refer to each other, or a type needs to refer to
 * itself in a field, you can use a function expression (aka a closure or a
 * thunk) to supply the fields lazily.
 *
 * Example:
 *
 *     const PersonType = new GraphQLObjectType({
 *       name: 'Person',
 *       fields: () => ({
 *         name: { type: GraphQLString },
 *         bestFriend: { type: PersonType },
 *       })
 *     });
 *
 */
var GraphQLObjectType = exports.GraphQLObjectType = function () {
  function GraphQLObjectType(config) {
    _classCallCheck(this, GraphQLObjectType);

    (0, _assertValidName.assertValidName)(config.name, config.isIntrospection);
    this.name = config.name;
    this.description = config.description;
    this.astNode = config.astNode;
    this.extensionASTNodes = config.extensionASTNodes || [];
    if (config.isTypeOf) {
      !(typeof config.isTypeOf === 'function') ? (0, _invariant2.default)(0, this.name + ' must provide "isTypeOf" as a function.') : void 0;
    }
    this.isTypeOf = config.isTypeOf;
    this._typeConfig = config;
  }

  GraphQLObjectType.prototype.getFields = function getFields() {
    return this._fields || (this._fields = defineFieldMap(this, this._typeConfig.fields));
  };

  GraphQLObjectType.prototype.getInterfaces = function getInterfaces() {
    return this._interfaces || (this._interfaces = defineInterfaces(this, this._typeConfig.interfaces));
  };

  GraphQLObjectType.prototype.toString = function toString() {
    return this.name;
  };

  return GraphQLObjectType;
}();

// Also provide toJSON and inspect aliases for toString.


GraphQLObjectType.prototype.toJSON = GraphQLObjectType.prototype.inspect = GraphQLObjectType.prototype.toString;

function defineInterfaces(type, interfacesThunk) {
  var interfaces = resolveThunk(interfacesThunk);
  if (!interfaces) {
    return [];
  }
  !Array.isArray(interfaces) ? (0, _invariant2.default)(0, type.name + ' interfaces must be an Array or a function which returns ' + 'an Array.') : void 0;

  var implementedTypeNames = Object.create(null);
  interfaces.forEach(function (iface) {
    !(iface instanceof GraphQLInterfaceType) ? (0, _invariant2.default)(0, type.name + ' may only implement Interface types, it cannot ' + ('implement: ' + String(iface) + '.')) : void 0;
    !!implementedTypeNames[iface.name] ? (0, _invariant2.default)(0, type.name + ' may declare it implements ' + iface.name + ' only once.') : void 0;
    implementedTypeNames[iface.name] = true;
    if (typeof iface.resolveType !== 'function') {
      !(typeof type.isTypeOf === 'function') ? (0, _invariant2.default)(0, 'Interface Type ' + iface.name + ' does not provide a "resolveType" ' + ('function and implementing Type ' + type.name + ' does not provide a ') + '"isTypeOf" function. There is no way to resolve this implementing ' + 'type during execution.') : void 0;
    }
  });
  return interfaces;
}

function defineFieldMap(type, fieldsThunk) {
  var fieldMap = resolveThunk(fieldsThunk);
  !isPlainObj(fieldMap) ? (0, _invariant2.default)(0, type.name + ' fields must be an object with field names as keys or a ' + 'function which returns such an object.') : void 0;

  var fieldNames = Object.keys(fieldMap);
  !(fieldNames.length > 0) ? (0, _invariant2.default)(0, type.name + ' fields must be an object with field names as keys or a ' + 'function which returns such an object.') : void 0;

  var resultFieldMap = Object.create(null);
  fieldNames.forEach(function (fieldName) {
    (0, _assertValidName.assertValidName)(fieldName);
    var fieldConfig = fieldMap[fieldName];
    !isPlainObj(fieldConfig) ? (0, _invariant2.default)(0, type.name + '.' + fieldName + ' field config must be an object') : void 0;
    !!fieldConfig.hasOwnProperty('isDeprecated') ? (0, _invariant2.default)(0, type.name + '.' + fieldName + ' should provide "deprecationReason" instead ' + 'of "isDeprecated".') : void 0;
    var field = _extends({}, fieldConfig, {
      isDeprecated: Boolean(fieldConfig.deprecationReason),
      name: fieldName
    });
    !isOutputType(field.type) ? (0, _invariant2.default)(0, type.name + '.' + fieldName + ' field type must be Output Type but ' + ('got: ' + String(field.type) + '.')) : void 0;
    !isValidResolver(field.resolve) ? (0, _invariant2.default)(0, type.name + '.' + fieldName + ' field resolver must be a function if ' + ('provided, but got: ' + String(field.resolve) + '.')) : void 0;
    var argsConfig = fieldConfig.args;
    if (!argsConfig) {
      field.args = [];
    } else {
      !isPlainObj(argsConfig) ? (0, _invariant2.default)(0, type.name + '.' + fieldName + ' args must be an object with argument ' + 'names as keys.') : void 0;
      field.args = Object.keys(argsConfig).map(function (argName) {
        (0, _assertValidName.assertValidName)(argName);
        var arg = argsConfig[argName];
        !isInputType(arg.type) ? (0, _invariant2.default)(0, type.name + '.' + fieldName + '(' + argName + ':) argument type must be ' + ('Input Type but got: ' + String(arg.type) + '.')) : void 0;
        return {
          name: argName,
          description: arg.description === undefined ? null : arg.description,
          type: arg.type,
          defaultValue: arg.defaultValue,
          astNode: arg.astNode
        };
      });
    }
    resultFieldMap[fieldName] = field;
  });
  return resultFieldMap;
}

function isPlainObj(obj) {
  return obj && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' && !Array.isArray(obj);
}

// If a resolver is defined, it must be a function.
function isValidResolver(resolver) {
  return resolver == null || typeof resolver === 'function';
}

/**
 * Interface Type Definition
 *
 * When a field can return one of a heterogeneous set of types, a Interface type
 * is used to describe what types are possible, what fields are in common across
 * all types, as well as a function to determine which type is actually used
 * when the field is resolved.
 *
 * Example:
 *
 *     const EntityType = new GraphQLInterfaceType({
 *       name: 'Entity',
 *       fields: {
 *         name: { type: GraphQLString }
 *       }
 *     });
 *
 */
var GraphQLInterfaceType = exports.GraphQLInterfaceType = function () {
  function GraphQLInterfaceType(config) {
    _classCallCheck(this, GraphQLInterfaceType);

    (0, _assertValidName.assertValidName)(config.name);
    this.name = config.name;
    this.description = config.description;
    this.astNode = config.astNode;
    if (config.resolveType) {
      !(typeof config.resolveType === 'function') ? (0, _invariant2.default)(0, this.name + ' must provide "resolveType" as a function.') : void 0;
    }
    this.resolveType = config.resolveType;
    this._typeConfig = config;
  }

  GraphQLInterfaceType.prototype.getFields = function getFields() {
    return this._fields || (this._fields = defineFieldMap(this, this._typeConfig.fields));
  };

  GraphQLInterfaceType.prototype.toString = function toString() {
    return this.name;
  };

  return GraphQLInterfaceType;
}();

// Also provide toJSON and inspect aliases for toString.


GraphQLInterfaceType.prototype.toJSON = GraphQLInterfaceType.prototype.inspect = GraphQLInterfaceType.prototype.toString;

/**
 * Union Type Definition
 *
 * When a field can return one of a heterogeneous set of types, a Union type
 * is used to describe what types are possible as well as providing a function
 * to determine which type is actually used when the field is resolved.
 *
 * Example:
 *
 *     const PetType = new GraphQLUnionType({
 *       name: 'Pet',
 *       types: [ DogType, CatType ],
 *       resolveType(value) {
 *         if (value instanceof Dog) {
 *           return DogType;
 *         }
 *         if (value instanceof Cat) {
 *           return CatType;
 *         }
 *       }
 *     });
 *
 */
var GraphQLUnionType = exports.GraphQLUnionType = function () {
  function GraphQLUnionType(config) {
    _classCallCheck(this, GraphQLUnionType);

    (0, _assertValidName.assertValidName)(config.name);
    this.name = config.name;
    this.description = config.description;
    this.astNode = config.astNode;
    if (config.resolveType) {
      !(typeof config.resolveType === 'function') ? (0, _invariant2.default)(0, this.name + ' must provide "resolveType" as a function.') : void 0;
    }
    this.resolveType = config.resolveType;
    this._typeConfig = config;
  }

  GraphQLUnionType.prototype.getTypes = function getTypes() {
    return this._types || (this._types = defineTypes(this, this._typeConfig.types));
  };

  GraphQLUnionType.prototype.toString = function toString() {
    return this.name;
  };

  return GraphQLUnionType;
}();

// Also provide toJSON and inspect aliases for toString.


GraphQLUnionType.prototype.toJSON = GraphQLUnionType.prototype.inspect = GraphQLUnionType.prototype.toString;

function defineTypes(unionType, typesThunk) {
  var types = resolveThunk(typesThunk);

  !(Array.isArray(types) && types.length > 0) ? (0, _invariant2.default)(0, 'Must provide Array of types or a function which returns ' + ('such an array for Union ' + unionType.name + '.')) : void 0;
  var includedTypeNames = Object.create(null);
  types.forEach(function (objType) {
    !(objType instanceof GraphQLObjectType) ? (0, _invariant2.default)(0, unionType.name + ' may only contain Object types, it cannot contain: ' + (String(objType) + '.')) : void 0;
    !!includedTypeNames[objType.name] ? (0, _invariant2.default)(0, unionType.name + ' can include ' + objType.name + ' type only once.') : void 0;
    includedTypeNames[objType.name] = true;
    if (typeof unionType.resolveType !== 'function') {
      !(typeof objType.isTypeOf === 'function') ? (0, _invariant2.default)(0, 'Union type "' + unionType.name + '" does not provide a "resolveType" ' + ('function and possible type "' + objType.name + '" does not provide an ') + '"isTypeOf" function. There is no way to resolve this possible type ' + 'during execution.') : void 0;
    }
  });

  return types;
}

/**
 * Enum Type Definition
 *
 * Some leaf values of requests and input values are Enums. GraphQL serializes
 * Enum values as strings, however internally Enums can be represented by any
 * kind of type, often integers.
 *
 * Example:
 *
 *     const RGBType = new GraphQLEnumType({
 *       name: 'RGB',
 *       values: {
 *         RED: { value: 0 },
 *         GREEN: { value: 1 },
 *         BLUE: { value: 2 }
 *       }
 *     });
 *
 * Note: If a value is not provided in a definition, the name of the enum value
 * will be used as its internal value.
 */
var GraphQLEnumType /* <T> */ = exports.GraphQLEnumType = function () {
  function GraphQLEnumType(config /* <T> */) {
    _classCallCheck(this, GraphQLEnumType);

    this.name = config.name;
    (0, _assertValidName.assertValidName)(config.name, config.isIntrospection);
    this.description = config.description;
    this.astNode = config.astNode;
    this._values = defineEnumValues(this, config.values);
    this._enumConfig = config;
  }

  GraphQLEnumType.prototype.getValues = function getValues() {
    return this._values;
  };

  GraphQLEnumType.prototype.getValue = function getValue(name) {
    return this._getNameLookup()[name];
  };

  GraphQLEnumType.prototype.serialize = function serialize(value /* T */) {
    var enumValue = this._getValueLookup().get(value);
    return enumValue ? enumValue.name : null;
  };

  GraphQLEnumType.prototype.isValidValue = function isValidValue(value) {
    return typeof value === 'string' && this._getNameLookup()[value] !== undefined;
  };

  GraphQLEnumType.prototype.parseValue = function parseValue(value) /* T */{
    if (typeof value === 'string') {
      var enumValue = this._getNameLookup()[value];
      if (enumValue) {
        return enumValue.value;
      }
    }
  };

  GraphQLEnumType.prototype.isValidLiteral = function isValidLiteral(valueNode) {
    return valueNode.kind === Kind.ENUM && this._getNameLookup()[valueNode.value] !== undefined;
  };

  GraphQLEnumType.prototype.parseLiteral = function parseLiteral(valueNode) /* T */{
    if (valueNode.kind === Kind.ENUM) {
      var enumValue = this._getNameLookup()[valueNode.value];
      if (enumValue) {
        return enumValue.value;
      }
    }
  };

  GraphQLEnumType.prototype._getValueLookup = function _getValueLookup() {
    if (!this._valueLookup) {
      var lookup = new Map();
      this.getValues().forEach(function (value) {
        lookup.set(value.value, value);
      });
      this._valueLookup = lookup;
    }
    return this._valueLookup;
  };

  GraphQLEnumType.prototype._getNameLookup = function _getNameLookup() {
    if (!this._nameLookup) {
      var lookup = Object.create(null);
      this.getValues().forEach(function (value) {
        lookup[value.name] = value;
      });
      this._nameLookup = lookup;
    }
    return this._nameLookup;
  };

  GraphQLEnumType.prototype.toString = function toString() {
    return this.name;
  };

  return GraphQLEnumType;
}();

// Also provide toJSON and inspect aliases for toString.


GraphQLEnumType.prototype.toJSON = GraphQLEnumType.prototype.inspect = GraphQLEnumType.prototype.toString;

function defineEnumValues(type, valueMap /* <T> */
) {
  !isPlainObj(valueMap) ? (0, _invariant2.default)(0, type.name + ' values must be an object with value names as keys.') : void 0;
  var valueNames = Object.keys(valueMap);
  !(valueNames.length > 0) ? (0, _invariant2.default)(0, type.name + ' values must be an object with value names as keys.') : void 0;
  return valueNames.map(function (valueName) {
    (0, _assertValidName.assertValidName)(valueName);
    !(['true', 'false', 'null'].indexOf(valueName) === -1) ? (0, _invariant2.default)(0, 'Name "' + valueName + '" can not be used as an Enum value.') : void 0;

    var value = valueMap[valueName];
    !isPlainObj(value) ? (0, _invariant2.default)(0, type.name + '.' + valueName + ' must refer to an object with a "value" key ' + ('representing an internal value but got: ' + String(value) + '.')) : void 0;
    !!value.hasOwnProperty('isDeprecated') ? (0, _invariant2.default)(0, type.name + '.' + valueName + ' should provide "deprecationReason" instead ' + 'of "isDeprecated".') : void 0;
    return {
      name: valueName,
      description: value.description,
      isDeprecated: Boolean(value.deprecationReason),
      deprecationReason: value.deprecationReason,
      astNode: value.astNode,
      value: value.hasOwnProperty('value') ? value.value : valueName
    };
  });
} /* <T> */


/**
 * Input Object Type Definition
 *
 * An input object defines a structured collection of fields which may be
 * supplied to a field argument.
 *
 * Using `NonNull` will ensure that a value must be provided by the query
 *
 * Example:
 *
 *     const GeoPoint = new GraphQLInputObjectType({
 *       name: 'GeoPoint',
 *       fields: {
 *         lat: { type: new GraphQLNonNull(GraphQLFloat) },
 *         lon: { type: new GraphQLNonNull(GraphQLFloat) },
 *         alt: { type: GraphQLFloat, defaultValue: 0 },
 *       }
 *     });
 *
 */
var GraphQLInputObjectType = exports.GraphQLInputObjectType = function () {
  function GraphQLInputObjectType(config) {
    _classCallCheck(this, GraphQLInputObjectType);

    (0, _assertValidName.assertValidName)(config.name);
    this.name = config.name;
    this.description = config.description;
    this.astNode = config.astNode;
    this._typeConfig = config;
  }

  GraphQLInputObjectType.prototype.getFields = function getFields() {
    return this._fields || (this._fields = this._defineFieldMap());
  };

  GraphQLInputObjectType.prototype._defineFieldMap = function _defineFieldMap() {
    var _this = this;

    var fieldMap = resolveThunk(this._typeConfig.fields);
    !isPlainObj(fieldMap) ? (0, _invariant2.default)(0, this.name + ' fields must be an object with field names as keys or a ' + 'function which returns such an object.') : void 0;
    var fieldNames = Object.keys(fieldMap);
    !(fieldNames.length > 0) ? (0, _invariant2.default)(0, this.name + ' fields must be an object with field names as keys or a ' + 'function which returns such an object.') : void 0;
    var resultFieldMap = Object.create(null);
    fieldNames.forEach(function (fieldName) {
      (0, _assertValidName.assertValidName)(fieldName);
      var field = _extends({}, fieldMap[fieldName], {
        name: fieldName
      });
      !isInputType(field.type) ? (0, _invariant2.default)(0, _this.name + '.' + fieldName + ' field type must be Input Type but ' + ('got: ' + String(field.type) + '.')) : void 0;
      !(field.resolve == null) ? (0, _invariant2.default)(0, _this.name + '.' + fieldName + ' field type has a resolve property, but ' + 'Input Types cannot define resolvers.') : void 0;
      resultFieldMap[fieldName] = field;
    });
    return resultFieldMap;
  };

  GraphQLInputObjectType.prototype.toString = function toString() {
    return this.name;
  };

  return GraphQLInputObjectType;
}();

// Also provide toJSON and inspect aliases for toString.


GraphQLInputObjectType.prototype.toJSON = GraphQLInputObjectType.prototype.inspect = GraphQLInputObjectType.prototype.toString;

/**
 * List Modifier
 *
 * A list is a kind of type marker, a wrapping type which points to another
 * type. Lists are often created within the context of defining the fields of
 * an object type.
 *
 * Example:
 *
 *     const PersonType = new GraphQLObjectType({
 *       name: 'Person',
 *       fields: () => ({
 *         parents: { type: new GraphQLList(Person) },
 *         children: { type: new GraphQLList(Person) },
 *       })
 *     })
 *
 */
var GraphQLList = exports.GraphQLList = function () {
  function GraphQLList(type) {
    _classCallCheck(this, GraphQLList);

    !isType(type) ? (0, _invariant2.default)(0, 'Can only create List of a GraphQLType but got: ' + String(type) + '.') : void 0;
    this.ofType = type;
  }

  GraphQLList.prototype.toString = function toString() {
    return '[' + String(this.ofType) + ']';
  };

  return GraphQLList;
}();

// Also provide toJSON and inspect aliases for toString.


GraphQLList.prototype.toJSON = GraphQLList.prototype.inspect = GraphQLList.prototype.toString;

/**
 * Non-Null Modifier
 *
 * A non-null is a kind of type marker, a wrapping type which points to another
 * type. Non-null types enforce that their values are never null and can ensure
 * an error is raised if this ever occurs during a request. It is useful for
 * fields which you can make a strong guarantee on non-nullability, for example
 * usually the id field of a database row will never be null.
 *
 * Example:
 *
 *     const RowType = new GraphQLObjectType({
 *       name: 'Row',
 *       fields: () => ({
 *         id: { type: new GraphQLNonNull(GraphQLString) },
 *       })
 *     })
 *
 * Note: the enforcement of non-nullability occurs within the executor.
 */

var GraphQLNonNull = exports.GraphQLNonNull = function () {
  function GraphQLNonNull(type) {
    _classCallCheck(this, GraphQLNonNull);

    !(isType(type) && !(type instanceof GraphQLNonNull)) ? (0, _invariant2.default)(0, 'Can only create NonNull of a Nullable GraphQLType but got: ' + (String(type) + '.')) : void 0;
    this.ofType = type;
  }

  GraphQLNonNull.prototype.toString = function toString() {
    return this.ofType.toString() + '!';
  };

  return GraphQLNonNull;
}();

// Also provide toJSON and inspect aliases for toString.


GraphQLNonNull.prototype.toJSON = GraphQLNonNull.prototype.inspect = GraphQLNonNull.prototype.toString;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = invariant;
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function invariant(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

// Name

var NAME = exports.NAME = 'Name';

// Document

var DOCUMENT = exports.DOCUMENT = 'Document';
var OPERATION_DEFINITION = exports.OPERATION_DEFINITION = 'OperationDefinition';
var VARIABLE_DEFINITION = exports.VARIABLE_DEFINITION = 'VariableDefinition';
var VARIABLE = exports.VARIABLE = 'Variable';
var SELECTION_SET = exports.SELECTION_SET = 'SelectionSet';
var FIELD = exports.FIELD = 'Field';
var ARGUMENT = exports.ARGUMENT = 'Argument';

// Fragments

var FRAGMENT_SPREAD = exports.FRAGMENT_SPREAD = 'FragmentSpread';
var INLINE_FRAGMENT = exports.INLINE_FRAGMENT = 'InlineFragment';
var FRAGMENT_DEFINITION = exports.FRAGMENT_DEFINITION = 'FragmentDefinition';

// Values

var INT = exports.INT = 'IntValue';
var FLOAT = exports.FLOAT = 'FloatValue';
var STRING = exports.STRING = 'StringValue';
var BOOLEAN = exports.BOOLEAN = 'BooleanValue';
var NULL = exports.NULL = 'NullValue';
var ENUM = exports.ENUM = 'EnumValue';
var LIST = exports.LIST = 'ListValue';
var OBJECT = exports.OBJECT = 'ObjectValue';
var OBJECT_FIELD = exports.OBJECT_FIELD = 'ObjectField';

// Directives

var DIRECTIVE = exports.DIRECTIVE = 'Directive';

// Types

var NAMED_TYPE = exports.NAMED_TYPE = 'NamedType';
var LIST_TYPE = exports.LIST_TYPE = 'ListType';
var NON_NULL_TYPE = exports.NON_NULL_TYPE = 'NonNullType';

// Type System Definitions

var SCHEMA_DEFINITION = exports.SCHEMA_DEFINITION = 'SchemaDefinition';
var OPERATION_TYPE_DEFINITION = exports.OPERATION_TYPE_DEFINITION = 'OperationTypeDefinition';

// Type Definitions

var SCALAR_TYPE_DEFINITION = exports.SCALAR_TYPE_DEFINITION = 'ScalarTypeDefinition';
var OBJECT_TYPE_DEFINITION = exports.OBJECT_TYPE_DEFINITION = 'ObjectTypeDefinition';
var FIELD_DEFINITION = exports.FIELD_DEFINITION = 'FieldDefinition';
var INPUT_VALUE_DEFINITION = exports.INPUT_VALUE_DEFINITION = 'InputValueDefinition';
var INTERFACE_TYPE_DEFINITION = exports.INTERFACE_TYPE_DEFINITION = 'InterfaceTypeDefinition';
var UNION_TYPE_DEFINITION = exports.UNION_TYPE_DEFINITION = 'UnionTypeDefinition';
var ENUM_TYPE_DEFINITION = exports.ENUM_TYPE_DEFINITION = 'EnumTypeDefinition';
var ENUM_VALUE_DEFINITION = exports.ENUM_VALUE_DEFINITION = 'EnumValueDefinition';
var INPUT_OBJECT_TYPE_DEFINITION = exports.INPUT_OBJECT_TYPE_DEFINITION = 'InputObjectTypeDefinition';

// Type Extensions

var TYPE_EXTENSION_DEFINITION = exports.TYPE_EXTENSION_DEFINITION = 'TypeExtensionDefinition';

// Directive Definitions

var DIRECTIVE_DEFINITION = exports.DIRECTIVE_DEFINITION = 'DirectiveDefinition';

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.print = print;

var _visitor = __webpack_require__(16);

/**
 * Converts an AST into a string, using one set of reasonable
 * formatting rules.
 */
function print(ast) {
  return (0, _visitor.visit)(ast, { leave: printDocASTReducer });
} /**
   * Copyright (c) 2015-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

var printDocASTReducer = {
  Name: function Name(node) {
    return node.value;
  },
  Variable: function Variable(node) {
    return '$' + node.name;
  },

  // Document

  Document: function Document(node) {
    return join(node.definitions, '\n\n') + '\n';
  },

  OperationDefinition: function OperationDefinition(node) {
    var op = node.operation;
    var name = node.name;
    var varDefs = wrap('(', join(node.variableDefinitions, ', '), ')');
    var directives = join(node.directives, ' ');
    var selectionSet = node.selectionSet;
    // Anonymous queries with no directives or variable definitions can use
    // the query short form.
    return !name && !directives && !varDefs && op === 'query' ? selectionSet : join([op, join([name, varDefs]), directives, selectionSet], ' ');
  },


  VariableDefinition: function VariableDefinition(_ref) {
    var variable = _ref.variable,
        type = _ref.type,
        defaultValue = _ref.defaultValue;
    return variable + ': ' + type + wrap(' = ', defaultValue);
  },

  SelectionSet: function SelectionSet(_ref2) {
    var selections = _ref2.selections;
    return block(selections);
  },

  Field: function Field(_ref3) {
    var alias = _ref3.alias,
        name = _ref3.name,
        args = _ref3.arguments,
        directives = _ref3.directives,
        selectionSet = _ref3.selectionSet;
    return join([wrap('', alias, ': ') + name + wrap('(', join(args, ', '), ')'), join(directives, ' '), selectionSet], ' ');
  },

  Argument: function Argument(_ref4) {
    var name = _ref4.name,
        value = _ref4.value;
    return name + ': ' + value;
  },

  // Fragments

  FragmentSpread: function FragmentSpread(_ref5) {
    var name = _ref5.name,
        directives = _ref5.directives;
    return '...' + name + wrap(' ', join(directives, ' '));
  },

  InlineFragment: function InlineFragment(_ref6) {
    var typeCondition = _ref6.typeCondition,
        directives = _ref6.directives,
        selectionSet = _ref6.selectionSet;
    return join(['...', wrap('on ', typeCondition), join(directives, ' '), selectionSet], ' ');
  },

  FragmentDefinition: function FragmentDefinition(_ref7) {
    var name = _ref7.name,
        typeCondition = _ref7.typeCondition,
        directives = _ref7.directives,
        selectionSet = _ref7.selectionSet;
    return 'fragment ' + name + ' on ' + typeCondition + ' ' + wrap('', join(directives, ' '), ' ') + selectionSet;
  },

  // Value

  IntValue: function IntValue(_ref8) {
    var value = _ref8.value;
    return value;
  },
  FloatValue: function FloatValue(_ref9) {
    var value = _ref9.value;
    return value;
  },
  StringValue: function StringValue(_ref10) {
    var value = _ref10.value;
    return JSON.stringify(value);
  },
  BooleanValue: function BooleanValue(_ref11) {
    var value = _ref11.value;
    return JSON.stringify(value);
  },
  NullValue: function NullValue() {
    return 'null';
  },
  EnumValue: function EnumValue(_ref12) {
    var value = _ref12.value;
    return value;
  },
  ListValue: function ListValue(_ref13) {
    var values = _ref13.values;
    return '[' + join(values, ', ') + ']';
  },
  ObjectValue: function ObjectValue(_ref14) {
    var fields = _ref14.fields;
    return '{' + join(fields, ', ') + '}';
  },
  ObjectField: function ObjectField(_ref15) {
    var name = _ref15.name,
        value = _ref15.value;
    return name + ': ' + value;
  },

  // Directive

  Directive: function Directive(_ref16) {
    var name = _ref16.name,
        args = _ref16.arguments;
    return '@' + name + wrap('(', join(args, ', '), ')');
  },

  // Type

  NamedType: function NamedType(_ref17) {
    var name = _ref17.name;
    return name;
  },
  ListType: function ListType(_ref18) {
    var type = _ref18.type;
    return '[' + type + ']';
  },
  NonNullType: function NonNullType(_ref19) {
    var type = _ref19.type;
    return type + '!';
  },

  // Type System Definitions

  SchemaDefinition: function SchemaDefinition(_ref20) {
    var directives = _ref20.directives,
        operationTypes = _ref20.operationTypes;
    return join(['schema', join(directives, ' '), block(operationTypes)], ' ');
  },

  OperationTypeDefinition: function OperationTypeDefinition(_ref21) {
    var operation = _ref21.operation,
        type = _ref21.type;
    return operation + ': ' + type;
  },

  ScalarTypeDefinition: function ScalarTypeDefinition(_ref22) {
    var name = _ref22.name,
        directives = _ref22.directives;
    return join(['scalar', name, join(directives, ' ')], ' ');
  },

  ObjectTypeDefinition: function ObjectTypeDefinition(_ref23) {
    var name = _ref23.name,
        interfaces = _ref23.interfaces,
        directives = _ref23.directives,
        fields = _ref23.fields;
    return join(['type', name, wrap('implements ', join(interfaces, ', ')), join(directives, ' '), block(fields)], ' ');
  },

  FieldDefinition: function FieldDefinition(_ref24) {
    var name = _ref24.name,
        args = _ref24.arguments,
        type = _ref24.type,
        directives = _ref24.directives;
    return name + wrap('(', join(args, ', '), ')') + ': ' + type + wrap(' ', join(directives, ' '));
  },

  InputValueDefinition: function InputValueDefinition(_ref25) {
    var name = _ref25.name,
        type = _ref25.type,
        defaultValue = _ref25.defaultValue,
        directives = _ref25.directives;
    return join([name + ': ' + type, wrap('= ', defaultValue), join(directives, ' ')], ' ');
  },

  InterfaceTypeDefinition: function InterfaceTypeDefinition(_ref26) {
    var name = _ref26.name,
        directives = _ref26.directives,
        fields = _ref26.fields;
    return join(['interface', name, join(directives, ' '), block(fields)], ' ');
  },

  UnionTypeDefinition: function UnionTypeDefinition(_ref27) {
    var name = _ref27.name,
        directives = _ref27.directives,
        types = _ref27.types;
    return join(['union', name, join(directives, ' '), '= ' + join(types, ' | ')], ' ');
  },

  EnumTypeDefinition: function EnumTypeDefinition(_ref28) {
    var name = _ref28.name,
        directives = _ref28.directives,
        values = _ref28.values;
    return join(['enum', name, join(directives, ' '), block(values)], ' ');
  },

  EnumValueDefinition: function EnumValueDefinition(_ref29) {
    var name = _ref29.name,
        directives = _ref29.directives;
    return join([name, join(directives, ' ')], ' ');
  },

  InputObjectTypeDefinition: function InputObjectTypeDefinition(_ref30) {
    var name = _ref30.name,
        directives = _ref30.directives,
        fields = _ref30.fields;
    return join(['input', name, join(directives, ' '), block(fields)], ' ');
  },

  TypeExtensionDefinition: function TypeExtensionDefinition(_ref31) {
    var definition = _ref31.definition;
    return 'extend ' + definition;
  },

  DirectiveDefinition: function DirectiveDefinition(_ref32) {
    var name = _ref32.name,
        args = _ref32.arguments,
        locations = _ref32.locations;
    return 'directive @' + name + wrap('(', join(args, ', '), ')') + ' on ' + join(locations, ' | ');
  }
};

/**
 * Given maybeArray, print an empty string if it is null or empty, otherwise
 * print all items together separated by separator if provided
 */
function join(maybeArray, separator) {
  return maybeArray ? maybeArray.filter(function (x) {
    return x;
  }).join(separator || '') : '';
}

/**
 * Given array, print each item on its own line, wrapped in an
 * indented "{ }" block.
 */
function block(array) {
  return array && array.length !== 0 ? indent('{\n' + join(array, '\n')) + '\n}' : '{}';
}

/**
 * If maybeString is not null or empty, then wrap with start and end, otherwise
 * print an empty string.
 */
function wrap(start, maybeString, end) {
  return maybeString ? start + maybeString + (end || '') : '';
}

function indent(maybeString) {
  return maybeString && maybeString.replace(/\n/g, '\n  ');
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GraphQLSchema = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _definition = __webpack_require__(1);

var _directives = __webpack_require__(6);

var _introspection = __webpack_require__(10);

var _find = __webpack_require__(13);

var _find2 = _interopRequireDefault(_find);

var _invariant = __webpack_require__(2);

var _invariant2 = _interopRequireDefault(_invariant);

var _typeComparators = __webpack_require__(21);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /**
                                                                                                                                                           * Copyright (c) 2015-present, Facebook, Inc.
                                                                                                                                                           *
                                                                                                                                                           * This source code is licensed under the MIT license found in the
                                                                                                                                                           * LICENSE file in the root directory of this source tree.
                                                                                                                                                           *
                                                                                                                                                           * 
                                                                                                                                                           */

/**
 * Schema Definition
 *
 * A Schema is created by supplying the root types of each type of operation,
 * query and mutation (optional). A schema definition is then supplied to the
 * validator and executor.
 *
 * Example:
 *
 *     const MyAppSchema = new GraphQLSchema({
 *       query: MyAppQueryRootType,
 *       mutation: MyAppMutationRootType,
 *     })
 *
 * Note: If an array of `directives` are provided to GraphQLSchema, that will be
 * the exact list of directives represented and allowed. If `directives` is not
 * provided then a default set of the specified directives (e.g. @include and
 * @skip) will be used. If you wish to provide *additional* directives to these
 * specified directives, you must explicitly declare them. Example:
 *
 *     const MyAppSchema = new GraphQLSchema({
 *       ...
 *       directives: specifiedDirectives.concat([ myCustomDirective ]),
 *     })
 *
 */
var GraphQLSchema = exports.GraphQLSchema = function () {
  function GraphQLSchema(config) {
    var _this = this;

    _classCallCheck(this, GraphQLSchema);

    !((typeof config === 'undefined' ? 'undefined' : _typeof(config)) === 'object') ? (0, _invariant2.default)(0, 'Must provide configuration object.') : void 0;

    !(config.query instanceof _definition.GraphQLObjectType) ? (0, _invariant2.default)(0, 'Schema query must be Object Type but got: ' + String(config.query) + '.') : void 0;
    this._queryType = config.query;

    !(!config.mutation || config.mutation instanceof _definition.GraphQLObjectType) ? (0, _invariant2.default)(0, 'Schema mutation must be Object Type if provided but got: ' + String(config.mutation) + '.') : void 0;
    this._mutationType = config.mutation;

    !(!config.subscription || config.subscription instanceof _definition.GraphQLObjectType) ? (0, _invariant2.default)(0, 'Schema subscription must be Object Type if provided but got: ' + String(config.subscription) + '.') : void 0;
    this._subscriptionType = config.subscription;

    !(!config.types || Array.isArray(config.types)) ? (0, _invariant2.default)(0, 'Schema types must be Array if provided but got: ' + String(config.types) + '.') : void 0;

    !(!config.directives || Array.isArray(config.directives) && config.directives.every(function (directive) {
      return directive instanceof _directives.GraphQLDirective;
    })) ? (0, _invariant2.default)(0, 'Schema directives must be Array<GraphQLDirective> if provided but got: ' + String(config.directives) + '.') : void 0;
    // Provide specified directives (e.g. @include and @skip) by default.
    this._directives = config.directives || _directives.specifiedDirectives;
    this.astNode = config.astNode || null;

    // Build type map now to detect any errors within this schema.
    var initialTypes = [this.getQueryType(), this.getMutationType(), this.getSubscriptionType(), _introspection.__Schema];

    var types = config.types;
    if (types) {
      initialTypes = initialTypes.concat(types);
    }

    this._typeMap = initialTypes.reduce(typeMapReducer, Object.create(null));

    // Keep track of all implementations by interface name.
    this._implementations = Object.create(null);
    Object.keys(this._typeMap).forEach(function (typeName) {
      var type = _this._typeMap[typeName];
      if (type instanceof _definition.GraphQLObjectType) {
        type.getInterfaces().forEach(function (iface) {
          var impls = _this._implementations[iface.name];
          if (impls) {
            impls.push(type);
          } else {
            _this._implementations[iface.name] = [type];
          }
        });
      }
    });

    // Enforce correct interface implementations.
    Object.keys(this._typeMap).forEach(function (typeName) {
      var type = _this._typeMap[typeName];
      if (type instanceof _definition.GraphQLObjectType) {
        type.getInterfaces().forEach(function (iface) {
          return assertObjectImplementsInterface(_this, type, iface);
        });
      }
    });
  }

  GraphQLSchema.prototype.getQueryType = function getQueryType() {
    return this._queryType;
  };

  GraphQLSchema.prototype.getMutationType = function getMutationType() {
    return this._mutationType;
  };

  GraphQLSchema.prototype.getSubscriptionType = function getSubscriptionType() {
    return this._subscriptionType;
  };

  GraphQLSchema.prototype.getTypeMap = function getTypeMap() {
    return this._typeMap;
  };

  GraphQLSchema.prototype.getType = function getType(name) {
    return this.getTypeMap()[name];
  };

  GraphQLSchema.prototype.getPossibleTypes = function getPossibleTypes(abstractType) {
    if (abstractType instanceof _definition.GraphQLUnionType) {
      return abstractType.getTypes();
    }
    !(abstractType instanceof _definition.GraphQLInterfaceType) ? (0, _invariant2.default)(0) : void 0;
    return this._implementations[abstractType.name];
  };

  GraphQLSchema.prototype.isPossibleType = function isPossibleType(abstractType, possibleType) {
    var possibleTypeMap = this._possibleTypeMap;
    if (!possibleTypeMap) {
      this._possibleTypeMap = possibleTypeMap = Object.create(null);
    }

    if (!possibleTypeMap[abstractType.name]) {
      var possibleTypes = this.getPossibleTypes(abstractType);
      !Array.isArray(possibleTypes) ? (0, _invariant2.default)(0, 'Could not find possible implementing types for ' + abstractType.name + ' ' + 'in schema. Check that schema.types is defined and is an array of ' + 'all possible types in the schema.') : void 0;
      possibleTypeMap[abstractType.name] = possibleTypes.reduce(function (map, type) {
        return map[type.name] = true, map;
      }, Object.create(null));
    }

    return Boolean(possibleTypeMap[abstractType.name][possibleType.name]);
  };

  GraphQLSchema.prototype.getDirectives = function getDirectives() {
    return this._directives;
  };

  GraphQLSchema.prototype.getDirective = function getDirective(name) {
    return (0, _find2.default)(this.getDirectives(), function (directive) {
      return directive.name === name;
    });
  };

  return GraphQLSchema;
}();

function typeMapReducer(map, type) {
  if (!type) {
    return map;
  }
  if (type instanceof _definition.GraphQLList || type instanceof _definition.GraphQLNonNull) {
    return typeMapReducer(map, type.ofType);
  }
  if (map[type.name]) {
    !(map[type.name] === type) ? (0, _invariant2.default)(0, 'Schema must contain unique named types but contains multiple ' + ('types named "' + type.name + '".')) : void 0;
    return map;
  }
  map[type.name] = type;

  var reducedMap = map;

  if (type instanceof _definition.GraphQLUnionType) {
    reducedMap = type.getTypes().reduce(typeMapReducer, reducedMap);
  }

  if (type instanceof _definition.GraphQLObjectType) {
    reducedMap = type.getInterfaces().reduce(typeMapReducer, reducedMap);
  }

  if (type instanceof _definition.GraphQLObjectType || type instanceof _definition.GraphQLInterfaceType) {
    var fieldMap = type.getFields();
    Object.keys(fieldMap).forEach(function (fieldName) {
      var field = fieldMap[fieldName];

      if (field.args) {
        var fieldArgTypes = field.args.map(function (arg) {
          return arg.type;
        });
        reducedMap = fieldArgTypes.reduce(typeMapReducer, reducedMap);
      }
      reducedMap = typeMapReducer(reducedMap, field.type);
    });
  }

  if (type instanceof _definition.GraphQLInputObjectType) {
    var _fieldMap = type.getFields();
    Object.keys(_fieldMap).forEach(function (fieldName) {
      var field = _fieldMap[fieldName];
      reducedMap = typeMapReducer(reducedMap, field.type);
    });
  }

  return reducedMap;
}

function assertObjectImplementsInterface(schema, object, iface) {
  var objectFieldMap = object.getFields();
  var ifaceFieldMap = iface.getFields();

  // Assert each interface field is implemented.
  Object.keys(ifaceFieldMap).forEach(function (fieldName) {
    var objectField = objectFieldMap[fieldName];
    var ifaceField = ifaceFieldMap[fieldName];

    // Assert interface field exists on object.
    !objectField ? (0, _invariant2.default)(0, '"' + iface.name + '" expects field "' + fieldName + '" but "' + object.name + '" ' + 'does not provide it.') : void 0;

    // Assert interface field type is satisfied by object field type, by being
    // a valid subtype. (covariant)
    !(0, _typeComparators.isTypeSubTypeOf)(schema, objectField.type, ifaceField.type) ? (0, _invariant2.default)(0, iface.name + '.' + fieldName + ' expects type "' + String(ifaceField.type) + '" ' + 'but ' + (object.name + '.' + fieldName + ' provides type "' + String(objectField.type) + '".')) : void 0;

    // Assert each interface field arg is implemented.
    ifaceField.args.forEach(function (ifaceArg) {
      var argName = ifaceArg.name;
      var objectArg = (0, _find2.default)(objectField.args, function (arg) {
        return arg.name === argName;
      });

      // Assert interface field arg exists on object field.
      !objectArg ? (0, _invariant2.default)(0, iface.name + '.' + fieldName + ' expects argument "' + argName + '" but ' + (object.name + '.' + fieldName + ' does not provide it.')) : void 0;

      // Assert interface field arg type matches object field arg type.
      // (invariant)
      !(0, _typeComparators.isEqualType)(ifaceArg.type, objectArg.type) ? (0, _invariant2.default)(0, iface.name + '.' + fieldName + '(' + argName + ':) expects type ' + ('"' + String(ifaceArg.type) + '" but ') + (object.name + '.' + fieldName + '(' + argName + ':) provides type ') + ('"' + String(objectArg.type) + '".')) : void 0;
    });

    // Assert additional arguments must not be required.
    objectField.args.forEach(function (objectArg) {
      var argName = objectArg.name;
      var ifaceArg = (0, _find2.default)(ifaceField.args, function (arg) {
        return arg.name === argName;
      });
      if (!ifaceArg) {
        !!(objectArg.type instanceof _definition.GraphQLNonNull) ? (0, _invariant2.default)(0, object.name + '.' + fieldName + '(' + argName + ':) is of required type ' + ('"' + String(objectArg.type) + '" but is not also provided by the ') + ('interface ' + iface.name + '.' + fieldName + '.')) : void 0;
      }
    });
  });
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.specifiedDirectives = exports.GraphQLDeprecatedDirective = exports.DEFAULT_DEPRECATION_REASON = exports.GraphQLSkipDirective = exports.GraphQLIncludeDirective = exports.GraphQLDirective = exports.DirectiveLocation = undefined;

var _definition = __webpack_require__(1);

var _scalars = __webpack_require__(8);

var _invariant = __webpack_require__(2);

var _invariant2 = _interopRequireDefault(_invariant);

var _assertValidName = __webpack_require__(25);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /**
                                                                                                                                                           * Copyright (c) 2015-present, Facebook, Inc.
                                                                                                                                                           *
                                                                                                                                                           * This source code is licensed under the MIT license found in the
                                                                                                                                                           * LICENSE file in the root directory of this source tree.
                                                                                                                                                           *
                                                                                                                                                           * 
                                                                                                                                                           */

var DirectiveLocation = exports.DirectiveLocation = {
  // Operations
  QUERY: 'QUERY',
  MUTATION: 'MUTATION',
  SUBSCRIPTION: 'SUBSCRIPTION',
  FIELD: 'FIELD',
  FRAGMENT_DEFINITION: 'FRAGMENT_DEFINITION',
  FRAGMENT_SPREAD: 'FRAGMENT_SPREAD',
  INLINE_FRAGMENT: 'INLINE_FRAGMENT',
  // Schema Definitions
  SCHEMA: 'SCHEMA',
  SCALAR: 'SCALAR',
  OBJECT: 'OBJECT',
  FIELD_DEFINITION: 'FIELD_DEFINITION',
  ARGUMENT_DEFINITION: 'ARGUMENT_DEFINITION',
  INTERFACE: 'INTERFACE',
  UNION: 'UNION',
  ENUM: 'ENUM',
  ENUM_VALUE: 'ENUM_VALUE',
  INPUT_OBJECT: 'INPUT_OBJECT',
  INPUT_FIELD_DEFINITION: 'INPUT_FIELD_DEFINITION'
};

// eslint-disable-line

/**
 * Directives are used by the GraphQL runtime as a way of modifying execution
 * behavior. Type system creators will usually not create these directly.
 */
var GraphQLDirective = exports.GraphQLDirective = function GraphQLDirective(config) {
  _classCallCheck(this, GraphQLDirective);

  !config.name ? (0, _invariant2.default)(0, 'Directive must be named.') : void 0;
  (0, _assertValidName.assertValidName)(config.name);
  !Array.isArray(config.locations) ? (0, _invariant2.default)(0, 'Must provide locations for directive.') : void 0;
  this.name = config.name;
  this.description = config.description;
  this.locations = config.locations;
  this.astNode = config.astNode;

  var args = config.args;
  if (!args) {
    this.args = [];
  } else {
    !!Array.isArray(args) ? (0, _invariant2.default)(0, '@' + config.name + ' args must be an object with argument names as keys.') : void 0;
    this.args = Object.keys(args).map(function (argName) {
      (0, _assertValidName.assertValidName)(argName);
      var arg = args[argName];
      !(0, _definition.isInputType)(arg.type) ? (0, _invariant2.default)(0, '@' + config.name + '(' + argName + ':) argument type must be ' + ('Input Type but got: ' + String(arg.type) + '.')) : void 0;
      return {
        name: argName,
        description: arg.description === undefined ? null : arg.description,
        type: arg.type,
        defaultValue: arg.defaultValue,
        astNode: arg.astNode
      };
    });
  }
};

/**
 * Used to conditionally include fields or fragments.
 */
var GraphQLIncludeDirective = exports.GraphQLIncludeDirective = new GraphQLDirective({
  name: 'include',
  description: 'Directs the executor to include this field or fragment only when ' + 'the `if` argument is true.',
  locations: [DirectiveLocation.FIELD, DirectiveLocation.FRAGMENT_SPREAD, DirectiveLocation.INLINE_FRAGMENT],
  args: {
    if: {
      type: new _definition.GraphQLNonNull(_scalars.GraphQLBoolean),
      description: 'Included when true.'
    }
  }
});

/**
 * Used to conditionally skip (exclude) fields or fragments.
 */
var GraphQLSkipDirective = exports.GraphQLSkipDirective = new GraphQLDirective({
  name: 'skip',
  description: 'Directs the executor to skip this field or fragment when the `if` ' + 'argument is true.',
  locations: [DirectiveLocation.FIELD, DirectiveLocation.FRAGMENT_SPREAD, DirectiveLocation.INLINE_FRAGMENT],
  args: {
    if: {
      type: new _definition.GraphQLNonNull(_scalars.GraphQLBoolean),
      description: 'Skipped when true.'
    }
  }
});

/**
 * Constant string used for default reason for a deprecation.
 */
var DEFAULT_DEPRECATION_REASON = exports.DEFAULT_DEPRECATION_REASON = 'No longer supported';

/**
 * Used to declare element of a GraphQL schema as deprecated.
 */
var GraphQLDeprecatedDirective = exports.GraphQLDeprecatedDirective = new GraphQLDirective({
  name: 'deprecated',
  description: 'Marks an element of a GraphQL schema as no longer supported.',
  locations: [DirectiveLocation.FIELD_DEFINITION, DirectiveLocation.ENUM_VALUE],
  args: {
    reason: {
      type: _scalars.GraphQLString,
      description: 'Explains why this element was deprecated, usually also including a ' + 'suggestion for how to access supported similar data. Formatted ' + 'in [Markdown](https://daringfireball.net/projects/markdown/).',
      defaultValue: DEFAULT_DEPRECATION_REASON
    }
  }
});

/**
 * The full list of specified directives.
 */
var specifiedDirectives = exports.specifiedDirectives = [GraphQLIncludeDirective, GraphQLSkipDirective, GraphQLDeprecatedDirective];

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.typeFromAST = undefined;

var _invariant = __webpack_require__(2);

var _invariant2 = _interopRequireDefault(_invariant);

var _kinds = __webpack_require__(3);

var Kind = _interopRequireWildcard(_kinds);

var _definition = __webpack_require__(1);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Given a Schema and an AST node describing a type, return a GraphQLType
 * definition which applies to that type. For example, if provided the parsed
 * AST node for `[User]`, a GraphQLList instance will be returned, containing
 * the type called "User" found in the schema. If a type called "User" is not
 * found in the schema, then undefined will be returned.
 */
/* eslint-disable no-redeclare */
function typeFromASTImpl(schema, typeNode) {
  /* eslint-enable no-redeclare */
  var innerType = void 0;
  if (typeNode.kind === Kind.LIST_TYPE) {
    innerType = typeFromAST(schema, typeNode.type);
    return innerType && new _definition.GraphQLList(innerType);
  }
  if (typeNode.kind === Kind.NON_NULL_TYPE) {
    innerType = typeFromAST(schema, typeNode.type);
    return innerType && new _definition.GraphQLNonNull(innerType);
  }
  !(typeNode.kind === Kind.NAMED_TYPE) ? (0, _invariant2.default)(0, 'Must be a named type.') : void 0;
  return schema.getType(typeNode.name.value);
}
// This will export typeFromAST with the correct type, but currently exposes
// ~26 errors: https://gist.github.com/4a29403a99a8186fcb15064d69c5f3ae
// export var typeFromAST: typeof typeFromASTType = typeFromASTImpl;
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

var typeFromAST = exports.typeFromAST = typeFromASTImpl;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GraphQLID = exports.GraphQLBoolean = exports.GraphQLString = exports.GraphQLFloat = exports.GraphQLInt = undefined;

var _definition = __webpack_require__(1);

var _kinds = __webpack_require__(3);

var Kind = _interopRequireWildcard(_kinds);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// As per the GraphQL Spec, Integers are only treated as valid when a valid
// 32-bit signed integer, providing the broadest support across platforms.
//
// n.b. JavaScript's integers are safe between -(2^53 - 1) and 2^53 - 1 because
// they are internally represented as IEEE 754 doubles.
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

var MAX_INT = 2147483647;
var MIN_INT = -2147483648;

function coerceInt(value) {
  if (value === '') {
    throw new TypeError('Int cannot represent non 32-bit signed integer value: (empty string)');
  }
  var num = Number(value);
  if (num !== num || num > MAX_INT || num < MIN_INT) {
    throw new TypeError('Int cannot represent non 32-bit signed integer value: ' + String(value));
  }
  var int = Math.floor(num);
  if (int !== num) {
    throw new TypeError('Int cannot represent non-integer value: ' + String(value));
  }
  return int;
}

var GraphQLInt = exports.GraphQLInt = new _definition.GraphQLScalarType({
  name: 'Int',
  description: 'The `Int` scalar type represents non-fractional signed whole numeric ' + 'values. Int can represent values between -(2^31) and 2^31 - 1. ',
  serialize: coerceInt,
  parseValue: coerceInt,
  parseLiteral: function parseLiteral(ast) {
    if (ast.kind === Kind.INT) {
      var num = parseInt(ast.value, 10);
      if (num <= MAX_INT && num >= MIN_INT) {
        return num;
      }
    }
    return null;
  }
});

function coerceFloat(value) {
  if (value === '') {
    throw new TypeError('Float cannot represent non numeric value: (empty string)');
  }
  var num = Number(value);
  if (num === num) {
    return num;
  }
  throw new TypeError('Float cannot represent non numeric value: ' + String(value));
}

var GraphQLFloat = exports.GraphQLFloat = new _definition.GraphQLScalarType({
  name: 'Float',
  description: 'The `Float` scalar type represents signed double-precision fractional ' + 'values as specified by ' + '[IEEE 754](http://en.wikipedia.org/wiki/IEEE_floating_point). ',
  serialize: coerceFloat,
  parseValue: coerceFloat,
  parseLiteral: function parseLiteral(ast) {
    return ast.kind === Kind.FLOAT || ast.kind === Kind.INT ? parseFloat(ast.value) : null;
  }
});

function coerceString(value) {
  if (Array.isArray(value)) {
    throw new TypeError('String cannot represent an array value: [' + String(value) + ']');
  }
  return String(value);
}

var GraphQLString = exports.GraphQLString = new _definition.GraphQLScalarType({
  name: 'String',
  description: 'The `String` scalar type represents textual data, represented as UTF-8 ' + 'character sequences. The String type is most often used by GraphQL to ' + 'represent free-form human-readable text.',
  serialize: coerceString,
  parseValue: coerceString,
  parseLiteral: function parseLiteral(ast) {
    return ast.kind === Kind.STRING ? ast.value : null;
  }
});

var GraphQLBoolean = exports.GraphQLBoolean = new _definition.GraphQLScalarType({
  name: 'Boolean',
  description: 'The `Boolean` scalar type represents `true` or `false`.',
  serialize: Boolean,
  parseValue: Boolean,
  parseLiteral: function parseLiteral(ast) {
    return ast.kind === Kind.BOOLEAN ? ast.value : null;
  }
});

var GraphQLID = exports.GraphQLID = new _definition.GraphQLScalarType({
  name: 'ID',
  description: 'The `ID` scalar type represents a unique identifier, often used to ' + 'refetch an object or as key for a cache. The ID type appears in a JSON ' + 'response as a String; however, it is not intended to be human-readable. ' + 'When expected as an input type, any string (such as `"4"`) or integer ' + '(such as `4`) input value will be accepted as an ID.',
  serialize: String,
  parseValue: String,
  parseLiteral: function parseLiteral(ast) {
    return ast.kind === Kind.STRING || ast.kind === Kind.INT ? ast.value : null;
  }
});

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isNullish;
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

/**
 * Returns true if a value is null, undefined, or NaN.
 */
function isNullish(value) {
  return value === null || value === undefined || value !== value;
}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TypeNameMetaFieldDef = exports.TypeMetaFieldDef = exports.SchemaMetaFieldDef = exports.__TypeKind = exports.TypeKind = exports.__EnumValue = exports.__InputValue = exports.__Field = exports.__Type = exports.__DirectiveLocation = exports.__Directive = exports.__Schema = undefined;

var _isInvalid = __webpack_require__(17);

var _isInvalid2 = _interopRequireDefault(_isInvalid);

var _astFromValue = __webpack_require__(26);

var _printer = __webpack_require__(4);

var _definition = __webpack_require__(1);

var _scalars = __webpack_require__(8);

var _directives = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

var __Schema = exports.__Schema = new _definition.GraphQLObjectType({
  name: '__Schema',
  isIntrospection: true,
  description: 'A GraphQL Schema defines the capabilities of a GraphQL server. It ' + 'exposes all available types and directives on the server, as well as ' + 'the entry points for query, mutation, and subscription operations.',
  fields: function fields() {
    return {
      types: {
        description: 'A list of all types supported by this server.',
        type: new _definition.GraphQLNonNull(new _definition.GraphQLList(new _definition.GraphQLNonNull(__Type))),
        resolve: function resolve(schema) {
          var typeMap = schema.getTypeMap();
          return Object.keys(typeMap).map(function (key) {
            return typeMap[key];
          });
        }
      },
      queryType: {
        description: 'The type that query operations will be rooted at.',
        type: new _definition.GraphQLNonNull(__Type),
        resolve: function resolve(schema) {
          return schema.getQueryType();
        }
      },
      mutationType: {
        description: 'If this server supports mutation, the type that ' + 'mutation operations will be rooted at.',
        type: __Type,
        resolve: function resolve(schema) {
          return schema.getMutationType();
        }
      },
      subscriptionType: {
        description: 'If this server support subscription, the type that ' + 'subscription operations will be rooted at.',
        type: __Type,
        resolve: function resolve(schema) {
          return schema.getSubscriptionType();
        }
      },
      directives: {
        description: 'A list of all directives supported by this server.',
        type: new _definition.GraphQLNonNull(new _definition.GraphQLList(new _definition.GraphQLNonNull(__Directive))),
        resolve: function resolve(schema) {
          return schema.getDirectives();
        }
      }
    };
  }
});

var __Directive = exports.__Directive = new _definition.GraphQLObjectType({
  name: '__Directive',
  isIntrospection: true,
  description: 'A Directive provides a way to describe alternate runtime execution and ' + 'type validation behavior in a GraphQL document.' + '\n\nIn some cases, you need to provide options to alter GraphQL\'s ' + 'execution behavior in ways field arguments will not suffice, such as ' + 'conditionally including or skipping a field. Directives provide this by ' + 'describing additional information to the executor.',
  fields: function fields() {
    return {
      name: { type: new _definition.GraphQLNonNull(_scalars.GraphQLString) },
      description: { type: _scalars.GraphQLString },
      locations: {
        type: new _definition.GraphQLNonNull(new _definition.GraphQLList(new _definition.GraphQLNonNull(__DirectiveLocation)))
      },
      args: {
        type: new _definition.GraphQLNonNull(new _definition.GraphQLList(new _definition.GraphQLNonNull(__InputValue))),
        resolve: function resolve(directive) {
          return directive.args || [];
        }
      },
      // NOTE: the following three fields are deprecated and are no longer part
      // of the GraphQL specification.
      onOperation: {
        deprecationReason: 'Use `locations`.',
        type: new _definition.GraphQLNonNull(_scalars.GraphQLBoolean),
        resolve: function resolve(d) {
          return d.locations.indexOf(_directives.DirectiveLocation.QUERY) !== -1 || d.locations.indexOf(_directives.DirectiveLocation.MUTATION) !== -1 || d.locations.indexOf(_directives.DirectiveLocation.SUBSCRIPTION) !== -1;
        }
      },
      onFragment: {
        deprecationReason: 'Use `locations`.',
        type: new _definition.GraphQLNonNull(_scalars.GraphQLBoolean),
        resolve: function resolve(d) {
          return d.locations.indexOf(_directives.DirectiveLocation.FRAGMENT_SPREAD) !== -1 || d.locations.indexOf(_directives.DirectiveLocation.INLINE_FRAGMENT) !== -1 || d.locations.indexOf(_directives.DirectiveLocation.FRAGMENT_DEFINITION) !== -1;
        }
      },
      onField: {
        deprecationReason: 'Use `locations`.',
        type: new _definition.GraphQLNonNull(_scalars.GraphQLBoolean),
        resolve: function resolve(d) {
          return d.locations.indexOf(_directives.DirectiveLocation.FIELD) !== -1;
        }
      }
    };
  }
});

var __DirectiveLocation = exports.__DirectiveLocation = new _definition.GraphQLEnumType({
  name: '__DirectiveLocation',
  isIntrospection: true,
  description: 'A Directive can be adjacent to many parts of the GraphQL language, a ' + '__DirectiveLocation describes one such possible adjacencies.',
  values: {
    QUERY: {
      value: _directives.DirectiveLocation.QUERY,
      description: 'Location adjacent to a query operation.'
    },
    MUTATION: {
      value: _directives.DirectiveLocation.MUTATION,
      description: 'Location adjacent to a mutation operation.'
    },
    SUBSCRIPTION: {
      value: _directives.DirectiveLocation.SUBSCRIPTION,
      description: 'Location adjacent to a subscription operation.'
    },
    FIELD: {
      value: _directives.DirectiveLocation.FIELD,
      description: 'Location adjacent to a field.'
    },
    FRAGMENT_DEFINITION: {
      value: _directives.DirectiveLocation.FRAGMENT_DEFINITION,
      description: 'Location adjacent to a fragment definition.'
    },
    FRAGMENT_SPREAD: {
      value: _directives.DirectiveLocation.FRAGMENT_SPREAD,
      description: 'Location adjacent to a fragment spread.'
    },
    INLINE_FRAGMENT: {
      value: _directives.DirectiveLocation.INLINE_FRAGMENT,
      description: 'Location adjacent to an inline fragment.'
    },
    SCHEMA: {
      value: _directives.DirectiveLocation.SCHEMA,
      description: 'Location adjacent to a schema definition.'
    },
    SCALAR: {
      value: _directives.DirectiveLocation.SCALAR,
      description: 'Location adjacent to a scalar definition.'
    },
    OBJECT: {
      value: _directives.DirectiveLocation.OBJECT,
      description: 'Location adjacent to an object type definition.'
    },
    FIELD_DEFINITION: {
      value: _directives.DirectiveLocation.FIELD_DEFINITION,
      description: 'Location adjacent to a field definition.'
    },
    ARGUMENT_DEFINITION: {
      value: _directives.DirectiveLocation.ARGUMENT_DEFINITION,
      description: 'Location adjacent to an argument definition.'
    },
    INTERFACE: {
      value: _directives.DirectiveLocation.INTERFACE,
      description: 'Location adjacent to an interface definition.'
    },
    UNION: {
      value: _directives.DirectiveLocation.UNION,
      description: 'Location adjacent to a union definition.'
    },
    ENUM: {
      value: _directives.DirectiveLocation.ENUM,
      description: 'Location adjacent to an enum definition.'
    },
    ENUM_VALUE: {
      value: _directives.DirectiveLocation.ENUM_VALUE,
      description: 'Location adjacent to an enum value definition.'
    },
    INPUT_OBJECT: {
      value: _directives.DirectiveLocation.INPUT_OBJECT,
      description: 'Location adjacent to an input object type definition.'
    },
    INPUT_FIELD_DEFINITION: {
      value: _directives.DirectiveLocation.INPUT_FIELD_DEFINITION,
      description: 'Location adjacent to an input object field definition.'
    }
  }
});

var __Type = exports.__Type = new _definition.GraphQLObjectType({
  name: '__Type',
  isIntrospection: true,
  description: 'The fundamental unit of any GraphQL Schema is the type. There are ' + 'many kinds of types in GraphQL as represented by the `__TypeKind` enum.' + '\n\nDepending on the kind of a type, certain fields describe ' + 'information about that type. Scalar types provide no information ' + 'beyond a name and description, while Enum types provide their values. ' + 'Object and Interface types provide the fields they describe. Abstract ' + 'types, Union and Interface, provide the Object types possible ' + 'at runtime. List and NonNull types compose other types.',
  fields: function fields() {
    return {
      kind: {
        type: new _definition.GraphQLNonNull(__TypeKind),
        resolve: function resolve(type) {
          if (type instanceof _definition.GraphQLScalarType) {
            return TypeKind.SCALAR;
          } else if (type instanceof _definition.GraphQLObjectType) {
            return TypeKind.OBJECT;
          } else if (type instanceof _definition.GraphQLInterfaceType) {
            return TypeKind.INTERFACE;
          } else if (type instanceof _definition.GraphQLUnionType) {
            return TypeKind.UNION;
          } else if (type instanceof _definition.GraphQLEnumType) {
            return TypeKind.ENUM;
          } else if (type instanceof _definition.GraphQLInputObjectType) {
            return TypeKind.INPUT_OBJECT;
          } else if (type instanceof _definition.GraphQLList) {
            return TypeKind.LIST;
          } else if (type instanceof _definition.GraphQLNonNull) {
            return TypeKind.NON_NULL;
          }
          throw new Error('Unknown kind of type: ' + type);
        }
      },
      name: { type: _scalars.GraphQLString },
      description: { type: _scalars.GraphQLString },
      fields: {
        type: new _definition.GraphQLList(new _definition.GraphQLNonNull(__Field)),
        args: {
          includeDeprecated: { type: _scalars.GraphQLBoolean, defaultValue: false }
        },
        resolve: function resolve(type, _ref) {
          var includeDeprecated = _ref.includeDeprecated;

          if (type instanceof _definition.GraphQLObjectType || type instanceof _definition.GraphQLInterfaceType) {
            var fieldMap = type.getFields();
            var fields = Object.keys(fieldMap).map(function (fieldName) {
              return fieldMap[fieldName];
            });
            if (!includeDeprecated) {
              fields = fields.filter(function (field) {
                return !field.deprecationReason;
              });
            }
            return fields;
          }
          return null;
        }
      },
      interfaces: {
        type: new _definition.GraphQLList(new _definition.GraphQLNonNull(__Type)),
        resolve: function resolve(type) {
          if (type instanceof _definition.GraphQLObjectType) {
            return type.getInterfaces();
          }
        }
      },
      possibleTypes: {
        type: new _definition.GraphQLList(new _definition.GraphQLNonNull(__Type)),
        resolve: function resolve(type, args, context, _ref2) {
          var schema = _ref2.schema;

          if ((0, _definition.isAbstractType)(type)) {
            return schema.getPossibleTypes(type);
          }
        }
      },
      enumValues: {
        type: new _definition.GraphQLList(new _definition.GraphQLNonNull(__EnumValue)),
        args: {
          includeDeprecated: { type: _scalars.GraphQLBoolean, defaultValue: false }
        },
        resolve: function resolve(type, _ref3) {
          var includeDeprecated = _ref3.includeDeprecated;

          if (type instanceof _definition.GraphQLEnumType) {
            var values = type.getValues();
            if (!includeDeprecated) {
              values = values.filter(function (value) {
                return !value.deprecationReason;
              });
            }
            return values;
          }
        }
      },
      inputFields: {
        type: new _definition.GraphQLList(new _definition.GraphQLNonNull(__InputValue)),
        resolve: function resolve(type) {
          if (type instanceof _definition.GraphQLInputObjectType) {
            var fieldMap = type.getFields();
            return Object.keys(fieldMap).map(function (fieldName) {
              return fieldMap[fieldName];
            });
          }
        }
      },
      ofType: { type: __Type }
    };
  }
});

var __Field = exports.__Field = new _definition.GraphQLObjectType({
  name: '__Field',
  isIntrospection: true,
  description: 'Object and Interface types are described by a list of Fields, each of ' + 'which has a name, potentially a list of arguments, and a return type.',
  fields: function fields() {
    return {
      name: { type: new _definition.GraphQLNonNull(_scalars.GraphQLString) },
      description: { type: _scalars.GraphQLString },
      args: {
        type: new _definition.GraphQLNonNull(new _definition.GraphQLList(new _definition.GraphQLNonNull(__InputValue))),
        resolve: function resolve(field) {
          return field.args || [];
        }
      },
      type: { type: new _definition.GraphQLNonNull(__Type) },
      isDeprecated: { type: new _definition.GraphQLNonNull(_scalars.GraphQLBoolean) },
      deprecationReason: {
        type: _scalars.GraphQLString
      }
    };
  }
});

var __InputValue = exports.__InputValue = new _definition.GraphQLObjectType({
  name: '__InputValue',
  isIntrospection: true,
  description: 'Arguments provided to Fields or Directives and the input fields of an ' + 'InputObject are represented as Input Values which describe their type ' + 'and optionally a default value.',
  fields: function fields() {
    return {
      name: { type: new _definition.GraphQLNonNull(_scalars.GraphQLString) },
      description: { type: _scalars.GraphQLString },
      type: { type: new _definition.GraphQLNonNull(__Type) },
      defaultValue: {
        type: _scalars.GraphQLString,
        description: 'A GraphQL-formatted string representing the default value for this ' + 'input value.',
        resolve: function resolve(inputVal) {
          return (0, _isInvalid2.default)(inputVal.defaultValue) ? null : (0, _printer.print)((0, _astFromValue.astFromValue)(inputVal.defaultValue, inputVal.type));
        }
      }
    };
  }
});

var __EnumValue = exports.__EnumValue = new _definition.GraphQLObjectType({
  name: '__EnumValue',
  isIntrospection: true,
  description: 'One possible value for a given Enum. Enum values are unique values, not ' + 'a placeholder for a string or numeric value. However an Enum value is ' + 'returned in a JSON response as a string.',
  fields: function fields() {
    return {
      name: { type: new _definition.GraphQLNonNull(_scalars.GraphQLString) },
      description: { type: _scalars.GraphQLString },
      isDeprecated: { type: new _definition.GraphQLNonNull(_scalars.GraphQLBoolean) },
      deprecationReason: {
        type: _scalars.GraphQLString
      }
    };
  }
});

var TypeKind = exports.TypeKind = {
  SCALAR: 'SCALAR',
  OBJECT: 'OBJECT',
  INTERFACE: 'INTERFACE',
  UNION: 'UNION',
  ENUM: 'ENUM',
  INPUT_OBJECT: 'INPUT_OBJECT',
  LIST: 'LIST',
  NON_NULL: 'NON_NULL'
};

var __TypeKind = exports.__TypeKind = new _definition.GraphQLEnumType({
  name: '__TypeKind',
  isIntrospection: true,
  description: 'An enum describing what kind of type a given `__Type` is.',
  values: {
    SCALAR: {
      value: TypeKind.SCALAR,
      description: 'Indicates this type is a scalar.'
    },
    OBJECT: {
      value: TypeKind.OBJECT,
      description: 'Indicates this type is an object. ' + '`fields` and `interfaces` are valid fields.'
    },
    INTERFACE: {
      value: TypeKind.INTERFACE,
      description: 'Indicates this type is an interface. ' + '`fields` and `possibleTypes` are valid fields.'
    },
    UNION: {
      value: TypeKind.UNION,
      description: 'Indicates this type is a union. ' + '`possibleTypes` is a valid field.'
    },
    ENUM: {
      value: TypeKind.ENUM,
      description: 'Indicates this type is an enum. ' + '`enumValues` is a valid field.'
    },
    INPUT_OBJECT: {
      value: TypeKind.INPUT_OBJECT,
      description: 'Indicates this type is an input object. ' + '`inputFields` is a valid field.'
    },
    LIST: {
      value: TypeKind.LIST,
      description: 'Indicates this type is a list. ' + '`ofType` is a valid field.'
    },
    NON_NULL: {
      value: TypeKind.NON_NULL,
      description: 'Indicates this type is a non-null. ' + '`ofType` is a valid field.'
    }
  }
});

/**
 * Note that these are GraphQLField and not GraphQLFieldConfig,
 * so the format for args is different.
 */

var SchemaMetaFieldDef = exports.SchemaMetaFieldDef = {
  name: '__schema',
  type: new _definition.GraphQLNonNull(__Schema),
  description: 'Access the current type schema of this server.',
  args: [],
  resolve: function resolve(source, args, context, _ref4) {
    var schema = _ref4.schema;
    return schema;
  }
};

var TypeMetaFieldDef = exports.TypeMetaFieldDef = {
  name: '__type',
  type: __Type,
  description: 'Request the type information of a single type.',
  args: [{ name: 'name', type: new _definition.GraphQLNonNull(_scalars.GraphQLString) }],
  resolve: function resolve(source, _ref5, context, _ref6) {
    var name = _ref5.name;
    var schema = _ref6.schema;
    return schema.getType(name);
  }
};

var TypeNameMetaFieldDef = exports.TypeNameMetaFieldDef = {
  name: '__typename',
  type: new _definition.GraphQLNonNull(_scalars.GraphQLString),
  description: 'The name of the current Object type at runtime.',
  args: [],
  resolve: function resolve(source, args, context, _ref7) {
    var parentType = _ref7.parentType;
    return parentType.name;
  }
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GraphQLError = GraphQLError;

var _location = __webpack_require__(23);

/**
 * A GraphQLError describes an Error found during the parse, validate, or
 * execute phases of performing a GraphQL operation. In addition to a message
 * and stack trace, it also includes information about the locations in a
 * GraphQL document and/or execution result that correspond to the Error.
 */
function GraphQLError( // eslint-disable-line no-redeclare
message, nodes, source, positions, path, originalError) {
  // Compute locations in the source for the given nodes/positions.
  var _source = source;
  if (!_source && nodes && nodes.length > 0) {
    var node = nodes[0];
    _source = node && node.loc && node.loc.source;
  }

  var _positions = positions;
  if (!_positions && nodes) {
    _positions = nodes.filter(function (node) {
      return Boolean(node.loc);
    }).map(function (node) {
      return node.loc.start;
    });
  }
  if (_positions && _positions.length === 0) {
    _positions = undefined;
  }

  var _locations = void 0;
  var _source2 = _source; // seems here Flow need a const to resolve type.
  if (_source2 && _positions) {
    _locations = _positions.map(function (pos) {
      return (0, _location.getLocation)(_source2, pos);
    });
  }

  Object.defineProperties(this, {
    message: {
      value: message,
      // By being enumerable, JSON.stringify will include `message` in the
      // resulting output. This ensures that the simplest possible GraphQL
      // service adheres to the spec.
      enumerable: true,
      writable: true
    },
    locations: {
      // Coercing falsey values to undefined ensures they will not be included
      // in JSON.stringify() when not provided.
      value: _locations || undefined,
      // By being enumerable, JSON.stringify will include `locations` in the
      // resulting output. This ensures that the simplest possible GraphQL
      // service adheres to the spec.
      enumerable: true
    },
    path: {
      // Coercing falsey values to undefined ensures they will not be included
      // in JSON.stringify() when not provided.
      value: path || undefined,
      // By being enumerable, JSON.stringify will include `path` in the
      // resulting output. This ensures that the simplest possible GraphQL
      // service adheres to the spec.
      enumerable: true
    },
    nodes: {
      value: nodes || undefined
    },
    source: {
      value: _source || undefined
    },
    positions: {
      value: _positions || undefined
    },
    originalError: {
      value: originalError
    }
  });

  // Include (non-enumerable) stack trace.
  if (originalError && originalError.stack) {
    Object.defineProperty(this, 'stack', {
      value: originalError.stack,
      writable: true,
      configurable: true
    });
  } else if (Error.captureStackTrace) {
    Error.captureStackTrace(this, GraphQLError);
  } else {
    Object.defineProperty(this, 'stack', {
      value: Error().stack,
      writable: true,
      configurable: true
    });
  }
} /**
   * Copyright (c) 2015-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *
   * 
   */

GraphQLError.prototype = Object.create(Error.prototype, {
  constructor: { value: GraphQLError },
  name: { value: 'GraphQLError' }
});

/***/ }),
/* 12 */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2016, Lee Byron
 * All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @ignore
 */

/**
 * [Iterator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#iterator)
 * is a *protocol* which describes a standard way to produce a sequence of
 * values, typically the values of the Iterable represented by this Iterator.
 *
 * While described by the [ES2015 version of JavaScript](http://www.ecma-international.org/ecma-262/6.0/#sec-iterator-interface)
 * it can be utilized by any version of JavaScript.
 *
 * @typedef {Object} Iterator
 * @template T The type of each iterated value
 * @property {function (): { value: T, done: boolean }} next
 *   A method which produces either the next value in a sequence or a result
 *   where the `done` property is `true` indicating the end of the Iterator.
 */

/**
 * [Iterable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#iterable)
 * is a *protocol* which when implemented allows a JavaScript object to define
 * their iteration behavior, such as what values are looped over in a `for..of`
 * loop or `iterall`'s `forEach` function. Many [built-in types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#Builtin_iterables)
 * implement the Iterable protocol, including `Array` and `Map`.
 *
 * While described by the [ES2015 version of JavaScript](http://www.ecma-international.org/ecma-262/6.0/#sec-iterable-interface)
 * it can be utilized by any version of JavaScript.
 *
 * @typedef {Object} Iterable
 * @template T The type of each iterated value
 * @property {function (): Iterator<T>} Symbol.iterator
 *   A method which produces an Iterator for this Iterable.
 */

// In ES2015 (or a polyfilled) environment, this will be Symbol.iterator
var SYMBOL_ITERATOR = typeof Symbol === 'function' && Symbol.iterator

/**
 * A property name to be used as the name of an Iterable's method responsible
 * for producing an Iterator, referred to as `@@iterator`. Typically represents
 * the value `Symbol.iterator` but falls back to the string `"@@iterator"` when
 * `Symbol.iterator` is not defined.
 *
 * Use `$$iterator` for defining new Iterables instead of `Symbol.iterator`,
 * but do not use it for accessing existing Iterables, instead use
 * `getIterator()` or `isIterable()`.
 *
 * @example
 *
 * var $$iterator = require('iterall').$$iterator
 *
 * function Counter (to) {
 *   this.to = to
 * }
 *
 * Counter.prototype[$$iterator] = function () {
 *   return {
 *     to: this.to,
 *     num: 0,
 *     next () {
 *       if (this.num >= this.to) {
 *         return { value: undefined, done: true }
 *       }
 *       return { value: this.num++, done: false }
 *     }
 *   }
 * }
 *
 * var counter = new Counter(3)
 * for (var number of counter) {
 *   console.log(number) // 0 ... 1 ... 2
 * }
 *
 * @type {Symbol|string}
 */
var $$iterator = SYMBOL_ITERATOR || '@@iterator'
exports.$$iterator = $$iterator

/**
 * Returns true if the provided object implements the Iterator protocol via
 * either implementing a `Symbol.iterator` or `"@@iterator"` method.
 *
 * @example
 *
 * var isIterable = require('iterall').isIterable
 * isIterable([ 1, 2, 3 ]) // true
 * isIterable('ABC') // true
 * isIterable({ length: 1, 0: 'Alpha' }) // false
 * isIterable({ key: 'value' }) // false
 * isIterable(new Map()) // true
 *
 * @param obj
 *   A value which might implement the Iterable protocol.
 * @return {boolean} true if Iterable.
 */
function isIterable(obj) {
  return !!getIteratorMethod(obj)
}
exports.isIterable = isIterable

/**
 * Returns true if the provided object implements the Array-like protocol via
 * defining a positive-integer `length` property.
 *
 * @example
 *
 * var isArrayLike = require('iterall').isArrayLike
 * isArrayLike([ 1, 2, 3 ]) // true
 * isArrayLike('ABC') // true
 * isArrayLike({ length: 1, 0: 'Alpha' }) // true
 * isArrayLike({ key: 'value' }) // false
 * isArrayLike(new Map()) // false
 *
 * @param obj
 *   A value which might implement the Array-like protocol.
 * @return {boolean} true if Array-like.
 */
function isArrayLike(obj) {
  var length = obj != null && obj.length
  return typeof length === 'number' && length >= 0 && length % 1 === 0
}
exports.isArrayLike = isArrayLike

/**
 * Returns true if the provided object is an Object (i.e. not a string literal)
 * and is either Iterable or Array-like.
 *
 * This may be used in place of [Array.isArray()][isArray] to determine if an
 * object should be iterated-over. It always excludes string literals and
 * includes Arrays (regardless of if it is Iterable). It also includes other
 * Array-like objects such as NodeList, TypedArray, and Buffer.
 *
 * @example
 *
 * var isCollection = require('iterall').isCollection
 * isCollection([ 1, 2, 3 ]) // true
 * isCollection('ABC') // false
 * isCollection({ length: 1, 0: 'Alpha' }) // true
 * isCollection({ key: 'value' }) // false
 * isCollection(new Map()) // true
 *
 * @example
 *
 * var forEach = require('iterall').forEach
 * if (isCollection(obj)) {
 *   forEach(obj, function (value) {
 *     console.log(value)
 *   })
 * }
 *
 * @param obj
 *   An Object value which might implement the Iterable or Array-like protocols.
 * @return {boolean} true if Iterable or Array-like Object.
 */
function isCollection(obj) {
  return Object(obj) === obj && (isArrayLike(obj) || isIterable(obj))
}
exports.isCollection = isCollection

/**
 * If the provided object implements the Iterator protocol, its Iterator object
 * is returned. Otherwise returns undefined.
 *
 * @example
 *
 * var getIterator = require('iterall').getIterator
 * var iterator = getIterator([ 1, 2, 3 ])
 * iterator.next() // { value: 1, done: false }
 * iterator.next() // { value: 2, done: false }
 * iterator.next() // { value: 3, done: false }
 * iterator.next() // { value: undefined, done: true }
 *
 * @template T the type of each iterated value
 * @param {Iterable<T>} iterable
 *   An Iterable object which is the source of an Iterator.
 * @return {Iterator<T>} new Iterator instance.
 */
function getIterator(iterable) {
  var method = getIteratorMethod(iterable)
  if (method) {
    return method.call(iterable)
  }
}
exports.getIterator = getIterator

/**
 * If the provided object implements the Iterator protocol, the method
 * responsible for producing its Iterator object is returned.
 *
 * This is used in rare cases for performance tuning. This method must be called
 * with obj as the contextual this-argument.
 *
 * @example
 *
 * var getIteratorMethod = require('iterall').getIteratorMethod
 * var myArray = [ 1, 2, 3 ]
 * var method = getIteratorMethod(myArray)
 * if (method) {
 *   var iterator = method.call(myArray)
 * }
 *
 * @template T the type of each iterated value
 * @param {Iterable<T>} iterable
 *   An Iterable object which defines an `@@iterator` method.
 * @return {function(): Iterator<T>} `@@iterator` method.
 */
function getIteratorMethod(iterable) {
  if (iterable != null) {
    var method =
      (SYMBOL_ITERATOR && iterable[SYMBOL_ITERATOR]) || iterable['@@iterator']
    if (typeof method === 'function') {
      return method
    }
  }
}
exports.getIteratorMethod = getIteratorMethod

/**
 * Similar to `getIterator()`, this method returns a new Iterator given an
 * Iterable. However it will also create an Iterator for a non-Iterable
 * Array-like collection, such as Array in a non-ES2015 environment.
 *
 * `createIterator` is complimentary to `forEach`, but allows a "pull"-based
 * iteration as opposed to `forEach`'s "push"-based iteration.
 *
 * `createIterator` produces an Iterator for Array-likes with the same behavior
 * as ArrayIteratorPrototype described in the ECMAScript specification, and
 * does *not* skip over "holes".
 *
 * @example
 *
 * var createIterator = require('iterall').createIterator
 *
 * var myArraylike = { length: 3, 0: 'Alpha', 1: 'Bravo', 2: 'Charlie' }
 * var iterator = createIterator(myArraylike)
 * iterator.next() // { value: 'Alpha', done: false }
 * iterator.next() // { value: 'Bravo', done: false }
 * iterator.next() // { value: 'Charlie', done: false }
 * iterator.next() // { value: undefined, done: true }
 *
 * @template T the type of each iterated value
 * @param {Iterable<T>|{ length: number }} collection
 *   An Iterable or Array-like object to produce an Iterator.
 * @return {Iterator<T>} new Iterator instance.
 */
function createIterator(collection) {
  if (collection != null) {
    var iterator = getIterator(collection)
    if (iterator) {
      return iterator
    }
    if (isArrayLike(collection)) {
      return new ArrayLikeIterator(collection)
    }
  }
}
exports.createIterator = createIterator

// When the object provided to `createIterator` is not Iterable but is
// Array-like, this simple Iterator is created.
function ArrayLikeIterator(obj) {
  this._o = obj
  this._i = 0
}

// Note: all Iterators are themselves Iterable.
ArrayLikeIterator.prototype[$$iterator] = function() {
  return this
}

// A simple state-machine determines the IteratorResult returned, yielding
// each value in the Array-like object in order of their indicies.
ArrayLikeIterator.prototype.next = function() {
  if (this._o === void 0 || this._i >= this._o.length) {
    this._o = void 0
    return { value: void 0, done: true }
  }
  return { value: this._o[this._i++], done: false }
}

/**
 * Given an object which either implements the Iterable protocol or is
 * Array-like, iterate over it, calling the `callback` at each iteration.
 *
 * Use `forEach` where you would expect to use a `for ... of` loop in ES6.
 * However `forEach` adheres to the behavior of [Array#forEach][] described in
 * the ECMAScript specification, skipping over "holes" in Array-likes. It will
 * also delegate to a `forEach` method on `collection` if one is defined,
 * ensuring native performance for `Arrays`.
 *
 * Similar to [Array#forEach][], the `callback` function accepts three
 * arguments, and is provided with `thisArg` as the calling context.
 *
 * Note: providing an infinite Iterator to forEach will produce an error.
 *
 * [Array#forEach]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
 *
 * @example
 *
 * var forEach = require('iterall').forEach
 *
 * forEach(myIterable, function (value, index, iterable) {
 *   console.log(value, index, iterable === myIterable)
 * })
 *
 * @example
 *
 * // ES6:
 * for (let value of myIterable) {
 *   console.log(value)
 * }
 *
 * // Any JavaScript environment:
 * forEach(myIterable, function (value) {
 *   console.log(value)
 * })
 *
 * @template T the type of each iterated value
 * @param {Iterable<T>|{ length: number }} collection
 *   The Iterable or array to iterate over.
 * @param {function(T, number, object)} callback
 *   Function to execute for each iteration, taking up to three arguments
 * @param [thisArg]
 *   Optional. Value to use as `this` when executing `callback`.
 */
function forEach(collection, callback, thisArg) {
  if (collection != null) {
    if (typeof collection.forEach === 'function') {
      return collection.forEach(callback, thisArg)
    }
    var i = 0
    var iterator = getIterator(collection)
    if (iterator) {
      var step
      while (!(step = iterator.next()).done) {
        callback.call(thisArg, step.value, i++, collection)
        // Infinite Iterators could cause forEach to run forever.
        // After a very large number of iterations, produce an error.
        /* istanbul ignore if */
        if (i > 9999999) {
          throw new TypeError('Near-infinite iteration.')
        }
      }
    } else if (isArrayLike(collection)) {
      for (; i < collection.length; i++) {
        if (collection.hasOwnProperty(i)) {
          callback.call(thisArg, collection[i], i, collection)
        }
      }
    }
  }
}
exports.forEach = forEach

/////////////////////////////////////////////////////
//                                                 //
//                 ASYNC ITERATORS                 //
//                                                 //
/////////////////////////////////////////////////////

/**
 * [AsyncIterator](https://tc39.github.io/proposal-async-iteration/)
 * is a *protocol* which describes a standard way to produce and consume an
 * asynchronous sequence of values, typically the values of the AsyncIterable
 * represented by this AsyncIterator.
 *
 * AsyncIterator is similar to Observable or Stream.
 *
 * While described as a proposed addition to the [ES2017 version of JavaScript](https://tc39.github.io/proposal-async-iteration/)
 * it can be utilized by any version of JavaScript.
 *
 * @typedef {Object} AsyncIterator
 * @template T The type of each iterated value
 * @property {function (): Promise<{ value: T, done: boolean }>} next
 *   A method which produces a Promise which resolves to either the next value
 *   in a sequence or a result where the `done` property is `true` indicating
 *   the end of the sequence of values. It may also produce a Promise which
 *   becomes rejected, indicating a failure.
 */

/**
 * AsyncIterable is a *protocol* which when implemented allows a JavaScript
 * object to define their asynchronous iteration behavior, such as what values
 * are looped over in a `for-await-of` loop or `iterall`'s `forAwaitEach`
 * function.
 *
 * While described as a proposed addition to the [ES2017 version of JavaScript](https://tc39.github.io/proposal-async-iteration/)
 * it can be utilized by any version of JavaScript.
 *
 * @typedef {Object} AsyncIterable
 * @template T The type of each iterated value
 * @property {function (): AsyncIterator<T>} Symbol.asyncIterator
 *   A method which produces an AsyncIterator for this AsyncIterable.
 */

// In ES2017 (or a polyfilled) environment, this will be Symbol.asyncIterator
var SYMBOL_ASYNC_ITERATOR = typeof Symbol === 'function' && Symbol.asyncIterator

/**
 * A property name to be used as the name of an AsyncIterable's method
 * responsible for producing an Iterator, referred to as `@@asyncIterator`.
 * Typically represents the value `Symbol.asyncIterator` but falls back to the
 * string `"@@asyncIterator"` when `Symbol.asyncIterator` is not defined.
 *
 * Use `$$asyncIterator` for defining new AsyncIterables instead of
 * `Symbol.asyncIterator`, but do not use it for accessing existing Iterables,
 * instead use `getAsyncIterator()` or `isAsyncIterable()`.
 *
 * @example
 *
 * var $$asyncIterator = require('iterall').$$asyncIterator
 *
 * function Chirper (to) {
 *   this.to = to
 * }
 *
 * Chirper.prototype[$$asyncIterator] = function () {
 *   return {
 *     to: this.to,
 *     num: 0,
 *     next () {
 *       return new Promise(function (resolve) {
 *         if (this.num >= this.to) {
 *           resolve({ value: undefined, done: true })
 *         } else {
 *           setTimeout(function () {
 *             resolve({ value: this.num++, done: false })
 *           }, 1000)
 *         }
 *       }
 *     }
 *   }
 * }
 *
 * var chirper = new Chirper(3)
 * for await (var number of chirper) {
 *   console.log(number) // 0 ...wait... 1 ...wait... 2
 * }
 *
 * @type {Symbol|string}
 */
var $$asyncIterator = SYMBOL_ASYNC_ITERATOR || '@@asyncIterator'
exports.$$asyncIterator = $$asyncIterator

/**
 * Returns true if the provided object implements the AsyncIterator protocol via
 * either implementing a `Symbol.asyncIterator` or `"@@asyncIterator"` method.
 *
 * @example
 *
 * var isAsyncIterable = require('iterall').isAsyncIterable
 * isAsyncIterable(myStream) // true
 * isAsyncIterable('ABC') // false
 *
 * @param obj
 *   A value which might implement the AsyncIterable protocol.
 * @return {boolean} true if AsyncIterable.
 */
function isAsyncIterable(obj) {
  return !!getAsyncIteratorMethod(obj)
}
exports.isAsyncIterable = isAsyncIterable

/**
 * If the provided object implements the AsyncIterator protocol, its
 * AsyncIterator object is returned. Otherwise returns undefined.
 *
 * @example
 *
 * var getAsyncIterator = require('iterall').getAsyncIterator
 * var asyncIterator = getAsyncIterator(myStream)
 * asyncIterator.next().then(console.log) // { value: 1, done: false }
 * asyncIterator.next().then(console.log) // { value: 2, done: false }
 * asyncIterator.next().then(console.log) // { value: 3, done: false }
 * asyncIterator.next().then(console.log) // { value: undefined, done: true }
 *
 * @template T the type of each iterated value
 * @param {AsyncIterable<T>} asyncIterable
 *   An AsyncIterable object which is the source of an AsyncIterator.
 * @return {AsyncIterator<T>} new AsyncIterator instance.
 */
function getAsyncIterator(asyncIterable) {
  var method = getAsyncIteratorMethod(asyncIterable)
  if (method) {
    return method.call(asyncIterable)
  }
}
exports.getAsyncIterator = getAsyncIterator

/**
 * If the provided object implements the AsyncIterator protocol, the method
 * responsible for producing its AsyncIterator object is returned.
 *
 * This is used in rare cases for performance tuning. This method must be called
 * with obj as the contextual this-argument.
 *
 * @example
 *
 * var getAsyncIteratorMethod = require('iterall').getAsyncIteratorMethod
 * var method = getAsyncIteratorMethod(myStream)
 * if (method) {
 *   var asyncIterator = method.call(myStream)
 * }
 *
 * @template T the type of each iterated value
 * @param {AsyncIterable<T>} asyncIterable
 *   An AsyncIterable object which defines an `@@asyncIterator` method.
 * @return {function(): AsyncIterator<T>} `@@asyncIterator` method.
 */
function getAsyncIteratorMethod(asyncIterable) {
  if (asyncIterable != null) {
    var method =
      (SYMBOL_ASYNC_ITERATOR && asyncIterable[SYMBOL_ASYNC_ITERATOR]) ||
      asyncIterable['@@asyncIterator']
    if (typeof method === 'function') {
      return method
    }
  }
}
exports.getAsyncIteratorMethod = getAsyncIteratorMethod

/**
 * Similar to `getAsyncIterator()`, this method returns a new AsyncIterator
 * given an AsyncIterable. However it will also create an AsyncIterator for a
 * non-async Iterable as well as non-Iterable Array-like collection, such as
 * Array in a pre-ES2015 environment.
 *
 * `createAsyncIterator` is complimentary to `forAwaitEach`, but allows a
 * buffering "pull"-based iteration as opposed to `forAwaitEach`'s
 * "push"-based iteration.
 *
 * `createAsyncIterator` produces an AsyncIterator for non-async Iterables as
 * described in the ECMAScript proposal [Async-from-Sync Iterator Objects](https://tc39.github.io/proposal-async-iteration/#sec-async-from-sync-iterator-objects).
 *
 * > Note: Creating `AsyncIterator`s requires the existence of `Promise`.
 * > While `Promise` has been available in modern browsers for a number of
 * > years, legacy browsers (like IE 11) may require a polyfill.
 *
 * @example
 *
 * var createAsyncIterator = require('iterall').createAsyncIterator
 *
 * var myArraylike = { length: 3, 0: 'Alpha', 1: 'Bravo', 2: 'Charlie' }
 * var iterator = createAsyncIterator(myArraylike)
 * iterator.next().then(console.log) // { value: 'Alpha', done: false }
 * iterator.next().then(console.log) // { value: 'Bravo', done: false }
 * iterator.next().then(console.log) // { value: 'Charlie', done: false }
 * iterator.next().then(console.log) // { value: undefined, done: true }
 *
 * @template T the type of each iterated value
 * @param {AsyncIterable<T>|Iterable<T>|{ length: number }} source
 *   An AsyncIterable, Iterable, or Array-like object to produce an Iterator.
 * @return {AsyncIterator<T>} new AsyncIterator instance.
 */
function createAsyncIterator(source) {
  if (source != null) {
    var asyncIterator = getAsyncIterator(source)
    if (asyncIterator) {
      return asyncIterator
    }
    var iterator = createIterator(source)
    if (iterator) {
      return new AsyncFromSyncIterator(iterator)
    }
  }
}
exports.createAsyncIterator = createAsyncIterator

// When the object provided to `createAsyncIterator` is not AsyncIterable but is
// sync Iterable, this simple wrapper is created.
function AsyncFromSyncIterator(iterator) {
  this._i = iterator
}

// Note: all AsyncIterators are themselves AsyncIterable.
AsyncFromSyncIterator.prototype[$$asyncIterator] = function() {
  return this
}

// A simple state-machine determines the IteratorResult returned, yielding
// each value in the Array-like object in order of their indicies.
AsyncFromSyncIterator.prototype.next = function() {
  var step = this._i.next()
  return Promise.resolve(step.value).then(function(value) {
    return { value: value, done: step.done }
  })
}

/**
 * Given an object which either implements the AsyncIterable protocol or is
 * Array-like, iterate over it, calling the `callback` at each iteration.
 *
 * Use `forAwaitEach` where you would expect to use a `for-await-of` loop.
 *
 * Similar to [Array#forEach][], the `callback` function accepts three
 * arguments, and is provided with `thisArg` as the calling context.
 *
 * > Note: Using `forAwaitEach` requires the existence of `Promise`.
 * > While `Promise` has been available in modern browsers for a number of
 * > years, legacy browsers (like IE 11) may require a polyfill.
 *
 * @example
 *
 * var forAwaitEach = require('iterall').forAwaitEach
 *
 * forAwaitEach(myIterable, function (value, index, iterable) {
 *   console.log(value, index, iterable === myIterable)
 * })
 *
 * @example
 *
 * // ES2017:
 * for await (let value of myAsyncIterable) {
 *   console.log(await doSomethingAsync(value))
 * }
 * console.log('done')
 *
 * // Any JavaScript environment:
 * forAwaitEach(myAsyncIterable, function (value) {
 *   return doSomethingAsync(value).then(console.log)
 * }).then(function () {
 *   console.log('done')
 * })
 *
 * @template T the type of each iterated value
 * @param {AsyncIterable<T>|Iterable<Promise<T> | T>|{ length: number }} source
 *   The AsyncIterable or array to iterate over.
 * @param {function(T, number, object)} callback
 *   Function to execute for each iteration, taking up to three arguments
 * @param [thisArg]
 *   Optional. Value to use as `this` when executing `callback`.
 */
function forAwaitEach(source, callback, thisArg) {
  var asyncIterator = createAsyncIterator(source)
  if (asyncIterator) {
    var i = 0
    return new Promise(function(resolve, reject) {
      function next() {
        return asyncIterator
          .next()
          .then(function(step) {
            if (!step.done) {
              Promise.resolve(callback.call(thisArg, step.value, i++, source))
                .then(next)
                .catch(reject)
            } else {
              resolve()
            }
          })
          .catch(reject)
      }
      next()
    })
  }
}
exports.forAwaitEach = forAwaitEach


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = find;
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function find(list, predicate) {
  for (var i = 0; i < list.length; i++) {
    if (predicate(list[i])) {
      return list[i];
    }
  }
}

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = keyMap;


/**
 * Creates a keyed JS object from an array, given a function to produce the keys
 * for each value in the array.
 *
 * This provides a convenient lookup for the array items if the key function
 * produces unique results.
 *
 *     const phoneBook = [
 *       { name: 'Jon', num: '555-1234' },
 *       { name: 'Jenny', num: '867-5309' }
 *     ]
 *
 *     // { Jon: { name: 'Jon', num: '555-1234' },
 *     //   Jenny: { name: 'Jenny', num: '867-5309' } }
 *     const entriesByName = keyMap(
 *       phoneBook,
 *       entry => entry.name
 *     )
 *
 *     // { name: 'Jenny', num: '857-6309' }
 *     const jennyEntry = entriesByName['Jenny']
 *
 */
function keyMap(list, keyFn) {
  return list.reduce(function (map, item) {
    return map[keyFn(item)] = item, map;
  }, Object.create(null));
} /**
   * Copyright (c) 2015-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *
   * 
   */

/***/ }),
/* 15 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.visit = visit;
exports.visitInParallel = visitInParallel;
exports.visitWithTypeInfo = visitWithTypeInfo;
exports.getVisitFn = getVisitFn;
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var QueryDocumentKeys = exports.QueryDocumentKeys = {
  Name: [],

  Document: ['definitions'],
  OperationDefinition: ['name', 'variableDefinitions', 'directives', 'selectionSet'],
  VariableDefinition: ['variable', 'type', 'defaultValue'],
  Variable: ['name'],
  SelectionSet: ['selections'],
  Field: ['alias', 'name', 'arguments', 'directives', 'selectionSet'],
  Argument: ['name', 'value'],

  FragmentSpread: ['name', 'directives'],
  InlineFragment: ['typeCondition', 'directives', 'selectionSet'],
  FragmentDefinition: ['name', 'typeCondition', 'directives', 'selectionSet'],

  IntValue: [],
  FloatValue: [],
  StringValue: [],
  BooleanValue: [],
  NullValue: [],
  EnumValue: [],
  ListValue: ['values'],
  ObjectValue: ['fields'],
  ObjectField: ['name', 'value'],

  Directive: ['name', 'arguments'],

  NamedType: ['name'],
  ListType: ['type'],
  NonNullType: ['type'],

  SchemaDefinition: ['directives', 'operationTypes'],
  OperationTypeDefinition: ['type'],

  ScalarTypeDefinition: ['name', 'directives'],
  ObjectTypeDefinition: ['name', 'interfaces', 'directives', 'fields'],
  FieldDefinition: ['name', 'arguments', 'type', 'directives'],
  InputValueDefinition: ['name', 'type', 'defaultValue', 'directives'],
  InterfaceTypeDefinition: ['name', 'directives', 'fields'],
  UnionTypeDefinition: ['name', 'directives', 'types'],
  EnumTypeDefinition: ['name', 'directives', 'values'],
  EnumValueDefinition: ['name', 'directives'],
  InputObjectTypeDefinition: ['name', 'directives', 'fields'],

  TypeExtensionDefinition: ['definition'],

  DirectiveDefinition: ['name', 'arguments', 'locations']
};

var BREAK = exports.BREAK = {};

/**
 * visit() will walk through an AST using a depth first traversal, calling
 * the visitor's enter function at each node in the traversal, and calling the
 * leave function after visiting that node and all of its child nodes.
 *
 * By returning different values from the enter and leave functions, the
 * behavior of the visitor can be altered, including skipping over a sub-tree of
 * the AST (by returning false), editing the AST by returning a value or null
 * to remove the value, or to stop the whole traversal by returning BREAK.
 *
 * When using visit() to edit an AST, the original AST will not be modified, and
 * a new version of the AST with the changes applied will be returned from the
 * visit function.
 *
 *     const editedAST = visit(ast, {
 *       enter(node, key, parent, path, ancestors) {
 *         // @return
 *         //   undefined: no action
 *         //   false: skip visiting this node
 *         //   visitor.BREAK: stop visiting altogether
 *         //   null: delete this node
 *         //   any value: replace this node with the returned value
 *       },
 *       leave(node, key, parent, path, ancestors) {
 *         // @return
 *         //   undefined: no action
 *         //   false: no action
 *         //   visitor.BREAK: stop visiting altogether
 *         //   null: delete this node
 *         //   any value: replace this node with the returned value
 *       }
 *     });
 *
 * Alternatively to providing enter() and leave() functions, a visitor can
 * instead provide functions named the same as the kinds of AST nodes, or
 * enter/leave visitors at a named key, leading to four permutations of
 * visitor API:
 *
 * 1) Named visitors triggered when entering a node a specific kind.
 *
 *     visit(ast, {
 *       Kind(node) {
 *         // enter the "Kind" node
 *       }
 *     })
 *
 * 2) Named visitors that trigger upon entering and leaving a node of
 *    a specific kind.
 *
 *     visit(ast, {
 *       Kind: {
 *         enter(node) {
 *           // enter the "Kind" node
 *         }
 *         leave(node) {
 *           // leave the "Kind" node
 *         }
 *       }
 *     })
 *
 * 3) Generic visitors that trigger upon entering and leaving any node.
 *
 *     visit(ast, {
 *       enter(node) {
 *         // enter any node
 *       },
 *       leave(node) {
 *         // leave any node
 *       }
 *     })
 *
 * 4) Parallel visitors for entering and leaving nodes of a specific kind.
 *
 *     visit(ast, {
 *       enter: {
 *         Kind(node) {
 *           // enter the "Kind" node
 *         }
 *       },
 *       leave: {
 *         Kind(node) {
 *           // leave the "Kind" node
 *         }
 *       }
 *     })
 */
function visit(root, visitor, keyMap) {
  var visitorKeys = keyMap || QueryDocumentKeys;

  var stack = void 0;
  var inArray = Array.isArray(root);
  var keys = [root];
  var index = -1;
  var edits = [];
  var parent = void 0;
  var path = [];
  var ancestors = [];
  var newRoot = root;

  do {
    index++;
    var isLeaving = index === keys.length;
    var key = void 0;
    var node = void 0;
    var isEdited = isLeaving && edits.length !== 0;
    if (isLeaving) {
      key = ancestors.length === 0 ? undefined : path.pop();
      node = parent;
      parent = ancestors.pop();
      if (isEdited) {
        if (inArray) {
          node = node.slice();
        } else {
          var clone = {};
          for (var k in node) {
            if (node.hasOwnProperty(k)) {
              clone[k] = node[k];
            }
          }
          node = clone;
        }
        var editOffset = 0;
        for (var ii = 0; ii < edits.length; ii++) {
          var editKey = edits[ii][0];
          var editValue = edits[ii][1];
          if (inArray) {
            editKey -= editOffset;
          }
          if (inArray && editValue === null) {
            node.splice(editKey, 1);
            editOffset++;
          } else {
            node[editKey] = editValue;
          }
        }
      }
      index = stack.index;
      keys = stack.keys;
      edits = stack.edits;
      inArray = stack.inArray;
      stack = stack.prev;
    } else {
      key = parent ? inArray ? index : keys[index] : undefined;
      node = parent ? parent[key] : newRoot;
      if (node === null || node === undefined) {
        continue;
      }
      if (parent) {
        path.push(key);
      }
    }

    var result = void 0;
    if (!Array.isArray(node)) {
      if (!isNode(node)) {
        throw new Error('Invalid AST Node: ' + JSON.stringify(node));
      }
      var visitFn = getVisitFn(visitor, node.kind, isLeaving);
      if (visitFn) {
        result = visitFn.call(visitor, node, key, parent, path, ancestors);

        if (result === BREAK) {
          break;
        }

        if (result === false) {
          if (!isLeaving) {
            path.pop();
            continue;
          }
        } else if (result !== undefined) {
          edits.push([key, result]);
          if (!isLeaving) {
            if (isNode(result)) {
              node = result;
            } else {
              path.pop();
              continue;
            }
          }
        }
      }
    }

    if (result === undefined && isEdited) {
      edits.push([key, node]);
    }

    if (!isLeaving) {
      stack = { inArray: inArray, index: index, keys: keys, edits: edits, prev: stack };
      inArray = Array.isArray(node);
      keys = inArray ? node : visitorKeys[node.kind] || [];
      index = -1;
      edits = [];
      if (parent) {
        ancestors.push(parent);
      }
      parent = node;
    }
  } while (stack !== undefined);

  if (edits.length !== 0) {
    newRoot = edits[edits.length - 1][1];
  }

  return newRoot;
}

function isNode(maybeNode) {
  return maybeNode && typeof maybeNode.kind === 'string';
}

/**
 * Creates a new visitor instance which delegates to many visitors to run in
 * parallel. Each visitor will be visited for each node before moving on.
 *
 * If a prior visitor edits a node, no following visitors will see that node.
 */
function visitInParallel(visitors) {
  var skipping = new Array(visitors.length);

  return {
    enter: function enter(node) {
      for (var i = 0; i < visitors.length; i++) {
        if (!skipping[i]) {
          var fn = getVisitFn(visitors[i], node.kind, /* isLeaving */false);
          if (fn) {
            var result = fn.apply(visitors[i], arguments);
            if (result === false) {
              skipping[i] = node;
            } else if (result === BREAK) {
              skipping[i] = BREAK;
            } else if (result !== undefined) {
              return result;
            }
          }
        }
      }
    },
    leave: function leave(node) {
      for (var i = 0; i < visitors.length; i++) {
        if (!skipping[i]) {
          var fn = getVisitFn(visitors[i], node.kind, /* isLeaving */true);
          if (fn) {
            var result = fn.apply(visitors[i], arguments);
            if (result === BREAK) {
              skipping[i] = BREAK;
            } else if (result !== undefined && result !== false) {
              return result;
            }
          }
        } else if (skipping[i] === node) {
          skipping[i] = null;
        }
      }
    }
  };
}

/**
 * Creates a new visitor instance which maintains a provided TypeInfo instance
 * along with visiting visitor.
 */
function visitWithTypeInfo(typeInfo, visitor) {
  return {
    enter: function enter(node) {
      typeInfo.enter(node);
      var fn = getVisitFn(visitor, node.kind, /* isLeaving */false);
      if (fn) {
        var result = fn.apply(visitor, arguments);
        if (result !== undefined) {
          typeInfo.leave(node);
          if (isNode(result)) {
            typeInfo.enter(result);
          }
        }
        return result;
      }
    },
    leave: function leave(node) {
      var fn = getVisitFn(visitor, node.kind, /* isLeaving */true);
      var result = void 0;
      if (fn) {
        result = fn.apply(visitor, arguments);
      }
      typeInfo.leave(node);
      return result;
    }
  };
}

/**
 * Given a visitor instance, if it is leaving or not, and a node kind, return
 * the function the visitor runtime should call.
 */
function getVisitFn(visitor, kind, isLeaving) {
  var kindVisitor = visitor[kind];
  if (kindVisitor) {
    if (!isLeaving && typeof kindVisitor === 'function') {
      // { Kind() {} }
      return kindVisitor;
    }
    var kindSpecificVisitor = isLeaving ? kindVisitor.leave : kindVisitor.enter;
    if (typeof kindSpecificVisitor === 'function') {
      // { Kind: { enter() {}, leave() {} } }
      return kindSpecificVisitor;
    }
  } else {
    var specificVisitor = isLeaving ? visitor.leave : visitor.enter;
    if (specificVisitor) {
      if (typeof specificVisitor === 'function') {
        // { enter() {}, leave() {} }
        return specificVisitor;
      }
      var specificKindVisitor = specificVisitor[kind];
      if (typeof specificKindVisitor === 'function') {
        // { enter: { Kind() {} }, leave: { Kind() {} } }
        return specificKindVisitor;
      }
    }
  }
}

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isInvalid;
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

/**
 * Returns true if a value is undefined, or NaN.
 */
function isInvalid(value) {
  return value === undefined || value !== value;
}

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.valueFromAST = valueFromAST;

var _keyMap = __webpack_require__(14);

var _keyMap2 = _interopRequireDefault(_keyMap);

var _invariant = __webpack_require__(2);

var _invariant2 = _interopRequireDefault(_invariant);

var _isNullish = __webpack_require__(9);

var _isNullish2 = _interopRequireDefault(_isNullish);

var _isInvalid = __webpack_require__(17);

var _isInvalid2 = _interopRequireDefault(_isInvalid);

var _kinds = __webpack_require__(3);

var Kind = _interopRequireWildcard(_kinds);

var _definition = __webpack_require__(1);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Produces a JavaScript value given a GraphQL Value AST.
 *
 * A GraphQL type must be provided, which will be used to interpret different
 * GraphQL Value literals.
 *
 * Returns `undefined` when the value could not be validly coerced according to
 * the provided type.
 *
 * | GraphQL Value        | JSON Value    |
 * | -------------------- | ------------- |
 * | Input Object         | Object        |
 * | List                 | Array         |
 * | Boolean              | Boolean       |
 * | String               | String        |
 * | Int / Float          | Number        |
 * | Enum Value           | Mixed         |
 * | NullValue            | null          |
 *
 */
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function valueFromAST(valueNode, type, variables) {
  if (!valueNode) {
    // When there is no node, then there is also no value.
    // Importantly, this is different from returning the value null.
    return;
  }

  if (type instanceof _definition.GraphQLNonNull) {
    if (valueNode.kind === Kind.NULL) {
      return; // Invalid: intentionally return no value.
    }
    return valueFromAST(valueNode, type.ofType, variables);
  }

  if (valueNode.kind === Kind.NULL) {
    // This is explicitly returning the value null.
    return null;
  }

  if (valueNode.kind === Kind.VARIABLE) {
    var variableName = valueNode.name.value;
    if (!variables || (0, _isInvalid2.default)(variables[variableName])) {
      // No valid return value.
      return;
    }
    // Note: we're not doing any checking that this variable is correct. We're
    // assuming that this query has been validated and the variable usage here
    // is of the correct type.
    return variables[variableName];
  }

  if (type instanceof _definition.GraphQLList) {
    var itemType = type.ofType;
    if (valueNode.kind === Kind.LIST) {
      var coercedValues = [];
      var itemNodes = valueNode.values;
      for (var i = 0; i < itemNodes.length; i++) {
        if (isMissingVariable(itemNodes[i], variables)) {
          // If an array contains a missing variable, it is either coerced to
          // null or if the item type is non-null, it considered invalid.
          if (itemType instanceof _definition.GraphQLNonNull) {
            return; // Invalid: intentionally return no value.
          }
          coercedValues.push(null);
        } else {
          var itemValue = valueFromAST(itemNodes[i], itemType, variables);
          if ((0, _isInvalid2.default)(itemValue)) {
            return; // Invalid: intentionally return no value.
          }
          coercedValues.push(itemValue);
        }
      }
      return coercedValues;
    }
    var coercedValue = valueFromAST(valueNode, itemType, variables);
    if ((0, _isInvalid2.default)(coercedValue)) {
      return; // Invalid: intentionally return no value.
    }
    return [coercedValue];
  }

  if (type instanceof _definition.GraphQLInputObjectType) {
    if (valueNode.kind !== Kind.OBJECT) {
      return; // Invalid: intentionally return no value.
    }
    var coercedObj = Object.create(null);
    var fields = type.getFields();
    var fieldNodes = (0, _keyMap2.default)(valueNode.fields, function (field) {
      return field.name.value;
    });
    var fieldNames = Object.keys(fields);
    for (var _i = 0; _i < fieldNames.length; _i++) {
      var fieldName = fieldNames[_i];
      var field = fields[fieldName];
      var fieldNode = fieldNodes[fieldName];
      if (!fieldNode || isMissingVariable(fieldNode.value, variables)) {
        if (!(0, _isInvalid2.default)(field.defaultValue)) {
          coercedObj[fieldName] = field.defaultValue;
        } else if (field.type instanceof _definition.GraphQLNonNull) {
          return; // Invalid: intentionally return no value.
        }
        continue;
      }
      var fieldValue = valueFromAST(fieldNode.value, field.type, variables);
      if ((0, _isInvalid2.default)(fieldValue)) {
        return; // Invalid: intentionally return no value.
      }
      coercedObj[fieldName] = fieldValue;
    }
    return coercedObj;
  }

  !(type instanceof _definition.GraphQLScalarType || type instanceof _definition.GraphQLEnumType) ? (0, _invariant2.default)(0, 'Must be input type') : void 0;

  var parsed = type.parseLiteral(valueNode);
  if ((0, _isNullish2.default)(parsed) && !type.isValidLiteral(valueNode)) {
    // Invalid values represent a failure to parse correctly, in which case
    // no value is returned.
    return;
  }

  return parsed;
}

// Returns true if the provided valueNode is a variable which is not defined
// in the set of variables.
function isMissingVariable(valueNode, variables) {
  return valueNode.kind === Kind.VARIABLE && (!variables || (0, _isInvalid2.default)(variables[valueNode.name.value]));
}

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			var styleTarget = fn.call(this, selector);
			// Special case to return head of iframe instead of iframe itself
			if (styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[selector] = styleTarget;
		}
		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(76);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parse = parse;
exports.parseValue = parseValue;
exports.parseType = parseType;
exports.parseConstValue = parseConstValue;
exports.parseTypeReference = parseTypeReference;
exports.parseNamedType = parseNamedType;

var _source = __webpack_require__(33);

var _error = __webpack_require__(0);

var _lexer = __webpack_require__(24);

var _kinds = __webpack_require__(3);

/**
 * Given a GraphQL source, parses it into a Document.
 * Throws GraphQLError if a syntax error is encountered.
 */


/**
 * Configuration options to control parser behavior
 */
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function parse(source, options) {
  var sourceObj = typeof source === 'string' ? new _source.Source(source) : source;
  if (!(sourceObj instanceof _source.Source)) {
    throw new TypeError('Must provide Source. Received: ' + String(sourceObj));
  }
  var lexer = (0, _lexer.createLexer)(sourceObj, options || {});
  return parseDocument(lexer);
}

/**
 * Given a string containing a GraphQL value (ex. `[42]`), parse the AST for
 * that value.
 * Throws GraphQLError if a syntax error is encountered.
 *
 * This is useful within tools that operate upon GraphQL Values directly and
 * in isolation of complete GraphQL documents.
 *
 * Consider providing the results to the utility function: valueFromAST().
 */
function parseValue(source, options) {
  var sourceObj = typeof source === 'string' ? new _source.Source(source) : source;
  var lexer = (0, _lexer.createLexer)(sourceObj, options || {});
  expect(lexer, _lexer.TokenKind.SOF);
  var value = parseValueLiteral(lexer, false);
  expect(lexer, _lexer.TokenKind.EOF);
  return value;
}

/**
 * Given a string containing a GraphQL Type (ex. `[Int!]`), parse the AST for
 * that type.
 * Throws GraphQLError if a syntax error is encountered.
 *
 * This is useful within tools that operate upon GraphQL Types directly and
 * in isolation of complete GraphQL documents.
 *
 * Consider providing the results to the utility function: typeFromAST().
 */
function parseType(source, options) {
  var sourceObj = typeof source === 'string' ? new _source.Source(source) : source;
  var lexer = (0, _lexer.createLexer)(sourceObj, options || {});
  expect(lexer, _lexer.TokenKind.SOF);
  var type = parseTypeReference(lexer);
  expect(lexer, _lexer.TokenKind.EOF);
  return type;
}

/**
 * Converts a name lex token into a name parse node.
 */
function parseName(lexer) {
  var token = expect(lexer, _lexer.TokenKind.NAME);
  return {
    kind: _kinds.NAME,
    value: token.value,
    loc: loc(lexer, token)
  };
}

// Implements the parsing rules in the Document section.

/**
 * Document : Definition+
 */
function parseDocument(lexer) {
  var start = lexer.token;
  expect(lexer, _lexer.TokenKind.SOF);
  var definitions = [];
  do {
    definitions.push(parseDefinition(lexer));
  } while (!skip(lexer, _lexer.TokenKind.EOF));

  return {
    kind: _kinds.DOCUMENT,
    definitions: definitions,
    loc: loc(lexer, start)
  };
}

/**
 * Definition :
 *   - OperationDefinition
 *   - FragmentDefinition
 *   - TypeSystemDefinition
 */
function parseDefinition(lexer) {
  if (peek(lexer, _lexer.TokenKind.BRACE_L)) {
    return parseOperationDefinition(lexer);
  }

  if (peek(lexer, _lexer.TokenKind.NAME)) {
    switch (lexer.token.value) {
      // Note: subscription is an experimental non-spec addition.
      case 'query':
      case 'mutation':
      case 'subscription':
        return parseOperationDefinition(lexer);

      case 'fragment':
        return parseFragmentDefinition(lexer);

      // Note: the Type System IDL is an experimental non-spec addition.
      case 'schema':
      case 'scalar':
      case 'type':
      case 'interface':
      case 'union':
      case 'enum':
      case 'input':
      case 'extend':
      case 'directive':
        return parseTypeSystemDefinition(lexer);
    }
  }

  throw unexpected(lexer);
}

// Implements the parsing rules in the Operations section.

/**
 * OperationDefinition :
 *  - SelectionSet
 *  - OperationType Name? VariableDefinitions? Directives? SelectionSet
 */
function parseOperationDefinition(lexer) {
  var start = lexer.token;
  if (peek(lexer, _lexer.TokenKind.BRACE_L)) {
    return {
      kind: _kinds.OPERATION_DEFINITION,
      operation: 'query',
      name: null,
      variableDefinitions: null,
      directives: [],
      selectionSet: parseSelectionSet(lexer),
      loc: loc(lexer, start)
    };
  }
  var operation = parseOperationType(lexer);
  var name = void 0;
  if (peek(lexer, _lexer.TokenKind.NAME)) {
    name = parseName(lexer);
  }
  return {
    kind: _kinds.OPERATION_DEFINITION,
    operation: operation,
    name: name,
    variableDefinitions: parseVariableDefinitions(lexer),
    directives: parseDirectives(lexer),
    selectionSet: parseSelectionSet(lexer),
    loc: loc(lexer, start)
  };
}

/**
 * OperationType : one of query mutation subscription
 */
function parseOperationType(lexer) {
  var operationToken = expect(lexer, _lexer.TokenKind.NAME);
  switch (operationToken.value) {
    case 'query':
      return 'query';
    case 'mutation':
      return 'mutation';
    // Note: subscription is an experimental non-spec addition.
    case 'subscription':
      return 'subscription';
  }

  throw unexpected(lexer, operationToken);
}

/**
 * VariableDefinitions : ( VariableDefinition+ )
 */
function parseVariableDefinitions(lexer) {
  return peek(lexer, _lexer.TokenKind.PAREN_L) ? many(lexer, _lexer.TokenKind.PAREN_L, parseVariableDefinition, _lexer.TokenKind.PAREN_R) : [];
}

/**
 * VariableDefinition : Variable : Type DefaultValue?
 */
function parseVariableDefinition(lexer) {
  var start = lexer.token;
  return {
    kind: _kinds.VARIABLE_DEFINITION,
    variable: parseVariable(lexer),
    type: (expect(lexer, _lexer.TokenKind.COLON), parseTypeReference(lexer)),
    defaultValue: skip(lexer, _lexer.TokenKind.EQUALS) ? parseValueLiteral(lexer, true) : null,
    loc: loc(lexer, start)
  };
}

/**
 * Variable : $ Name
 */
function parseVariable(lexer) {
  var start = lexer.token;
  expect(lexer, _lexer.TokenKind.DOLLAR);
  return {
    kind: _kinds.VARIABLE,
    name: parseName(lexer),
    loc: loc(lexer, start)
  };
}

/**
 * SelectionSet : { Selection+ }
 */
function parseSelectionSet(lexer) {
  var start = lexer.token;
  return {
    kind: _kinds.SELECTION_SET,
    selections: many(lexer, _lexer.TokenKind.BRACE_L, parseSelection, _lexer.TokenKind.BRACE_R),
    loc: loc(lexer, start)
  };
}

/**
 * Selection :
 *   - Field
 *   - FragmentSpread
 *   - InlineFragment
 */
function parseSelection(lexer) {
  return peek(lexer, _lexer.TokenKind.SPREAD) ? parseFragment(lexer) : parseField(lexer);
}

/**
 * Field : Alias? Name Arguments? Directives? SelectionSet?
 *
 * Alias : Name :
 */
function parseField(lexer) {
  var start = lexer.token;

  var nameOrAlias = parseName(lexer);
  var alias = void 0;
  var name = void 0;
  if (skip(lexer, _lexer.TokenKind.COLON)) {
    alias = nameOrAlias;
    name = parseName(lexer);
  } else {
    alias = null;
    name = nameOrAlias;
  }

  return {
    kind: _kinds.FIELD,
    alias: alias,
    name: name,
    arguments: parseArguments(lexer),
    directives: parseDirectives(lexer),
    selectionSet: peek(lexer, _lexer.TokenKind.BRACE_L) ? parseSelectionSet(lexer) : null,
    loc: loc(lexer, start)
  };
}

/**
 * Arguments : ( Argument+ )
 */
function parseArguments(lexer) {
  return peek(lexer, _lexer.TokenKind.PAREN_L) ? many(lexer, _lexer.TokenKind.PAREN_L, parseArgument, _lexer.TokenKind.PAREN_R) : [];
}

/**
 * Argument : Name : Value
 */
function parseArgument(lexer) {
  var start = lexer.token;
  return {
    kind: _kinds.ARGUMENT,
    name: parseName(lexer),
    value: (expect(lexer, _lexer.TokenKind.COLON), parseValueLiteral(lexer, false)),
    loc: loc(lexer, start)
  };
}

// Implements the parsing rules in the Fragments section.

/**
 * Corresponds to both FragmentSpread and InlineFragment in the spec.
 *
 * FragmentSpread : ... FragmentName Directives?
 *
 * InlineFragment : ... TypeCondition? Directives? SelectionSet
 */
function parseFragment(lexer) {
  var start = lexer.token;
  expect(lexer, _lexer.TokenKind.SPREAD);
  if (peek(lexer, _lexer.TokenKind.NAME) && lexer.token.value !== 'on') {
    return {
      kind: _kinds.FRAGMENT_SPREAD,
      name: parseFragmentName(lexer),
      directives: parseDirectives(lexer),
      loc: loc(lexer, start)
    };
  }
  var typeCondition = null;
  if (lexer.token.value === 'on') {
    lexer.advance();
    typeCondition = parseNamedType(lexer);
  }
  return {
    kind: _kinds.INLINE_FRAGMENT,
    typeCondition: typeCondition,
    directives: parseDirectives(lexer),
    selectionSet: parseSelectionSet(lexer),
    loc: loc(lexer, start)
  };
}

/**
 * FragmentDefinition :
 *   - fragment FragmentName on TypeCondition Directives? SelectionSet
 *
 * TypeCondition : NamedType
 */
function parseFragmentDefinition(lexer) {
  var start = lexer.token;
  expectKeyword(lexer, 'fragment');
  return {
    kind: _kinds.FRAGMENT_DEFINITION,
    name: parseFragmentName(lexer),
    typeCondition: (expectKeyword(lexer, 'on'), parseNamedType(lexer)),
    directives: parseDirectives(lexer),
    selectionSet: parseSelectionSet(lexer),
    loc: loc(lexer, start)
  };
}

/**
 * FragmentName : Name but not `on`
 */
function parseFragmentName(lexer) {
  if (lexer.token.value === 'on') {
    throw unexpected(lexer);
  }
  return parseName(lexer);
}

// Implements the parsing rules in the Values section.

/**
 * Value[Const] :
 *   - [~Const] Variable
 *   - IntValue
 *   - FloatValue
 *   - StringValue
 *   - BooleanValue
 *   - NullValue
 *   - EnumValue
 *   - ListValue[?Const]
 *   - ObjectValue[?Const]
 *
 * BooleanValue : one of `true` `false`
 *
 * NullValue : `null`
 *
 * EnumValue : Name but not `true`, `false` or `null`
 */
function parseValueLiteral(lexer, isConst) {
  var token = lexer.token;
  switch (token.kind) {
    case _lexer.TokenKind.BRACKET_L:
      return parseList(lexer, isConst);
    case _lexer.TokenKind.BRACE_L:
      return parseObject(lexer, isConst);
    case _lexer.TokenKind.INT:
      lexer.advance();
      return {
        kind: _kinds.INT,
        value: token.value,
        loc: loc(lexer, token)
      };
    case _lexer.TokenKind.FLOAT:
      lexer.advance();
      return {
        kind: _kinds.FLOAT,
        value: token.value,
        loc: loc(lexer, token)
      };
    case _lexer.TokenKind.STRING:
      lexer.advance();
      return {
        kind: _kinds.STRING,
        value: token.value,
        loc: loc(lexer, token)
      };
    case _lexer.TokenKind.NAME:
      if (token.value === 'true' || token.value === 'false') {
        lexer.advance();
        return {
          kind: _kinds.BOOLEAN,
          value: token.value === 'true',
          loc: loc(lexer, token)
        };
      } else if (token.value === 'null') {
        lexer.advance();
        return {
          kind: _kinds.NULL,
          loc: loc(lexer, token)
        };
      }
      lexer.advance();
      return {
        kind: _kinds.ENUM,
        value: token.value,
        loc: loc(lexer, token)
      };
    case _lexer.TokenKind.DOLLAR:
      if (!isConst) {
        return parseVariable(lexer);
      }
      break;
  }
  throw unexpected(lexer);
}

function parseConstValue(lexer) {
  return parseValueLiteral(lexer, true);
}

function parseValueValue(lexer) {
  return parseValueLiteral(lexer, false);
}

/**
 * ListValue[Const] :
 *   - [ ]
 *   - [ Value[?Const]+ ]
 */
function parseList(lexer, isConst) {
  var start = lexer.token;
  var item = isConst ? parseConstValue : parseValueValue;
  return {
    kind: _kinds.LIST,
    values: any(lexer, _lexer.TokenKind.BRACKET_L, item, _lexer.TokenKind.BRACKET_R),
    loc: loc(lexer, start)
  };
}

/**
 * ObjectValue[Const] :
 *   - { }
 *   - { ObjectField[?Const]+ }
 */
function parseObject(lexer, isConst) {
  var start = lexer.token;
  expect(lexer, _lexer.TokenKind.BRACE_L);
  var fields = [];
  while (!skip(lexer, _lexer.TokenKind.BRACE_R)) {
    fields.push(parseObjectField(lexer, isConst));
  }
  return {
    kind: _kinds.OBJECT,
    fields: fields,
    loc: loc(lexer, start)
  };
}

/**
 * ObjectField[Const] : Name : Value[?Const]
 */
function parseObjectField(lexer, isConst) {
  var start = lexer.token;
  return {
    kind: _kinds.OBJECT_FIELD,
    name: parseName(lexer),
    value: (expect(lexer, _lexer.TokenKind.COLON), parseValueLiteral(lexer, isConst)),
    loc: loc(lexer, start)
  };
}

// Implements the parsing rules in the Directives section.

/**
 * Directives : Directive+
 */
function parseDirectives(lexer) {
  var directives = [];
  while (peek(lexer, _lexer.TokenKind.AT)) {
    directives.push(parseDirective(lexer));
  }
  return directives;
}

/**
 * Directive : @ Name Arguments?
 */
function parseDirective(lexer) {
  var start = lexer.token;
  expect(lexer, _lexer.TokenKind.AT);
  return {
    kind: _kinds.DIRECTIVE,
    name: parseName(lexer),
    arguments: parseArguments(lexer),
    loc: loc(lexer, start)
  };
}

// Implements the parsing rules in the Types section.

/**
 * Type :
 *   - NamedType
 *   - ListType
 *   - NonNullType
 */
function parseTypeReference(lexer) {
  var start = lexer.token;
  var type = void 0;
  if (skip(lexer, _lexer.TokenKind.BRACKET_L)) {
    type = parseTypeReference(lexer);
    expect(lexer, _lexer.TokenKind.BRACKET_R);
    type = {
      kind: _kinds.LIST_TYPE,
      type: type,
      loc: loc(lexer, start)
    };
  } else {
    type = parseNamedType(lexer);
  }
  if (skip(lexer, _lexer.TokenKind.BANG)) {
    return {
      kind: _kinds.NON_NULL_TYPE,
      type: type,
      loc: loc(lexer, start)
    };
  }
  return type;
}

/**
 * NamedType : Name
 */
function parseNamedType(lexer) {
  var start = lexer.token;
  return {
    kind: _kinds.NAMED_TYPE,
    name: parseName(lexer),
    loc: loc(lexer, start)
  };
}

// Implements the parsing rules in the Type Definition section.

/**
 * TypeSystemDefinition :
 *   - SchemaDefinition
 *   - TypeDefinition
 *   - TypeExtensionDefinition
 *   - DirectiveDefinition
 *
 * TypeDefinition :
 *   - ScalarTypeDefinition
 *   - ObjectTypeDefinition
 *   - InterfaceTypeDefinition
 *   - UnionTypeDefinition
 *   - EnumTypeDefinition
 *   - InputObjectTypeDefinition
 */
function parseTypeSystemDefinition(lexer) {
  if (peek(lexer, _lexer.TokenKind.NAME)) {
    switch (lexer.token.value) {
      case 'schema':
        return parseSchemaDefinition(lexer);
      case 'scalar':
        return parseScalarTypeDefinition(lexer);
      case 'type':
        return parseObjectTypeDefinition(lexer);
      case 'interface':
        return parseInterfaceTypeDefinition(lexer);
      case 'union':
        return parseUnionTypeDefinition(lexer);
      case 'enum':
        return parseEnumTypeDefinition(lexer);
      case 'input':
        return parseInputObjectTypeDefinition(lexer);
      case 'extend':
        return parseTypeExtensionDefinition(lexer);
      case 'directive':
        return parseDirectiveDefinition(lexer);
    }
  }

  throw unexpected(lexer);
}

/**
 * SchemaDefinition : schema Directives? { OperationTypeDefinition+ }
 *
 * OperationTypeDefinition : OperationType : NamedType
 */
function parseSchemaDefinition(lexer) {
  var start = lexer.token;
  expectKeyword(lexer, 'schema');
  var directives = parseDirectives(lexer);
  var operationTypes = many(lexer, _lexer.TokenKind.BRACE_L, parseOperationTypeDefinition, _lexer.TokenKind.BRACE_R);
  return {
    kind: _kinds.SCHEMA_DEFINITION,
    directives: directives,
    operationTypes: operationTypes,
    loc: loc(lexer, start)
  };
}

function parseOperationTypeDefinition(lexer) {
  var start = lexer.token;
  var operation = parseOperationType(lexer);
  expect(lexer, _lexer.TokenKind.COLON);
  var type = parseNamedType(lexer);
  return {
    kind: _kinds.OPERATION_TYPE_DEFINITION,
    operation: operation,
    type: type,
    loc: loc(lexer, start)
  };
}

/**
 * ScalarTypeDefinition : scalar Name Directives?
 */
function parseScalarTypeDefinition(lexer) {
  var start = lexer.token;
  expectKeyword(lexer, 'scalar');
  var name = parseName(lexer);
  var directives = parseDirectives(lexer);
  return {
    kind: _kinds.SCALAR_TYPE_DEFINITION,
    name: name,
    directives: directives,
    loc: loc(lexer, start)
  };
}

/**
 * ObjectTypeDefinition :
 *   - type Name ImplementsInterfaces? Directives? { FieldDefinition+ }
 */
function parseObjectTypeDefinition(lexer) {
  var start = lexer.token;
  expectKeyword(lexer, 'type');
  var name = parseName(lexer);
  var interfaces = parseImplementsInterfaces(lexer);
  var directives = parseDirectives(lexer);
  var fields = any(lexer, _lexer.TokenKind.BRACE_L, parseFieldDefinition, _lexer.TokenKind.BRACE_R);
  return {
    kind: _kinds.OBJECT_TYPE_DEFINITION,
    name: name,
    interfaces: interfaces,
    directives: directives,
    fields: fields,
    loc: loc(lexer, start)
  };
}

/**
 * ImplementsInterfaces : implements NamedType+
 */
function parseImplementsInterfaces(lexer) {
  var types = [];
  if (lexer.token.value === 'implements') {
    lexer.advance();
    do {
      types.push(parseNamedType(lexer));
    } while (peek(lexer, _lexer.TokenKind.NAME));
  }
  return types;
}

/**
 * FieldDefinition : Name ArgumentsDefinition? : Type Directives?
 */
function parseFieldDefinition(lexer) {
  var start = lexer.token;
  var name = parseName(lexer);
  var args = parseArgumentDefs(lexer);
  expect(lexer, _lexer.TokenKind.COLON);
  var type = parseTypeReference(lexer);
  var directives = parseDirectives(lexer);
  return {
    kind: _kinds.FIELD_DEFINITION,
    name: name,
    arguments: args,
    type: type,
    directives: directives,
    loc: loc(lexer, start)
  };
}

/**
 * ArgumentsDefinition : ( InputValueDefinition+ )
 */
function parseArgumentDefs(lexer) {
  if (!peek(lexer, _lexer.TokenKind.PAREN_L)) {
    return [];
  }
  return many(lexer, _lexer.TokenKind.PAREN_L, parseInputValueDef, _lexer.TokenKind.PAREN_R);
}

/**
 * InputValueDefinition : Name : Type DefaultValue? Directives?
 */
function parseInputValueDef(lexer) {
  var start = lexer.token;
  var name = parseName(lexer);
  expect(lexer, _lexer.TokenKind.COLON);
  var type = parseTypeReference(lexer);
  var defaultValue = null;
  if (skip(lexer, _lexer.TokenKind.EQUALS)) {
    defaultValue = parseConstValue(lexer);
  }
  var directives = parseDirectives(lexer);
  return {
    kind: _kinds.INPUT_VALUE_DEFINITION,
    name: name,
    type: type,
    defaultValue: defaultValue,
    directives: directives,
    loc: loc(lexer, start)
  };
}

/**
 * InterfaceTypeDefinition : interface Name Directives? { FieldDefinition+ }
 */
function parseInterfaceTypeDefinition(lexer) {
  var start = lexer.token;
  expectKeyword(lexer, 'interface');
  var name = parseName(lexer);
  var directives = parseDirectives(lexer);
  var fields = any(lexer, _lexer.TokenKind.BRACE_L, parseFieldDefinition, _lexer.TokenKind.BRACE_R);
  return {
    kind: _kinds.INTERFACE_TYPE_DEFINITION,
    name: name,
    directives: directives,
    fields: fields,
    loc: loc(lexer, start)
  };
}

/**
 * UnionTypeDefinition : union Name Directives? = UnionMembers
 */
function parseUnionTypeDefinition(lexer) {
  var start = lexer.token;
  expectKeyword(lexer, 'union');
  var name = parseName(lexer);
  var directives = parseDirectives(lexer);
  expect(lexer, _lexer.TokenKind.EQUALS);
  var types = parseUnionMembers(lexer);
  return {
    kind: _kinds.UNION_TYPE_DEFINITION,
    name: name,
    directives: directives,
    types: types,
    loc: loc(lexer, start)
  };
}

/**
 * UnionMembers :
 *   - `|`? NamedType
 *   - UnionMembers | NamedType
 */
function parseUnionMembers(lexer) {
  // Optional leading pipe
  skip(lexer, _lexer.TokenKind.PIPE);
  var members = [];
  do {
    members.push(parseNamedType(lexer));
  } while (skip(lexer, _lexer.TokenKind.PIPE));
  return members;
}

/**
 * EnumTypeDefinition : enum Name Directives? { EnumValueDefinition+ }
 */
function parseEnumTypeDefinition(lexer) {
  var start = lexer.token;
  expectKeyword(lexer, 'enum');
  var name = parseName(lexer);
  var directives = parseDirectives(lexer);
  var values = many(lexer, _lexer.TokenKind.BRACE_L, parseEnumValueDefinition, _lexer.TokenKind.BRACE_R);
  return {
    kind: _kinds.ENUM_TYPE_DEFINITION,
    name: name,
    directives: directives,
    values: values,
    loc: loc(lexer, start)
  };
}

/**
 * EnumValueDefinition : EnumValue Directives?
 *
 * EnumValue : Name
 */
function parseEnumValueDefinition(lexer) {
  var start = lexer.token;
  var name = parseName(lexer);
  var directives = parseDirectives(lexer);
  return {
    kind: _kinds.ENUM_VALUE_DEFINITION,
    name: name,
    directives: directives,
    loc: loc(lexer, start)
  };
}

/**
 * InputObjectTypeDefinition : input Name Directives? { InputValueDefinition+ }
 */
function parseInputObjectTypeDefinition(lexer) {
  var start = lexer.token;
  expectKeyword(lexer, 'input');
  var name = parseName(lexer);
  var directives = parseDirectives(lexer);
  var fields = any(lexer, _lexer.TokenKind.BRACE_L, parseInputValueDef, _lexer.TokenKind.BRACE_R);
  return {
    kind: _kinds.INPUT_OBJECT_TYPE_DEFINITION,
    name: name,
    directives: directives,
    fields: fields,
    loc: loc(lexer, start)
  };
}

/**
 * TypeExtensionDefinition : extend ObjectTypeDefinition
 */
function parseTypeExtensionDefinition(lexer) {
  var start = lexer.token;
  expectKeyword(lexer, 'extend');
  var definition = parseObjectTypeDefinition(lexer);
  return {
    kind: _kinds.TYPE_EXTENSION_DEFINITION,
    definition: definition,
    loc: loc(lexer, start)
  };
}

/**
 * DirectiveDefinition :
 *   - directive @ Name ArgumentsDefinition? on DirectiveLocations
 */
function parseDirectiveDefinition(lexer) {
  var start = lexer.token;
  expectKeyword(lexer, 'directive');
  expect(lexer, _lexer.TokenKind.AT);
  var name = parseName(lexer);
  var args = parseArgumentDefs(lexer);
  expectKeyword(lexer, 'on');
  var locations = parseDirectiveLocations(lexer);
  return {
    kind: _kinds.DIRECTIVE_DEFINITION,
    name: name,
    arguments: args,
    locations: locations,
    loc: loc(lexer, start)
  };
}

/**
 * DirectiveLocations :
 *   - `|`? Name
 *   - DirectiveLocations | Name
 */
function parseDirectiveLocations(lexer) {
  // Optional leading pipe
  skip(lexer, _lexer.TokenKind.PIPE);
  var locations = [];
  do {
    locations.push(parseName(lexer));
  } while (skip(lexer, _lexer.TokenKind.PIPE));
  return locations;
}

// Core parsing utility functions

/**
 * Returns a location object, used to identify the place in
 * the source that created a given parsed object.
 */
function loc(lexer, startToken) {
  if (!lexer.options.noLocation) {
    return new Loc(startToken, lexer.lastToken, lexer.source);
  }
}

function Loc(startToken, endToken, source) {
  this.start = startToken.start;
  this.end = endToken.end;
  this.startToken = startToken;
  this.endToken = endToken;
  this.source = source;
}

// Print a simplified form when appearing in JSON/util.inspect.
Loc.prototype.toJSON = Loc.prototype.inspect = function toJSON() {
  return { start: this.start, end: this.end };
};

/**
 * Determines if the next token is of a given kind
 */
function peek(lexer, kind) {
  return lexer.token.kind === kind;
}

/**
 * If the next token is of the given kind, return true after advancing
 * the lexer. Otherwise, do not change the parser state and return false.
 */
function skip(lexer, kind) {
  var match = lexer.token.kind === kind;
  if (match) {
    lexer.advance();
  }
  return match;
}

/**
 * If the next token is of the given kind, return that token after advancing
 * the lexer. Otherwise, do not change the parser state and throw an error.
 */
function expect(lexer, kind) {
  var token = lexer.token;
  if (token.kind === kind) {
    lexer.advance();
    return token;
  }
  throw (0, _error.syntaxError)(lexer.source, token.start, 'Expected ' + kind + ', found ' + (0, _lexer.getTokenDesc)(token));
}

/**
 * If the next token is a keyword with the given value, return that token after
 * advancing the lexer. Otherwise, do not change the parser state and return
 * false.
 */
function expectKeyword(lexer, value) {
  var token = lexer.token;
  if (token.kind === _lexer.TokenKind.NAME && token.value === value) {
    lexer.advance();
    return token;
  }
  throw (0, _error.syntaxError)(lexer.source, token.start, 'Expected "' + value + '", found ' + (0, _lexer.getTokenDesc)(token));
}

/**
 * Helper function for creating an error when an unexpected lexed token
 * is encountered.
 */
function unexpected(lexer, atToken) {
  var token = atToken || lexer.token;
  return (0, _error.syntaxError)(lexer.source, token.start, 'Unexpected ' + (0, _lexer.getTokenDesc)(token));
}

/**
 * Returns a possibly empty list of parse nodes, determined by
 * the parseFn. This list begins with a lex token of openKind
 * and ends with a lex token of closeKind. Advances the parser
 * to the next lex token after the closing token.
 */
function any(lexer, openKind, parseFn, closeKind) {
  expect(lexer, openKind);
  var nodes = [];
  while (!skip(lexer, closeKind)) {
    nodes.push(parseFn(lexer));
  }
  return nodes;
}

/**
 * Returns a non-empty list of parse nodes, determined by
 * the parseFn. This list begins with a lex token of openKind
 * and ends with a lex token of closeKind. Advances the parser
 * to the next lex token after the closing token.
 */
function many(lexer, openKind, parseFn, closeKind) {
  expect(lexer, openKind);
  var nodes = [parseFn(lexer)];
  while (!skip(lexer, closeKind)) {
    nodes.push(parseFn(lexer));
  }
  return nodes;
}

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isEqualType = isEqualType;
exports.isTypeSubTypeOf = isTypeSubTypeOf;
exports.doTypesOverlap = doTypesOverlap;

var _definition = __webpack_require__(1);

/**
 * Provided two types, return true if the types are equal (invariant).
 */
function isEqualType(typeA, typeB) {
  // Equivalent types are equal.
  if (typeA === typeB) {
    return true;
  }

  // If either type is non-null, the other must also be non-null.
  if (typeA instanceof _definition.GraphQLNonNull && typeB instanceof _definition.GraphQLNonNull) {
    return isEqualType(typeA.ofType, typeB.ofType);
  }

  // If either type is a list, the other must also be a list.
  if (typeA instanceof _definition.GraphQLList && typeB instanceof _definition.GraphQLList) {
    return isEqualType(typeA.ofType, typeB.ofType);
  }

  // Otherwise the types are not equal.
  return false;
}

/**
 * Provided a type and a super type, return true if the first type is either
 * equal or a subset of the second super type (covariant).
 */
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function isTypeSubTypeOf(schema, maybeSubType, superType) {
  // Equivalent type is a valid subtype
  if (maybeSubType === superType) {
    return true;
  }

  // If superType is non-null, maybeSubType must also be non-null.
  if (superType instanceof _definition.GraphQLNonNull) {
    if (maybeSubType instanceof _definition.GraphQLNonNull) {
      return isTypeSubTypeOf(schema, maybeSubType.ofType, superType.ofType);
    }
    return false;
  } else if (maybeSubType instanceof _definition.GraphQLNonNull) {
    // If superType is nullable, maybeSubType may be non-null or nullable.
    return isTypeSubTypeOf(schema, maybeSubType.ofType, superType);
  }

  // If superType type is a list, maybeSubType type must also be a list.
  if (superType instanceof _definition.GraphQLList) {
    if (maybeSubType instanceof _definition.GraphQLList) {
      return isTypeSubTypeOf(schema, maybeSubType.ofType, superType.ofType);
    }
    return false;
  } else if (maybeSubType instanceof _definition.GraphQLList) {
    // If superType is not a list, maybeSubType must also be not a list.
    return false;
  }

  // If superType type is an abstract type, maybeSubType type may be a currently
  // possible object type.
  if ((0, _definition.isAbstractType)(superType) && maybeSubType instanceof _definition.GraphQLObjectType && schema.isPossibleType(superType, maybeSubType)) {
    return true;
  }

  // Otherwise, the child type is not a valid subtype of the parent type.
  return false;
}

/**
 * Provided two composite types, determine if they "overlap". Two composite
 * types overlap when the Sets of possible concrete types for each intersect.
 *
 * This is often used to determine if a fragment of a given type could possibly
 * be visited in a context of another type.
 *
 * This function is commutative.
 */
function doTypesOverlap(schema, typeA, typeB) {
  // So flow is aware this is constant
  var _typeB = typeB;

  // Equivalent types overlap
  if (typeA === _typeB) {
    return true;
  }

  if ((0, _definition.isAbstractType)(typeA)) {
    if ((0, _definition.isAbstractType)(_typeB)) {
      // If both types are abstract, then determine if there is any intersection
      // between possible concrete types of each.
      return schema.getPossibleTypes(typeA).some(function (type) {
        return schema.isPossibleType(_typeB, type);
      });
    }
    // Determine if the latter type is a possible concrete type of the former.
    return schema.isPossibleType(typeA, _typeB);
  }

  if ((0, _definition.isAbstractType)(_typeB)) {
    // Determine if the former type is a possible concrete type of the latter.
    return schema.isPossibleType(_typeB, typeA);
  }

  // Otherwise the types do not overlap.
  return false;
}

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isValidLiteralValue = isValidLiteralValue;

var _printer = __webpack_require__(4);

var _kinds = __webpack_require__(3);

var Kind = _interopRequireWildcard(_kinds);

var _definition = __webpack_require__(1);

var _invariant = __webpack_require__(2);

var _invariant2 = _interopRequireDefault(_invariant);

var _keyMap = __webpack_require__(14);

var _keyMap2 = _interopRequireDefault(_keyMap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * Utility for validators which determines if a value literal node is valid
 * given an input type.
 *
 * Note that this only validates literal values, variables are assumed to
 * provide values of the correct type.
 */
function isValidLiteralValue(type, valueNode) {
  // A value must be provided if the type is non-null.
  if (type instanceof _definition.GraphQLNonNull) {
    if (!valueNode || valueNode.kind === Kind.NULL) {
      return ['Expected "' + String(type) + '", found null.'];
    }
    return isValidLiteralValue(type.ofType, valueNode);
  }

  if (!valueNode || valueNode.kind === Kind.NULL) {
    return [];
  }

  // This function only tests literals, and assumes variables will provide
  // values of the correct type.
  if (valueNode.kind === Kind.VARIABLE) {
    return [];
  }

  // Lists accept a non-list value as a list of one.
  if (type instanceof _definition.GraphQLList) {
    var itemType = type.ofType;
    if (valueNode.kind === Kind.LIST) {
      return valueNode.values.reduce(function (acc, item, index) {
        var errors = isValidLiteralValue(itemType, item);
        return acc.concat(errors.map(function (error) {
          return 'In element #' + index + ': ' + error;
        }));
      }, []);
    }
    return isValidLiteralValue(itemType, valueNode);
  }

  // Input objects check each defined field and look for undefined fields.
  if (type instanceof _definition.GraphQLInputObjectType) {
    if (valueNode.kind !== Kind.OBJECT) {
      return ['Expected "' + type.name + '", found not an object.'];
    }
    var fields = type.getFields();

    var errors = [];

    // Ensure every provided field is defined.
    var fieldNodes = valueNode.fields;
    fieldNodes.forEach(function (providedFieldNode) {
      if (!fields[providedFieldNode.name.value]) {
        errors.push('In field "' + providedFieldNode.name.value + '": Unknown field.');
      }
    });

    // Ensure every defined field is valid.
    var fieldNodeMap = (0, _keyMap2.default)(fieldNodes, function (fieldNode) {
      return fieldNode.name.value;
    });
    Object.keys(fields).forEach(function (fieldName) {
      var result = isValidLiteralValue(fields[fieldName].type, fieldNodeMap[fieldName] && fieldNodeMap[fieldName].value);
      errors.push.apply(errors, result.map(function (error) {
        return 'In field "' + fieldName + '": ' + error;
      }));
    });

    return errors;
  }

  !(type instanceof _definition.GraphQLScalarType || type instanceof _definition.GraphQLEnumType) ? (0, _invariant2.default)(0, 'Must be input type') : void 0;

  // Scalars determine if a literal values is valid.
  if (!type.isValidLiteral(valueNode)) {
    return ['Expected type "' + type.name + '", found ' + (0, _printer.print)(valueNode) + '.'];
  }

  return [];
} /**
   * Copyright (c) 2015-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *
   * 
   */

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLocation = getLocation;


/**
 * Takes a Source and a UTF-8 character offset, and returns the corresponding
 * line and column as a SourceLocation.
 */
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function getLocation(source, position) {
  var lineRegexp = /\r\n|[\n\r]/g;
  var line = 1;
  var column = position + 1;
  var match = void 0;
  while ((match = lineRegexp.exec(source.body)) && match.index < position) {
    line += 1;
    column = position + 1 - (match.index + match[0].length);
  }
  return { line: line, column: column };
}

/**
 * Represents a location in a Source.
 */

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TokenKind = undefined;
exports.createLexer = createLexer;
exports.getTokenDesc = getTokenDesc;

var _error = __webpack_require__(0);

/**
 * Given a Source object, this returns a Lexer for that source.
 * A Lexer is a stateful stream generator in that every time
 * it is advanced, it returns the next token in the Source. Assuming the
 * source lexes, the final Token emitted by the lexer will be of kind
 * EOF, after which the lexer will repeatedly return the same EOF token
 * whenever called.
 */
function createLexer(source, options) {
  var startOfFileToken = new Tok(SOF, 0, 0, 0, 0, null);
  var lexer = {
    source: source,
    options: options,
    lastToken: startOfFileToken,
    token: startOfFileToken,
    line: 1,
    lineStart: 0,
    advance: advanceLexer
  };
  return lexer;
} /**
   * Copyright (c) 2015-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *
   * 
   */

function advanceLexer() {
  var token = this.lastToken = this.token;
  if (token.kind !== EOF) {
    do {
      token = token.next = readToken(this, token);
    } while (token.kind === COMMENT);
    this.token = token;
  }
  return token;
}

/**
 * The return type of createLexer.
 */


// Each kind of token.
var SOF = '<SOF>';
var EOF = '<EOF>';
var BANG = '!';
var DOLLAR = '$';
var PAREN_L = '(';
var PAREN_R = ')';
var SPREAD = '...';
var COLON = ':';
var EQUALS = '=';
var AT = '@';
var BRACKET_L = '[';
var BRACKET_R = ']';
var BRACE_L = '{';
var PIPE = '|';
var BRACE_R = '}';
var NAME = 'Name';
var INT = 'Int';
var FLOAT = 'Float';
var STRING = 'String';
var COMMENT = 'Comment';

/**
 * An exported enum describing the different kinds of tokens that the
 * lexer emits.
 */
var TokenKind = exports.TokenKind = {
  SOF: SOF,
  EOF: EOF,
  BANG: BANG,
  DOLLAR: DOLLAR,
  PAREN_L: PAREN_L,
  PAREN_R: PAREN_R,
  SPREAD: SPREAD,
  COLON: COLON,
  EQUALS: EQUALS,
  AT: AT,
  BRACKET_L: BRACKET_L,
  BRACKET_R: BRACKET_R,
  BRACE_L: BRACE_L,
  PIPE: PIPE,
  BRACE_R: BRACE_R,
  NAME: NAME,
  INT: INT,
  FLOAT: FLOAT,
  STRING: STRING,
  COMMENT: COMMENT
};

/**
 * A helper function to describe a token as a string for debugging
 */
function getTokenDesc(token) {
  var value = token.value;
  return value ? token.kind + ' "' + value + '"' : token.kind;
}

var charCodeAt = String.prototype.charCodeAt;
var slice = String.prototype.slice;

/**
 * Helper function for constructing the Token object.
 */
function Tok(kind, start, end, line, column, prev, value) {
  this.kind = kind;
  this.start = start;
  this.end = end;
  this.line = line;
  this.column = column;
  this.value = value;
  this.prev = prev;
  this.next = null;
}

// Print a simplified form when appearing in JSON/util.inspect.
Tok.prototype.toJSON = Tok.prototype.inspect = function toJSON() {
  return {
    kind: this.kind,
    value: this.value,
    line: this.line,
    column: this.column
  };
};

function printCharCode(code) {
  return (
    // NaN/undefined represents access beyond the end of the file.
    isNaN(code) ? EOF :
    // Trust JSON for ASCII.
    code < 0x007F ? JSON.stringify(String.fromCharCode(code)) :
    // Otherwise print the escaped form.
    '"\\u' + ('00' + code.toString(16).toUpperCase()).slice(-4) + '"'
  );
}

/**
 * Gets the next token from the source starting at the given position.
 *
 * This skips over whitespace and comments until it finds the next lexable
 * token, then lexes punctuators immediately or calls the appropriate helper
 * function for more complicated tokens.
 */
function readToken(lexer, prev) {
  var source = lexer.source;
  var body = source.body;
  var bodyLength = body.length;

  var position = positionAfterWhitespace(body, prev.end, lexer);
  var line = lexer.line;
  var col = 1 + position - lexer.lineStart;

  if (position >= bodyLength) {
    return new Tok(EOF, bodyLength, bodyLength, line, col, prev);
  }

  var code = charCodeAt.call(body, position);

  // SourceCharacter
  if (code < 0x0020 && code !== 0x0009 && code !== 0x000A && code !== 0x000D) {
    throw (0, _error.syntaxError)(source, position, 'Cannot contain the invalid character ' + printCharCode(code) + '.');
  }

  switch (code) {
    // !
    case 33:
      return new Tok(BANG, position, position + 1, line, col, prev);
    // #
    case 35:
      return readComment(source, position, line, col, prev);
    // $
    case 36:
      return new Tok(DOLLAR, position, position + 1, line, col, prev);
    // (
    case 40:
      return new Tok(PAREN_L, position, position + 1, line, col, prev);
    // )
    case 41:
      return new Tok(PAREN_R, position, position + 1, line, col, prev);
    // .
    case 46:
      if (charCodeAt.call(body, position + 1) === 46 && charCodeAt.call(body, position + 2) === 46) {
        return new Tok(SPREAD, position, position + 3, line, col, prev);
      }
      break;
    // :
    case 58:
      return new Tok(COLON, position, position + 1, line, col, prev);
    // =
    case 61:
      return new Tok(EQUALS, position, position + 1, line, col, prev);
    // @
    case 64:
      return new Tok(AT, position, position + 1, line, col, prev);
    // [
    case 91:
      return new Tok(BRACKET_L, position, position + 1, line, col, prev);
    // ]
    case 93:
      return new Tok(BRACKET_R, position, position + 1, line, col, prev);
    // {
    case 123:
      return new Tok(BRACE_L, position, position + 1, line, col, prev);
    // |
    case 124:
      return new Tok(PIPE, position, position + 1, line, col, prev);
    // }
    case 125:
      return new Tok(BRACE_R, position, position + 1, line, col, prev);
    // A-Z _ a-z
    case 65:case 66:case 67:case 68:case 69:case 70:case 71:case 72:
    case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 80:
    case 81:case 82:case 83:case 84:case 85:case 86:case 87:case 88:
    case 89:case 90:
    case 95:
    case 97:case 98:case 99:case 100:case 101:case 102:case 103:case 104:
    case 105:case 106:case 107:case 108:case 109:case 110:case 111:
    case 112:case 113:case 114:case 115:case 116:case 117:case 118:
    case 119:case 120:case 121:case 122:
      return readName(source, position, line, col, prev);
    // - 0-9
    case 45:
    case 48:case 49:case 50:case 51:case 52:
    case 53:case 54:case 55:case 56:case 57:
      return readNumber(source, position, code, line, col, prev);
    // "
    case 34:
      return readString(source, position, line, col, prev);
  }

  throw (0, _error.syntaxError)(source, position, unexpectedCharacterMessage(code));
}

/**
 * Report a message that an unexpected character was encountered.
 */
function unexpectedCharacterMessage(code) {
  if (code === 39) {
    // '
    return 'Unexpected single quote character (\'), did you mean to use ' + 'a double quote (")?';
  }

  return 'Cannot parse the unexpected character ' + printCharCode(code) + '.';
}

/**
 * Reads from body starting at startPosition until it finds a non-whitespace
 * or commented character, then returns the position of that character for
 * lexing.
 */
function positionAfterWhitespace(body, startPosition, lexer) {
  var bodyLength = body.length;
  var position = startPosition;
  while (position < bodyLength) {
    var code = charCodeAt.call(body, position);
    // tab | space | comma | BOM
    if (code === 9 || code === 32 || code === 44 || code === 0xFEFF) {
      ++position;
    } else if (code === 10) {
      // new line
      ++position;
      ++lexer.line;
      lexer.lineStart = position;
    } else if (code === 13) {
      // carriage return
      if (charCodeAt.call(body, position + 1) === 10) {
        position += 2;
      } else {
        ++position;
      }
      ++lexer.line;
      lexer.lineStart = position;
    } else {
      break;
    }
  }
  return position;
}

/**
 * Reads a comment token from the source file.
 *
 * #[\u0009\u0020-\uFFFF]*
 */
function readComment(source, start, line, col, prev) {
  var body = source.body;
  var code = void 0;
  var position = start;

  do {
    code = charCodeAt.call(body, ++position);
  } while (code !== null && (
  // SourceCharacter but not LineTerminator
  code > 0x001F || code === 0x0009));

  return new Tok(COMMENT, start, position, line, col, prev, slice.call(body, start + 1, position));
}

/**
 * Reads a number token from the source file, either a float
 * or an int depending on whether a decimal point appears.
 *
 * Int:   -?(0|[1-9][0-9]*)
 * Float: -?(0|[1-9][0-9]*)(\.[0-9]+)?((E|e)(+|-)?[0-9]+)?
 */
function readNumber(source, start, firstCode, line, col, prev) {
  var body = source.body;
  var code = firstCode;
  var position = start;
  var isFloat = false;

  if (code === 45) {
    // -
    code = charCodeAt.call(body, ++position);
  }

  if (code === 48) {
    // 0
    code = charCodeAt.call(body, ++position);
    if (code >= 48 && code <= 57) {
      throw (0, _error.syntaxError)(source, position, 'Invalid number, unexpected digit after 0: ' + printCharCode(code) + '.');
    }
  } else {
    position = readDigits(source, position, code);
    code = charCodeAt.call(body, position);
  }

  if (code === 46) {
    // .
    isFloat = true;

    code = charCodeAt.call(body, ++position);
    position = readDigits(source, position, code);
    code = charCodeAt.call(body, position);
  }

  if (code === 69 || code === 101) {
    // E e
    isFloat = true;

    code = charCodeAt.call(body, ++position);
    if (code === 43 || code === 45) {
      // + -
      code = charCodeAt.call(body, ++position);
    }
    position = readDigits(source, position, code);
  }

  return new Tok(isFloat ? FLOAT : INT, start, position, line, col, prev, slice.call(body, start, position));
}

/**
 * Returns the new position in the source after reading digits.
 */
function readDigits(source, start, firstCode) {
  var body = source.body;
  var position = start;
  var code = firstCode;
  if (code >= 48 && code <= 57) {
    // 0 - 9
    do {
      code = charCodeAt.call(body, ++position);
    } while (code >= 48 && code <= 57); // 0 - 9
    return position;
  }
  throw (0, _error.syntaxError)(source, position, 'Invalid number, expected digit but got: ' + printCharCode(code) + '.');
}

/**
 * Reads a string token from the source file.
 *
 * "([^"\\\u000A\u000D]|(\\(u[0-9a-fA-F]{4}|["\\/bfnrt])))*"
 */
function readString(source, start, line, col, prev) {
  var body = source.body;
  var position = start + 1;
  var chunkStart = position;
  var code = 0;
  var value = '';

  while (position < body.length && (code = charCodeAt.call(body, position)) !== null &&
  // not LineTerminator
  code !== 0x000A && code !== 0x000D &&
  // not Quote (")
  code !== 34) {
    // SourceCharacter
    if (code < 0x0020 && code !== 0x0009) {
      throw (0, _error.syntaxError)(source, position, 'Invalid character within String: ' + printCharCode(code) + '.');
    }

    ++position;
    if (code === 92) {
      // \
      value += slice.call(body, chunkStart, position - 1);
      code = charCodeAt.call(body, position);
      switch (code) {
        case 34:
          value += '"';break;
        case 47:
          value += '/';break;
        case 92:
          value += '\\';break;
        case 98:
          value += '\b';break;
        case 102:
          value += '\f';break;
        case 110:
          value += '\n';break;
        case 114:
          value += '\r';break;
        case 116:
          value += '\t';break;
        case 117:
          // u
          var charCode = uniCharCode(charCodeAt.call(body, position + 1), charCodeAt.call(body, position + 2), charCodeAt.call(body, position + 3), charCodeAt.call(body, position + 4));
          if (charCode < 0) {
            throw (0, _error.syntaxError)(source, position, 'Invalid character escape sequence: ' + ('\\u' + body.slice(position + 1, position + 5) + '.'));
          }
          value += String.fromCharCode(charCode);
          position += 4;
          break;
        default:
          throw (0, _error.syntaxError)(source, position, 'Invalid character escape sequence: \\' + String.fromCharCode(code) + '.');
      }
      ++position;
      chunkStart = position;
    }
  }

  if (code !== 34) {
    // quote (")
    throw (0, _error.syntaxError)(source, position, 'Unterminated string.');
  }

  value += slice.call(body, chunkStart, position);
  return new Tok(STRING, start, position + 1, line, col, prev, value);
}

/**
 * Converts four hexidecimal chars to the integer that the
 * string represents. For example, uniCharCode('0','0','0','f')
 * will return 15, and uniCharCode('0','0','f','f') returns 255.
 *
 * Returns a negative number on error, if a char was invalid.
 *
 * This is implemented by noting that char2hex() returns -1 on error,
 * which means the result of ORing the char2hex() will also be negative.
 */
function uniCharCode(a, b, c, d) {
  return char2hex(a) << 12 | char2hex(b) << 8 | char2hex(c) << 4 | char2hex(d);
}

/**
 * Converts a hex character to its integer value.
 * '0' becomes 0, '9' becomes 9
 * 'A' becomes 10, 'F' becomes 15
 * 'a' becomes 10, 'f' becomes 15
 *
 * Returns -1 on error.
 */
function char2hex(a) {
  return a >= 48 && a <= 57 ? a - 48 : // 0-9
  a >= 65 && a <= 70 ? a - 55 : // A-F
  a >= 97 && a <= 102 ? a - 87 : // a-f
  -1;
}

/**
 * Reads an alphanumeric + underscore name from the source.
 *
 * [_A-Za-z][_0-9A-Za-z]*
 */
function readName(source, position, line, col, prev) {
  var body = source.body;
  var bodyLength = body.length;
  var end = position + 1;
  var code = 0;
  while (end !== bodyLength && (code = charCodeAt.call(body, end)) !== null && (code === 95 || // _
  code >= 48 && code <= 57 || // 0-9
  code >= 65 && code <= 90 || // A-Z
  code >= 97 && code <= 122 // a-z
  )) {
    ++end;
  }
  return new Tok(NAME, position, end, line, col, prev, slice.call(body, position, end));
}

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.assertValidName = assertValidName;
exports.formatWarning = formatWarning;
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

var NAME_RX = /^[_a-zA-Z][_a-zA-Z0-9]*$/;
var ERROR_PREFIX_RX = /^Error: /;

// Silences warnings if an environment flag is enabled
var noNameWarning = Boolean(process && process.env && process.env.GRAPHQL_NO_NAME_WARNING);

// Ensures console warnings are only issued once.
var hasWarnedAboutDunder = false;

/**
 * Upholds the spec rules about naming.
 */
function assertValidName(name, isIntrospection) {
  if (!name || typeof name !== 'string') {
    throw new Error('Must be named. Unexpected name: ' + name + '.');
  }
  if (!isIntrospection && !hasWarnedAboutDunder && !noNameWarning && name.slice(0, 2) === '__') {
    hasWarnedAboutDunder = true;
    /* eslint-disable no-console */
    if (console && console.warn) {
      var error = new Error('Name "' + name + '" must not begin with "__", which is reserved by ' + 'GraphQL introspection. In a future release of graphql this will ' + 'become a hard error.');
      console.warn(formatWarning(error));
    }
    /* eslint-enable no-console */
  }
  if (!NAME_RX.test(name)) {
    throw new Error('Names must match /^[_a-zA-Z][_a-zA-Z0-9]*$/ but "' + name + '" does not.');
  }
}

/**
 * Returns a human-readable warning based an the supplied Error object,
 * including stack trace information if available.
 */
function formatWarning(error) {
  var formatted = '';
  var errorString = String(error).replace(ERROR_PREFIX_RX, '');
  var stack = error.stack;
  if (stack) {
    formatted = stack.replace(ERROR_PREFIX_RX, '');
  }
  if (formatted.indexOf(errorString) === -1) {
    formatted = errorString + '\n' + formatted;
  }
  return formatted.trim();
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(82)))

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /**
                                                                                                                                                                                                                                                                               * Copyright (c) 2015-present, Facebook, Inc.
                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                               * This source code is licensed under the MIT license found in the
                                                                                                                                                                                                                                                                               * LICENSE file in the root directory of this source tree.
                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                               * 
                                                                                                                                                                                                                                                                               */

exports.astFromValue = astFromValue;

var _iterall = __webpack_require__(12);

var _invariant = __webpack_require__(2);

var _invariant2 = _interopRequireDefault(_invariant);

var _isNullish = __webpack_require__(9);

var _isNullish2 = _interopRequireDefault(_isNullish);

var _isInvalid = __webpack_require__(17);

var _isInvalid2 = _interopRequireDefault(_isInvalid);

var _kinds = __webpack_require__(3);

var Kind = _interopRequireWildcard(_kinds);

var _definition = __webpack_require__(1);

var _scalars = __webpack_require__(8);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Produces a GraphQL Value AST given a JavaScript value.
 *
 * A GraphQL type must be provided, which will be used to interpret different
 * JavaScript values.
 *
 * | JSON Value    | GraphQL Value        |
 * | ------------- | -------------------- |
 * | Object        | Input Object         |
 * | Array         | List                 |
 * | Boolean       | Boolean              |
 * | String        | String / Enum Value  |
 * | Number        | Int / Float          |
 * | Mixed         | Enum Value           |
 * | null          | NullValue            |
 *
 */
function astFromValue(value, type) {
  // Ensure flow knows that we treat function params as const.
  var _value = value;

  if (type instanceof _definition.GraphQLNonNull) {
    var astValue = astFromValue(_value, type.ofType);
    if (astValue && astValue.kind === Kind.NULL) {
      return null;
    }
    return astValue;
  }

  // only explicit null, not undefined, NaN
  if (_value === null) {
    return { kind: Kind.NULL };
  }

  // undefined, NaN
  if ((0, _isInvalid2.default)(_value)) {
    return null;
  }

  // Convert JavaScript array to GraphQL list. If the GraphQLType is a list, but
  // the value is not an array, convert the value using the list's item type.
  if (type instanceof _definition.GraphQLList) {
    var itemType = type.ofType;
    if ((0, _iterall.isCollection)(_value)) {
      var valuesNodes = [];
      (0, _iterall.forEach)(_value, function (item) {
        var itemNode = astFromValue(item, itemType);
        if (itemNode) {
          valuesNodes.push(itemNode);
        }
      });
      return { kind: Kind.LIST, values: valuesNodes };
    }
    return astFromValue(_value, itemType);
  }

  // Populate the fields of the input object by creating ASTs from each value
  // in the JavaScript object according to the fields in the input type.
  if (type instanceof _definition.GraphQLInputObjectType) {
    if (_value === null || (typeof _value === 'undefined' ? 'undefined' : _typeof(_value)) !== 'object') {
      return null;
    }
    var fields = type.getFields();
    var fieldNodes = [];
    Object.keys(fields).forEach(function (fieldName) {
      var fieldType = fields[fieldName].type;
      var fieldValue = astFromValue(_value[fieldName], fieldType);
      if (fieldValue) {
        fieldNodes.push({
          kind: Kind.OBJECT_FIELD,
          name: { kind: Kind.NAME, value: fieldName },
          value: fieldValue
        });
      }
    });
    return { kind: Kind.OBJECT, fields: fieldNodes };
  }

  !(type instanceof _definition.GraphQLScalarType || type instanceof _definition.GraphQLEnumType) ? (0, _invariant2.default)(0, 'Must provide Input Type, cannot use: ' + String(type)) : void 0;

  // Since value is an internally represented value, it must be serialized
  // to an externally represented value before converting into an AST.
  var serialized = type.serialize(_value);
  if ((0, _isNullish2.default)(serialized)) {
    return null;
  }

  // Others serialize based on their corresponding JavaScript scalar types.
  if (typeof serialized === 'boolean') {
    return { kind: Kind.BOOLEAN, value: serialized };
  }

  // JavaScript numbers can be Int or Float values.
  if (typeof serialized === 'number') {
    var stringNum = String(serialized);
    return (/^[0-9]+$/.test(stringNum) ? { kind: Kind.INT, value: stringNum } : { kind: Kind.FLOAT, value: stringNum }
    );
  }

  if (typeof serialized === 'string') {
    // Enum types use Enum literals.
    if (type instanceof _definition.GraphQLEnumType) {
      return { kind: Kind.ENUM, value: serialized };
    }

    // ID types can use Int literals.
    if (type === _scalars.GraphQLID && /^[0-9]+$/.test(serialized)) {
      return { kind: Kind.INT, value: serialized };
    }

    // Use JSON stringify, which uses the same string encoding as GraphQL,
    // then remove the quotes.
    return {
      kind: Kind.STRING,
      value: JSON.stringify(serialized).slice(1, -1)
    };
  }

  throw new TypeError('Cannot convert value to AST: ' + String(serialized));
}

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TypeInfo = undefined;

var _kinds = __webpack_require__(3);

var Kind = _interopRequireWildcard(_kinds);

var _definition = __webpack_require__(1);

var _introspection = __webpack_require__(10);

var _typeFromAST = __webpack_require__(7);

var _find = __webpack_require__(13);

var _find2 = _interopRequireDefault(_find);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /**
                                                                                                                                                           * Copyright (c) 2015-present, Facebook, Inc.
                                                                                                                                                           *
                                                                                                                                                           * This source code is licensed under the MIT license found in the
                                                                                                                                                           * LICENSE file in the root directory of this source tree.
                                                                                                                                                           *
                                                                                                                                                           * 
                                                                                                                                                           */

/**
 * TypeInfo is a utility class which, given a GraphQL schema, can keep track
 * of the current field and type definitions at any point in a GraphQL document
 * AST during a recursive descent by calling `enter(node)` and `leave(node)`.
 */
var TypeInfo = exports.TypeInfo = function () {
  function TypeInfo(schema,
  // NOTE: this experimental optional second parameter is only needed in order
  // to support non-spec-compliant codebases. You should never need to use it.
  getFieldDefFn) {
    _classCallCheck(this, TypeInfo);

    this._schema = schema;
    this._typeStack = [];
    this._parentTypeStack = [];
    this._inputTypeStack = [];
    this._fieldDefStack = [];
    this._directive = null;
    this._argument = null;
    this._enumValue = null;
    this._getFieldDef = getFieldDefFn || getFieldDef;
  }

  TypeInfo.prototype.getType = function getType() {
    if (this._typeStack.length > 0) {
      return this._typeStack[this._typeStack.length - 1];
    }
  };

  TypeInfo.prototype.getParentType = function getParentType() {
    if (this._parentTypeStack.length > 0) {
      return this._parentTypeStack[this._parentTypeStack.length - 1];
    }
  };

  TypeInfo.prototype.getInputType = function getInputType() {
    if (this._inputTypeStack.length > 0) {
      return this._inputTypeStack[this._inputTypeStack.length - 1];
    }
  };

  TypeInfo.prototype.getFieldDef = function getFieldDef() {
    if (this._fieldDefStack.length > 0) {
      return this._fieldDefStack[this._fieldDefStack.length - 1];
    }
  };

  TypeInfo.prototype.getDirective = function getDirective() {
    return this._directive;
  };

  TypeInfo.prototype.getArgument = function getArgument() {
    return this._argument;
  };

  TypeInfo.prototype.getEnumValue = function getEnumValue() {
    return this._enumValue;
  };

  // Flow does not yet handle this case.


  TypeInfo.prototype.enter = function enter(node /* ASTNode */) {
    var schema = this._schema;
    switch (node.kind) {
      case Kind.SELECTION_SET:
        var namedType = (0, _definition.getNamedType)(this.getType());
        this._parentTypeStack.push((0, _definition.isCompositeType)(namedType) ? namedType : undefined);
        break;
      case Kind.FIELD:
        var parentType = this.getParentType();
        var fieldDef = void 0;
        if (parentType) {
          fieldDef = this._getFieldDef(schema, parentType, node);
        }
        this._fieldDefStack.push(fieldDef);
        this._typeStack.push(fieldDef && fieldDef.type);
        break;
      case Kind.DIRECTIVE:
        this._directive = schema.getDirective(node.name.value);
        break;
      case Kind.OPERATION_DEFINITION:
        var type = void 0;
        if (node.operation === 'query') {
          type = schema.getQueryType();
        } else if (node.operation === 'mutation') {
          type = schema.getMutationType();
        } else if (node.operation === 'subscription') {
          type = schema.getSubscriptionType();
        }
        this._typeStack.push(type);
        break;
      case Kind.INLINE_FRAGMENT:
      case Kind.FRAGMENT_DEFINITION:
        var typeConditionAST = node.typeCondition;
        var outputType = typeConditionAST ? (0, _typeFromAST.typeFromAST)(schema, typeConditionAST) : this.getType();
        this._typeStack.push((0, _definition.isOutputType)(outputType) ? outputType : undefined);
        break;
      case Kind.VARIABLE_DEFINITION:
        var inputType = (0, _typeFromAST.typeFromAST)(schema, node.type);
        this._inputTypeStack.push((0, _definition.isInputType)(inputType) ? inputType : undefined);
        break;
      case Kind.ARGUMENT:
        var argDef = void 0;
        var argType = void 0;
        var fieldOrDirective = this.getDirective() || this.getFieldDef();
        if (fieldOrDirective) {
          argDef = (0, _find2.default)(fieldOrDirective.args, function (arg) {
            return arg.name === node.name.value;
          });
          if (argDef) {
            argType = argDef.type;
          }
        }
        this._argument = argDef;
        this._inputTypeStack.push(argType);
        break;
      case Kind.LIST:
        var listType = (0, _definition.getNullableType)(this.getInputType());
        this._inputTypeStack.push(listType instanceof _definition.GraphQLList ? listType.ofType : undefined);
        break;
      case Kind.OBJECT_FIELD:
        var objectType = (0, _definition.getNamedType)(this.getInputType());
        var fieldType = void 0;
        if (objectType instanceof _definition.GraphQLInputObjectType) {
          var inputField = objectType.getFields()[node.name.value];
          fieldType = inputField ? inputField.type : undefined;
        }
        this._inputTypeStack.push(fieldType);
        break;
      case Kind.ENUM:
        var enumType = (0, _definition.getNamedType)(this.getInputType());
        var enumValue = void 0;
        if (enumType instanceof _definition.GraphQLEnumType) {
          enumValue = enumType.getValue(node.value);
        }
        this._enumValue = enumValue;
        break;
    }
  };

  TypeInfo.prototype.leave = function leave(node) {
    switch (node.kind) {
      case Kind.SELECTION_SET:
        this._parentTypeStack.pop();
        break;
      case Kind.FIELD:
        this._fieldDefStack.pop();
        this._typeStack.pop();
        break;
      case Kind.DIRECTIVE:
        this._directive = null;
        break;
      case Kind.OPERATION_DEFINITION:
      case Kind.INLINE_FRAGMENT:
      case Kind.FRAGMENT_DEFINITION:
        this._typeStack.pop();
        break;
      case Kind.VARIABLE_DEFINITION:
        this._inputTypeStack.pop();
        break;
      case Kind.ARGUMENT:
        this._argument = null;
        this._inputTypeStack.pop();
        break;
      case Kind.LIST:
      case Kind.OBJECT_FIELD:
        this._inputTypeStack.pop();
        break;
      case Kind.ENUM:
        this._enumValue = null;
        break;
    }
  };

  return TypeInfo;
}();

/**
 * Not exactly the same as the executor's definition of getFieldDef, in this
 * statically evaluated environment we do not always have an Object type,
 * and need to handle Interface and Union types.
 */


function getFieldDef(schema, parentType, fieldNode) {
  var name = fieldNode.name.value;
  if (name === _introspection.SchemaMetaFieldDef.name && schema.getQueryType() === parentType) {
    return _introspection.SchemaMetaFieldDef;
  }
  if (name === _introspection.TypeMetaFieldDef.name && schema.getQueryType() === parentType) {
    return _introspection.TypeMetaFieldDef;
  }
  if (name === _introspection.TypeNameMetaFieldDef.name && (0, _definition.isCompositeType)(parentType)) {
    return _introspection.TypeNameMetaFieldDef;
  }
  if (parentType instanceof _definition.GraphQLObjectType || parentType instanceof _definition.GraphQLInterfaceType) {
    return parentType.getFields()[name];
  }
}

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = suggestionList;
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

/**
 * Given an invalid input string and a list of valid options, returns a filtered
 * list of valid options sorted based on their similarity with the input.
 */
function suggestionList(input, options) {
  var optionsByDistance = Object.create(null);
  var oLength = options.length;
  var inputThreshold = input.length / 2;
  for (var i = 0; i < oLength; i++) {
    var distance = lexicalDistance(input, options[i]);
    var threshold = Math.max(inputThreshold, options[i].length / 2, 1);
    if (distance <= threshold) {
      optionsByDistance[options[i]] = distance;
    }
  }
  return Object.keys(optionsByDistance).sort(function (a, b) {
    return optionsByDistance[a] - optionsByDistance[b];
  });
}

/**
 * Computes the lexical distance between strings A and B.
 *
 * The "distance" between two strings is given by counting the minimum number
 * of edits needed to transform string A into string B. An edit can be an
 * insertion, deletion, or substitution of a single character, or a swap of two
 * adjacent characters.
 *
 * This distance can be useful for detecting typos in input or sorting
 *
 * @param {string} a
 * @param {string} b
 * @return {int} distance in number of edits
 */
function lexicalDistance(a, b) {
  var i = void 0;
  var j = void 0;
  var d = [];
  var aLength = a.length;
  var bLength = b.length;

  for (i = 0; i <= aLength; i++) {
    d[i] = [i];
  }

  for (j = 1; j <= bLength; j++) {
    d[0][j] = j;
  }

  for (i = 1; i <= aLength; i++) {
    for (j = 1; j <= bLength; j++) {
      var cost = a[i - 1] === b[j - 1] ? 0 : 1;

      d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + cost);

      if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) {
        d[i][j] = Math.min(d[i][j], d[i - 2][j - 2] + cost);
      }
    }
  }

  return d[aLength][bLength];
}

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = quotedOrList;
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

var MAX_LENGTH = 5;

/**
 * Given [ A, B, C ] return '"A", "B", or "C"'.
 */
function quotedOrList(items) {
  var selected = items.slice(0, MAX_LENGTH);
  return selected.map(function (item) {
    return '"' + item + '"';
  }).reduce(function (list, quoted, index) {
    return list + (selected.length > 2 ? ', ' : ' ') + (index === selected.length - 1 ? 'or ' : '') + quoted;
  });
}

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultFieldResolver = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /**
                                                                                                                                                                                                                                                                               * Copyright (c) 2015-present, Facebook, Inc.
                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                               * This source code is licensed under the MIT license found in the
                                                                                                                                                                                                                                                                               * LICENSE file in the root directory of this source tree.
                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                               * 
                                                                                                                                                                                                                                                                               */

exports.execute = execute;
exports.responsePathAsArray = responsePathAsArray;
exports.addPath = addPath;
exports.assertValidExecutionArguments = assertValidExecutionArguments;
exports.buildExecutionContext = buildExecutionContext;
exports.getOperationRootType = getOperationRootType;
exports.collectFields = collectFields;
exports.buildResolveInfo = buildResolveInfo;
exports.resolveFieldValueOrError = resolveFieldValueOrError;
exports.getFieldDef = getFieldDef;

var _iterall = __webpack_require__(12);

var _error = __webpack_require__(0);

var _invariant = __webpack_require__(2);

var _invariant2 = _interopRequireDefault(_invariant);

var _isNullish = __webpack_require__(9);

var _isNullish2 = _interopRequireDefault(_isNullish);

var _typeFromAST = __webpack_require__(7);

var _kinds = __webpack_require__(3);

var Kind = _interopRequireWildcard(_kinds);

var _values = __webpack_require__(31);

var _definition = __webpack_require__(1);

var _schema = __webpack_require__(5);

var _introspection = __webpack_require__(10);

var _directives = __webpack_require__(6);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Terminology
 *
 * "Definitions" are the generic name for top-level statements in the document.
 * Examples of this include:
 * 1) Operations (such as a query)
 * 2) Fragments
 *
 * "Operations" are a generic name for requests in the document.
 * Examples of this include:
 * 1) query,
 * 2) mutation
 *
 * "Selections" are the definitions that can appear legally and at
 * single level of the query. These include:
 * 1) field references e.g "a"
 * 2) fragment "spreads" e.g. "...c"
 * 3) inline fragment "spreads" e.g. "...on Type { a }"
 */

/**
 * Data that must be available at all points during query execution.
 *
 * Namely, schema of the type system that is currently executing,
 * and the fragments defined in the query document
 */


/**
 * The result of GraphQL execution.
 *
 *   - `errors` is included when any errors occurred as a non-empty array.
 *   - `data` is the result of a successful execution of the query.
 */


/**
 * Implements the "Evaluating requests" section of the GraphQL specification.
 *
 * Returns a Promise that will eventually be resolved and never rejected.
 *
 * If the arguments to this function do not result in a legal execution context,
 * a GraphQLError will be thrown immediately explaining the invalid input.
 *
 * Accepts either an object with named arguments, or individual arguments.
 */

/* eslint-disable no-redeclare */
function execute(argsOrSchema, document, rootValue, contextValue, variableValues, operationName, fieldResolver) {
  // Extract arguments from object args if provided.
  return arguments.length === 1 ? executeImpl(argsOrSchema.schema, argsOrSchema.document, argsOrSchema.rootValue, argsOrSchema.contextValue, argsOrSchema.variableValues, argsOrSchema.operationName, argsOrSchema.fieldResolver) : executeImpl(argsOrSchema, document, rootValue, contextValue, variableValues, operationName, fieldResolver);
}

function executeImpl(schema, document, rootValue, contextValue, variableValues, operationName, fieldResolver) {
  // If arguments are missing or incorrect, throw an error.
  assertValidExecutionArguments(schema, document, variableValues);

  // If a valid context cannot be created due to incorrect arguments,
  // a "Response" with only errors is returned.
  var context = void 0;
  try {
    context = buildExecutionContext(schema, document, rootValue, contextValue, variableValues, operationName, fieldResolver);
  } catch (error) {
    return Promise.resolve({ errors: [error] });
  }

  // Return a Promise that will eventually resolve to the data described by
  // The "Response" section of the GraphQL specification.
  //
  // If errors are encountered while executing a GraphQL field, only that
  // field and its descendants will be omitted, and sibling fields will still
  // be executed. An execution which encounters errors will still result in a
  // resolved Promise.
  return Promise.resolve(executeOperation(context, context.operation, rootValue)).then(function (data) {
    return context.errors.length === 0 ? { data: data } : { errors: context.errors, data: data };
  });
}

/**
 * Given a ResponsePath (found in the `path` entry in the information provided
 * as the last argument to a field resolver), return an Array of the path keys.
 */
function responsePathAsArray(path) {
  var flattened = [];
  var curr = path;
  while (curr) {
    flattened.push(curr.key);
    curr = curr.prev;
  }
  return flattened.reverse();
}

/**
 * Given a ResponsePath and a key, return a new ResponsePath containing the
 * new key.
 */
function addPath(prev, key) {
  return { prev: prev, key: key };
}

/**
 * Essential assertions before executing to provide developer feedback for
 * improper use of the GraphQL library.
 */
function assertValidExecutionArguments(schema, document, rawVariableValues) {
  !schema ? (0, _invariant2.default)(0, 'Must provide schema') : void 0;
  !document ? (0, _invariant2.default)(0, 'Must provide document') : void 0;
  !(schema instanceof _schema.GraphQLSchema) ? (0, _invariant2.default)(0, 'Schema must be an instance of GraphQLSchema. Also ensure that there are ' + 'not multiple versions of GraphQL installed in your node_modules directory.') : void 0;

  // Variables, if provided, must be an object.
  !(!rawVariableValues || (typeof rawVariableValues === 'undefined' ? 'undefined' : _typeof(rawVariableValues)) === 'object') ? (0, _invariant2.default)(0, 'Variables must be provided as an Object where each property is a ' + 'variable value. Perhaps look to see if an unparsed JSON string ' + 'was provided.') : void 0;
}

/**
 * Constructs a ExecutionContext object from the arguments passed to
 * execute, which we will pass throughout the other execution methods.
 *
 * Throws a GraphQLError if a valid execution context cannot be created.
 */
function buildExecutionContext(schema, document, rootValue, contextValue, rawVariableValues, operationName, fieldResolver) {
  var errors = [];
  var operation = void 0;
  var fragments = Object.create(null);
  document.definitions.forEach(function (definition) {
    switch (definition.kind) {
      case Kind.OPERATION_DEFINITION:
        if (!operationName && operation) {
          throw new _error.GraphQLError('Must provide operation name if query contains multiple operations.');
        }
        if (!operationName || definition.name && definition.name.value === operationName) {
          operation = definition;
        }
        break;
      case Kind.FRAGMENT_DEFINITION:
        fragments[definition.name.value] = definition;
        break;
      default:
        throw new _error.GraphQLError('GraphQL cannot execute a request containing a ' + definition.kind + '.', [definition]);
    }
  });
  if (!operation) {
    if (operationName) {
      throw new _error.GraphQLError('Unknown operation named "' + operationName + '".');
    } else {
      throw new _error.GraphQLError('Must provide an operation.');
    }
  }
  var variableValues = (0, _values.getVariableValues)(schema, operation.variableDefinitions || [], rawVariableValues || {});

  return {
    schema: schema,
    fragments: fragments,
    rootValue: rootValue,
    contextValue: contextValue,
    operation: operation,
    variableValues: variableValues,
    fieldResolver: fieldResolver || defaultFieldResolver,
    errors: errors
  };
}

/**
 * Implements the "Evaluating operations" section of the spec.
 */
function executeOperation(exeContext, operation, rootValue) {
  var type = getOperationRootType(exeContext.schema, operation);
  var fields = collectFields(exeContext, type, operation.selectionSet, Object.create(null), Object.create(null));

  var path = undefined;

  // Errors from sub-fields of a NonNull type may propagate to the top level,
  // at which point we still log the error and null the parent field, which
  // in this case is the entire response.
  //
  // Similar to completeValueCatchingError.
  try {
    var result = operation.operation === 'mutation' ? executeFieldsSerially(exeContext, type, rootValue, path, fields) : executeFields(exeContext, type, rootValue, path, fields);
    var promise = getPromise(result);
    if (promise) {
      return promise.then(undefined, function (error) {
        exeContext.errors.push(error);
        return Promise.resolve(null);
      });
    }
    return result;
  } catch (error) {
    exeContext.errors.push(error);
    return null;
  }
}

/**
 * Extracts the root type of the operation from the schema.
 */
function getOperationRootType(schema, operation) {
  switch (operation.operation) {
    case 'query':
      return schema.getQueryType();
    case 'mutation':
      var mutationType = schema.getMutationType();
      if (!mutationType) {
        throw new _error.GraphQLError('Schema is not configured for mutations', [operation]);
      }
      return mutationType;
    case 'subscription':
      var subscriptionType = schema.getSubscriptionType();
      if (!subscriptionType) {
        throw new _error.GraphQLError('Schema is not configured for subscriptions', [operation]);
      }
      return subscriptionType;
    default:
      throw new _error.GraphQLError('Can only execute queries, mutations and subscriptions', [operation]);
  }
}

/**
 * Implements the "Evaluating selection sets" section of the spec
 * for "write" mode.
 */
function executeFieldsSerially(exeContext, parentType, sourceValue, path, fields) {
  return Object.keys(fields).reduce(function (prevPromise, responseName) {
    return prevPromise.then(function (results) {
      var fieldNodes = fields[responseName];
      var fieldPath = addPath(path, responseName);
      var result = resolveField(exeContext, parentType, sourceValue, fieldNodes, fieldPath);
      if (result === undefined) {
        return results;
      }
      var promise = getPromise(result);
      if (promise) {
        return promise.then(function (resolvedResult) {
          results[responseName] = resolvedResult;
          return results;
        });
      }
      results[responseName] = result;
      return results;
    });
  }, Promise.resolve({}));
}

/**
 * Implements the "Evaluating selection sets" section of the spec
 * for "read" mode.
 */
function executeFields(exeContext, parentType, sourceValue, path, fields) {
  var containsPromise = false;

  var finalResults = Object.keys(fields).reduce(function (results, responseName) {
    var fieldNodes = fields[responseName];
    var fieldPath = addPath(path, responseName);
    var result = resolveField(exeContext, parentType, sourceValue, fieldNodes, fieldPath);
    if (result === undefined) {
      return results;
    }
    results[responseName] = result;
    if (getPromise(result)) {
      containsPromise = true;
    }
    return results;
  }, Object.create(null));

  // If there are no promises, we can just return the object
  if (!containsPromise) {
    return finalResults;
  }

  // Otherwise, results is a map from field name to the result
  // of resolving that field, which is possibly a promise. Return
  // a promise that will return this same map, but with any
  // promises replaced with the values they resolved to.
  return promiseForObject(finalResults);
}

/**
 * Given a selectionSet, adds all of the fields in that selection to
 * the passed in map of fields, and returns it at the end.
 *
 * CollectFields requires the "runtime type" of an object. For a field which
 * returns an Interface or Union type, the "runtime type" will be the actual
 * Object type returned by that field.
 */
function collectFields(exeContext, runtimeType, selectionSet, fields, visitedFragmentNames) {
  for (var i = 0; i < selectionSet.selections.length; i++) {
    var selection = selectionSet.selections[i];
    switch (selection.kind) {
      case Kind.FIELD:
        if (!shouldIncludeNode(exeContext, selection)) {
          continue;
        }
        var name = getFieldEntryKey(selection);
        if (!fields[name]) {
          fields[name] = [];
        }
        fields[name].push(selection);
        break;
      case Kind.INLINE_FRAGMENT:
        if (!shouldIncludeNode(exeContext, selection) || !doesFragmentConditionMatch(exeContext, selection, runtimeType)) {
          continue;
        }
        collectFields(exeContext, runtimeType, selection.selectionSet, fields, visitedFragmentNames);
        break;
      case Kind.FRAGMENT_SPREAD:
        var fragName = selection.name.value;
        if (visitedFragmentNames[fragName] || !shouldIncludeNode(exeContext, selection)) {
          continue;
        }
        visitedFragmentNames[fragName] = true;
        var fragment = exeContext.fragments[fragName];
        if (!fragment || !doesFragmentConditionMatch(exeContext, fragment, runtimeType)) {
          continue;
        }
        collectFields(exeContext, runtimeType, fragment.selectionSet, fields, visitedFragmentNames);
        break;
    }
  }
  return fields;
}

/**
 * Determines if a field should be included based on the @include and @skip
 * directives, where @skip has higher precidence than @include.
 */
function shouldIncludeNode(exeContext, node) {
  var skip = (0, _values.getDirectiveValues)(_directives.GraphQLSkipDirective, node, exeContext.variableValues);
  if (skip && skip.if === true) {
    return false;
  }

  var include = (0, _values.getDirectiveValues)(_directives.GraphQLIncludeDirective, node, exeContext.variableValues);
  if (include && include.if === false) {
    return false;
  }
  return true;
}

/**
 * Determines if a fragment is applicable to the given type.
 */
function doesFragmentConditionMatch(exeContext, fragment, type) {
  var typeConditionNode = fragment.typeCondition;
  if (!typeConditionNode) {
    return true;
  }
  var conditionalType = (0, _typeFromAST.typeFromAST)(exeContext.schema, typeConditionNode);
  if (conditionalType === type) {
    return true;
  }
  if ((0, _definition.isAbstractType)(conditionalType)) {
    return exeContext.schema.isPossibleType(conditionalType, type);
  }
  return false;
}

/**
 * This function transforms a JS object `ObjMap<Promise<T>>` into
 * a `Promise<ObjMap<T>>`
 *
 * This is akin to bluebird's `Promise.props`, but implemented only using
 * `Promise.all` so it will work with any implementation of ES6 promises.
 */
function promiseForObject(object) {
  var keys = Object.keys(object);
  var valuesAndPromises = keys.map(function (name) {
    return object[name];
  });
  return Promise.all(valuesAndPromises).then(function (values) {
    return values.reduce(function (resolvedObject, value, i) {
      resolvedObject[keys[i]] = value;
      return resolvedObject;
    }, Object.create(null));
  });
}

/**
 * Implements the logic to compute the key of a given field's entry
 */
function getFieldEntryKey(node) {
  return node.alias ? node.alias.value : node.name.value;
}

/**
 * Resolves the field on the given source object. In particular, this
 * figures out the value that the field returns by calling its resolve function,
 * then calls completeValue to complete promises, serialize scalars, or execute
 * the sub-selection-set for objects.
 */
function resolveField(exeContext, parentType, source, fieldNodes, path) {
  var fieldNode = fieldNodes[0];
  var fieldName = fieldNode.name.value;

  var fieldDef = getFieldDef(exeContext.schema, parentType, fieldName);
  if (!fieldDef) {
    return;
  }

  var resolveFn = fieldDef.resolve || exeContext.fieldResolver;

  var info = buildResolveInfo(exeContext, fieldDef, fieldNodes, parentType, path);

  // Get the resolve function, regardless of if its result is normal
  // or abrupt (error).
  var result = resolveFieldValueOrError(exeContext, fieldDef, fieldNodes, resolveFn, source, info);

  return completeValueCatchingError(exeContext, fieldDef.type, fieldNodes, info, path, result);
}

function buildResolveInfo(exeContext, fieldDef, fieldNodes, parentType, path) {
  // The resolve function's optional fourth argument is a collection of
  // information about the current execution state.
  return {
    fieldName: fieldNodes[0].name.value,
    fieldNodes: fieldNodes,
    returnType: fieldDef.type,
    parentType: parentType,
    path: path,
    schema: exeContext.schema,
    fragments: exeContext.fragments,
    rootValue: exeContext.rootValue,
    operation: exeContext.operation,
    variableValues: exeContext.variableValues
  };
}

// Isolates the "ReturnOrAbrupt" behavior to not de-opt the `resolveField`
// function. Returns the result of resolveFn or the abrupt-return Error object.
function resolveFieldValueOrError(exeContext, fieldDef, fieldNodes, resolveFn, source, info) {
  try {
    // Build a JS object of arguments from the field.arguments AST, using the
    // variables scope to fulfill any variable references.
    // TODO: find a way to memoize, in case this field is within a List type.
    var args = (0, _values.getArgumentValues)(fieldDef, fieldNodes[0], exeContext.variableValues);

    // The resolve function's optional third argument is a context value that
    // is provided to every resolve function within an execution. It is commonly
    // used to represent an authenticated user, or request-specific caches.
    var context = exeContext.contextValue;

    return resolveFn(source, args, context, info);
  } catch (error) {
    // Sometimes a non-error is thrown, wrap it as an Error for a
    // consistent interface.
    return error instanceof Error ? error : new Error(error);
  }
}

// This is a small wrapper around completeValue which detects and logs errors
// in the execution context.
function completeValueCatchingError(exeContext, returnType, fieldNodes, info, path, result) {
  // If the field type is non-nullable, then it is resolved without any
  // protection from errors, however it still properly locates the error.
  if (returnType instanceof _definition.GraphQLNonNull) {
    return completeValueWithLocatedError(exeContext, returnType, fieldNodes, info, path, result);
  }

  // Otherwise, error protection is applied, logging the error and resolving
  // a null value for this field if one is encountered.
  try {
    var completed = completeValueWithLocatedError(exeContext, returnType, fieldNodes, info, path, result);
    var promise = getPromise(completed);
    if (promise) {
      // If `completeValueWithLocatedError` returned a rejected promise, log
      // the rejection error and resolve to null.
      // Note: we don't rely on a `catch` method, but we do expect "thenable"
      // to take a second callback for the error case.
      return promise.then(undefined, function (error) {
        exeContext.errors.push(error);
        return Promise.resolve(null);
      });
    }
    return completed;
  } catch (error) {
    // If `completeValueWithLocatedError` returned abruptly (threw an error),
    // log the error and return null.
    exeContext.errors.push(error);
    return null;
  }
}

// This is a small wrapper around completeValue which annotates errors with
// location information.
function completeValueWithLocatedError(exeContext, returnType, fieldNodes, info, path, result) {
  try {
    var completed = completeValue(exeContext, returnType, fieldNodes, info, path, result);
    var promise = getPromise(completed);
    if (promise) {
      return promise.then(undefined, function (error) {
        return Promise.reject((0, _error.locatedError)(error, fieldNodes, responsePathAsArray(path)));
      });
    }
    return completed;
  } catch (error) {
    throw (0, _error.locatedError)(error, fieldNodes, responsePathAsArray(path));
  }
}

/**
 * Implements the instructions for completeValue as defined in the
 * "Field entries" section of the spec.
 *
 * If the field type is Non-Null, then this recursively completes the value
 * for the inner type. It throws a field error if that completion returns null,
 * as per the "Nullability" section of the spec.
 *
 * If the field type is a List, then this recursively completes the value
 * for the inner type on each item in the list.
 *
 * If the field type is a Scalar or Enum, ensures the completed value is a legal
 * value of the type by calling the `serialize` method of GraphQL type
 * definition.
 *
 * If the field is an abstract type, determine the runtime type of the value
 * and then complete based on that type
 *
 * Otherwise, the field type expects a sub-selection set, and will complete the
 * value by evaluating all sub-selections.
 */
function completeValue(exeContext, returnType, fieldNodes, info, path, result) {
  // If result is a Promise, apply-lift over completeValue.
  var promise = getPromise(result);
  if (promise) {
    return promise.then(function (resolved) {
      return completeValue(exeContext, returnType, fieldNodes, info, path, resolved);
    });
  }

  // If result is an Error, throw a located error.
  if (result instanceof Error) {
    throw result;
  }

  // If field type is NonNull, complete for inner type, and throw field error
  // if result is null.
  if (returnType instanceof _definition.GraphQLNonNull) {
    var completed = completeValue(exeContext, returnType.ofType, fieldNodes, info, path, result);
    if (completed === null) {
      throw new Error('Cannot return null for non-nullable field ' + info.parentType.name + '.' + info.fieldName + '.');
    }
    return completed;
  }

  // If result value is null-ish (null, undefined, or NaN) then return null.
  if ((0, _isNullish2.default)(result)) {
    return null;
  }

  // If field type is List, complete each item in the list with the inner type
  if (returnType instanceof _definition.GraphQLList) {
    return completeListValue(exeContext, returnType, fieldNodes, info, path, result);
  }

  // If field type is a leaf type, Scalar or Enum, serialize to a valid value,
  // returning null if serialization is not possible.
  if ((0, _definition.isLeafType)(returnType)) {
    return completeLeafValue(returnType, result);
  }

  // If field type is an abstract type, Interface or Union, determine the
  // runtime Object type and complete for that type.
  if ((0, _definition.isAbstractType)(returnType)) {
    return completeAbstractValue(exeContext, returnType, fieldNodes, info, path, result);
  }

  // If field type is Object, execute and complete all sub-selections.
  if (returnType instanceof _definition.GraphQLObjectType) {
    return completeObjectValue(exeContext, returnType, fieldNodes, info, path, result);
  }

  // Not reachable. All possible output types have been considered.
  throw new Error('Cannot complete value of unexpected type "' + String(returnType) + '".');
}

/**
 * Complete a list value by completing each item in the list with the
 * inner type
 */
function completeListValue(exeContext, returnType, fieldNodes, info, path, result) {
  !(0, _iterall.isCollection)(result) ? (0, _invariant2.default)(0, 'Expected Iterable, but did not find one for field ' + info.parentType.name + '.' + info.fieldName + '.') : void 0;

  // This is specified as a simple map, however we're optimizing the path
  // where the list contains no Promises by avoiding creating another Promise.
  var itemType = returnType.ofType;
  var containsPromise = false;
  var completedResults = [];
  (0, _iterall.forEach)(result, function (item, index) {
    // No need to modify the info object containing the path,
    // since from here on it is not ever accessed by resolver functions.
    var fieldPath = addPath(path, index);
    var completedItem = completeValueCatchingError(exeContext, itemType, fieldNodes, info, fieldPath, item);

    if (!containsPromise && getPromise(completedItem)) {
      containsPromise = true;
    }
    completedResults.push(completedItem);
  });

  return containsPromise ? Promise.all(completedResults) : completedResults;
}

/**
 * Complete a Scalar or Enum by serializing to a valid value, returning
 * null if serialization is not possible.
 */
function completeLeafValue(returnType, result) {
  !returnType.serialize ? (0, _invariant2.default)(0, 'Missing serialize method on type') : void 0;
  var serializedResult = returnType.serialize(result);
  if ((0, _isNullish2.default)(serializedResult)) {
    throw new Error('Expected a value of type "' + String(returnType) + '" but ' + ('received: ' + String(result)));
  }
  return serializedResult;
}

/**
 * Complete a value of an abstract type by determining the runtime object type
 * of that value, then complete the value for that type.
 */
function completeAbstractValue(exeContext, returnType, fieldNodes, info, path, result) {
  var runtimeType = returnType.resolveType ? returnType.resolveType(result, exeContext.contextValue, info) : defaultResolveTypeFn(result, exeContext.contextValue, info, returnType);

  var promise = getPromise(runtimeType);
  if (promise) {
    return promise.then(function (resolvedRuntimeType) {
      return completeObjectValue(exeContext, ensureValidRuntimeType(resolvedRuntimeType, exeContext, returnType, fieldNodes, info, result), fieldNodes, info, path, result);
    });
  }

  return completeObjectValue(exeContext, ensureValidRuntimeType(runtimeType, exeContext, returnType, fieldNodes, info, result), fieldNodes, info, path, result);
}

function ensureValidRuntimeType(runtimeTypeOrName, exeContext, returnType, fieldNodes, info, result) {
  var runtimeType = typeof runtimeTypeOrName === 'string' ? exeContext.schema.getType(runtimeTypeOrName) : runtimeTypeOrName;

  if (!(runtimeType instanceof _definition.GraphQLObjectType)) {
    throw new _error.GraphQLError('Abstract type ' + returnType.name + ' must resolve to an Object type at ' + ('runtime for field ' + info.parentType.name + '.' + info.fieldName + ' with ') + ('value "' + String(result) + '", received "' + String(runtimeType) + '".'), fieldNodes);
  }

  if (!exeContext.schema.isPossibleType(returnType, runtimeType)) {
    throw new _error.GraphQLError('Runtime Object type "' + runtimeType.name + '" is not a possible type ' + ('for "' + returnType.name + '".'), fieldNodes);
  }

  return runtimeType;
}

/**
 * Complete an Object value by executing all sub-selections.
 */
function completeObjectValue(exeContext, returnType, fieldNodes, info, path, result) {
  // If there is an isTypeOf predicate function, call it with the
  // current result. If isTypeOf returns false, then raise an error rather
  // than continuing execution.
  if (returnType.isTypeOf) {
    var isTypeOf = returnType.isTypeOf(result, exeContext.contextValue, info);

    var promise = getPromise(isTypeOf);
    if (promise) {
      return promise.then(function (isTypeOfResult) {
        if (!isTypeOfResult) {
          throw invalidReturnTypeError(returnType, result, fieldNodes);
        }
        return collectAndExecuteSubfields(exeContext, returnType, fieldNodes, info, path, result);
      });
    }

    if (!isTypeOf) {
      throw invalidReturnTypeError(returnType, result, fieldNodes);
    }
  }

  return collectAndExecuteSubfields(exeContext, returnType, fieldNodes, info, path, result);
}

function invalidReturnTypeError(returnType, result, fieldNodes) {
  return new _error.GraphQLError('Expected value of type "' + returnType.name + '" but got: ' + String(result) + '.', fieldNodes);
}

function collectAndExecuteSubfields(exeContext, returnType, fieldNodes, info, path, result) {
  // Collect sub-fields to execute to complete this value.
  var subFieldNodes = Object.create(null);
  var visitedFragmentNames = Object.create(null);
  for (var i = 0; i < fieldNodes.length; i++) {
    var selectionSet = fieldNodes[i].selectionSet;
    if (selectionSet) {
      subFieldNodes = collectFields(exeContext, returnType, selectionSet, subFieldNodes, visitedFragmentNames);
    }
  }

  return executeFields(exeContext, returnType, result, path, subFieldNodes);
}

/**
 * If a resolveType function is not given, then a default resolve behavior is
 * used which tests each possible type for the abstract type by calling
 * isTypeOf for the object being coerced, returning the first type that matches.
 */
function defaultResolveTypeFn(value, context, info, abstractType) {
  var possibleTypes = info.schema.getPossibleTypes(abstractType);
  var promisedIsTypeOfResults = [];

  for (var i = 0; i < possibleTypes.length; i++) {
    var type = possibleTypes[i];

    if (type.isTypeOf) {
      var isTypeOfResult = type.isTypeOf(value, context, info);

      var promise = getPromise(isTypeOfResult);
      if (promise) {
        promisedIsTypeOfResults[i] = promise;
      } else if (isTypeOfResult) {
        return type;
      }
    }
  }

  if (promisedIsTypeOfResults.length) {
    return Promise.all(promisedIsTypeOfResults).then(function (isTypeOfResults) {
      for (var _i = 0; _i < isTypeOfResults.length; _i++) {
        if (isTypeOfResults[_i]) {
          return possibleTypes[_i];
        }
      }
    });
  }
}

/**
 * If a resolve function is not given, then a default resolve behavior is used
 * which takes the property of the source object of the same name as the field
 * and returns it as the result, or if it's a function, returns the result
 * of calling that function while passing along args and context.
 */
var defaultFieldResolver = exports.defaultFieldResolver = function defaultFieldResolver(source, args, context, info) {
  // ensure source is a value for which property access is acceptable.
  if ((typeof source === 'undefined' ? 'undefined' : _typeof(source)) === 'object' || typeof source === 'function') {
    var property = source[info.fieldName];
    if (typeof property === 'function') {
      return source[info.fieldName](args, context, info);
    }
    return property;
  }
};

/**
 * Only returns the value if it acts like a Promise, i.e. has a "then" function,
 * otherwise returns void.
 */
function getPromise(value) {
  if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && value !== null && typeof value.then === 'function') {
    return value;
  }
}

/**
 * This method looks up the field on the given type defintion.
 * It has special casing for the two introspection fields, __schema
 * and __typename. __typename is special because it can always be
 * queried as a field, even in situations where no other fields
 * are allowed, like on a Union. __schema could get automatically
 * added to the query type, but that would require mutating type
 * definitions, which would cause issues.
 */
function getFieldDef(schema, parentType, fieldName) {
  if (fieldName === _introspection.SchemaMetaFieldDef.name && schema.getQueryType() === parentType) {
    return _introspection.SchemaMetaFieldDef;
  } else if (fieldName === _introspection.TypeMetaFieldDef.name && schema.getQueryType() === parentType) {
    return _introspection.TypeMetaFieldDef;
  } else if (fieldName === _introspection.TypeNameMetaFieldDef.name) {
    return _introspection.TypeNameMetaFieldDef;
  }
  return parentType.getFields()[fieldName];
}

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /**
                                                                                                                                                                                                                                                                               * Copyright (c) 2015-present, Facebook, Inc.
                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                               * This source code is licensed under the MIT license found in the
                                                                                                                                                                                                                                                                               * LICENSE file in the root directory of this source tree.
                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                               * 
                                                                                                                                                                                                                                                                               */

exports.getVariableValues = getVariableValues;
exports.getArgumentValues = getArgumentValues;
exports.getDirectiveValues = getDirectiveValues;
exports.coerceValue = coerceValue;

var _iterall = __webpack_require__(12);

var _error = __webpack_require__(0);

var _find = __webpack_require__(13);

var _find2 = _interopRequireDefault(_find);

var _invariant = __webpack_require__(2);

var _invariant2 = _interopRequireDefault(_invariant);

var _isNullish = __webpack_require__(9);

var _isNullish2 = _interopRequireDefault(_isNullish);

var _isInvalid = __webpack_require__(17);

var _isInvalid2 = _interopRequireDefault(_isInvalid);

var _keyMap = __webpack_require__(14);

var _keyMap2 = _interopRequireDefault(_keyMap);

var _typeFromAST = __webpack_require__(7);

var _valueFromAST = __webpack_require__(18);

var _isValidJSValue = __webpack_require__(63);

var _isValidLiteralValue = __webpack_require__(22);

var _kinds = __webpack_require__(3);

var Kind = _interopRequireWildcard(_kinds);

var _printer = __webpack_require__(4);

var _definition = __webpack_require__(1);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Prepares an object map of variableValues of the correct type based on the
 * provided variable definitions and arbitrary input. If the input cannot be
 * parsed to match the variable definitions, a GraphQLError will be thrown.
 *
 * Note: The returned value is a plain Object with a prototype, since it is
 * exposed to user code. Care should be taken to not pull values from the
 * Object prototype.
 */
function getVariableValues(schema, varDefNodes, inputs) {
  var coercedValues = {};
  for (var i = 0; i < varDefNodes.length; i++) {
    var varDefNode = varDefNodes[i];
    var varName = varDefNode.variable.name.value;
    var varType = (0, _typeFromAST.typeFromAST)(schema, varDefNode.type);
    if (!(0, _definition.isInputType)(varType)) {
      throw new _error.GraphQLError('Variable "$' + varName + '" expected value of type ' + ('"' + (0, _printer.print)(varDefNode.type) + '" which cannot be used as an input type.'), [varDefNode.type]);
    }

    var value = inputs[varName];
    if ((0, _isInvalid2.default)(value)) {
      var defaultValue = varDefNode.defaultValue;
      if (defaultValue) {
        coercedValues[varName] = (0, _valueFromAST.valueFromAST)(defaultValue, varType);
      }
      if (varType instanceof _definition.GraphQLNonNull) {
        throw new _error.GraphQLError('Variable "$' + varName + '" of required type ' + ('"' + String(varType) + '" was not provided.'), [varDefNode]);
      }
    } else {
      var errors = (0, _isValidJSValue.isValidJSValue)(value, varType);
      if (errors.length) {
        var message = errors ? '\n' + errors.join('\n') : '';
        throw new _error.GraphQLError('Variable "$' + varName + '" got invalid value ' + (JSON.stringify(value) + '.' + message), [varDefNode]);
      }

      var coercedValue = coerceValue(varType, value);
      !!(0, _isInvalid2.default)(coercedValue) ? (0, _invariant2.default)(0, 'Should have reported error.') : void 0;
      coercedValues[varName] = coercedValue;
    }
  }
  return coercedValues;
}

/**
 * Prepares an object map of argument values given a list of argument
 * definitions and list of argument AST nodes.
 *
 * Note: The returned value is a plain Object with a prototype, since it is
 * exposed to user code. Care should be taken to not pull values from the
 * Object prototype.
 */
function getArgumentValues(def, node, variableValues) {
  var coercedValues = {};
  var argDefs = def.args;
  var argNodes = node.arguments;
  if (!argDefs || !argNodes) {
    return coercedValues;
  }
  var argNodeMap = (0, _keyMap2.default)(argNodes, function (arg) {
    return arg.name.value;
  });
  for (var i = 0; i < argDefs.length; i++) {
    var argDef = argDefs[i];
    var name = argDef.name;
    var argType = argDef.type;
    var argumentNode = argNodeMap[name];
    var defaultValue = argDef.defaultValue;
    if (!argumentNode) {
      if (!(0, _isInvalid2.default)(defaultValue)) {
        coercedValues[name] = defaultValue;
      } else if (argType instanceof _definition.GraphQLNonNull) {
        throw new _error.GraphQLError('Argument "' + name + '" of required type ' + ('"' + String(argType) + '" was not provided.'), [node]);
      }
    } else if (argumentNode.value.kind === Kind.VARIABLE) {
      var variableName = argumentNode.value.name.value;
      if (variableValues && Object.prototype.hasOwnProperty.call(variableValues, variableName) && !(0, _isInvalid2.default)(variableValues[variableName])) {
        // Note: this does not check that this variable value is correct.
        // This assumes that this query has been validated and the variable
        // usage here is of the correct type.
        coercedValues[name] = variableValues[variableName];
      } else if (!(0, _isInvalid2.default)(defaultValue)) {
        coercedValues[name] = defaultValue;
      } else if (argType instanceof _definition.GraphQLNonNull) {
        throw new _error.GraphQLError('Argument "' + name + '" of required type "' + String(argType) + '" was ' + ('provided the variable "$' + variableName + '" which was not provided ') + 'a runtime value.', [argumentNode.value]);
      }
    } else {
      var valueNode = argumentNode.value;
      var coercedValue = (0, _valueFromAST.valueFromAST)(valueNode, argType, variableValues);
      if ((0, _isInvalid2.default)(coercedValue)) {
        var errors = (0, _isValidLiteralValue.isValidLiteralValue)(argType, valueNode);
        var message = errors ? '\n' + errors.join('\n') : '';
        throw new _error.GraphQLError('Argument "' + name + '" got invalid value ' + (0, _printer.print)(valueNode) + '.' + message, [argumentNode.value]);
      }
      coercedValues[name] = coercedValue;
    }
  }
  return coercedValues;
}

/**
 * Prepares an object map of argument values given a directive definition
 * and a AST node which may contain directives. Optionally also accepts a map
 * of variable values.
 *
 * If the directive does not exist on the node, returns undefined.
 *
 * Note: The returned value is a plain Object with a prototype, since it is
 * exposed to user code. Care should be taken to not pull values from the
 * Object prototype.
 */
function getDirectiveValues(directiveDef, node, variableValues) {
  var directiveNode = node.directives && (0, _find2.default)(node.directives, function (directive) {
    return directive.name.value === directiveDef.name;
  });

  if (directiveNode) {
    return getArgumentValues(directiveDef, directiveNode, variableValues);
  }
}

/**
 * Given a type and any value, return a runtime value coerced to match the type.
 */
function coerceValue(type, value) {
  // Ensure flow knows that we treat function params as const.
  var _value = value;

  if ((0, _isInvalid2.default)(_value)) {
    return; // Intentionally return no value.
  }

  if (type instanceof _definition.GraphQLNonNull) {
    if (_value === null) {
      return; // Intentionally return no value.
    }
    return coerceValue(type.ofType, _value);
  }

  if (_value === null) {
    // Intentionally return the value null.
    return null;
  }

  if (type instanceof _definition.GraphQLList) {
    var itemType = type.ofType;
    if ((0, _iterall.isCollection)(_value)) {
      var coercedValues = [];
      var valueIter = (0, _iterall.createIterator)(_value);
      if (!valueIter) {
        return; // Intentionally return no value.
      }
      var step = void 0;
      while (!(step = valueIter.next()).done) {
        var itemValue = coerceValue(itemType, step.value);
        if ((0, _isInvalid2.default)(itemValue)) {
          return; // Intentionally return no value.
        }
        coercedValues.push(itemValue);
      }
      return coercedValues;
    }
    var coercedValue = coerceValue(itemType, _value);
    if ((0, _isInvalid2.default)(coercedValue)) {
      return; // Intentionally return no value.
    }
    return [coerceValue(itemType, _value)];
  }

  if (type instanceof _definition.GraphQLInputObjectType) {
    if ((typeof _value === 'undefined' ? 'undefined' : _typeof(_value)) !== 'object') {
      return; // Intentionally return no value.
    }
    var coercedObj = Object.create(null);
    var fields = type.getFields();
    var fieldNames = Object.keys(fields);
    for (var i = 0; i < fieldNames.length; i++) {
      var fieldName = fieldNames[i];
      var field = fields[fieldName];
      if ((0, _isInvalid2.default)(_value[fieldName])) {
        if (!(0, _isInvalid2.default)(field.defaultValue)) {
          coercedObj[fieldName] = field.defaultValue;
        } else if (field.type instanceof _definition.GraphQLNonNull) {
          return; // Intentionally return no value.
        }
        continue;
      }
      var fieldValue = coerceValue(field.type, _value[fieldName]);
      if ((0, _isInvalid2.default)(fieldValue)) {
        return; // Intentionally return no value.
      }
      coercedObj[fieldName] = fieldValue;
    }
    return coercedObj;
  }

  !(type instanceof _definition.GraphQLScalarType || type instanceof _definition.GraphQLEnumType) ? (0, _invariant2.default)(0, 'Must be input type') : void 0;

  var parsed = type.parseValue(_value);
  if ((0, _isNullish2.default)(parsed)) {
    // null or invalid values represent a failure to parse correctly,
    // in which case no value is returned.
    return;
  }

  return parsed;
}

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = keyValMap;


/**
 * Creates a keyed JS object from an array, given a function to produce the keys
 * and a function to produce the values from each item in the array.
 *
 *     const phoneBook = [
 *       { name: 'Jon', num: '555-1234' },
 *       { name: 'Jenny', num: '867-5309' }
 *     ]
 *
 *     // { Jon: '555-1234', Jenny: '867-5309' }
 *     const phonesByName = keyValMap(
 *       phoneBook,
 *       entry => entry.name,
 *       entry => entry.num
 *     )
 *
 */
function keyValMap(list, keyFn, valFn) {
  return list.reduce(function (map, item) {
    return map[keyFn(item)] = valFn(item), map;
  }, Object.create(null));
} /**
   * Copyright (c) 2015-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *
   * 
   */

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Source = undefined;

var _invariant = __webpack_require__(2);

var _invariant2 = _interopRequireDefault(_invariant);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /**
                                                                                                                                                           * Copyright (c) 2015-present, Facebook, Inc.
                                                                                                                                                           *
                                                                                                                                                           * This source code is licensed under the MIT license found in the
                                                                                                                                                           * LICENSE file in the root directory of this source tree.
                                                                                                                                                           *
                                                                                                                                                           * 
                                                                                                                                                           */

/**
 * A representation of source input to GraphQL.
 * `name` and `locationOffset` are optional. They are useful for clients who
 * store GraphQL documents in source files; for example, if the GraphQL input
 * starts at line 40 in a file named Foo.graphql, it might be useful for name to
 * be "Foo.graphql" and location to be `{ line: 40, column: 0 }`.
 * line and column in locationOffset are 1-indexed
 */
var Source = exports.Source = function Source(body, name, locationOffset) {
  _classCallCheck(this, Source);

  this.body = body;
  this.name = name || 'GraphQL request';
  this.locationOffset = locationOffset || { line: 1, column: 1 };
  !(this.locationOffset.line > 0) ? (0, _invariant2.default)(0, 'line in locationOffset is 1-indexed and must be positive') : void 0;
  !(this.locationOffset.column > 0) ? (0, _invariant2.default)(0, 'column in locationOffset is 1-indexed and must be positive') : void 0;
};

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.locatedError = locatedError;

var _GraphQLError = __webpack_require__(11);

/**
 * Given an arbitrary Error, presumably thrown while attempting to execute a
 * GraphQL operation, produce a new GraphQLError aware of the location in the
 * document responsible for the original Error.
 */
function locatedError(originalError, nodes, path) {
  // Note: this uses a brand-check to support GraphQL errors originating from
  // other contexts.
  if (originalError && originalError.path) {
    return originalError;
  }

  var message = originalError ? originalError.message || String(originalError) : 'An unknown error occurred.';
  return new _GraphQLError.GraphQLError(message, originalError && originalError.nodes || nodes, originalError && originalError.source, originalError && originalError.positions, path, originalError);
} /**
   * Copyright (c) 2015-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *
   * 
   */

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ValidationContext = undefined;
exports.validate = validate;

var _invariant = __webpack_require__(2);

var _invariant2 = _interopRequireDefault(_invariant);

var _error = __webpack_require__(0);

var _visitor = __webpack_require__(16);

var _kinds = __webpack_require__(3);

var Kind = _interopRequireWildcard(_kinds);

var _schema = __webpack_require__(5);

var _TypeInfo = __webpack_require__(27);

var _specifiedRules = __webpack_require__(36);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /**
                                                                                                                                                           * Copyright (c) 2015-present, Facebook, Inc.
                                                                                                                                                           *
                                                                                                                                                           * This source code is licensed under the MIT license found in the
                                                                                                                                                           * LICENSE file in the root directory of this source tree.
                                                                                                                                                           *
                                                                                                                                                           * 
                                                                                                                                                           */

/**
 * Implements the "Validation" section of the spec.
 *
 * Validation runs synchronously, returning an array of encountered errors, or
 * an empty array if no errors were encountered and the document is valid.
 *
 * A list of specific validation rules may be provided. If not provided, the
 * default list of rules defined by the GraphQL specification will be used.
 *
 * Each validation rules is a function which returns a visitor
 * (see the language/visitor API). Visitor methods are expected to return
 * GraphQLErrors, or Arrays of GraphQLErrors when invalid.
 *
 * Optionally a custom TypeInfo instance may be provided. If not provided, one
 * will be created from the provided schema.
 */
function validate(schema, ast, rules, typeInfo) {
  !schema ? (0, _invariant2.default)(0, 'Must provide schema') : void 0;
  !ast ? (0, _invariant2.default)(0, 'Must provide document') : void 0;
  !(schema instanceof _schema.GraphQLSchema) ? (0, _invariant2.default)(0, 'Schema must be an instance of GraphQLSchema. Also ensure that there are ' + 'not multiple versions of GraphQL installed in your node_modules directory.') : void 0;
  return visitUsingRules(schema, typeInfo || new _TypeInfo.TypeInfo(schema), ast, rules || _specifiedRules.specifiedRules);
}

/**
 * This uses a specialized visitor which runs multiple visitors in parallel,
 * while maintaining the visitor skip and break API.
 *
 * @internal
 */
function visitUsingRules(schema, typeInfo, documentAST, rules) {
  var context = new ValidationContext(schema, documentAST, typeInfo);
  var visitors = rules.map(function (rule) {
    return rule(context);
  });
  // Visit the whole document with each instance of all provided rules.
  (0, _visitor.visit)(documentAST, (0, _visitor.visitWithTypeInfo)(typeInfo, (0, _visitor.visitInParallel)(visitors)));
  return context.getErrors();
}

/**
 * An instance of this class is passed as the "this" context to all validators,
 * allowing access to commonly useful contextual information from within a
 * validation rule.
 */
var ValidationContext = exports.ValidationContext = function () {
  function ValidationContext(schema, ast, typeInfo) {
    _classCallCheck(this, ValidationContext);

    this._schema = schema;
    this._ast = ast;
    this._typeInfo = typeInfo;
    this._errors = [];
    this._fragmentSpreads = new Map();
    this._recursivelyReferencedFragments = new Map();
    this._variableUsages = new Map();
    this._recursiveVariableUsages = new Map();
  }

  ValidationContext.prototype.reportError = function reportError(error) {
    this._errors.push(error);
  };

  ValidationContext.prototype.getErrors = function getErrors() {
    return this._errors;
  };

  ValidationContext.prototype.getSchema = function getSchema() {
    return this._schema;
  };

  ValidationContext.prototype.getDocument = function getDocument() {
    return this._ast;
  };

  ValidationContext.prototype.getFragment = function getFragment(name) {
    var fragments = this._fragments;
    if (!fragments) {
      this._fragments = fragments = this.getDocument().definitions.reduce(function (frags, statement) {
        if (statement.kind === Kind.FRAGMENT_DEFINITION) {
          frags[statement.name.value] = statement;
        }
        return frags;
      }, Object.create(null));
    }
    return fragments[name];
  };

  ValidationContext.prototype.getFragmentSpreads = function getFragmentSpreads(node) {
    var spreads = this._fragmentSpreads.get(node);
    if (!spreads) {
      spreads = [];
      var setsToVisit = [node];
      while (setsToVisit.length !== 0) {
        var set = setsToVisit.pop();
        for (var i = 0; i < set.selections.length; i++) {
          var selection = set.selections[i];
          if (selection.kind === Kind.FRAGMENT_SPREAD) {
            spreads.push(selection);
          } else if (selection.selectionSet) {
            setsToVisit.push(selection.selectionSet);
          }
        }
      }
      this._fragmentSpreads.set(node, spreads);
    }
    return spreads;
  };

  ValidationContext.prototype.getRecursivelyReferencedFragments = function getRecursivelyReferencedFragments(operation) {
    var fragments = this._recursivelyReferencedFragments.get(operation);
    if (!fragments) {
      fragments = [];
      var collectedNames = Object.create(null);
      var nodesToVisit = [operation.selectionSet];
      while (nodesToVisit.length !== 0) {
        var _node = nodesToVisit.pop();
        var spreads = this.getFragmentSpreads(_node);
        for (var i = 0; i < spreads.length; i++) {
          var fragName = spreads[i].name.value;
          if (collectedNames[fragName] !== true) {
            collectedNames[fragName] = true;
            var fragment = this.getFragment(fragName);
            if (fragment) {
              fragments.push(fragment);
              nodesToVisit.push(fragment.selectionSet);
            }
          }
        }
      }
      this._recursivelyReferencedFragments.set(operation, fragments);
    }
    return fragments;
  };

  ValidationContext.prototype.getVariableUsages = function getVariableUsages(node) {
    var usages = this._variableUsages.get(node);
    if (!usages) {
      var newUsages = [];
      var typeInfo = new _TypeInfo.TypeInfo(this._schema);
      (0, _visitor.visit)(node, (0, _visitor.visitWithTypeInfo)(typeInfo, {
        VariableDefinition: function VariableDefinition() {
          return false;
        },
        Variable: function Variable(variable) {
          newUsages.push({ node: variable, type: typeInfo.getInputType() });
        }
      }));
      usages = newUsages;
      this._variableUsages.set(node, usages);
    }
    return usages;
  };

  ValidationContext.prototype.getRecursiveVariableUsages = function getRecursiveVariableUsages(operation) {
    var usages = this._recursiveVariableUsages.get(operation);
    if (!usages) {
      usages = this.getVariableUsages(operation);
      var fragments = this.getRecursivelyReferencedFragments(operation);
      for (var i = 0; i < fragments.length; i++) {
        Array.prototype.push.apply(usages, this.getVariableUsages(fragments[i]));
      }
      this._recursiveVariableUsages.set(operation, usages);
    }
    return usages;
  };

  ValidationContext.prototype.getType = function getType() {
    return this._typeInfo.getType();
  };

  ValidationContext.prototype.getParentType = function getParentType() {
    return this._typeInfo.getParentType();
  };

  ValidationContext.prototype.getInputType = function getInputType() {
    return this._typeInfo.getInputType();
  };

  ValidationContext.prototype.getFieldDef = function getFieldDef() {
    return this._typeInfo.getFieldDef();
  };

  ValidationContext.prototype.getDirective = function getDirective() {
    return this._typeInfo.getDirective();
  };

  ValidationContext.prototype.getArgument = function getArgument() {
    return this._typeInfo.getArgument();
  };

  return ValidationContext;
}();

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.specifiedRules = undefined;

var _UniqueOperationNames = __webpack_require__(37);

var _LoneAnonymousOperation = __webpack_require__(38);

var _SingleFieldSubscriptions = __webpack_require__(39);

var _KnownTypeNames = __webpack_require__(40);

var _FragmentsOnCompositeTypes = __webpack_require__(41);

var _VariablesAreInputTypes = __webpack_require__(42);

var _ScalarLeafs = __webpack_require__(43);

var _FieldsOnCorrectType = __webpack_require__(44);

var _UniqueFragmentNames = __webpack_require__(45);

var _KnownFragmentNames = __webpack_require__(46);

var _NoUnusedFragments = __webpack_require__(47);

var _PossibleFragmentSpreads = __webpack_require__(48);

var _NoFragmentCycles = __webpack_require__(49);

var _UniqueVariableNames = __webpack_require__(50);

var _NoUndefinedVariables = __webpack_require__(51);

var _NoUnusedVariables = __webpack_require__(52);

var _KnownDirectives = __webpack_require__(53);

var _UniqueDirectivesPerLocation = __webpack_require__(54);

var _KnownArgumentNames = __webpack_require__(55);

var _UniqueArgumentNames = __webpack_require__(56);

var _ArgumentsOfCorrectType = __webpack_require__(57);

var _ProvidedNonNullArguments = __webpack_require__(58);

var _DefaultValuesOfCorrectType = __webpack_require__(59);

var _VariablesInAllowedPosition = __webpack_require__(60);

var _OverlappingFieldsCanBeMerged = __webpack_require__(61);

var _UniqueInputFieldNames = __webpack_require__(62);

/**
 * This set includes all validation rules defined by the GraphQL spec.
 *
 * The order of the rules in this list has been adjusted to lead to the
 * most clear output when encountering multiple validation errors.
 */


// Spec Section: "Field Selection Merging"


// Spec Section: "Variable Default Values Are Correctly Typed"


// Spec Section: "Argument Values Type Correctness"


// Spec Section: "Argument Names"


// Spec Section: "Directives Are Defined"


// Spec Section: "All Variable Used Defined"


// Spec Section: "Fragments must not form cycles"


// Spec Section: "Fragments must be used"


// Spec Section: "Fragment Name Uniqueness"


// Spec Section: "Leaf Field Selections"


// Spec Section: "Fragments on Composite Types"


// Spec Section: "Subscriptions with Single Root Field"
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

// Spec Section: "Operation Name Uniqueness"
var specifiedRules = exports.specifiedRules = [_UniqueOperationNames.UniqueOperationNames, _LoneAnonymousOperation.LoneAnonymousOperation, _SingleFieldSubscriptions.SingleFieldSubscriptions, _KnownTypeNames.KnownTypeNames, _FragmentsOnCompositeTypes.FragmentsOnCompositeTypes, _VariablesAreInputTypes.VariablesAreInputTypes, _ScalarLeafs.ScalarLeafs, _FieldsOnCorrectType.FieldsOnCorrectType, _UniqueFragmentNames.UniqueFragmentNames, _KnownFragmentNames.KnownFragmentNames, _NoUnusedFragments.NoUnusedFragments, _PossibleFragmentSpreads.PossibleFragmentSpreads, _NoFragmentCycles.NoFragmentCycles, _UniqueVariableNames.UniqueVariableNames, _NoUndefinedVariables.NoUndefinedVariables, _NoUnusedVariables.NoUnusedVariables, _KnownDirectives.KnownDirectives, _UniqueDirectivesPerLocation.UniqueDirectivesPerLocation, _KnownArgumentNames.KnownArgumentNames, _UniqueArgumentNames.UniqueArgumentNames, _ArgumentsOfCorrectType.ArgumentsOfCorrectType, _ProvidedNonNullArguments.ProvidedNonNullArguments, _DefaultValuesOfCorrectType.DefaultValuesOfCorrectType, _VariablesInAllowedPosition.VariablesInAllowedPosition, _OverlappingFieldsCanBeMerged.OverlappingFieldsCanBeMerged, _UniqueInputFieldNames.UniqueInputFieldNames];

// Spec Section: "Input Object Field Uniqueness"


// Spec Section: "All Variable Usages Are Allowed"


// Spec Section: "Argument Optionality"


// Spec Section: "Argument Uniqueness"


// Spec Section: "Directives Are Unique Per Location"


// Spec Section: "All Variables Used"


// Spec Section: "Variable Uniqueness"


// Spec Section: "Fragment spread is possible"


// Spec Section: "Fragment spread target defined"


// Spec Section: "Field Selections on Objects, Interfaces, and Unions Types"


// Spec Section: "Variables are Input Types"


// Spec Section: "Fragment Spread Type Existence"


// Spec Section: "Lone Anonymous Operation"

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.duplicateOperationNameMessage = duplicateOperationNameMessage;
exports.UniqueOperationNames = UniqueOperationNames;

var _error = __webpack_require__(0);

/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function duplicateOperationNameMessage(operationName) {
  return 'There can be only one operation named "' + operationName + '".';
}

/**
 * Unique operation names
 *
 * A GraphQL document is only valid if all defined operations have unique names.
 */
function UniqueOperationNames(context) {
  var knownOperationNames = Object.create(null);
  return {
    OperationDefinition: function OperationDefinition(node) {
      var operationName = node.name;
      if (operationName) {
        if (knownOperationNames[operationName.value]) {
          context.reportError(new _error.GraphQLError(duplicateOperationNameMessage(operationName.value), [knownOperationNames[operationName.value], operationName]));
        } else {
          knownOperationNames[operationName.value] = operationName;
        }
      }
      return false;
    },

    FragmentDefinition: function FragmentDefinition() {
      return false;
    }
  };
}

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.anonOperationNotAloneMessage = anonOperationNotAloneMessage;
exports.LoneAnonymousOperation = LoneAnonymousOperation;

var _error = __webpack_require__(0);

var _kinds = __webpack_require__(3);

function anonOperationNotAloneMessage() {
  return 'This anonymous operation must be the only defined operation.';
}

/**
 * Lone anonymous operation
 *
 * A GraphQL document is only valid if when it contains an anonymous operation
 * (the query short-hand) that it contains only that one operation definition.
 */
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function LoneAnonymousOperation(context) {
  var operationCount = 0;
  return {
    Document: function Document(node) {
      operationCount = node.definitions.filter(function (definition) {
        return definition.kind === _kinds.OPERATION_DEFINITION;
      }).length;
    },
    OperationDefinition: function OperationDefinition(node) {
      if (!node.name && operationCount > 1) {
        context.reportError(new _error.GraphQLError(anonOperationNotAloneMessage(), [node]));
      }
    }
  };
}

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.singleFieldOnlyMessage = singleFieldOnlyMessage;
exports.SingleFieldSubscriptions = SingleFieldSubscriptions;

var _error = __webpack_require__(0);

/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function singleFieldOnlyMessage(name) {
  return (name ? 'Subscription "' + name + '" ' : 'Anonymous Subscription ') + 'must select only one top level field.';
}

/**
 * Subscriptions must only include one field.
 *
 * A GraphQL subscription is valid only if it contains a single root field.
 */
function SingleFieldSubscriptions(context) {
  return {
    OperationDefinition: function OperationDefinition(node) {
      if (node.operation === 'subscription') {
        if (node.selectionSet.selections.length !== 1) {
          context.reportError(new _error.GraphQLError(singleFieldOnlyMessage(node.name && node.name.value), node.selectionSet.selections.slice(1)));
        }
      }
    }
  };
}

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unknownTypeMessage = unknownTypeMessage;
exports.KnownTypeNames = KnownTypeNames;

var _error = __webpack_require__(0);

var _suggestionList = __webpack_require__(28);

var _suggestionList2 = _interopRequireDefault(_suggestionList);

var _quotedOrList = __webpack_require__(29);

var _quotedOrList2 = _interopRequireDefault(_quotedOrList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function unknownTypeMessage(type, suggestedTypes) {
  var message = 'Unknown type "' + String(type) + '".';
  if (suggestedTypes.length) {
    message += ' Did you mean ' + (0, _quotedOrList2.default)(suggestedTypes) + '?';
  }
  return message;
}

/**
 * Known type names
 *
 * A GraphQL document is only valid if referenced types (specifically
 * variable definitions and fragment conditions) are defined by the type schema.
 */
function KnownTypeNames(context) {
  return {
    // TODO: when validating IDL, re-enable these. Experimental version does not
    // add unreferenced types, resulting in false-positive errors. Squelched
    // errors for now.
    ObjectTypeDefinition: function ObjectTypeDefinition() {
      return false;
    },
    InterfaceTypeDefinition: function InterfaceTypeDefinition() {
      return false;
    },
    UnionTypeDefinition: function UnionTypeDefinition() {
      return false;
    },
    InputObjectTypeDefinition: function InputObjectTypeDefinition() {
      return false;
    },
    NamedType: function NamedType(node) {
      var schema = context.getSchema();
      var typeName = node.name.value;
      var type = schema.getType(typeName);
      if (!type) {
        context.reportError(new _error.GraphQLError(unknownTypeMessage(typeName, (0, _suggestionList2.default)(typeName, Object.keys(schema.getTypeMap()))), [node]));
      }
    }
  };
}

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.inlineFragmentOnNonCompositeErrorMessage = inlineFragmentOnNonCompositeErrorMessage;
exports.fragmentOnNonCompositeErrorMessage = fragmentOnNonCompositeErrorMessage;
exports.FragmentsOnCompositeTypes = FragmentsOnCompositeTypes;

var _error = __webpack_require__(0);

var _printer = __webpack_require__(4);

var _definition = __webpack_require__(1);

var _typeFromAST = __webpack_require__(7);

function inlineFragmentOnNonCompositeErrorMessage(type) {
  return 'Fragment cannot condition on non composite type "' + String(type) + '".';
} /**
   * Copyright (c) 2015-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *
   * 
   */

function fragmentOnNonCompositeErrorMessage(fragName, type) {
  return 'Fragment "' + fragName + '" cannot condition on non composite ' + ('type "' + String(type) + '".');
}

/**
 * Fragments on composite type
 *
 * Fragments use a type condition to determine if they apply, since fragments
 * can only be spread into a composite type (object, interface, or union), the
 * type condition must also be a composite type.
 */
function FragmentsOnCompositeTypes(context) {
  return {
    InlineFragment: function InlineFragment(node) {
      if (node.typeCondition) {
        var type = (0, _typeFromAST.typeFromAST)(context.getSchema(), node.typeCondition);
        if (type && !(0, _definition.isCompositeType)(type)) {
          context.reportError(new _error.GraphQLError(inlineFragmentOnNonCompositeErrorMessage((0, _printer.print)(node.typeCondition)), [node.typeCondition]));
        }
      }
    },
    FragmentDefinition: function FragmentDefinition(node) {
      var type = (0, _typeFromAST.typeFromAST)(context.getSchema(), node.typeCondition);
      if (type && !(0, _definition.isCompositeType)(type)) {
        context.reportError(new _error.GraphQLError(fragmentOnNonCompositeErrorMessage(node.name.value, (0, _printer.print)(node.typeCondition)), [node.typeCondition]));
      }
    }
  };
}

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.nonInputTypeOnVarMessage = nonInputTypeOnVarMessage;
exports.VariablesAreInputTypes = VariablesAreInputTypes;

var _error = __webpack_require__(0);

var _printer = __webpack_require__(4);

var _definition = __webpack_require__(1);

var _typeFromAST = __webpack_require__(7);

function nonInputTypeOnVarMessage(variableName, typeName) {
  return 'Variable "$' + variableName + '" cannot be non-input type "' + typeName + '".';
}

/**
 * Variables are input types
 *
 * A GraphQL operation is only valid if all the variables it defines are of
 * input types (scalar, enum, or input object).
 */
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function VariablesAreInputTypes(context) {
  return {
    VariableDefinition: function VariableDefinition(node) {
      var type = (0, _typeFromAST.typeFromAST)(context.getSchema(), node.type);

      // If the variable type is not an input type, return an error.
      if (type && !(0, _definition.isInputType)(type)) {
        var variableName = node.variable.name.value;
        context.reportError(new _error.GraphQLError(nonInputTypeOnVarMessage(variableName, (0, _printer.print)(node.type)), [node.type]));
      }
    }
  };
}

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.noSubselectionAllowedMessage = noSubselectionAllowedMessage;
exports.requiredSubselectionMessage = requiredSubselectionMessage;
exports.ScalarLeafs = ScalarLeafs;

var _error = __webpack_require__(0);

var _definition = __webpack_require__(1);

function noSubselectionAllowedMessage(fieldName, type) {
  return 'Field "' + fieldName + '" must not have a selection since ' + ('type "' + String(type) + '" has no subfields.');
} /**
   * Copyright (c) 2015-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *
   * 
   */

function requiredSubselectionMessage(fieldName, type) {
  return 'Field "' + fieldName + '" of type "' + String(type) + '" must have a ' + ('selection of subfields. Did you mean "' + fieldName + ' { ... }"?');
}

/**
 * Scalar leafs
 *
 * A GraphQL document is valid only if all leaf fields (fields without
 * sub selections) are of scalar or enum types.
 */
function ScalarLeafs(context) {
  return {
    Field: function Field(node) {
      var type = context.getType();
      if (type) {
        if ((0, _definition.isLeafType)((0, _definition.getNamedType)(type))) {
          if (node.selectionSet) {
            context.reportError(new _error.GraphQLError(noSubselectionAllowedMessage(node.name.value, type), [node.selectionSet]));
          }
        } else if (!node.selectionSet) {
          context.reportError(new _error.GraphQLError(requiredSubselectionMessage(node.name.value, type), [node]));
        }
      }
    }
  };
}

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.undefinedFieldMessage = undefinedFieldMessage;
exports.FieldsOnCorrectType = FieldsOnCorrectType;

var _error = __webpack_require__(0);

var _suggestionList = __webpack_require__(28);

var _suggestionList2 = _interopRequireDefault(_suggestionList);

var _quotedOrList = __webpack_require__(29);

var _quotedOrList2 = _interopRequireDefault(_quotedOrList);

var _definition = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function undefinedFieldMessage(fieldName, type, suggestedTypeNames, suggestedFieldNames) {
  var message = 'Cannot query field "' + fieldName + '" on type "' + type + '".';
  if (suggestedTypeNames.length !== 0) {
    var suggestions = (0, _quotedOrList2.default)(suggestedTypeNames);
    message += ' Did you mean to use an inline fragment on ' + suggestions + '?';
  } else if (suggestedFieldNames.length !== 0) {
    message += ' Did you mean ' + (0, _quotedOrList2.default)(suggestedFieldNames) + '?';
  }
  return message;
}

/**
 * Fields on correct type
 *
 * A GraphQL document is only valid if all fields selected are defined by the
 * parent type, or are an allowed meta field such as __typename.
 */
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function FieldsOnCorrectType(context) {
  return {
    Field: function Field(node) {
      var type = context.getParentType();
      if (type) {
        var fieldDef = context.getFieldDef();
        if (!fieldDef) {
          // This field doesn't exist, lets look for suggestions.
          var schema = context.getSchema();
          var fieldName = node.name.value;
          // First determine if there are any suggested types to condition on.
          var suggestedTypeNames = getSuggestedTypeNames(schema, type, fieldName);
          // If there are no suggested types, then perhaps this was a typo?
          var suggestedFieldNames = suggestedTypeNames.length !== 0 ? [] : getSuggestedFieldNames(schema, type, fieldName);

          // Report an error, including helpful suggestions.
          context.reportError(new _error.GraphQLError(undefinedFieldMessage(fieldName, type.name, suggestedTypeNames, suggestedFieldNames), [node]));
        }
      }
    }
  };
}

/**
 * Go through all of the implementations of type, as well as the interfaces
 * that they implement. If any of those types include the provided field,
 * suggest them, sorted by how often the type is referenced,  starting
 * with Interfaces.
 */
function getSuggestedTypeNames(schema, type, fieldName) {
  if ((0, _definition.isAbstractType)(type)) {
    var suggestedObjectTypes = [];
    var interfaceUsageCount = Object.create(null);
    schema.getPossibleTypes(type).forEach(function (possibleType) {
      if (!possibleType.getFields()[fieldName]) {
        return;
      }
      // This object type defines this field.
      suggestedObjectTypes.push(possibleType.name);
      possibleType.getInterfaces().forEach(function (possibleInterface) {
        if (!possibleInterface.getFields()[fieldName]) {
          return;
        }
        // This interface type defines this field.
        interfaceUsageCount[possibleInterface.name] = (interfaceUsageCount[possibleInterface.name] || 0) + 1;
      });
    });

    // Suggest interface types based on how common they are.
    var suggestedInterfaceTypes = Object.keys(interfaceUsageCount).sort(function (a, b) {
      return interfaceUsageCount[b] - interfaceUsageCount[a];
    });

    // Suggest both interface and object types.
    return suggestedInterfaceTypes.concat(suggestedObjectTypes);
  }

  // Otherwise, must be an Object type, which does not have possible fields.
  return [];
}

/**
 * For the field name provided, determine if there are any similar field names
 * that may be the result of a typo.
 */
function getSuggestedFieldNames(schema, type, fieldName) {
  if (type instanceof _definition.GraphQLObjectType || type instanceof _definition.GraphQLInterfaceType) {
    var possibleFieldNames = Object.keys(type.getFields());
    return (0, _suggestionList2.default)(fieldName, possibleFieldNames);
  }
  // Otherwise, must be a Union type, which does not define fields.
  return [];
}

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.duplicateFragmentNameMessage = duplicateFragmentNameMessage;
exports.UniqueFragmentNames = UniqueFragmentNames;

var _error = __webpack_require__(0);

/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function duplicateFragmentNameMessage(fragName) {
  return 'There can be only one fragment named "' + fragName + '".';
}

/**
 * Unique fragment names
 *
 * A GraphQL document is only valid if all defined fragments have unique names.
 */
function UniqueFragmentNames(context) {
  var knownFragmentNames = Object.create(null);
  return {
    OperationDefinition: function OperationDefinition() {
      return false;
    },
    FragmentDefinition: function FragmentDefinition(node) {
      var fragmentName = node.name.value;
      if (knownFragmentNames[fragmentName]) {
        context.reportError(new _error.GraphQLError(duplicateFragmentNameMessage(fragmentName), [knownFragmentNames[fragmentName], node.name]));
      } else {
        knownFragmentNames[fragmentName] = node.name;
      }
      return false;
    }
  };
}

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unknownFragmentMessage = unknownFragmentMessage;
exports.KnownFragmentNames = KnownFragmentNames;

var _error = __webpack_require__(0);

/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function unknownFragmentMessage(fragName) {
  return 'Unknown fragment "' + fragName + '".';
}

/**
 * Known fragment names
 *
 * A GraphQL document is only valid if all `...Fragment` fragment spreads refer
 * to fragments defined in the same document.
 */
function KnownFragmentNames(context) {
  return {
    FragmentSpread: function FragmentSpread(node) {
      var fragmentName = node.name.value;
      var fragment = context.getFragment(fragmentName);
      if (!fragment) {
        context.reportError(new _error.GraphQLError(unknownFragmentMessage(fragmentName), [node.name]));
      }
    }
  };
}

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unusedFragMessage = unusedFragMessage;
exports.NoUnusedFragments = NoUnusedFragments;

var _error = __webpack_require__(0);

/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function unusedFragMessage(fragName) {
  return 'Fragment "' + fragName + '" is never used.';
}

/**
 * No unused fragments
 *
 * A GraphQL document is only valid if all fragment definitions are spread
 * within operations, or spread within other fragments spread within operations.
 */
function NoUnusedFragments(context) {
  var operationDefs = [];
  var fragmentDefs = [];

  return {
    OperationDefinition: function OperationDefinition(node) {
      operationDefs.push(node);
      return false;
    },
    FragmentDefinition: function FragmentDefinition(node) {
      fragmentDefs.push(node);
      return false;
    },

    Document: {
      leave: function leave() {
        var fragmentNameUsed = Object.create(null);
        operationDefs.forEach(function (operation) {
          context.getRecursivelyReferencedFragments(operation).forEach(function (fragment) {
            fragmentNameUsed[fragment.name.value] = true;
          });
        });

        fragmentDefs.forEach(function (fragmentDef) {
          var fragName = fragmentDef.name.value;
          if (fragmentNameUsed[fragName] !== true) {
            context.reportError(new _error.GraphQLError(unusedFragMessage(fragName), [fragmentDef]));
          }
        });
      }
    }
  };
}

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.typeIncompatibleSpreadMessage = typeIncompatibleSpreadMessage;
exports.typeIncompatibleAnonSpreadMessage = typeIncompatibleAnonSpreadMessage;
exports.PossibleFragmentSpreads = PossibleFragmentSpreads;

var _error = __webpack_require__(0);

var _typeComparators = __webpack_require__(21);

var _typeFromAST = __webpack_require__(7);

var _definition = __webpack_require__(1);

function typeIncompatibleSpreadMessage(fragName, parentType, fragType) {
  return 'Fragment "' + fragName + '" cannot be spread here as objects of ' + ('type "' + String(parentType) + '" can never be of type "' + String(fragType) + '".');
} /**
   * Copyright (c) 2015-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *
   * 
   */

function typeIncompatibleAnonSpreadMessage(parentType, fragType) {
  return 'Fragment cannot be spread here as objects of ' + ('type "' + String(parentType) + '" can never be of type "' + String(fragType) + '".');
}

/**
 * Possible fragment spread
 *
 * A fragment spread is only valid if the type condition could ever possibly
 * be true: if there is a non-empty intersection of the possible parent types,
 * and possible types which pass the type condition.
 */
function PossibleFragmentSpreads(context) {
  return {
    InlineFragment: function InlineFragment(node) {
      var fragType = context.getType();
      var parentType = context.getParentType();
      if ((0, _definition.isCompositeType)(fragType) && (0, _definition.isCompositeType)(parentType) && !(0, _typeComparators.doTypesOverlap)(context.getSchema(), fragType, parentType)) {
        context.reportError(new _error.GraphQLError(typeIncompatibleAnonSpreadMessage(parentType, fragType), [node]));
      }
    },
    FragmentSpread: function FragmentSpread(node) {
      var fragName = node.name.value;
      var fragType = getFragmentType(context, fragName);
      var parentType = context.getParentType();
      if (fragType && parentType && !(0, _typeComparators.doTypesOverlap)(context.getSchema(), fragType, parentType)) {
        context.reportError(new _error.GraphQLError(typeIncompatibleSpreadMessage(fragName, parentType, fragType), [node]));
      }
    }
  };
}

function getFragmentType(context, name) {
  var frag = context.getFragment(name);
  return frag && (0, _typeFromAST.typeFromAST)(context.getSchema(), frag.typeCondition);
}

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cycleErrorMessage = cycleErrorMessage;
exports.NoFragmentCycles = NoFragmentCycles;

var _error = __webpack_require__(0);

/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function cycleErrorMessage(fragName, spreadNames) {
  var via = spreadNames.length ? ' via ' + spreadNames.join(', ') : '';
  return 'Cannot spread fragment "' + fragName + '" within itself' + via + '.';
}

function NoFragmentCycles(context) {
  // Tracks already visited fragments to maintain O(N) and to ensure that cycles
  // are not redundantly reported.
  var visitedFrags = Object.create(null);

  // Array of AST nodes used to produce meaningful errors
  var spreadPath = [];

  // Position in the spread path
  var spreadPathIndexByName = Object.create(null);

  return {
    OperationDefinition: function OperationDefinition() {
      return false;
    },
    FragmentDefinition: function FragmentDefinition(node) {
      if (!visitedFrags[node.name.value]) {
        detectCycleRecursive(node);
      }
      return false;
    }
  };

  // This does a straight-forward DFS to find cycles.
  // It does not terminate when a cycle was found but continues to explore
  // the graph to find all possible cycles.
  function detectCycleRecursive(fragment) {
    var fragmentName = fragment.name.value;
    visitedFrags[fragmentName] = true;

    var spreadNodes = context.getFragmentSpreads(fragment.selectionSet);
    if (spreadNodes.length === 0) {
      return;
    }

    spreadPathIndexByName[fragmentName] = spreadPath.length;

    for (var i = 0; i < spreadNodes.length; i++) {
      var spreadNode = spreadNodes[i];
      var spreadName = spreadNode.name.value;
      var cycleIndex = spreadPathIndexByName[spreadName];

      if (cycleIndex === undefined) {
        spreadPath.push(spreadNode);
        if (!visitedFrags[spreadName]) {
          var spreadFragment = context.getFragment(spreadName);
          if (spreadFragment) {
            detectCycleRecursive(spreadFragment);
          }
        }
        spreadPath.pop();
      } else {
        var cyclePath = spreadPath.slice(cycleIndex);
        context.reportError(new _error.GraphQLError(cycleErrorMessage(spreadName, cyclePath.map(function (s) {
          return s.name.value;
        })), cyclePath.concat(spreadNode)));
      }
    }

    spreadPathIndexByName[fragmentName] = undefined;
  }
}

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.duplicateVariableMessage = duplicateVariableMessage;
exports.UniqueVariableNames = UniqueVariableNames;

var _error = __webpack_require__(0);

function duplicateVariableMessage(variableName) {
  return 'There can be only one variable named "' + variableName + '".';
}

/**
 * Unique variable names
 *
 * A GraphQL operation is only valid if all its variables are uniquely named.
 */
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function UniqueVariableNames(context) {
  var knownVariableNames = Object.create(null);
  return {
    OperationDefinition: function OperationDefinition() {
      knownVariableNames = Object.create(null);
    },
    VariableDefinition: function VariableDefinition(node) {
      var variableName = node.variable.name.value;
      if (knownVariableNames[variableName]) {
        context.reportError(new _error.GraphQLError(duplicateVariableMessage(variableName), [knownVariableNames[variableName], node.variable.name]));
      } else {
        knownVariableNames[variableName] = node.variable.name;
      }
    }
  };
}

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.undefinedVarMessage = undefinedVarMessage;
exports.NoUndefinedVariables = NoUndefinedVariables;

var _error = __webpack_require__(0);

/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function undefinedVarMessage(varName, opName) {
  return opName ? 'Variable "$' + varName + '" is not defined by operation "' + opName + '".' : 'Variable "$' + varName + '" is not defined.';
}

/**
 * No undefined variables
 *
 * A GraphQL operation is only valid if all variables encountered, both directly
 * and via fragment spreads, are defined by that operation.
 */
function NoUndefinedVariables(context) {
  var variableNameDefined = Object.create(null);

  return {
    OperationDefinition: {
      enter: function enter() {
        variableNameDefined = Object.create(null);
      },
      leave: function leave(operation) {
        var usages = context.getRecursiveVariableUsages(operation);

        usages.forEach(function (_ref) {
          var node = _ref.node;

          var varName = node.name.value;
          if (variableNameDefined[varName] !== true) {
            context.reportError(new _error.GraphQLError(undefinedVarMessage(varName, operation.name && operation.name.value), [node, operation]));
          }
        });
      }
    },
    VariableDefinition: function VariableDefinition(node) {
      variableNameDefined[node.variable.name.value] = true;
    }
  };
}

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unusedVariableMessage = unusedVariableMessage;
exports.NoUnusedVariables = NoUnusedVariables;

var _error = __webpack_require__(0);

/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function unusedVariableMessage(varName, opName) {
  return opName ? 'Variable "$' + varName + '" is never used in operation "' + opName + '".' : 'Variable "$' + varName + '" is never used.';
}

/**
 * No unused variables
 *
 * A GraphQL operation is only valid if all variables defined by an operation
 * are used, either directly or within a spread fragment.
 */
function NoUnusedVariables(context) {
  var variableDefs = [];

  return {
    OperationDefinition: {
      enter: function enter() {
        variableDefs = [];
      },
      leave: function leave(operation) {
        var variableNameUsed = Object.create(null);
        var usages = context.getRecursiveVariableUsages(operation);
        var opName = operation.name ? operation.name.value : null;

        usages.forEach(function (_ref) {
          var node = _ref.node;

          variableNameUsed[node.name.value] = true;
        });

        variableDefs.forEach(function (variableDef) {
          var variableName = variableDef.variable.name.value;
          if (variableNameUsed[variableName] !== true) {
            context.reportError(new _error.GraphQLError(unusedVariableMessage(variableName, opName), [variableDef]));
          }
        });
      }
    },
    VariableDefinition: function VariableDefinition(def) {
      variableDefs.push(def);
    }
  };
}

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unknownDirectiveMessage = unknownDirectiveMessage;
exports.misplacedDirectiveMessage = misplacedDirectiveMessage;
exports.KnownDirectives = KnownDirectives;

var _error = __webpack_require__(0);

var _find = __webpack_require__(13);

var _find2 = _interopRequireDefault(_find);

var _kinds = __webpack_require__(3);

var Kind = _interopRequireWildcard(_kinds);

var _directives = __webpack_require__(6);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function unknownDirectiveMessage(directiveName) {
  return 'Unknown directive "' + directiveName + '".';
} /**
   * Copyright (c) 2015-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *
   * 
   */

function misplacedDirectiveMessage(directiveName, location) {
  return 'Directive "' + directiveName + '" may not be used on ' + location + '.';
}

/**
 * Known directives
 *
 * A GraphQL document is only valid if all `@directives` are known by the
 * schema and legally positioned.
 */
function KnownDirectives(context) {
  return {
    Directive: function Directive(node, key, parent, path, ancestors) {
      var directiveDef = (0, _find2.default)(context.getSchema().getDirectives(), function (def) {
        return def.name === node.name.value;
      });
      if (!directiveDef) {
        context.reportError(new _error.GraphQLError(unknownDirectiveMessage(node.name.value), [node]));
        return;
      }
      var candidateLocation = getDirectiveLocationForASTPath(ancestors);
      if (!candidateLocation) {
        context.reportError(new _error.GraphQLError(misplacedDirectiveMessage(node.name.value, node.type), [node]));
      } else if (directiveDef.locations.indexOf(candidateLocation) === -1) {
        context.reportError(new _error.GraphQLError(misplacedDirectiveMessage(node.name.value, candidateLocation), [node]));
      }
    }
  };
}

function getDirectiveLocationForASTPath(ancestors) {
  var appliedTo = ancestors[ancestors.length - 1];
  switch (appliedTo.kind) {
    case Kind.OPERATION_DEFINITION:
      switch (appliedTo.operation) {
        case 'query':
          return _directives.DirectiveLocation.QUERY;
        case 'mutation':
          return _directives.DirectiveLocation.MUTATION;
        case 'subscription':
          return _directives.DirectiveLocation.SUBSCRIPTION;
      }
      break;
    case Kind.FIELD:
      return _directives.DirectiveLocation.FIELD;
    case Kind.FRAGMENT_SPREAD:
      return _directives.DirectiveLocation.FRAGMENT_SPREAD;
    case Kind.INLINE_FRAGMENT:
      return _directives.DirectiveLocation.INLINE_FRAGMENT;
    case Kind.FRAGMENT_DEFINITION:
      return _directives.DirectiveLocation.FRAGMENT_DEFINITION;
    case Kind.SCHEMA_DEFINITION:
      return _directives.DirectiveLocation.SCHEMA;
    case Kind.SCALAR_TYPE_DEFINITION:
      return _directives.DirectiveLocation.SCALAR;
    case Kind.OBJECT_TYPE_DEFINITION:
      return _directives.DirectiveLocation.OBJECT;
    case Kind.FIELD_DEFINITION:
      return _directives.DirectiveLocation.FIELD_DEFINITION;
    case Kind.INTERFACE_TYPE_DEFINITION:
      return _directives.DirectiveLocation.INTERFACE;
    case Kind.UNION_TYPE_DEFINITION:
      return _directives.DirectiveLocation.UNION;
    case Kind.ENUM_TYPE_DEFINITION:
      return _directives.DirectiveLocation.ENUM;
    case Kind.ENUM_VALUE_DEFINITION:
      return _directives.DirectiveLocation.ENUM_VALUE;
    case Kind.INPUT_OBJECT_TYPE_DEFINITION:
      return _directives.DirectiveLocation.INPUT_OBJECT;
    case Kind.INPUT_VALUE_DEFINITION:
      var parentNode = ancestors[ancestors.length - 3];
      return parentNode.kind === Kind.INPUT_OBJECT_TYPE_DEFINITION ? _directives.DirectiveLocation.INPUT_FIELD_DEFINITION : _directives.DirectiveLocation.ARGUMENT_DEFINITION;
  }
}

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.duplicateDirectiveMessage = duplicateDirectiveMessage;
exports.UniqueDirectivesPerLocation = UniqueDirectivesPerLocation;

var _error = __webpack_require__(0);

/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function duplicateDirectiveMessage(directiveName) {
  return 'The directive "' + directiveName + '" can only be used once at ' + 'this location.';
}

/**
 * Unique directive names per location
 *
 * A GraphQL document is only valid if all directives at a given location
 * are uniquely named.
 */
function UniqueDirectivesPerLocation(context) {
  return {
    // Many different AST nodes may contain directives. Rather than listing
    // them all, just listen for entering any node, and check to see if it
    // defines any directives.
    enter: function enter(node) {
      if (node.directives) {
        var knownDirectives = Object.create(null);
        node.directives.forEach(function (directive) {
          var directiveName = directive.name.value;
          if (knownDirectives[directiveName]) {
            context.reportError(new _error.GraphQLError(duplicateDirectiveMessage(directiveName), [knownDirectives[directiveName], directive]));
          } else {
            knownDirectives[directiveName] = directive;
          }
        });
      }
    }
  };
}

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unknownArgMessage = unknownArgMessage;
exports.unknownDirectiveArgMessage = unknownDirectiveArgMessage;
exports.KnownArgumentNames = KnownArgumentNames;

var _error = __webpack_require__(0);

var _find = __webpack_require__(13);

var _find2 = _interopRequireDefault(_find);

var _invariant = __webpack_require__(2);

var _invariant2 = _interopRequireDefault(_invariant);

var _suggestionList = __webpack_require__(28);

var _suggestionList2 = _interopRequireDefault(_suggestionList);

var _quotedOrList = __webpack_require__(29);

var _quotedOrList2 = _interopRequireDefault(_quotedOrList);

var _kinds = __webpack_require__(3);

var Kind = _interopRequireWildcard(_kinds);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function unknownArgMessage(argName, fieldName, typeName, suggestedArgs) {
  var message = 'Unknown argument "' + argName + '" on field "' + fieldName + '" of ' + ('type "' + typeName + '".');
  if (suggestedArgs.length) {
    message += ' Did you mean ' + (0, _quotedOrList2.default)(suggestedArgs) + '?';
  }
  return message;
} /**
   * Copyright (c) 2015-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *
   * 
   */

function unknownDirectiveArgMessage(argName, directiveName, suggestedArgs) {
  var message = 'Unknown argument "' + argName + '" on directive "@' + directiveName + '".';
  if (suggestedArgs.length) {
    message += ' Did you mean ' + (0, _quotedOrList2.default)(suggestedArgs) + '?';
  }
  return message;
}

/**
 * Known argument names
 *
 * A GraphQL field is only valid if all supplied arguments are defined by
 * that field.
 */
function KnownArgumentNames(context) {
  return {
    Argument: function Argument(node, key, parent, path, ancestors) {
      var argumentOf = ancestors[ancestors.length - 1];
      if (argumentOf.kind === Kind.FIELD) {
        var fieldDef = context.getFieldDef();
        if (fieldDef) {
          var fieldArgDef = (0, _find2.default)(fieldDef.args, function (arg) {
            return arg.name === node.name.value;
          });
          if (!fieldArgDef) {
            var parentType = context.getParentType();
            !parentType ? (0, _invariant2.default)(0) : void 0;
            context.reportError(new _error.GraphQLError(unknownArgMessage(node.name.value, fieldDef.name, parentType.name, (0, _suggestionList2.default)(node.name.value, fieldDef.args.map(function (arg) {
              return arg.name;
            }))), [node]));
          }
        }
      } else if (argumentOf.kind === Kind.DIRECTIVE) {
        var directive = context.getDirective();
        if (directive) {
          var directiveArgDef = (0, _find2.default)(directive.args, function (arg) {
            return arg.name === node.name.value;
          });
          if (!directiveArgDef) {
            context.reportError(new _error.GraphQLError(unknownDirectiveArgMessage(node.name.value, directive.name, (0, _suggestionList2.default)(node.name.value, directive.args.map(function (arg) {
              return arg.name;
            }))), [node]));
          }
        }
      }
    }
  };
}

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.duplicateArgMessage = duplicateArgMessage;
exports.UniqueArgumentNames = UniqueArgumentNames;

var _error = __webpack_require__(0);

/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function duplicateArgMessage(argName) {
  return 'There can be only one argument named "' + argName + '".';
}

/**
 * Unique argument names
 *
 * A GraphQL field or directive is only valid if all supplied arguments are
 * uniquely named.
 */
function UniqueArgumentNames(context) {
  var knownArgNames = Object.create(null);
  return {
    Field: function Field() {
      knownArgNames = Object.create(null);
    },
    Directive: function Directive() {
      knownArgNames = Object.create(null);
    },
    Argument: function Argument(node) {
      var argName = node.name.value;
      if (knownArgNames[argName]) {
        context.reportError(new _error.GraphQLError(duplicateArgMessage(argName), [knownArgNames[argName], node.name]));
      } else {
        knownArgNames[argName] = node.name;
      }
      return false;
    }
  };
}

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.badValueMessage = badValueMessage;
exports.ArgumentsOfCorrectType = ArgumentsOfCorrectType;

var _error = __webpack_require__(0);

var _printer = __webpack_require__(4);

var _isValidLiteralValue = __webpack_require__(22);

/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function badValueMessage(argName, type, value, verboseErrors) {
  var message = verboseErrors ? '\n' + verboseErrors.join('\n') : '';
  return 'Argument "' + argName + '" has invalid value ' + value + '.' + message;
}

/**
 * Argument values of correct type
 *
 * A GraphQL document is only valid if all field argument literal values are
 * of the type expected by their position.
 */
function ArgumentsOfCorrectType(context) {
  return {
    Argument: function Argument(node) {
      var argDef = context.getArgument();
      if (argDef) {
        var errors = (0, _isValidLiteralValue.isValidLiteralValue)(argDef.type, node.value);
        if (errors && errors.length > 0) {
          context.reportError(new _error.GraphQLError(badValueMessage(node.name.value, argDef.type, (0, _printer.print)(node.value), errors), [node.value]));
        }
      }
      return false;
    }
  };
}

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.missingFieldArgMessage = missingFieldArgMessage;
exports.missingDirectiveArgMessage = missingDirectiveArgMessage;
exports.ProvidedNonNullArguments = ProvidedNonNullArguments;

var _error = __webpack_require__(0);

var _keyMap = __webpack_require__(14);

var _keyMap2 = _interopRequireDefault(_keyMap);

var _definition = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function missingFieldArgMessage(fieldName, argName, type) {
  return 'Field "' + fieldName + '" argument "' + argName + '" of type ' + ('"' + String(type) + '" is required but not provided.');
}

function missingDirectiveArgMessage(directiveName, argName, type) {
  return 'Directive "@' + directiveName + '" argument "' + argName + '" of type ' + ('"' + String(type) + '" is required but not provided.');
}

/**
 * Provided required arguments
 *
 * A field or directive is only valid if all required (non-null) field arguments
 * have been provided.
 */
function ProvidedNonNullArguments(context) {
  return {
    Field: {
      // Validate on leave to allow for deeper errors to appear first.
      leave: function leave(node) {
        var fieldDef = context.getFieldDef();
        if (!fieldDef) {
          return false;
        }
        var argNodes = node.arguments || [];

        var argNodeMap = (0, _keyMap2.default)(argNodes, function (arg) {
          return arg.name.value;
        });
        fieldDef.args.forEach(function (argDef) {
          var argNode = argNodeMap[argDef.name];
          if (!argNode && argDef.type instanceof _definition.GraphQLNonNull) {
            context.reportError(new _error.GraphQLError(missingFieldArgMessage(node.name.value, argDef.name, argDef.type), [node]));
          }
        });
      }
    },

    Directive: {
      // Validate on leave to allow for deeper errors to appear first.
      leave: function leave(node) {
        var directiveDef = context.getDirective();
        if (!directiveDef) {
          return false;
        }
        var argNodes = node.arguments || [];

        var argNodeMap = (0, _keyMap2.default)(argNodes, function (arg) {
          return arg.name.value;
        });
        directiveDef.args.forEach(function (argDef) {
          var argNode = argNodeMap[argDef.name];
          if (!argNode && argDef.type instanceof _definition.GraphQLNonNull) {
            context.reportError(new _error.GraphQLError(missingDirectiveArgMessage(node.name.value, argDef.name, argDef.type), [node]));
          }
        });
      }
    }
  };
}

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultForNonNullArgMessage = defaultForNonNullArgMessage;
exports.badValueForDefaultArgMessage = badValueForDefaultArgMessage;
exports.DefaultValuesOfCorrectType = DefaultValuesOfCorrectType;

var _error = __webpack_require__(0);

var _printer = __webpack_require__(4);

var _definition = __webpack_require__(1);

var _isValidLiteralValue = __webpack_require__(22);

function defaultForNonNullArgMessage(varName, type, guessType) {
  return 'Variable "$' + varName + '" of type "' + String(type) + '" is required and ' + 'will not use the default value. ' + ('Perhaps you meant to use type "' + String(guessType) + '".');
} /**
   * Copyright (c) 2015-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *
   * 
   */

function badValueForDefaultArgMessage(varName, type, value, verboseErrors) {
  var message = verboseErrors ? '\n' + verboseErrors.join('\n') : '';
  return 'Variable "$' + varName + '" of type "' + String(type) + '" has invalid ' + ('default value ' + value + '.' + message);
}

/**
 * Variable default values of correct type
 *
 * A GraphQL document is only valid if all variable default values are of the
 * type expected by their definition.
 */
function DefaultValuesOfCorrectType(context) {
  return {
    VariableDefinition: function VariableDefinition(node) {
      var name = node.variable.name.value;
      var defaultValue = node.defaultValue;
      var type = context.getInputType();
      if (type instanceof _definition.GraphQLNonNull && defaultValue) {
        context.reportError(new _error.GraphQLError(defaultForNonNullArgMessage(name, type, type.ofType), [defaultValue]));
      }
      if (type && defaultValue) {
        var errors = (0, _isValidLiteralValue.isValidLiteralValue)(type, defaultValue);
        if (errors && errors.length > 0) {
          context.reportError(new _error.GraphQLError(badValueForDefaultArgMessage(name, type, (0, _printer.print)(defaultValue), errors), [defaultValue]));
        }
      }
      return false;
    },

    SelectionSet: function SelectionSet() {
      return false;
    },
    FragmentDefinition: function FragmentDefinition() {
      return false;
    }
  };
}

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.badVarPosMessage = badVarPosMessage;
exports.VariablesInAllowedPosition = VariablesInAllowedPosition;

var _error = __webpack_require__(0);

var _definition = __webpack_require__(1);

var _typeComparators = __webpack_require__(21);

var _typeFromAST = __webpack_require__(7);

function badVarPosMessage(varName, varType, expectedType) {
  return 'Variable "$' + varName + '" of type "' + String(varType) + '" used in ' + ('position expecting type "' + String(expectedType) + '".');
}

/**
 * Variables passed to field arguments conform to type
 */
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function VariablesInAllowedPosition(context) {
  var varDefMap = Object.create(null);

  return {
    OperationDefinition: {
      enter: function enter() {
        varDefMap = Object.create(null);
      },
      leave: function leave(operation) {
        var usages = context.getRecursiveVariableUsages(operation);

        usages.forEach(function (_ref) {
          var node = _ref.node,
              type = _ref.type;

          var varName = node.name.value;
          var varDef = varDefMap[varName];
          if (varDef && type) {
            // A var type is allowed if it is the same or more strict (e.g. is
            // a subtype of) than the expected type. It can be more strict if
            // the variable type is non-null when the expected type is nullable.
            // If both are list types, the variable item type can be more strict
            // than the expected item type (contravariant).
            var schema = context.getSchema();
            var varType = (0, _typeFromAST.typeFromAST)(schema, varDef.type);
            if (varType && !(0, _typeComparators.isTypeSubTypeOf)(schema, effectiveType(varType, varDef), type)) {
              context.reportError(new _error.GraphQLError(badVarPosMessage(varName, varType, type), [varDef, node]));
            }
          }
        });
      }
    },
    VariableDefinition: function VariableDefinition(node) {
      varDefMap[node.variable.name.value] = node;
    }
  };
}

// If a variable definition has a default value, it's effectively non-null.
function effectiveType(varType, varDef) {
  return !varDef.defaultValue || varType instanceof _definition.GraphQLNonNull ? varType : new _definition.GraphQLNonNull(varType);
}

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fieldsConflictMessage = fieldsConflictMessage;
exports.OverlappingFieldsCanBeMerged = OverlappingFieldsCanBeMerged;

var _error = __webpack_require__(0);

var _find = __webpack_require__(13);

var _find2 = _interopRequireDefault(_find);

var _kinds = __webpack_require__(3);

var Kind = _interopRequireWildcard(_kinds);

var _printer = __webpack_require__(4);

var _definition = __webpack_require__(1);

var _typeFromAST = __webpack_require__(7);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /**
                                                                                                                                                           * Copyright (c) 2015-present, Facebook, Inc.
                                                                                                                                                           *
                                                                                                                                                           * This source code is licensed under the MIT license found in the
                                                                                                                                                           * LICENSE file in the root directory of this source tree.
                                                                                                                                                           *
                                                                                                                                                           * 
                                                                                                                                                           */

function fieldsConflictMessage(responseName, reason) {
  return 'Fields "' + responseName + '" conflict because ' + reasonMessage(reason) + '. Use different aliases on the fields to fetch both if this was ' + 'intentional.';
}

function reasonMessage(reason) {
  if (Array.isArray(reason)) {
    return reason.map(function (_ref) {
      var responseName = _ref[0],
          subreason = _ref[1];
      return 'subfields "' + responseName + '" conflict because ' + reasonMessage(subreason);
    }).join(' and ');
  }
  return reason;
}

/**
 * Overlapping fields can be merged
 *
 * A selection set is only valid if all fields (including spreading any
 * fragments) either correspond to distinct response names or can be merged
 * without ambiguity.
 */
function OverlappingFieldsCanBeMerged(context) {
  // A memoization for when two fragments are compared "between" each other for
  // conflicts. Two fragments may be compared many times, so memoizing this can
  // dramatically improve the performance of this validator.
  var comparedFragments = new PairSet();

  // A cache for the "field map" and list of fragment names found in any given
  // selection set. Selection sets may be asked for this information multiple
  // times, so this improves the performance of this validator.
  var cachedFieldsAndFragmentNames = new Map();

  return {
    SelectionSet: function SelectionSet(selectionSet) {
      var conflicts = findConflictsWithinSelectionSet(context, cachedFieldsAndFragmentNames, comparedFragments, context.getParentType(), selectionSet);
      conflicts.forEach(function (_ref2) {
        var _ref2$ = _ref2[0],
            responseName = _ref2$[0],
            reason = _ref2$[1],
            fields1 = _ref2[1],
            fields2 = _ref2[2];
        return context.reportError(new _error.GraphQLError(fieldsConflictMessage(responseName, reason), fields1.concat(fields2)));
      });
    }
  };
}
// Field name and reason.

// Reason is a string, or a nested list of conflicts.

// Tuple defining a field node in a context.

// Map of array of those.


/**
 * Algorithm:
 *
 * Conflicts occur when two fields exist in a query which will produce the same
 * response name, but represent differing values, thus creating a conflict.
 * The algorithm below finds all conflicts via making a series of comparisons
 * between fields. In order to compare as few fields as possible, this makes
 * a series of comparisons "within" sets of fields and "between" sets of fields.
 *
 * Given any selection set, a collection produces both a set of fields by
 * also including all inline fragments, as well as a list of fragments
 * referenced by fragment spreads.
 *
 * A) Each selection set represented in the document first compares "within" its
 * collected set of fields, finding any conflicts between every pair of
 * overlapping fields.
 * Note: This is the *only time* that a the fields "within" a set are compared
 * to each other. After this only fields "between" sets are compared.
 *
 * B) Also, if any fragment is referenced in a selection set, then a
 * comparison is made "between" the original set of fields and the
 * referenced fragment.
 *
 * C) Also, if multiple fragments are referenced, then comparisons
 * are made "between" each referenced fragment.
 *
 * D) When comparing "between" a set of fields and a referenced fragment, first
 * a comparison is made between each field in the original set of fields and
 * each field in the the referenced set of fields.
 *
 * E) Also, if any fragment is referenced in the referenced selection set,
 * then a comparison is made "between" the original set of fields and the
 * referenced fragment (recursively referring to step D).
 *
 * F) When comparing "between" two fragments, first a comparison is made between
 * each field in the first referenced set of fields and each field in the the
 * second referenced set of fields.
 *
 * G) Also, any fragments referenced by the first must be compared to the
 * second, and any fragments referenced by the second must be compared to the
 * first (recursively referring to step F).
 *
 * H) When comparing two fields, if both have selection sets, then a comparison
 * is made "between" both selection sets, first comparing the set of fields in
 * the first selection set with the set of fields in the second.
 *
 * I) Also, if any fragment is referenced in either selection set, then a
 * comparison is made "between" the other set of fields and the
 * referenced fragment.
 *
 * J) Also, if two fragments are referenced in both selection sets, then a
 * comparison is made "between" the two fragments.
 *
 */

// Find all conflicts found "within" a selection set, including those found
// via spreading in fragments. Called when visiting each SelectionSet in the
// GraphQL Document.
function findConflictsWithinSelectionSet(context, cachedFieldsAndFragmentNames, comparedFragments, parentType, selectionSet) {
  var conflicts = [];

  var _getFieldsAndFragment = getFieldsAndFragmentNames(context, cachedFieldsAndFragmentNames, parentType, selectionSet),
      fieldMap = _getFieldsAndFragment[0],
      fragmentNames = _getFieldsAndFragment[1];

  // (A) Find find all conflicts "within" the fields of this selection set.
  // Note: this is the *only place* `collectConflictsWithin` is called.


  collectConflictsWithin(context, conflicts, cachedFieldsAndFragmentNames, comparedFragments, fieldMap);

  // (B) Then collect conflicts between these fields and those represented by
  // each spread fragment name found.
  for (var i = 0; i < fragmentNames.length; i++) {
    collectConflictsBetweenFieldsAndFragment(context, conflicts, cachedFieldsAndFragmentNames, comparedFragments, false, fieldMap, fragmentNames[i]);
    // (C) Then compare this fragment with all other fragments found in this
    // selection set to collect conflicts between fragments spread together.
    // This compares each item in the list of fragment names to every other item
    // in that same list (except for itself).
    for (var j = i + 1; j < fragmentNames.length; j++) {
      collectConflictsBetweenFragments(context, conflicts, cachedFieldsAndFragmentNames, comparedFragments, false, fragmentNames[i], fragmentNames[j]);
    }
  }
  return conflicts;
}

// Collect all conflicts found between a set of fields and a fragment reference
// including via spreading in any nested fragments.
function collectConflictsBetweenFieldsAndFragment(context, conflicts, cachedFieldsAndFragmentNames, comparedFragments, areMutuallyExclusive, fieldMap, fragmentName) {
  var fragment = context.getFragment(fragmentName);
  if (!fragment) {
    return;
  }

  var _getReferencedFieldsA = getReferencedFieldsAndFragmentNames(context, cachedFieldsAndFragmentNames, fragment),
      fieldMap2 = _getReferencedFieldsA[0],
      fragmentNames2 = _getReferencedFieldsA[1];

  // (D) First collect any conflicts between the provided collection of fields
  // and the collection of fields represented by the given fragment.


  collectConflictsBetween(context, conflicts, cachedFieldsAndFragmentNames, comparedFragments, areMutuallyExclusive, fieldMap, fieldMap2);

  // (E) Then collect any conflicts between the provided collection of fields
  // and any fragment names found in the given fragment.
  for (var i = 0; i < fragmentNames2.length; i++) {
    collectConflictsBetweenFieldsAndFragment(context, conflicts, cachedFieldsAndFragmentNames, comparedFragments, areMutuallyExclusive, fieldMap, fragmentNames2[i]);
  }
}

// Collect all conflicts found between two fragments, including via spreading in
// any nested fragments.
function collectConflictsBetweenFragments(context, conflicts, cachedFieldsAndFragmentNames, comparedFragments, areMutuallyExclusive, fragmentName1, fragmentName2) {
  var fragment1 = context.getFragment(fragmentName1);
  var fragment2 = context.getFragment(fragmentName2);
  if (!fragment1 || !fragment2) {
    return;
  }

  // No need to compare a fragment to itself.
  if (fragment1 === fragment2) {
    return;
  }

  // Memoize so two fragments are not compared for conflicts more than once.
  if (comparedFragments.has(fragmentName1, fragmentName2, areMutuallyExclusive)) {
    return;
  }
  comparedFragments.add(fragmentName1, fragmentName2, areMutuallyExclusive);

  var _getReferencedFieldsA2 = getReferencedFieldsAndFragmentNames(context, cachedFieldsAndFragmentNames, fragment1),
      fieldMap1 = _getReferencedFieldsA2[0],
      fragmentNames1 = _getReferencedFieldsA2[1];

  var _getReferencedFieldsA3 = getReferencedFieldsAndFragmentNames(context, cachedFieldsAndFragmentNames, fragment2),
      fieldMap2 = _getReferencedFieldsA3[0],
      fragmentNames2 = _getReferencedFieldsA3[1];

  // (F) First, collect all conflicts between these two collections of fields
  // (not including any nested fragments).


  collectConflictsBetween(context, conflicts, cachedFieldsAndFragmentNames, comparedFragments, areMutuallyExclusive, fieldMap1, fieldMap2);

  // (G) Then collect conflicts between the first fragment and any nested
  // fragments spread in the second fragment.
  for (var j = 0; j < fragmentNames2.length; j++) {
    collectConflictsBetweenFragments(context, conflicts, cachedFieldsAndFragmentNames, comparedFragments, areMutuallyExclusive, fragmentName1, fragmentNames2[j]);
  }

  // (G) Then collect conflicts between the second fragment and any nested
  // fragments spread in the first fragment.
  for (var i = 0; i < fragmentNames1.length; i++) {
    collectConflictsBetweenFragments(context, conflicts, cachedFieldsAndFragmentNames, comparedFragments, areMutuallyExclusive, fragmentNames1[i], fragmentName2);
  }
}

// Find all conflicts found between two selection sets, including those found
// via spreading in fragments. Called when determining if conflicts exist
// between the sub-fields of two overlapping fields.
function findConflictsBetweenSubSelectionSets(context, cachedFieldsAndFragmentNames, comparedFragments, areMutuallyExclusive, parentType1, selectionSet1, parentType2, selectionSet2) {
  var conflicts = [];

  var _getFieldsAndFragment2 = getFieldsAndFragmentNames(context, cachedFieldsAndFragmentNames, parentType1, selectionSet1),
      fieldMap1 = _getFieldsAndFragment2[0],
      fragmentNames1 = _getFieldsAndFragment2[1];

  var _getFieldsAndFragment3 = getFieldsAndFragmentNames(context, cachedFieldsAndFragmentNames, parentType2, selectionSet2),
      fieldMap2 = _getFieldsAndFragment3[0],
      fragmentNames2 = _getFieldsAndFragment3[1];

  // (H) First, collect all conflicts between these two collections of field.


  collectConflictsBetween(context, conflicts, cachedFieldsAndFragmentNames, comparedFragments, areMutuallyExclusive, fieldMap1, fieldMap2);

  // (I) Then collect conflicts between the first collection of fields and
  // those referenced by each fragment name associated with the second.
  for (var j = 0; j < fragmentNames2.length; j++) {
    collectConflictsBetweenFieldsAndFragment(context, conflicts, cachedFieldsAndFragmentNames, comparedFragments, areMutuallyExclusive, fieldMap1, fragmentNames2[j]);
  }

  // (I) Then collect conflicts between the second collection of fields and
  // those referenced by each fragment name associated with the first.
  for (var i = 0; i < fragmentNames1.length; i++) {
    collectConflictsBetweenFieldsAndFragment(context, conflicts, cachedFieldsAndFragmentNames, comparedFragments, areMutuallyExclusive, fieldMap2, fragmentNames1[i]);
  }

  // (J) Also collect conflicts between any fragment names by the first and
  // fragment names by the second. This compares each item in the first set of
  // names to each item in the second set of names.
  for (var _i = 0; _i < fragmentNames1.length; _i++) {
    for (var _j = 0; _j < fragmentNames2.length; _j++) {
      collectConflictsBetweenFragments(context, conflicts, cachedFieldsAndFragmentNames, comparedFragments, areMutuallyExclusive, fragmentNames1[_i], fragmentNames2[_j]);
    }
  }
  return conflicts;
}

// Collect all Conflicts "within" one collection of fields.
function collectConflictsWithin(context, conflicts, cachedFieldsAndFragmentNames, comparedFragments, fieldMap) {
  // A field map is a keyed collection, where each key represents a response
  // name and the value at that key is a list of all fields which provide that
  // response name. For every response name, if there are multiple fields, they
  // must be compared to find a potential conflict.
  Object.keys(fieldMap).forEach(function (responseName) {
    var fields = fieldMap[responseName];
    // This compares every field in the list to every other field in this list
    // (except to itself). If the list only has one item, nothing needs to
    // be compared.
    if (fields.length > 1) {
      for (var i = 0; i < fields.length; i++) {
        for (var j = i + 1; j < fields.length; j++) {
          var conflict = findConflict(context, cachedFieldsAndFragmentNames, comparedFragments, false, // within one collection is never mutually exclusive
          responseName, fields[i], fields[j]);
          if (conflict) {
            conflicts.push(conflict);
          }
        }
      }
    }
  });
}

// Collect all Conflicts between two collections of fields. This is similar to,
// but different from the `collectConflictsWithin` function above. This check
// assumes that `collectConflictsWithin` has already been called on each
// provided collection of fields. This is true because this validator traverses
// each individual selection set.
function collectConflictsBetween(context, conflicts, cachedFieldsAndFragmentNames, comparedFragments, parentFieldsAreMutuallyExclusive, fieldMap1, fieldMap2) {
  // A field map is a keyed collection, where each key represents a response
  // name and the value at that key is a list of all fields which provide that
  // response name. For any response name which appears in both provided field
  // maps, each field from the first field map must be compared to every field
  // in the second field map to find potential conflicts.
  Object.keys(fieldMap1).forEach(function (responseName) {
    var fields2 = fieldMap2[responseName];
    if (fields2) {
      var fields1 = fieldMap1[responseName];
      for (var i = 0; i < fields1.length; i++) {
        for (var j = 0; j < fields2.length; j++) {
          var conflict = findConflict(context, cachedFieldsAndFragmentNames, comparedFragments, parentFieldsAreMutuallyExclusive, responseName, fields1[i], fields2[j]);
          if (conflict) {
            conflicts.push(conflict);
          }
        }
      }
    }
  });
}

// Determines if there is a conflict between two particular fields, including
// comparing their sub-fields.
function findConflict(context, cachedFieldsAndFragmentNames, comparedFragments, parentFieldsAreMutuallyExclusive, responseName, field1, field2) {
  var parentType1 = field1[0],
      node1 = field1[1],
      def1 = field1[2];
  var parentType2 = field2[0],
      node2 = field2[1],
      def2 = field2[2];

  // If it is known that two fields could not possibly apply at the same
  // time, due to the parent types, then it is safe to permit them to diverge
  // in aliased field or arguments used as they will not present any ambiguity
  // by differing.
  // It is known that two parent types could never overlap if they are
  // different Object types. Interface or Union types might overlap - if not
  // in the current state of the schema, then perhaps in some future version,
  // thus may not safely diverge.

  var areMutuallyExclusive = parentFieldsAreMutuallyExclusive || parentType1 !== parentType2 && parentType1 instanceof _definition.GraphQLObjectType && parentType2 instanceof _definition.GraphQLObjectType;

  // The return type for each field.
  var type1 = def1 && def1.type;
  var type2 = def2 && def2.type;

  if (!areMutuallyExclusive) {
    // Two aliases must refer to the same field.
    var name1 = node1.name.value;
    var name2 = node2.name.value;
    if (name1 !== name2) {
      return [[responseName, name1 + ' and ' + name2 + ' are different fields'], [node1], [node2]];
    }

    // Two field calls must have the same arguments.
    if (!sameArguments(node1.arguments || [], node2.arguments || [])) {
      return [[responseName, 'they have differing arguments'], [node1], [node2]];
    }
  }

  if (type1 && type2 && doTypesConflict(type1, type2)) {
    return [[responseName, 'they return conflicting types ' + String(type1) + ' and ' + String(type2)], [node1], [node2]];
  }

  // Collect and compare sub-fields. Use the same "visited fragment names" list
  // for both collections so fields in a fragment reference are never
  // compared to themselves.
  var selectionSet1 = node1.selectionSet;
  var selectionSet2 = node2.selectionSet;
  if (selectionSet1 && selectionSet2) {
    var conflicts = findConflictsBetweenSubSelectionSets(context, cachedFieldsAndFragmentNames, comparedFragments, areMutuallyExclusive, (0, _definition.getNamedType)(type1), selectionSet1, (0, _definition.getNamedType)(type2), selectionSet2);
    return subfieldConflicts(conflicts, responseName, node1, node2);
  }
}

function sameArguments(arguments1, arguments2) {
  if (arguments1.length !== arguments2.length) {
    return false;
  }
  return arguments1.every(function (argument1) {
    var argument2 = (0, _find2.default)(arguments2, function (argument) {
      return argument.name.value === argument1.name.value;
    });
    if (!argument2) {
      return false;
    }
    return sameValue(argument1.value, argument2.value);
  });
}

function sameValue(value1, value2) {
  return !value1 && !value2 || (0, _printer.print)(value1) === (0, _printer.print)(value2);
}

// Two types conflict if both types could not apply to a value simultaneously.
// Composite types are ignored as their individual field types will be compared
// later recursively. However List and Non-Null types must match.
function doTypesConflict(type1, type2) {
  if (type1 instanceof _definition.GraphQLList) {
    return type2 instanceof _definition.GraphQLList ? doTypesConflict(type1.ofType, type2.ofType) : true;
  }
  if (type2 instanceof _definition.GraphQLList) {
    return type1 instanceof _definition.GraphQLList ? doTypesConflict(type1.ofType, type2.ofType) : true;
  }
  if (type1 instanceof _definition.GraphQLNonNull) {
    return type2 instanceof _definition.GraphQLNonNull ? doTypesConflict(type1.ofType, type2.ofType) : true;
  }
  if (type2 instanceof _definition.GraphQLNonNull) {
    return type1 instanceof _definition.GraphQLNonNull ? doTypesConflict(type1.ofType, type2.ofType) : true;
  }
  if ((0, _definition.isLeafType)(type1) || (0, _definition.isLeafType)(type2)) {
    return type1 !== type2;
  }
  return false;
}

// Given a selection set, return the collection of fields (a mapping of response
// name to field nodes and definitions) as well as a list of fragment names
// referenced via fragment spreads.
function getFieldsAndFragmentNames(context, cachedFieldsAndFragmentNames, parentType, selectionSet) {
  var cached = cachedFieldsAndFragmentNames.get(selectionSet);
  if (!cached) {
    var nodeAndDefs = Object.create(null);
    var fragmentNames = Object.create(null);
    _collectFieldsAndFragmentNames(context, parentType, selectionSet, nodeAndDefs, fragmentNames);
    cached = [nodeAndDefs, Object.keys(fragmentNames)];
    cachedFieldsAndFragmentNames.set(selectionSet, cached);
  }
  return cached;
}

// Given a reference to a fragment, return the represented collection of fields
// as well as a list of nested fragment names referenced via fragment spreads.
function getReferencedFieldsAndFragmentNames(context, cachedFieldsAndFragmentNames, fragment) {
  // Short-circuit building a type from the node if possible.
  var cached = cachedFieldsAndFragmentNames.get(fragment.selectionSet);
  if (cached) {
    return cached;
  }

  var fragmentType = (0, _typeFromAST.typeFromAST)(context.getSchema(), fragment.typeCondition);
  return getFieldsAndFragmentNames(context, cachedFieldsAndFragmentNames, fragmentType, fragment.selectionSet);
}

function _collectFieldsAndFragmentNames(context, parentType, selectionSet, nodeAndDefs, fragmentNames) {
  for (var i = 0; i < selectionSet.selections.length; i++) {
    var selection = selectionSet.selections[i];
    switch (selection.kind) {
      case Kind.FIELD:
        var fieldName = selection.name.value;
        var fieldDef = void 0;
        if (parentType instanceof _definition.GraphQLObjectType || parentType instanceof _definition.GraphQLInterfaceType) {
          fieldDef = parentType.getFields()[fieldName];
        }
        var responseName = selection.alias ? selection.alias.value : fieldName;
        if (!nodeAndDefs[responseName]) {
          nodeAndDefs[responseName] = [];
        }
        nodeAndDefs[responseName].push([parentType, selection, fieldDef]);
        break;
      case Kind.FRAGMENT_SPREAD:
        fragmentNames[selection.name.value] = true;
        break;
      case Kind.INLINE_FRAGMENT:
        var typeCondition = selection.typeCondition;
        var inlineFragmentType = typeCondition ? (0, _typeFromAST.typeFromAST)(context.getSchema(), typeCondition) : parentType;
        _collectFieldsAndFragmentNames(context, inlineFragmentType, selection.selectionSet, nodeAndDefs, fragmentNames);
        break;
    }
  }
}

// Given a series of Conflicts which occurred between two sub-fields, generate
// a single Conflict.
function subfieldConflicts(conflicts, responseName, node1, node2) {
  if (conflicts.length > 0) {
    return [[responseName, conflicts.map(function (_ref3) {
      var reason = _ref3[0];
      return reason;
    })], conflicts.reduce(function (allFields, _ref4) {
      var fields1 = _ref4[1];
      return allFields.concat(fields1);
    }, [node1]), conflicts.reduce(function (allFields, _ref5) {
      var fields2 = _ref5[2];
      return allFields.concat(fields2);
    }, [node2])];
  }
}

/**
 * A way to keep track of pairs of things when the ordering of the pair does
 * not matter. We do this by maintaining a sort of double adjacency sets.
 */

var PairSet = function () {
  function PairSet() {
    _classCallCheck(this, PairSet);

    this._data = Object.create(null);
  }

  PairSet.prototype.has = function has(a, b, areMutuallyExclusive) {
    var first = this._data[a];
    var result = first && first[b];
    if (result === undefined) {
      return false;
    }
    // areMutuallyExclusive being false is a superset of being true,
    // hence if we want to know if this PairSet "has" these two with no
    // exclusivity, we have to ensure it was added as such.
    if (areMutuallyExclusive === false) {
      return result === false;
    }
    return true;
  };

  PairSet.prototype.add = function add(a, b, areMutuallyExclusive) {
    _pairSetAdd(this._data, a, b, areMutuallyExclusive);
    _pairSetAdd(this._data, b, a, areMutuallyExclusive);
  };

  return PairSet;
}();

function _pairSetAdd(data, a, b, areMutuallyExclusive) {
  var map = data[a];
  if (!map) {
    map = Object.create(null);
    data[a] = map;
  }
  map[b] = areMutuallyExclusive;
}

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.duplicateInputFieldMessage = duplicateInputFieldMessage;
exports.UniqueInputFieldNames = UniqueInputFieldNames;

var _error = __webpack_require__(0);

/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function duplicateInputFieldMessage(fieldName) {
  return 'There can be only one input field named "' + fieldName + '".';
}

/**
 * Unique input field names
 *
 * A GraphQL input object value is only valid if all supplied fields are
 * uniquely named.
 */
function UniqueInputFieldNames(context) {
  var knownNameStack = [];
  var knownNames = Object.create(null);

  return {
    ObjectValue: {
      enter: function enter() {
        knownNameStack.push(knownNames);
        knownNames = Object.create(null);
      },
      leave: function leave() {
        knownNames = knownNameStack.pop();
      }
    },
    ObjectField: function ObjectField(node) {
      var fieldName = node.name.value;
      if (knownNames[fieldName]) {
        context.reportError(new _error.GraphQLError(duplicateInputFieldMessage(fieldName), [knownNames[fieldName], node.name]));
      } else {
        knownNames[fieldName] = node.name;
      }
      return false;
    }
  };
}

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /**
                                                                                                                                                                                                                                                                               * Copyright (c) 2015-present, Facebook, Inc.
                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                               * This source code is licensed under the MIT license found in the
                                                                                                                                                                                                                                                                               * LICENSE file in the root directory of this source tree.
                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                               * 
                                                                                                                                                                                                                                                                               */

exports.isValidJSValue = isValidJSValue;

var _iterall = __webpack_require__(12);

var _invariant = __webpack_require__(2);

var _invariant2 = _interopRequireDefault(_invariant);

var _isNullish = __webpack_require__(9);

var _isNullish2 = _interopRequireDefault(_isNullish);

var _definition = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Given a JavaScript value and a GraphQL type, determine if the value will be
 * accepted for that type. This is primarily useful for validating the
 * runtime values of query variables.
 */
function isValidJSValue(value, type) {
  // A value must be provided if the type is non-null.
  if (type instanceof _definition.GraphQLNonNull) {
    if ((0, _isNullish2.default)(value)) {
      return ['Expected "' + String(type) + '", found null.'];
    }
    return isValidJSValue(value, type.ofType);
  }

  if ((0, _isNullish2.default)(value)) {
    return [];
  }

  // Lists accept a non-list value as a list of one.
  if (type instanceof _definition.GraphQLList) {
    var itemType = type.ofType;
    if ((0, _iterall.isCollection)(value)) {
      var errors = [];
      (0, _iterall.forEach)(value, function (item, index) {
        errors.push.apply(errors, isValidJSValue(item, itemType).map(function (error) {
          return 'In element #' + index + ': ' + error;
        }));
      });
      return errors;
    }
    return isValidJSValue(value, itemType);
  }

  // Input objects check each defined field.
  if (type instanceof _definition.GraphQLInputObjectType) {
    if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) !== 'object' || value === null) {
      return ['Expected "' + type.name + '", found not an object.'];
    }
    var fields = type.getFields();

    var _errors = [];

    // Ensure every provided field is defined.
    Object.keys(value).forEach(function (providedField) {
      if (!fields[providedField]) {
        _errors.push('In field "' + providedField + '": Unknown field.');
      }
    });

    // Ensure every defined field is valid.
    Object.keys(fields).forEach(function (fieldName) {
      var newErrors = isValidJSValue(value[fieldName], fields[fieldName].type);
      _errors.push.apply(_errors, newErrors.map(function (error) {
        return 'In field "' + fieldName + '": ' + error;
      }));
    });

    return _errors;
  }

  !(type instanceof _definition.GraphQLScalarType || type instanceof _definition.GraphQLEnumType) ? (0, _invariant2.default)(0, 'Must be input type') : void 0;

  // Scalar/Enum input checks to ensure the type can parse the value to
  // a non-null value.
  try {
    var parseResult = type.parseValue(value);
    if ((0, _isNullish2.default)(parseResult) && !type.isValidValue(value)) {
      return ['Expected type "' + type.name + '", found ' + JSON.stringify(value) + '.'];
    }
  } catch (error) {
    return ['Expected type "' + type.name + '", found ' + JSON.stringify(value) + ': ' + error.message];
  }

  return [];
}

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buildASTSchema = buildASTSchema;
exports.getDeprecationReason = getDeprecationReason;
exports.getDescription = getDescription;
exports.buildSchema = buildSchema;

var _invariant = __webpack_require__(2);

var _invariant2 = _interopRequireDefault(_invariant);

var _keyValMap = __webpack_require__(32);

var _keyValMap2 = _interopRequireDefault(_keyValMap);

var _valueFromAST = __webpack_require__(18);

var _lexer = __webpack_require__(24);

var _parser = __webpack_require__(20);

var _values = __webpack_require__(31);

var _kinds = __webpack_require__(3);

var Kind = _interopRequireWildcard(_kinds);

var _schema = __webpack_require__(5);

var _scalars = __webpack_require__(8);

var _definition = __webpack_require__(1);

var _directives = __webpack_require__(6);

var _introspection = __webpack_require__(10);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function buildWrappedType(innerType, inputTypeNode) {
  if (inputTypeNode.kind === Kind.LIST_TYPE) {
    return new _definition.GraphQLList(buildWrappedType(innerType, inputTypeNode.type));
  }
  if (inputTypeNode.kind === Kind.NON_NULL_TYPE) {
    var wrappedType = buildWrappedType(innerType, inputTypeNode.type);
    !!(wrappedType instanceof _definition.GraphQLNonNull) ? (0, _invariant2.default)(0, 'No nesting nonnull.') : void 0;
    return new _definition.GraphQLNonNull(wrappedType);
  }
  return innerType;
}

function getNamedTypeNode(typeNode) {
  var namedType = typeNode;
  while (namedType.kind === Kind.LIST_TYPE || namedType.kind === Kind.NON_NULL_TYPE) {
    namedType = namedType.type;
  }
  return namedType;
}

/**
 * This takes the ast of a schema document produced by the parse function in
 * src/language/parser.js.
 *
 * If no schema definition is provided, then it will look for types named Query
 * and Mutation.
 *
 * Given that AST it constructs a GraphQLSchema. The resulting schema
 * has no resolve methods, so execution will use default resolvers.
 */
function buildASTSchema(ast) {
  if (!ast || ast.kind !== Kind.DOCUMENT) {
    throw new Error('Must provide a document ast.');
  }

  var schemaDef = void 0;

  var typeDefs = [];
  var nodeMap = Object.create(null);
  var directiveDefs = [];
  for (var i = 0; i < ast.definitions.length; i++) {
    var d = ast.definitions[i];
    switch (d.kind) {
      case Kind.SCHEMA_DEFINITION:
        if (schemaDef) {
          throw new Error('Must provide only one schema definition.');
        }
        schemaDef = d;
        break;
      case Kind.SCALAR_TYPE_DEFINITION:
      case Kind.OBJECT_TYPE_DEFINITION:
      case Kind.INTERFACE_TYPE_DEFINITION:
      case Kind.ENUM_TYPE_DEFINITION:
      case Kind.UNION_TYPE_DEFINITION:
      case Kind.INPUT_OBJECT_TYPE_DEFINITION:
        var typeName = d.name.value;
        if (nodeMap[typeName]) {
          throw new Error('Type "' + typeName + '" was defined more than once.');
        }
        typeDefs.push(d);
        nodeMap[typeName] = d;
        break;
      case Kind.DIRECTIVE_DEFINITION:
        directiveDefs.push(d);
        break;
    }
  }

  var queryTypeName = void 0;
  var mutationTypeName = void 0;
  var subscriptionTypeName = void 0;
  if (schemaDef) {
    schemaDef.operationTypes.forEach(function (operationType) {
      var typeName = operationType.type.name.value;
      if (operationType.operation === 'query') {
        if (queryTypeName) {
          throw new Error('Must provide only one query type in schema.');
        }
        if (!nodeMap[typeName]) {
          throw new Error('Specified query type "' + typeName + '" not found in document.');
        }
        queryTypeName = typeName;
      } else if (operationType.operation === 'mutation') {
        if (mutationTypeName) {
          throw new Error('Must provide only one mutation type in schema.');
        }
        if (!nodeMap[typeName]) {
          throw new Error('Specified mutation type "' + typeName + '" not found in document.');
        }
        mutationTypeName = typeName;
      } else if (operationType.operation === 'subscription') {
        if (subscriptionTypeName) {
          throw new Error('Must provide only one subscription type in schema.');
        }
        if (!nodeMap[typeName]) {
          throw new Error('Specified subscription type "' + typeName + '" not found in document.');
        }
        subscriptionTypeName = typeName;
      }
    });
  } else {
    if (nodeMap.Query) {
      queryTypeName = 'Query';
    }
    if (nodeMap.Mutation) {
      mutationTypeName = 'Mutation';
    }
    if (nodeMap.Subscription) {
      subscriptionTypeName = 'Subscription';
    }
  }

  if (!queryTypeName) {
    throw new Error('Must provide schema definition with query type or a type named Query.');
  }

  var innerTypeMap = {
    String: _scalars.GraphQLString,
    Int: _scalars.GraphQLInt,
    Float: _scalars.GraphQLFloat,
    Boolean: _scalars.GraphQLBoolean,
    ID: _scalars.GraphQLID,
    __Schema: _introspection.__Schema,
    __Directive: _introspection.__Directive,
    __DirectiveLocation: _introspection.__DirectiveLocation,
    __Type: _introspection.__Type,
    __Field: _introspection.__Field,
    __InputValue: _introspection.__InputValue,
    __EnumValue: _introspection.__EnumValue,
    __TypeKind: _introspection.__TypeKind
  };

  var types = typeDefs.map(function (def) {
    return typeDefNamed(def.name.value);
  });

  var directives = directiveDefs.map(getDirective);

  // If specified directives were not explicitly declared, add them.
  if (!directives.some(function (directive) {
    return directive.name === 'skip';
  })) {
    directives.push(_directives.GraphQLSkipDirective);
  }

  if (!directives.some(function (directive) {
    return directive.name === 'include';
  })) {
    directives.push(_directives.GraphQLIncludeDirective);
  }

  if (!directives.some(function (directive) {
    return directive.name === 'deprecated';
  })) {
    directives.push(_directives.GraphQLDeprecatedDirective);
  }

  return new _schema.GraphQLSchema({
    query: getObjectType(nodeMap[queryTypeName]),
    mutation: mutationTypeName ? getObjectType(nodeMap[mutationTypeName]) : null,
    subscription: subscriptionTypeName ? getObjectType(nodeMap[subscriptionTypeName]) : null,
    types: types,
    directives: directives,
    astNode: schemaDef
  });

  function getDirective(directiveNode) {
    return new _directives.GraphQLDirective({
      name: directiveNode.name.value,
      description: getDescription(directiveNode),
      locations: directiveNode.locations.map(function (node) {
        return node.value;
      }),
      args: directiveNode.arguments && makeInputValues(directiveNode.arguments),
      astNode: directiveNode
    });
  }

  function getObjectType(typeNode) {
    var type = typeDefNamed(typeNode.name.value);
    !(type instanceof _definition.GraphQLObjectType) ? (0, _invariant2.default)(0, 'AST must provide object type.') : void 0;
    return type;
  }

  function produceType(typeNode) {
    var typeName = getNamedTypeNode(typeNode).name.value;
    var typeDef = typeDefNamed(typeName);
    return buildWrappedType(typeDef, typeNode);
  }

  function produceInputType(typeNode) {
    return (0, _definition.assertInputType)(produceType(typeNode));
  }

  function produceOutputType(typeNode) {
    return (0, _definition.assertOutputType)(produceType(typeNode));
  }

  function produceObjectType(typeNode) {
    var type = produceType(typeNode);
    !(type instanceof _definition.GraphQLObjectType) ? (0, _invariant2.default)(0, 'Expected Object type.') : void 0;
    return type;
  }

  function produceInterfaceType(typeNode) {
    var type = produceType(typeNode);
    !(type instanceof _definition.GraphQLInterfaceType) ? (0, _invariant2.default)(0, 'Expected Interface type.') : void 0;
    return type;
  }

  function typeDefNamed(typeName) {
    if (!innerTypeMap[typeName]) {
      if (!nodeMap[typeName]) {
        throw new Error('Type "' + typeName + '" not found in document.');
      }
      innerTypeMap[typeName] = makeSchemaDef(nodeMap[typeName]);
    }
    return innerTypeMap[typeName];
  }

  function makeSchemaDef(def) {
    switch (def.kind) {
      case Kind.OBJECT_TYPE_DEFINITION:
        return makeTypeDef(def);
      case Kind.INTERFACE_TYPE_DEFINITION:
        return makeInterfaceDef(def);
      case Kind.ENUM_TYPE_DEFINITION:
        return makeEnumDef(def);
      case Kind.UNION_TYPE_DEFINITION:
        return makeUnionDef(def);
      case Kind.SCALAR_TYPE_DEFINITION:
        return makeScalarDef(def);
      case Kind.INPUT_OBJECT_TYPE_DEFINITION:
        return makeInputObjectDef(def);
      default:
        throw new Error('Type kind "' + def.kind + '" not supported.');
    }
  }

  function makeTypeDef(def) {
    var typeName = def.name.value;
    return new _definition.GraphQLObjectType({
      name: typeName,
      description: getDescription(def),
      fields: function fields() {
        return makeFieldDefMap(def);
      },
      interfaces: function interfaces() {
        return makeImplementedInterfaces(def);
      },
      astNode: def
    });
  }

  function makeFieldDefMap(def) {
    return (0, _keyValMap2.default)(def.fields, function (field) {
      return field.name.value;
    }, function (field) {
      return {
        type: produceOutputType(field.type),
        description: getDescription(field),
        args: makeInputValues(field.arguments),
        deprecationReason: getDeprecationReason(field),
        astNode: field
      };
    });
  }

  function makeImplementedInterfaces(def) {
    return def.interfaces && def.interfaces.map(function (iface) {
      return produceInterfaceType(iface);
    });
  }

  function makeInputValues(values) {
    return (0, _keyValMap2.default)(values, function (value) {
      return value.name.value;
    }, function (value) {
      var type = produceInputType(value.type);
      return {
        type: type,
        description: getDescription(value),
        defaultValue: (0, _valueFromAST.valueFromAST)(value.defaultValue, type),
        astNode: value
      };
    });
  }

  function makeInterfaceDef(def) {
    return new _definition.GraphQLInterfaceType({
      name: def.name.value,
      description: getDescription(def),
      fields: function fields() {
        return makeFieldDefMap(def);
      },
      astNode: def,
      resolveType: cannotExecuteSchema
    });
  }

  function makeEnumDef(def) {
    return new _definition.GraphQLEnumType({
      name: def.name.value,
      description: getDescription(def),
      values: (0, _keyValMap2.default)(def.values, function (enumValue) {
        return enumValue.name.value;
      }, function (enumValue) {
        return {
          description: getDescription(enumValue),
          deprecationReason: getDeprecationReason(enumValue),
          astNode: enumValue
        };
      }),
      astNode: def
    });
  }

  function makeUnionDef(def) {
    return new _definition.GraphQLUnionType({
      name: def.name.value,
      description: getDescription(def),
      types: def.types.map(function (t) {
        return produceObjectType(t);
      }),
      resolveType: cannotExecuteSchema,
      astNode: def
    });
  }

  function makeScalarDef(def) {
    return new _definition.GraphQLScalarType({
      name: def.name.value,
      description: getDescription(def),
      astNode: def,
      serialize: function serialize() {
        return null;
      },
      // Note: validation calls the parse functions to determine if a
      // literal value is correct. Returning null would cause use of custom
      // scalars to always fail validation. Returning false causes them to
      // always pass validation.
      parseValue: function parseValue() {
        return false;
      },
      parseLiteral: function parseLiteral() {
        return false;
      }
    });
  }

  function makeInputObjectDef(def) {
    return new _definition.GraphQLInputObjectType({
      name: def.name.value,
      description: getDescription(def),
      fields: function fields() {
        return makeInputValues(def.fields);
      },
      astNode: def
    });
  }
}

/**
 * Given a field or enum value node, returns the string value for the
 * deprecation reason.
 */
function getDeprecationReason(node) {
  var deprecated = (0, _values.getDirectiveValues)(_directives.GraphQLDeprecatedDirective, node);
  return deprecated && deprecated.reason;
}

/**
 * Given an ast node, returns its string description based on a contiguous
 * block full-line of comments preceding it.
 */
function getDescription(node) {
  var loc = node.loc;
  if (!loc) {
    return;
  }
  var comments = [];
  var minSpaces = void 0;
  var token = loc.startToken.prev;
  while (token && token.kind === _lexer.TokenKind.COMMENT && token.next && token.prev && token.line + 1 === token.next.line && token.line !== token.prev.line) {
    var value = String(token.value);
    var spaces = leadingSpaces(value);
    if (minSpaces === undefined || spaces < minSpaces) {
      minSpaces = spaces;
    }
    comments.push(value);
    token = token.prev;
  }
  return comments.reverse().map(function (comment) {
    return comment.slice(minSpaces);
  }).join('\n');
}

/**
 * A helper function to build a GraphQLSchema directly from a source
 * document.
 */
function buildSchema(source) {
  return buildASTSchema((0, _parser.parse)(source));
}

// Count the number of spaces on the starting side of a string.
function leadingSpaces(str) {
  var i = 0;
  for (; i < str.length; i++) {
    if (str[i] !== ' ') {
      break;
    }
  }
  return i;
}

function cannotExecuteSchema() {
  throw new Error('Generated Schema cannot use Interface or Union types for execution.');
}

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "1d71438462d532b62b05cdd7e6d7197d.eot";

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "72217712eb8d28872e7069322f3fda23.eot";

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "0f3da1edf1b5c6a94a6ad948a7664451.eot";

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "58153ac7194e141d1e73ea88c6b63861.eot";

/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prismjs__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prismjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_prismjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prismjs_components_prism_graphql_js__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prismjs_components_prism_graphql_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prismjs_components_prism_graphql_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prismjs_components_prism_sql_js__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prismjs_components_prism_sql_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prismjs_components_prism_sql_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prismjs_themes_prism_twilight_css__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prismjs_themes_prism_twilight_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prismjs_themes_prism_twilight_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__graphql__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__reveal_js_js_reveal_js__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__reveal_js_js_reveal_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__reveal_js_js_reveal_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__reveal_js_css_reveal_css__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__reveal_js_css_reveal_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__reveal_js_css_reveal_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__reveal_js_css_theme_black_css__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__reveal_js_css_theme_black_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__reveal_js_css_theme_black_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__style_css__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__style_css__);






window.Reveal = __WEBPACK_IMPORTED_MODULE_5__reveal_js_js_reveal_js___default.a;


__WEBPACK_IMPORTED_MODULE_5__reveal_js_js_reveal_js___default.a.initialize();



// (async () => {
//     const test = await runQuery(`
//         query {
//             attendees {
//                 name
//                 profile {
//                     url
//                 }
//                 friends {
//                     name
//                 }
//             }
//             person (id: 1) {
//                 name
//             }
//             answer
//         }
//     `);
// })();


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {
/* **********************************************
     Begin prism-core.js
********************************************** */

var _self = (typeof window !== 'undefined')
	? window   // if in browser
	: (
		(typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope)
		? self // if in worker
		: {}   // if in node js
	);

/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 * MIT license http://www.opensource.org/licenses/mit-license.php/
 * @author Lea Verou http://lea.verou.me
 */

var Prism = (function(){

// Private helper vars
var lang = /\blang(?:uage)?-(\w+)\b/i;
var uniqueId = 0;

var _ = _self.Prism = {
	manual: _self.Prism && _self.Prism.manual,
	disableWorkerMessageHandler: _self.Prism && _self.Prism.disableWorkerMessageHandler,
	util: {
		encode: function (tokens) {
			if (tokens instanceof Token) {
				return new Token(tokens.type, _.util.encode(tokens.content), tokens.alias);
			} else if (_.util.type(tokens) === 'Array') {
				return tokens.map(_.util.encode);
			} else {
				return tokens.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/\u00a0/g, ' ');
			}
		},

		type: function (o) {
			return Object.prototype.toString.call(o).match(/\[object (\w+)\]/)[1];
		},

		objId: function (obj) {
			if (!obj['__id']) {
				Object.defineProperty(obj, '__id', { value: ++uniqueId });
			}
			return obj['__id'];
		},

		// Deep clone a language definition (e.g. to extend it)
		clone: function (o) {
			var type = _.util.type(o);

			switch (type) {
				case 'Object':
					var clone = {};

					for (var key in o) {
						if (o.hasOwnProperty(key)) {
							clone[key] = _.util.clone(o[key]);
						}
					}

					return clone;

				case 'Array':
					return o.map(function(v) { return _.util.clone(v); });
			}

			return o;
		}
	},

	languages: {
		extend: function (id, redef) {
			var lang = _.util.clone(_.languages[id]);

			for (var key in redef) {
				lang[key] = redef[key];
			}

			return lang;
		},

		/**
		 * Insert a token before another token in a language literal
		 * As this needs to recreate the object (we cannot actually insert before keys in object literals),
		 * we cannot just provide an object, we need anobject and a key.
		 * @param inside The key (or language id) of the parent
		 * @param before The key to insert before. If not provided, the function appends instead.
		 * @param insert Object with the key/value pairs to insert
		 * @param root The object that contains `inside`. If equal to Prism.languages, it can be omitted.
		 */
		insertBefore: function (inside, before, insert, root) {
			root = root || _.languages;
			var grammar = root[inside];

			if (arguments.length == 2) {
				insert = arguments[1];

				for (var newToken in insert) {
					if (insert.hasOwnProperty(newToken)) {
						grammar[newToken] = insert[newToken];
					}
				}

				return grammar;
			}

			var ret = {};

			for (var token in grammar) {

				if (grammar.hasOwnProperty(token)) {

					if (token == before) {

						for (var newToken in insert) {

							if (insert.hasOwnProperty(newToken)) {
								ret[newToken] = insert[newToken];
							}
						}
					}

					ret[token] = grammar[token];
				}
			}

			// Update references in other language definitions
			_.languages.DFS(_.languages, function(key, value) {
				if (value === root[inside] && key != inside) {
					this[key] = ret;
				}
			});

			return root[inside] = ret;
		},

		// Traverse a language definition with Depth First Search
		DFS: function(o, callback, type, visited) {
			visited = visited || {};
			for (var i in o) {
				if (o.hasOwnProperty(i)) {
					callback.call(o, i, o[i], type || i);

					if (_.util.type(o[i]) === 'Object' && !visited[_.util.objId(o[i])]) {
						visited[_.util.objId(o[i])] = true;
						_.languages.DFS(o[i], callback, null, visited);
					}
					else if (_.util.type(o[i]) === 'Array' && !visited[_.util.objId(o[i])]) {
						visited[_.util.objId(o[i])] = true;
						_.languages.DFS(o[i], callback, i, visited);
					}
				}
			}
		}
	},
	plugins: {},

	highlightAll: function(async, callback) {
		var env = {
			callback: callback,
			selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
		};

		_.hooks.run("before-highlightall", env);

		var elements = env.elements || document.querySelectorAll(env.selector);

		for (var i=0, element; element = elements[i++];) {
			_.highlightElement(element, async === true, env.callback);
		}
	},

	highlightElement: function(element, async, callback) {
		// Find language
		var language, grammar, parent = element;

		while (parent && !lang.test(parent.className)) {
			parent = parent.parentNode;
		}

		if (parent) {
			language = (parent.className.match(lang) || [,''])[1].toLowerCase();
			grammar = _.languages[language];
		}

		// Set language on the element, if not present
		element.className = element.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;

		if (element.parentNode) {
			// Set language on the parent, for styling
			parent = element.parentNode;

			if (/pre/i.test(parent.nodeName)) {
				parent.className = parent.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;
			}
		}

		var code = element.textContent;

		var env = {
			element: element,
			language: language,
			grammar: grammar,
			code: code
		};

		_.hooks.run('before-sanity-check', env);

		if (!env.code || !env.grammar) {
			if (env.code) {
				_.hooks.run('before-highlight', env);
				env.element.textContent = env.code;
				_.hooks.run('after-highlight', env);
			}
			_.hooks.run('complete', env);
			return;
		}

		_.hooks.run('before-highlight', env);

		if (async && _self.Worker) {
			var worker = new Worker(_.filename);

			worker.onmessage = function(evt) {
				env.highlightedCode = evt.data;

				_.hooks.run('before-insert', env);

				env.element.innerHTML = env.highlightedCode;

				callback && callback.call(env.element);
				_.hooks.run('after-highlight', env);
				_.hooks.run('complete', env);
			};

			worker.postMessage(JSON.stringify({
				language: env.language,
				code: env.code,
				immediateClose: true
			}));
		}
		else {
			env.highlightedCode = _.highlight(env.code, env.grammar, env.language);

			_.hooks.run('before-insert', env);

			env.element.innerHTML = env.highlightedCode;

			callback && callback.call(element);

			_.hooks.run('after-highlight', env);
			_.hooks.run('complete', env);
		}
	},

	highlight: function (text, grammar, language) {
		var tokens = _.tokenize(text, grammar);
		return Token.stringify(_.util.encode(tokens), language);
	},

	matchGrammar: function (text, strarr, grammar, index, startPos, oneshot, target) {
		var Token = _.Token;

		for (var token in grammar) {
			if(!grammar.hasOwnProperty(token) || !grammar[token]) {
				continue;
			}

			if (token == target) {
				return;
			}

			var patterns = grammar[token];
			patterns = (_.util.type(patterns) === "Array") ? patterns : [patterns];

			for (var j = 0; j < patterns.length; ++j) {
				var pattern = patterns[j],
					inside = pattern.inside,
					lookbehind = !!pattern.lookbehind,
					greedy = !!pattern.greedy,
					lookbehindLength = 0,
					alias = pattern.alias;

				if (greedy && !pattern.pattern.global) {
					// Without the global flag, lastIndex won't work
					var flags = pattern.pattern.toString().match(/[imuy]*$/)[0];
					pattern.pattern = RegExp(pattern.pattern.source, flags + "g");
				}

				pattern = pattern.pattern || pattern;

				// Don’t cache length as it changes during the loop
				for (var i = index, pos = startPos; i < strarr.length; pos += strarr[i].length, ++i) {

					var str = strarr[i];

					if (strarr.length > text.length) {
						// Something went terribly wrong, ABORT, ABORT!
						return;
					}

					if (str instanceof Token) {
						continue;
					}

					pattern.lastIndex = 0;

					var match = pattern.exec(str),
					    delNum = 1;

					// Greedy patterns can override/remove up to two previously matched tokens
					if (!match && greedy && i != strarr.length - 1) {
						pattern.lastIndex = pos;
						match = pattern.exec(text);
						if (!match) {
							break;
						}

						var from = match.index + (lookbehind ? match[1].length : 0),
						    to = match.index + match[0].length,
						    k = i,
						    p = pos;

						for (var len = strarr.length; k < len && (p < to || (!strarr[k].type && !strarr[k - 1].greedy)); ++k) {
							p += strarr[k].length;
							// Move the index i to the element in strarr that is closest to from
							if (from >= p) {
								++i;
								pos = p;
							}
						}

						/*
						 * If strarr[i] is a Token, then the match starts inside another Token, which is invalid
						 * If strarr[k - 1] is greedy we are in conflict with another greedy pattern
						 */
						if (strarr[i] instanceof Token || strarr[k - 1].greedy) {
							continue;
						}

						// Number of tokens to delete and replace with the new match
						delNum = k - i;
						str = text.slice(pos, p);
						match.index -= pos;
					}

					if (!match) {
						if (oneshot) {
							break;
						}

						continue;
					}

					if(lookbehind) {
						lookbehindLength = match[1].length;
					}

					var from = match.index + lookbehindLength,
					    match = match[0].slice(lookbehindLength),
					    to = from + match.length,
					    before = str.slice(0, from),
					    after = str.slice(to);

					var args = [i, delNum];

					if (before) {
						++i;
						pos += before.length;
						args.push(before);
					}

					var wrapped = new Token(token, inside? _.tokenize(match, inside) : match, alias, match, greedy);

					args.push(wrapped);

					if (after) {
						args.push(after);
					}

					Array.prototype.splice.apply(strarr, args);

					if (delNum != 1)
						_.matchGrammar(text, strarr, grammar, i, pos, true, token);

					if (oneshot)
						break;
				}
			}
		}
	},

	tokenize: function(text, grammar, language) {
		var strarr = [text];

		var rest = grammar.rest;

		if (rest) {
			for (var token in rest) {
				grammar[token] = rest[token];
			}

			delete grammar.rest;
		}

		_.matchGrammar(text, strarr, grammar, 0, 0, false);

		return strarr;
	},

	hooks: {
		all: {},

		add: function (name, callback) {
			var hooks = _.hooks.all;

			hooks[name] = hooks[name] || [];

			hooks[name].push(callback);
		},

		run: function (name, env) {
			var callbacks = _.hooks.all[name];

			if (!callbacks || !callbacks.length) {
				return;
			}

			for (var i=0, callback; callback = callbacks[i++];) {
				callback(env);
			}
		}
	}
};

var Token = _.Token = function(type, content, alias, matchedStr, greedy) {
	this.type = type;
	this.content = content;
	this.alias = alias;
	// Copy of the full string this token was created from
	this.length = (matchedStr || "").length|0;
	this.greedy = !!greedy;
};

Token.stringify = function(o, language, parent) {
	if (typeof o == 'string') {
		return o;
	}

	if (_.util.type(o) === 'Array') {
		return o.map(function(element) {
			return Token.stringify(element, language, o);
		}).join('');
	}

	var env = {
		type: o.type,
		content: Token.stringify(o.content, language, parent),
		tag: 'span',
		classes: ['token', o.type],
		attributes: {},
		language: language,
		parent: parent
	};

	if (o.alias) {
		var aliases = _.util.type(o.alias) === 'Array' ? o.alias : [o.alias];
		Array.prototype.push.apply(env.classes, aliases);
	}

	_.hooks.run('wrap', env);

	var attributes = Object.keys(env.attributes).map(function(name) {
		return name + '="' + (env.attributes[name] || '').replace(/"/g, '&quot;') + '"';
	}).join(' ');

	return '<' + env.tag + ' class="' + env.classes.join(' ') + '"' + (attributes ? ' ' + attributes : '') + '>' + env.content + '</' + env.tag + '>';

};

if (!_self.document) {
	if (!_self.addEventListener) {
		// in Node.js
		return _self.Prism;
	}

	if (!_.disableWorkerMessageHandler) {
		// In worker
		_self.addEventListener('message', function (evt) {
			var message = JSON.parse(evt.data),
				lang = message.language,
				code = message.code,
				immediateClose = message.immediateClose;

			_self.postMessage(_.highlight(code, _.languages[lang], lang));
			if (immediateClose) {
				_self.close();
			}
		}, false);
	}

	return _self.Prism;
}

//Get current script and highlight
var script = document.currentScript || [].slice.call(document.getElementsByTagName("script")).pop();

if (script) {
	_.filename = script.src;

	if (!_.manual && !script.hasAttribute('data-manual')) {
		if(document.readyState !== "loading") {
			if (window.requestAnimationFrame) {
				window.requestAnimationFrame(_.highlightAll);
			} else {
				window.setTimeout(_.highlightAll, 16);
			}
		}
		else {
			document.addEventListener('DOMContentLoaded', _.highlightAll);
		}
	}
}

return _self.Prism;

})();

if (typeof module !== 'undefined' && module.exports) {
	module.exports = Prism;
}

// hack for components to work correctly in node.js
if (typeof global !== 'undefined') {
	global.Prism = Prism;
}


/* **********************************************
     Begin prism-markup.js
********************************************** */

Prism.languages.markup = {
	'comment': /<!--[\s\S]*?-->/,
	'prolog': /<\?[\s\S]+?\?>/,
	'doctype': /<!DOCTYPE[\s\S]+?>/i,
	'cdata': /<!\[CDATA\[[\s\S]*?]]>/i,
	'tag': {
		pattern: /<\/?(?!\d)[^\s>\/=$<]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i,
		inside: {
			'tag': {
				pattern: /^<\/?[^\s>\/]+/i,
				inside: {
					'punctuation': /^<\/?/,
					'namespace': /^[^\s>\/:]+:/
				}
			},
			'attr-value': {
				pattern: /=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/i,
				inside: {
					'punctuation': [
						/^=/,
						{
							pattern: /(^|[^\\])["']/,
							lookbehind: true
						}
					]
				}
			},
			'punctuation': /\/?>/,
			'attr-name': {
				pattern: /[^\s>\/]+/,
				inside: {
					'namespace': /^[^\s>\/:]+:/
				}
			}

		}
	},
	'entity': /&#?[\da-z]{1,8};/i
};

Prism.languages.markup['tag'].inside['attr-value'].inside['entity'] =
	Prism.languages.markup['entity'];

// Plugin to make entity title show the real entity, idea by Roman Komarov
Prism.hooks.add('wrap', function(env) {

	if (env.type === 'entity') {
		env.attributes['title'] = env.content.replace(/&amp;/, '&');
	}
});

Prism.languages.xml = Prism.languages.markup;
Prism.languages.html = Prism.languages.markup;
Prism.languages.mathml = Prism.languages.markup;
Prism.languages.svg = Prism.languages.markup;


/* **********************************************
     Begin prism-css.js
********************************************** */

Prism.languages.css = {
	'comment': /\/\*[\s\S]*?\*\//,
	'atrule': {
		pattern: /@[\w-]+?.*?(?:;|(?=\s*\{))/i,
		inside: {
			'rule': /@[\w-]+/
			// See rest below
		}
	},
	'url': /url\((?:(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,
	'selector': /[^{}\s][^{};]*?(?=\s*\{)/,
	'string': {
		pattern: /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
		greedy: true
	},
	'property': /[\w-]+(?=\s*:)/i,
	'important': /\B!important\b/i,
	'function': /[-a-z0-9]+(?=\()/i,
	'punctuation': /[(){};:]/
};

Prism.languages.css['atrule'].inside.rest = Prism.util.clone(Prism.languages.css);

if (Prism.languages.markup) {
	Prism.languages.insertBefore('markup', 'tag', {
		'style': {
			pattern: /(<style[\s\S]*?>)[\s\S]*?(?=<\/style>)/i,
			lookbehind: true,
			inside: Prism.languages.css,
			alias: 'language-css'
		}
	});
	
	Prism.languages.insertBefore('inside', 'attr-value', {
		'style-attr': {
			pattern: /\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,
			inside: {
				'attr-name': {
					pattern: /^\s*style/i,
					inside: Prism.languages.markup.tag.inside
				},
				'punctuation': /^\s*=\s*['"]|['"]\s*$/,
				'attr-value': {
					pattern: /.+/i,
					inside: Prism.languages.css
				}
			},
			alias: 'language-css'
		}
	}, Prism.languages.markup.tag);
}

/* **********************************************
     Begin prism-clike.js
********************************************** */

Prism.languages.clike = {
	'comment': [
		{
			pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
			lookbehind: true
		},
		{
			pattern: /(^|[^\\:])\/\/.*/,
			lookbehind: true
		}
	],
	'string': {
		pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
		greedy: true
	},
	'class-name': {
		pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,
		lookbehind: true,
		inside: {
			punctuation: /[.\\]/
		}
	},
	'keyword': /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
	'boolean': /\b(?:true|false)\b/,
	'function': /[a-z0-9_]+(?=\()/i,
	'number': /\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)\b/i,
	'operator': /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,
	'punctuation': /[{}[\];(),.:]/
};


/* **********************************************
     Begin prism-javascript.js
********************************************** */

Prism.languages.javascript = Prism.languages.extend('clike', {
	'keyword': /\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,
	'number': /\b-?(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+|\d*\.?\d+(?:[Ee][+-]?\d+)?|NaN|Infinity)\b/,
	// Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
	'function': /[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*(?=\s*\()/i,
	'operator': /-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/
});

Prism.languages.insertBefore('javascript', 'keyword', {
	'regex': {
		pattern: /(^|[^/])\/(?!\/)(\[[^\]\r\n]+]|\\.|[^/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,
		lookbehind: true,
		greedy: true
	},
	// This must be declared before keyword because we use "function" inside the look-forward
	'function-variable': {
		pattern: /[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*(?=\s*=\s*(?:function\b|(?:\([^()]*\)|[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*)\s*=>))/i,
		alias: 'function'
	}
});

Prism.languages.insertBefore('javascript', 'string', {
	'template-string': {
		pattern: /`(?:\\[\s\S]|[^\\`])*`/,
		greedy: true,
		inside: {
			'interpolation': {
				pattern: /\$\{[^}]+\}/,
				inside: {
					'interpolation-punctuation': {
						pattern: /^\$\{|\}$/,
						alias: 'punctuation'
					},
					rest: Prism.languages.javascript
				}
			},
			'string': /[\s\S]+/
		}
	}
});

if (Prism.languages.markup) {
	Prism.languages.insertBefore('markup', 'tag', {
		'script': {
			pattern: /(<script[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,
			lookbehind: true,
			inside: Prism.languages.javascript,
			alias: 'language-javascript'
		}
	});
}

Prism.languages.js = Prism.languages.javascript;


/* **********************************************
     Begin prism-file-highlight.js
********************************************** */

(function () {
	if (typeof self === 'undefined' || !self.Prism || !self.document || !document.querySelector) {
		return;
	}

	self.Prism.fileHighlight = function() {

		var Extensions = {
			'js': 'javascript',
			'py': 'python',
			'rb': 'ruby',
			'ps1': 'powershell',
			'psm1': 'powershell',
			'sh': 'bash',
			'bat': 'batch',
			'h': 'c',
			'tex': 'latex'
		};

		Array.prototype.slice.call(document.querySelectorAll('pre[data-src]')).forEach(function (pre) {
			var src = pre.getAttribute('data-src');

			var language, parent = pre;
			var lang = /\blang(?:uage)?-(?!\*)(\w+)\b/i;
			while (parent && !lang.test(parent.className)) {
				parent = parent.parentNode;
			}

			if (parent) {
				language = (pre.className.match(lang) || [, ''])[1];
			}

			if (!language) {
				var extension = (src.match(/\.(\w+)$/) || [, ''])[1];
				language = Extensions[extension] || extension;
			}

			var code = document.createElement('code');
			code.className = 'language-' + language;

			pre.textContent = '';

			code.textContent = 'Loading…';

			pre.appendChild(code);

			var xhr = new XMLHttpRequest();

			xhr.open('GET', src, true);

			xhr.onreadystatechange = function () {
				if (xhr.readyState == 4) {

					if (xhr.status < 400 && xhr.responseText) {
						code.textContent = xhr.responseText;

						Prism.highlightElement(code);
					}
					else if (xhr.status >= 400) {
						code.textContent = '✖ Error ' + xhr.status + ' while fetching file: ' + xhr.statusText;
					}
					else {
						code.textContent = '✖ Error: File does not exist or is empty';
					}
				}
			};

			xhr.send(null);
		});

	};

	document.addEventListener('DOMContentLoaded', self.Prism.fileHighlight);

})();

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(71)))

/***/ }),
/* 71 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 72 */
/***/ (function(module, exports) {

Prism.languages.graphql = {
	'comment': /#.*/,
	'string': {
		pattern: /"(?:\\.|[^\\"\r\n])*"/,
		greedy: true
	},
	'number': /(?:\B-|\b)\d+(?:\.\d+)?(?:[eE][+-]?\d+)?\b/,
	'boolean': /\b(?:true|false)\b/,
	'variable': /\$[a-z_]\w*/i,
	'directive': {
		pattern: /@[a-z_]\w*/i,
		alias: 'function'
	},
	'attr-name': /[a-z_]\w*(?=\s*:)/i,
	'keyword': [
		{
			pattern: /(fragment\s+(?!on)[a-z_]\w*\s+|\.{3}\s*)on\b/,
			lookbehind: true
		},
		/\b(?:query|fragment|mutation)\b/
	],
	'operator': /!|=|\.{3}/,
	'punctuation': /[!(){}\[\]:=,]/
};

/***/ }),
/* 73 */
/***/ (function(module, exports) {

Prism.languages.sql= {
	'comment': {
		pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,
		lookbehind: true
	},
	'string' : {
		pattern: /(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\])*\2/,
		greedy: true,
		lookbehind: true
	},
	'variable': /@[\w.$]+|@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/,
	'function': /\b(?:COUNT|SUM|AVG|MIN|MAX|FIRST|LAST|UCASE|LCASE|MID|LEN|ROUND|NOW|FORMAT)(?=\s*\()/i, // Should we highlight user defined functions too?
	'keyword': /\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR VARYING|CHARACTER (?:SET|VARYING)|CHARSET|CHECK|CHECKPOINT|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMN|COLUMNS|COMMENT|COMMIT|COMMITTED|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS|CONTAINSTABLE|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|DATA(?:BASES?)?|DATE(?:TIME)?|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITER(?:S)?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE(?: PRECISION)?|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE KEY|ELSE|ENABLE|ENCLOSED BY|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPE(?:D BY)?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|IDENTITY(?:_INSERT|COL)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTO|INVOKER|ISOLATION LEVEL|JOIN|KEYS?|KILL|LANGUAGE SQL|LAST|LEFT|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MODIFIES SQL DATA|MODIFY|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL(?: CHAR VARYING| CHARACTER(?: VARYING)?| VARCHAR)?|NATURAL|NCHAR(?: VARCHAR)?|NEXT|NO(?: SQL|CHECK|CYCLE)?|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READ(?:S SQL DATA|TEXT)?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEATABLE|REPLICATION|REQUIRE|RESTORE|RESTRICT|RETURNS?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE MODE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|START(?:ING BY)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED BY|TEXT(?:SIZE)?|THEN|TIMESTAMP|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNPIVOT|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?)\b/i,
	'boolean': /\b(?:TRUE|FALSE|NULL)\b/i,
	'number': /\b-?(?:0x)?\d*\.?[\da-f]+\b/,
	'operator': /[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|IN|LIKE|NOT|OR|IS|DIV|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,
	'punctuation': /[;[\]()`,.]/
};

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(75);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(19)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../css-loader/index.js!./prism-twilight.css", function() {
			var newContent = require("!!../../css-loader/index.js!./prism-twilight.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)(undefined);
// imports


// module
exports.push([module.i, "/**\n * prism.js Twilight theme\n * Based (more or less) on the Twilight theme originally of Textmate fame.\n * @author Remy Bach\n */\ncode[class*=\"language-\"],\npre[class*=\"language-\"] {\n\tcolor: white;\n\tbackground: none;\n\tfont-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;\n\ttext-align: left;\n\ttext-shadow: 0 -.1em .2em black;\n\twhite-space: pre;\n\tword-spacing: normal;\n\tword-break: normal;\n\tword-wrap: normal;\n\tline-height: 1.5;\n\n\t-moz-tab-size: 4;\n\t-o-tab-size: 4;\n\ttab-size: 4;\n\n\t-webkit-hyphens: none;\n\t-moz-hyphens: none;\n\t-ms-hyphens: none;\n\thyphens: none;\n}\n\npre[class*=\"language-\"],\n:not(pre) > code[class*=\"language-\"] {\n\tbackground: hsl(0, 0%, 8%); /* #141414 */\n}\n\n/* Code blocks */\npre[class*=\"language-\"] {\n\tborder-radius: .5em;\n\tborder: .3em solid hsl(0, 0%, 33%); /* #282A2B */\n\tbox-shadow: 1px 1px .5em black inset;\n\tmargin: .5em 0;\n\toverflow: auto;\n\tpadding: 1em;\n}\n\npre[class*=\"language-\"]::-moz-selection {\n\t/* Firefox */\n\tbackground: hsl(200, 4%, 16%); /* #282A2B */\n}\n\npre[class*=\"language-\"]::selection {\n\t/* Safari */\n\tbackground: hsl(200, 4%, 16%); /* #282A2B */\n}\n\n/* Text Selection colour */\npre[class*=\"language-\"]::-moz-selection, pre[class*=\"language-\"] ::-moz-selection,\ncode[class*=\"language-\"]::-moz-selection, code[class*=\"language-\"] ::-moz-selection {\n\ttext-shadow: none;\n\tbackground: hsla(0, 0%, 93%, 0.15); /* #EDEDED */\n}\n\npre[class*=\"language-\"]::selection, pre[class*=\"language-\"] ::selection,\ncode[class*=\"language-\"]::selection, code[class*=\"language-\"] ::selection {\n\ttext-shadow: none;\n\tbackground: hsla(0, 0%, 93%, 0.15); /* #EDEDED */\n}\n\n/* Inline code */\n:not(pre) > code[class*=\"language-\"] {\n\tborder-radius: .3em;\n\tborder: .13em solid hsl(0, 0%, 33%); /* #545454 */\n\tbox-shadow: 1px 1px .3em -.1em black inset;\n\tpadding: .15em .2em .05em;\n\twhite-space: normal;\n}\n\n.token.comment,\n.token.prolog,\n.token.doctype,\n.token.cdata {\n\tcolor: hsl(0, 0%, 47%); /* #777777 */\n}\n\n.token.punctuation {\n\topacity: .7;\n}\n\n.namespace {\n\topacity: .7;\n}\n\n.token.tag,\n.token.boolean,\n.token.number,\n.token.deleted {\n\tcolor: hsl(14, 58%, 55%); /* #CF6A4C */\n}\n\n.token.keyword,\n.token.property,\n.token.selector,\n.token.constant,\n.token.symbol,\n.token.builtin {\n\tcolor: hsl(53, 89%, 79%); /* #F9EE98 */\n}\n\n.token.attr-name,\n.token.attr-value,\n.token.string,\n.token.char,\n.token.operator,\n.token.entity,\n.token.url,\n.language-css .token.string,\n.style .token.string,\n.token.variable,\n.token.inserted {\n\tcolor: hsl(76, 21%, 52%); /* #8F9D6A */\n}\n\n.token.atrule {\n\tcolor: hsl(218, 22%, 55%); /* #7587A6 */\n}\n\n.token.regex,\n.token.important {\n\tcolor: hsl(42, 75%, 65%); /* #E9C062 */\n}\n\n.token.important,\n.token.bold {\n\tfont-weight: bold;\n}\n.token.italic {\n\tfont-style: italic;\n}\n\n.token.entity {\n\tcursor: help;\n}\n\npre[data-line] {\n\tpadding: 1em 0 1em 3em;\n\tposition: relative;\n}\n\n/* Markup */\n.language-markup .token.tag,\n.language-markup .token.attr-name,\n.language-markup .token.punctuation {\n\tcolor: hsl(33, 33%, 52%); /* #AC885B */\n}\n\n/* Make the tokens sit above the line highlight so the colours don't look faded. */\n.token {\n\tposition: relative;\n\tz-index: 1;\n}\n\n.line-highlight {\n\tbackground: hsla(0, 0%, 33%, 0.25); /* #545454 */\n\tbackground: linear-gradient(to right, hsla(0, 0%, 33%, .1) 70%, hsla(0, 0%, 33%, 0)); /* #545454 */\n\tborder-bottom: 1px dashed hsl(0, 0%, 33%); /* #545454 */\n\tborder-top: 1px dashed hsl(0, 0%, 33%); /* #545454 */\n\tleft: 0;\n\tline-height: inherit;\n\tmargin-top: 0.75em; /* Same as .prism’s padding-top */\n\tpadding: inherit 0;\n\tpointer-events: none;\n\tposition: absolute;\n\tright: 0;\n\twhite-space: pre;\n\tz-index: 0;\n}\n\n.line-highlight:before,\n.line-highlight[data-end]:after {\n\tbackground-color: hsl(215, 15%, 59%); /* #8794A6 */\n\tborder-radius: 999px;\n\tbox-shadow: 0 1px white;\n\tcolor: hsl(24, 20%, 95%); /* #F5F2F0 */\n\tcontent: attr(data-start);\n\tfont: bold 65%/1.5 sans-serif;\n\tleft: .6em;\n\tmin-width: 1em;\n\tpadding: 0 .5em;\n\tposition: absolute;\n\ttext-align: center;\n\ttext-shadow: none;\n\ttop: .4em;\n\tvertical-align: .3em;\n}\n\n.line-highlight[data-end]:after {\n\tbottom: .4em;\n\tcontent: attr(data-end);\n\ttop: auto;\n}\n", ""]);

// exports


/***/ }),
/* 76 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__people__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__people___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__people__);




const schemaString = `
schema {
    query: RootQueryType
}

# A Profile
type Profile {
    url: String!
    picture: String!
}

# A Person
type Person {
    name: String!
    profile: Profile!
    id: Int!
    friends: [Person]
}

type RootQueryType {
    attendees: [Person]
    person(
        # The id to look for
        id: Int!
    ): Person
    answer: Int!
}`;
/* unused harmony export schemaString */


const schema = Object(__WEBPACK_IMPORTED_MODULE_0_graphql__["buildSchema"])(schemaString);

class Profile {
    constructor(data) {
        this.profile = data;
    }
    url() {
        return this.profile.url;
    }
    photo() {
        return this.profile.photo;
    }
};

class Person {
    constructor(data) {
        this.person = data;
    }

    name() {
        return this.person.name;
    }
    profile() {
        return new Profile({
            url: this.person.profile,
            photo: this.person.photo
        });
    }
    id() {
        return this.person.id;
    }
    friends() {
        return this.person.friends.map(id => __WEBPACK_IMPORTED_MODULE_1__people___default.a[id]);
    }
};

const root = {
    attendees() {
        return Object.keys(__WEBPACK_IMPORTED_MODULE_1__people___default.a).map(id => new Person(__WEBPACK_IMPORTED_MODULE_1__people___default.a[id]));
    },
    person(args) {
        return __WEBPACK_IMPORTED_MODULE_1__people___default.a.hasOwnProperty(args.id) ? __WEBPACK_IMPORTED_MODULE_1__people___default.a[args.id] : null;
    },
    async answer() {
        const response = await fetch('/secretNumber.txt');
        const secret = await response.text();
        const number = parseInt(secret, 10);

        return number;
    },
};

/* unused harmony default export */ var _unused_webpack_default_export = (async requestString => Object(__WEBPACK_IMPORTED_MODULE_0_graphql__["graphql"])(schema, requestString, root));



/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphql = __webpack_require__(79);

Object.defineProperty(exports, 'graphql', {
  enumerable: true,
  get: function get() {
    return _graphql.graphql;
  }
});

var _type = __webpack_require__(83);

Object.defineProperty(exports, 'GraphQLSchema', {
  enumerable: true,
  get: function get() {
    return _type.GraphQLSchema;
  }
});
Object.defineProperty(exports, 'GraphQLScalarType', {
  enumerable: true,
  get: function get() {
    return _type.GraphQLScalarType;
  }
});
Object.defineProperty(exports, 'GraphQLObjectType', {
  enumerable: true,
  get: function get() {
    return _type.GraphQLObjectType;
  }
});
Object.defineProperty(exports, 'GraphQLInterfaceType', {
  enumerable: true,
  get: function get() {
    return _type.GraphQLInterfaceType;
  }
});
Object.defineProperty(exports, 'GraphQLUnionType', {
  enumerable: true,
  get: function get() {
    return _type.GraphQLUnionType;
  }
});
Object.defineProperty(exports, 'GraphQLEnumType', {
  enumerable: true,
  get: function get() {
    return _type.GraphQLEnumType;
  }
});
Object.defineProperty(exports, 'GraphQLInputObjectType', {
  enumerable: true,
  get: function get() {
    return _type.GraphQLInputObjectType;
  }
});
Object.defineProperty(exports, 'GraphQLList', {
  enumerable: true,
  get: function get() {
    return _type.GraphQLList;
  }
});
Object.defineProperty(exports, 'GraphQLNonNull', {
  enumerable: true,
  get: function get() {
    return _type.GraphQLNonNull;
  }
});
Object.defineProperty(exports, 'GraphQLDirective', {
  enumerable: true,
  get: function get() {
    return _type.GraphQLDirective;
  }
});
Object.defineProperty(exports, 'TypeKind', {
  enumerable: true,
  get: function get() {
    return _type.TypeKind;
  }
});
Object.defineProperty(exports, 'DirectiveLocation', {
  enumerable: true,
  get: function get() {
    return _type.DirectiveLocation;
  }
});
Object.defineProperty(exports, 'GraphQLInt', {
  enumerable: true,
  get: function get() {
    return _type.GraphQLInt;
  }
});
Object.defineProperty(exports, 'GraphQLFloat', {
  enumerable: true,
  get: function get() {
    return _type.GraphQLFloat;
  }
});
Object.defineProperty(exports, 'GraphQLString', {
  enumerable: true,
  get: function get() {
    return _type.GraphQLString;
  }
});
Object.defineProperty(exports, 'GraphQLBoolean', {
  enumerable: true,
  get: function get() {
    return _type.GraphQLBoolean;
  }
});
Object.defineProperty(exports, 'GraphQLID', {
  enumerable: true,
  get: function get() {
    return _type.GraphQLID;
  }
});
Object.defineProperty(exports, 'specifiedDirectives', {
  enumerable: true,
  get: function get() {
    return _type.specifiedDirectives;
  }
});
Object.defineProperty(exports, 'GraphQLIncludeDirective', {
  enumerable: true,
  get: function get() {
    return _type.GraphQLIncludeDirective;
  }
});
Object.defineProperty(exports, 'GraphQLSkipDirective', {
  enumerable: true,
  get: function get() {
    return _type.GraphQLSkipDirective;
  }
});
Object.defineProperty(exports, 'GraphQLDeprecatedDirective', {
  enumerable: true,
  get: function get() {
    return _type.GraphQLDeprecatedDirective;
  }
});
Object.defineProperty(exports, 'DEFAULT_DEPRECATION_REASON', {
  enumerable: true,
  get: function get() {
    return _type.DEFAULT_DEPRECATION_REASON;
  }
});
Object.defineProperty(exports, 'SchemaMetaFieldDef', {
  enumerable: true,
  get: function get() {
    return _type.SchemaMetaFieldDef;
  }
});
Object.defineProperty(exports, 'TypeMetaFieldDef', {
  enumerable: true,
  get: function get() {
    return _type.TypeMetaFieldDef;
  }
});
Object.defineProperty(exports, 'TypeNameMetaFieldDef', {
  enumerable: true,
  get: function get() {
    return _type.TypeNameMetaFieldDef;
  }
});
Object.defineProperty(exports, '__Schema', {
  enumerable: true,
  get: function get() {
    return _type.__Schema;
  }
});
Object.defineProperty(exports, '__Directive', {
  enumerable: true,
  get: function get() {
    return _type.__Directive;
  }
});
Object.defineProperty(exports, '__DirectiveLocation', {
  enumerable: true,
  get: function get() {
    return _type.__DirectiveLocation;
  }
});
Object.defineProperty(exports, '__Type', {
  enumerable: true,
  get: function get() {
    return _type.__Type;
  }
});
Object.defineProperty(exports, '__Field', {
  enumerable: true,
  get: function get() {
    return _type.__Field;
  }
});
Object.defineProperty(exports, '__InputValue', {
  enumerable: true,
  get: function get() {
    return _type.__InputValue;
  }
});
Object.defineProperty(exports, '__EnumValue', {
  enumerable: true,
  get: function get() {
    return _type.__EnumValue;
  }
});
Object.defineProperty(exports, '__TypeKind', {
  enumerable: true,
  get: function get() {
    return _type.__TypeKind;
  }
});
Object.defineProperty(exports, 'isType', {
  enumerable: true,
  get: function get() {
    return _type.isType;
  }
});
Object.defineProperty(exports, 'isInputType', {
  enumerable: true,
  get: function get() {
    return _type.isInputType;
  }
});
Object.defineProperty(exports, 'isOutputType', {
  enumerable: true,
  get: function get() {
    return _type.isOutputType;
  }
});
Object.defineProperty(exports, 'isLeafType', {
  enumerable: true,
  get: function get() {
    return _type.isLeafType;
  }
});
Object.defineProperty(exports, 'isCompositeType', {
  enumerable: true,
  get: function get() {
    return _type.isCompositeType;
  }
});
Object.defineProperty(exports, 'isAbstractType', {
  enumerable: true,
  get: function get() {
    return _type.isAbstractType;
  }
});
Object.defineProperty(exports, 'isNamedType', {
  enumerable: true,
  get: function get() {
    return _type.isNamedType;
  }
});
Object.defineProperty(exports, 'assertType', {
  enumerable: true,
  get: function get() {
    return _type.assertType;
  }
});
Object.defineProperty(exports, 'assertInputType', {
  enumerable: true,
  get: function get() {
    return _type.assertInputType;
  }
});
Object.defineProperty(exports, 'assertOutputType', {
  enumerable: true,
  get: function get() {
    return _type.assertOutputType;
  }
});
Object.defineProperty(exports, 'assertLeafType', {
  enumerable: true,
  get: function get() {
    return _type.assertLeafType;
  }
});
Object.defineProperty(exports, 'assertCompositeType', {
  enumerable: true,
  get: function get() {
    return _type.assertCompositeType;
  }
});
Object.defineProperty(exports, 'assertAbstractType', {
  enumerable: true,
  get: function get() {
    return _type.assertAbstractType;
  }
});
Object.defineProperty(exports, 'assertNamedType', {
  enumerable: true,
  get: function get() {
    return _type.assertNamedType;
  }
});
Object.defineProperty(exports, 'getNullableType', {
  enumerable: true,
  get: function get() {
    return _type.getNullableType;
  }
});
Object.defineProperty(exports, 'getNamedType', {
  enumerable: true,
  get: function get() {
    return _type.getNamedType;
  }
});

var _language = __webpack_require__(84);

Object.defineProperty(exports, 'Source', {
  enumerable: true,
  get: function get() {
    return _language.Source;
  }
});
Object.defineProperty(exports, 'getLocation', {
  enumerable: true,
  get: function get() {
    return _language.getLocation;
  }
});
Object.defineProperty(exports, 'parse', {
  enumerable: true,
  get: function get() {
    return _language.parse;
  }
});
Object.defineProperty(exports, 'parseValue', {
  enumerable: true,
  get: function get() {
    return _language.parseValue;
  }
});
Object.defineProperty(exports, 'parseType', {
  enumerable: true,
  get: function get() {
    return _language.parseType;
  }
});
Object.defineProperty(exports, 'print', {
  enumerable: true,
  get: function get() {
    return _language.print;
  }
});
Object.defineProperty(exports, 'visit', {
  enumerable: true,
  get: function get() {
    return _language.visit;
  }
});
Object.defineProperty(exports, 'visitInParallel', {
  enumerable: true,
  get: function get() {
    return _language.visitInParallel;
  }
});
Object.defineProperty(exports, 'visitWithTypeInfo', {
  enumerable: true,
  get: function get() {
    return _language.visitWithTypeInfo;
  }
});
Object.defineProperty(exports, 'getVisitFn', {
  enumerable: true,
  get: function get() {
    return _language.getVisitFn;
  }
});
Object.defineProperty(exports, 'Kind', {
  enumerable: true,
  get: function get() {
    return _language.Kind;
  }
});
Object.defineProperty(exports, 'TokenKind', {
  enumerable: true,
  get: function get() {
    return _language.TokenKind;
  }
});
Object.defineProperty(exports, 'BREAK', {
  enumerable: true,
  get: function get() {
    return _language.BREAK;
  }
});

var _execution = __webpack_require__(85);

Object.defineProperty(exports, 'execute', {
  enumerable: true,
  get: function get() {
    return _execution.execute;
  }
});
Object.defineProperty(exports, 'defaultFieldResolver', {
  enumerable: true,
  get: function get() {
    return _execution.defaultFieldResolver;
  }
});
Object.defineProperty(exports, 'responsePathAsArray', {
  enumerable: true,
  get: function get() {
    return _execution.responsePathAsArray;
  }
});
Object.defineProperty(exports, 'getDirectiveValues', {
  enumerable: true,
  get: function get() {
    return _execution.getDirectiveValues;
  }
});

var _subscription = __webpack_require__(86);

Object.defineProperty(exports, 'subscribe', {
  enumerable: true,
  get: function get() {
    return _subscription.subscribe;
  }
});
Object.defineProperty(exports, 'createSourceEventStream', {
  enumerable: true,
  get: function get() {
    return _subscription.createSourceEventStream;
  }
});

var _validation = __webpack_require__(89);

Object.defineProperty(exports, 'validate', {
  enumerable: true,
  get: function get() {
    return _validation.validate;
  }
});
Object.defineProperty(exports, 'ValidationContext', {
  enumerable: true,
  get: function get() {
    return _validation.ValidationContext;
  }
});
Object.defineProperty(exports, 'specifiedRules', {
  enumerable: true,
  get: function get() {
    return _validation.specifiedRules;
  }
});
Object.defineProperty(exports, 'ArgumentsOfCorrectTypeRule', {
  enumerable: true,
  get: function get() {
    return _validation.ArgumentsOfCorrectTypeRule;
  }
});
Object.defineProperty(exports, 'DefaultValuesOfCorrectTypeRule', {
  enumerable: true,
  get: function get() {
    return _validation.DefaultValuesOfCorrectTypeRule;
  }
});
Object.defineProperty(exports, 'FieldsOnCorrectTypeRule', {
  enumerable: true,
  get: function get() {
    return _validation.FieldsOnCorrectTypeRule;
  }
});
Object.defineProperty(exports, 'FragmentsOnCompositeTypesRule', {
  enumerable: true,
  get: function get() {
    return _validation.FragmentsOnCompositeTypesRule;
  }
});
Object.defineProperty(exports, 'KnownArgumentNamesRule', {
  enumerable: true,
  get: function get() {
    return _validation.KnownArgumentNamesRule;
  }
});
Object.defineProperty(exports, 'KnownDirectivesRule', {
  enumerable: true,
  get: function get() {
    return _validation.KnownDirectivesRule;
  }
});
Object.defineProperty(exports, 'KnownFragmentNamesRule', {
  enumerable: true,
  get: function get() {
    return _validation.KnownFragmentNamesRule;
  }
});
Object.defineProperty(exports, 'KnownTypeNamesRule', {
  enumerable: true,
  get: function get() {
    return _validation.KnownTypeNamesRule;
  }
});
Object.defineProperty(exports, 'LoneAnonymousOperationRule', {
  enumerable: true,
  get: function get() {
    return _validation.LoneAnonymousOperationRule;
  }
});
Object.defineProperty(exports, 'NoFragmentCyclesRule', {
  enumerable: true,
  get: function get() {
    return _validation.NoFragmentCyclesRule;
  }
});
Object.defineProperty(exports, 'NoUndefinedVariablesRule', {
  enumerable: true,
  get: function get() {
    return _validation.NoUndefinedVariablesRule;
  }
});
Object.defineProperty(exports, 'NoUnusedFragmentsRule', {
  enumerable: true,
  get: function get() {
    return _validation.NoUnusedFragmentsRule;
  }
});
Object.defineProperty(exports, 'NoUnusedVariablesRule', {
  enumerable: true,
  get: function get() {
    return _validation.NoUnusedVariablesRule;
  }
});
Object.defineProperty(exports, 'OverlappingFieldsCanBeMergedRule', {
  enumerable: true,
  get: function get() {
    return _validation.OverlappingFieldsCanBeMergedRule;
  }
});
Object.defineProperty(exports, 'PossibleFragmentSpreadsRule', {
  enumerable: true,
  get: function get() {
    return _validation.PossibleFragmentSpreadsRule;
  }
});
Object.defineProperty(exports, 'ProvidedNonNullArgumentsRule', {
  enumerable: true,
  get: function get() {
    return _validation.ProvidedNonNullArgumentsRule;
  }
});
Object.defineProperty(exports, 'ScalarLeafsRule', {
  enumerable: true,
  get: function get() {
    return _validation.ScalarLeafsRule;
  }
});
Object.defineProperty(exports, 'SingleFieldSubscriptionsRule', {
  enumerable: true,
  get: function get() {
    return _validation.SingleFieldSubscriptionsRule;
  }
});
Object.defineProperty(exports, 'UniqueArgumentNamesRule', {
  enumerable: true,
  get: function get() {
    return _validation.UniqueArgumentNamesRule;
  }
});
Object.defineProperty(exports, 'UniqueDirectivesPerLocationRule', {
  enumerable: true,
  get: function get() {
    return _validation.UniqueDirectivesPerLocationRule;
  }
});
Object.defineProperty(exports, 'UniqueFragmentNamesRule', {
  enumerable: true,
  get: function get() {
    return _validation.UniqueFragmentNamesRule;
  }
});
Object.defineProperty(exports, 'UniqueInputFieldNamesRule', {
  enumerable: true,
  get: function get() {
    return _validation.UniqueInputFieldNamesRule;
  }
});
Object.defineProperty(exports, 'UniqueOperationNamesRule', {
  enumerable: true,
  get: function get() {
    return _validation.UniqueOperationNamesRule;
  }
});
Object.defineProperty(exports, 'UniqueVariableNamesRule', {
  enumerable: true,
  get: function get() {
    return _validation.UniqueVariableNamesRule;
  }
});
Object.defineProperty(exports, 'VariablesAreInputTypesRule', {
  enumerable: true,
  get: function get() {
    return _validation.VariablesAreInputTypesRule;
  }
});
Object.defineProperty(exports, 'VariablesInAllowedPositionRule', {
  enumerable: true,
  get: function get() {
    return _validation.VariablesInAllowedPositionRule;
  }
});

var _error = __webpack_require__(0);

Object.defineProperty(exports, 'GraphQLError', {
  enumerable: true,
  get: function get() {
    return _error.GraphQLError;
  }
});
Object.defineProperty(exports, 'formatError', {
  enumerable: true,
  get: function get() {
    return _error.formatError;
  }
});

var _utilities = __webpack_require__(90);

Object.defineProperty(exports, 'introspectionQuery', {
  enumerable: true,
  get: function get() {
    return _utilities.introspectionQuery;
  }
});
Object.defineProperty(exports, 'getOperationAST', {
  enumerable: true,
  get: function get() {
    return _utilities.getOperationAST;
  }
});
Object.defineProperty(exports, 'buildClientSchema', {
  enumerable: true,
  get: function get() {
    return _utilities.buildClientSchema;
  }
});
Object.defineProperty(exports, 'buildASTSchema', {
  enumerable: true,
  get: function get() {
    return _utilities.buildASTSchema;
  }
});
Object.defineProperty(exports, 'buildSchema', {
  enumerable: true,
  get: function get() {
    return _utilities.buildSchema;
  }
});
Object.defineProperty(exports, 'extendSchema', {
  enumerable: true,
  get: function get() {
    return _utilities.extendSchema;
  }
});
Object.defineProperty(exports, 'printSchema', {
  enumerable: true,
  get: function get() {
    return _utilities.printSchema;
  }
});
Object.defineProperty(exports, 'printIntrospectionSchema', {
  enumerable: true,
  get: function get() {
    return _utilities.printIntrospectionSchema;
  }
});
Object.defineProperty(exports, 'printType', {
  enumerable: true,
  get: function get() {
    return _utilities.printType;
  }
});
Object.defineProperty(exports, 'typeFromAST', {
  enumerable: true,
  get: function get() {
    return _utilities.typeFromAST;
  }
});
Object.defineProperty(exports, 'valueFromAST', {
  enumerable: true,
  get: function get() {
    return _utilities.valueFromAST;
  }
});
Object.defineProperty(exports, 'astFromValue', {
  enumerable: true,
  get: function get() {
    return _utilities.astFromValue;
  }
});
Object.defineProperty(exports, 'TypeInfo', {
  enumerable: true,
  get: function get() {
    return _utilities.TypeInfo;
  }
});
Object.defineProperty(exports, 'isValidJSValue', {
  enumerable: true,
  get: function get() {
    return _utilities.isValidJSValue;
  }
});
Object.defineProperty(exports, 'isValidLiteralValue', {
  enumerable: true,
  get: function get() {
    return _utilities.isValidLiteralValue;
  }
});
Object.defineProperty(exports, 'concatAST', {
  enumerable: true,
  get: function get() {
    return _utilities.concatAST;
  }
});
Object.defineProperty(exports, 'separateOperations', {
  enumerable: true,
  get: function get() {
    return _utilities.separateOperations;
  }
});
Object.defineProperty(exports, 'isEqualType', {
  enumerable: true,
  get: function get() {
    return _utilities.isEqualType;
  }
});
Object.defineProperty(exports, 'isTypeSubTypeOf', {
  enumerable: true,
  get: function get() {
    return _utilities.isTypeSubTypeOf;
  }
});
Object.defineProperty(exports, 'doTypesOverlap', {
  enumerable: true,
  get: function get() {
    return _utilities.doTypesOverlap;
  }
});
Object.defineProperty(exports, 'assertValidName', {
  enumerable: true,
  get: function get() {
    return _utilities.assertValidName;
  }
});
Object.defineProperty(exports, 'findBreakingChanges', {
  enumerable: true,
  get: function get() {
    return _utilities.findBreakingChanges;
  }
});
Object.defineProperty(exports, 'findDangerousChanges', {
  enumerable: true,
  get: function get() {
    return _utilities.findDangerousChanges;
  }
});
Object.defineProperty(exports, 'BreakingChangeType', {
  enumerable: true,
  get: function get() {
    return _utilities.BreakingChangeType;
  }
});
Object.defineProperty(exports, 'DangerousChangeType', {
  enumerable: true,
  get: function get() {
    return _utilities.DangerousChangeType;
  }
});
Object.defineProperty(exports, 'findDeprecatedUsages', {
  enumerable: true,
  get: function get() {
    return _utilities.findDeprecatedUsages;
  }
});

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.graphql = graphql;

var _parser = __webpack_require__(20);

var _validate = __webpack_require__(35);

var _execute = __webpack_require__(30);

/**
 * This is the primary entry point function for fulfilling GraphQL operations
 * by parsing, validating, and executing a GraphQL document along side a
 * GraphQL schema.
 *
 * More sophisticated GraphQL servers, such as those which persist queries,
 * may wish to separate the validation and execution phases to a static time
 * tooling step, and a server runtime step.
 *
 * Accepts either an object with named arguments, or individual arguments:
 *
 * schema:
 *    The GraphQL type system to use when validating and executing a query.
 * source:
 *    A GraphQL language formatted string representing the requested operation.
 * rootValue:
 *    The value provided as the first argument to resolver functions on the top
 *    level type (e.g. the query object type).
 * variableValues:
 *    A mapping of variable name to runtime value to use for all variables
 *    defined in the requestString.
 * operationName:
 *    The name of the operation to use if requestString contains multiple
 *    possible operations. Can be omitted if requestString contains only
 *    one operation.
 * fieldResolver:
 *    A resolver function to use when one is not provided by the schema.
 *    If not provided, the default field resolver is used (which looks for a
 *    value or method on the source value with the field's name).
 */

/* eslint-disable no-redeclare */
function graphql(argsOrSchema, source, rootValue, contextValue, variableValues, operationName, fieldResolver) {
  // Extract arguments from object args if provided.
  return arguments.length === 1 ? graphqlImpl(argsOrSchema.schema, argsOrSchema.source, argsOrSchema.rootValue, argsOrSchema.contextValue, argsOrSchema.variableValues, argsOrSchema.operationName, argsOrSchema.fieldResolver) : graphqlImpl(argsOrSchema, source, rootValue, contextValue, variableValues, operationName, fieldResolver);
} /**
   * Copyright (c) 2015-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *
   * 
   */

function graphqlImpl(schema, source, rootValue, contextValue, variableValues, operationName, fieldResolver) {
  return new Promise(function (resolve) {
    // Parse
    var document = void 0;
    try {
      document = (0, _parser.parse)(source);
    } catch (syntaxError) {
      return resolve({ errors: [syntaxError] });
    }

    // Validate
    var validationErrors = (0, _validate.validate)(schema, document);
    if (validationErrors.length > 0) {
      return resolve({ errors: validationErrors });
    }

    // Execute
    resolve((0, _execute.execute)(schema, document, rootValue, contextValue, variableValues, operationName, fieldResolver));
  });
}

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.syntaxError = syntaxError;

var _location = __webpack_require__(23);

var _GraphQLError = __webpack_require__(11);

/**
 * Produces a GraphQLError representing a syntax error, containing useful
 * descriptive information about the syntax error's position in the source.
 */
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function syntaxError(source, position, description) {
  var location = (0, _location.getLocation)(source, position);
  var line = location.line + source.locationOffset.line - 1;
  var columnOffset = getColumnOffset(source, location);
  var column = location.column + columnOffset;
  var error = new _GraphQLError.GraphQLError('Syntax Error ' + source.name + ' (' + line + ':' + column + ') ' + description + '\n\n' + highlightSourceAtLocation(source, location), undefined, source, [position]);
  return error;
}

/**
 * Render a helpful description of the location of the error in the GraphQL
 * Source document.
 */
function highlightSourceAtLocation(source, location) {
  var line = location.line;
  var lineOffset = source.locationOffset.line - 1;
  var columnOffset = getColumnOffset(source, location);
  var contextLine = line + lineOffset;
  var prevLineNum = (contextLine - 1).toString();
  var lineNum = contextLine.toString();
  var nextLineNum = (contextLine + 1).toString();
  var padLen = nextLineNum.length;
  var lines = source.body.split(/\r\n|[\n\r]/g);
  lines[0] = whitespace(source.locationOffset.column - 1) + lines[0];
  return (line >= 2 ? lpad(padLen, prevLineNum) + ': ' + lines[line - 2] + '\n' : '') + lpad(padLen, lineNum) + ': ' + lines[line - 1] + '\n' + whitespace(2 + padLen + location.column - 1 + columnOffset) + '^\n' + (line < lines.length ? lpad(padLen, nextLineNum) + ': ' + lines[line] + '\n' : '');
}

function getColumnOffset(source, location) {
  return location.line === 1 ? source.locationOffset.column - 1 : 0;
}

function whitespace(len) {
  return Array(len + 1).join(' ');
}

function lpad(len, str) {
  return whitespace(len - str.length) + str;
}

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatError = formatError;

var _invariant = __webpack_require__(2);

var _invariant2 = _interopRequireDefault(_invariant);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Given a GraphQLError, format it according to the rules described by the
 * Response Format, Errors section of the GraphQL Specification.
 */
function formatError(error) {
  !error ? (0, _invariant2.default)(0, 'Received null or undefined error.') : void 0;
  return {
    message: error.message,
    locations: error.locations,
    path: error.path
  };
} /**
   * Copyright (c) 2015-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *
   * 
   */

/***/ }),
/* 82 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _schema = __webpack_require__(5);

Object.defineProperty(exports, 'GraphQLSchema', {
  enumerable: true,
  get: function get() {
    return _schema.GraphQLSchema;
  }
});

var _definition = __webpack_require__(1);

Object.defineProperty(exports, 'isType', {
  enumerable: true,
  get: function get() {
    return _definition.isType;
  }
});
Object.defineProperty(exports, 'isInputType', {
  enumerable: true,
  get: function get() {
    return _definition.isInputType;
  }
});
Object.defineProperty(exports, 'isOutputType', {
  enumerable: true,
  get: function get() {
    return _definition.isOutputType;
  }
});
Object.defineProperty(exports, 'isLeafType', {
  enumerable: true,
  get: function get() {
    return _definition.isLeafType;
  }
});
Object.defineProperty(exports, 'isCompositeType', {
  enumerable: true,
  get: function get() {
    return _definition.isCompositeType;
  }
});
Object.defineProperty(exports, 'isAbstractType', {
  enumerable: true,
  get: function get() {
    return _definition.isAbstractType;
  }
});
Object.defineProperty(exports, 'isNamedType', {
  enumerable: true,
  get: function get() {
    return _definition.isNamedType;
  }
});
Object.defineProperty(exports, 'assertType', {
  enumerable: true,
  get: function get() {
    return _definition.assertType;
  }
});
Object.defineProperty(exports, 'assertInputType', {
  enumerable: true,
  get: function get() {
    return _definition.assertInputType;
  }
});
Object.defineProperty(exports, 'assertOutputType', {
  enumerable: true,
  get: function get() {
    return _definition.assertOutputType;
  }
});
Object.defineProperty(exports, 'assertLeafType', {
  enumerable: true,
  get: function get() {
    return _definition.assertLeafType;
  }
});
Object.defineProperty(exports, 'assertCompositeType', {
  enumerable: true,
  get: function get() {
    return _definition.assertCompositeType;
  }
});
Object.defineProperty(exports, 'assertAbstractType', {
  enumerable: true,
  get: function get() {
    return _definition.assertAbstractType;
  }
});
Object.defineProperty(exports, 'assertNamedType', {
  enumerable: true,
  get: function get() {
    return _definition.assertNamedType;
  }
});
Object.defineProperty(exports, 'getNullableType', {
  enumerable: true,
  get: function get() {
    return _definition.getNullableType;
  }
});
Object.defineProperty(exports, 'getNamedType', {
  enumerable: true,
  get: function get() {
    return _definition.getNamedType;
  }
});
Object.defineProperty(exports, 'GraphQLScalarType', {
  enumerable: true,
  get: function get() {
    return _definition.GraphQLScalarType;
  }
});
Object.defineProperty(exports, 'GraphQLObjectType', {
  enumerable: true,
  get: function get() {
    return _definition.GraphQLObjectType;
  }
});
Object.defineProperty(exports, 'GraphQLInterfaceType', {
  enumerable: true,
  get: function get() {
    return _definition.GraphQLInterfaceType;
  }
});
Object.defineProperty(exports, 'GraphQLUnionType', {
  enumerable: true,
  get: function get() {
    return _definition.GraphQLUnionType;
  }
});
Object.defineProperty(exports, 'GraphQLEnumType', {
  enumerable: true,
  get: function get() {
    return _definition.GraphQLEnumType;
  }
});
Object.defineProperty(exports, 'GraphQLInputObjectType', {
  enumerable: true,
  get: function get() {
    return _definition.GraphQLInputObjectType;
  }
});
Object.defineProperty(exports, 'GraphQLList', {
  enumerable: true,
  get: function get() {
    return _definition.GraphQLList;
  }
});
Object.defineProperty(exports, 'GraphQLNonNull', {
  enumerable: true,
  get: function get() {
    return _definition.GraphQLNonNull;
  }
});

var _directives = __webpack_require__(6);

Object.defineProperty(exports, 'DirectiveLocation', {
  enumerable: true,
  get: function get() {
    return _directives.DirectiveLocation;
  }
});
Object.defineProperty(exports, 'GraphQLDirective', {
  enumerable: true,
  get: function get() {
    return _directives.GraphQLDirective;
  }
});
Object.defineProperty(exports, 'specifiedDirectives', {
  enumerable: true,
  get: function get() {
    return _directives.specifiedDirectives;
  }
});
Object.defineProperty(exports, 'GraphQLIncludeDirective', {
  enumerable: true,
  get: function get() {
    return _directives.GraphQLIncludeDirective;
  }
});
Object.defineProperty(exports, 'GraphQLSkipDirective', {
  enumerable: true,
  get: function get() {
    return _directives.GraphQLSkipDirective;
  }
});
Object.defineProperty(exports, 'GraphQLDeprecatedDirective', {
  enumerable: true,
  get: function get() {
    return _directives.GraphQLDeprecatedDirective;
  }
});
Object.defineProperty(exports, 'DEFAULT_DEPRECATION_REASON', {
  enumerable: true,
  get: function get() {
    return _directives.DEFAULT_DEPRECATION_REASON;
  }
});

var _scalars = __webpack_require__(8);

Object.defineProperty(exports, 'GraphQLInt', {
  enumerable: true,
  get: function get() {
    return _scalars.GraphQLInt;
  }
});
Object.defineProperty(exports, 'GraphQLFloat', {
  enumerable: true,
  get: function get() {
    return _scalars.GraphQLFloat;
  }
});
Object.defineProperty(exports, 'GraphQLString', {
  enumerable: true,
  get: function get() {
    return _scalars.GraphQLString;
  }
});
Object.defineProperty(exports, 'GraphQLBoolean', {
  enumerable: true,
  get: function get() {
    return _scalars.GraphQLBoolean;
  }
});
Object.defineProperty(exports, 'GraphQLID', {
  enumerable: true,
  get: function get() {
    return _scalars.GraphQLID;
  }
});

var _introspection = __webpack_require__(10);

Object.defineProperty(exports, 'TypeKind', {
  enumerable: true,
  get: function get() {
    return _introspection.TypeKind;
  }
});
Object.defineProperty(exports, '__Schema', {
  enumerable: true,
  get: function get() {
    return _introspection.__Schema;
  }
});
Object.defineProperty(exports, '__Directive', {
  enumerable: true,
  get: function get() {
    return _introspection.__Directive;
  }
});
Object.defineProperty(exports, '__DirectiveLocation', {
  enumerable: true,
  get: function get() {
    return _introspection.__DirectiveLocation;
  }
});
Object.defineProperty(exports, '__Type', {
  enumerable: true,
  get: function get() {
    return _introspection.__Type;
  }
});
Object.defineProperty(exports, '__Field', {
  enumerable: true,
  get: function get() {
    return _introspection.__Field;
  }
});
Object.defineProperty(exports, '__InputValue', {
  enumerable: true,
  get: function get() {
    return _introspection.__InputValue;
  }
});
Object.defineProperty(exports, '__EnumValue', {
  enumerable: true,
  get: function get() {
    return _introspection.__EnumValue;
  }
});
Object.defineProperty(exports, '__TypeKind', {
  enumerable: true,
  get: function get() {
    return _introspection.__TypeKind;
  }
});
Object.defineProperty(exports, 'SchemaMetaFieldDef', {
  enumerable: true,
  get: function get() {
    return _introspection.SchemaMetaFieldDef;
  }
});
Object.defineProperty(exports, 'TypeMetaFieldDef', {
  enumerable: true,
  get: function get() {
    return _introspection.TypeMetaFieldDef;
  }
});
Object.defineProperty(exports, 'TypeNameMetaFieldDef', {
  enumerable: true,
  get: function get() {
    return _introspection.TypeNameMetaFieldDef;
  }
});

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BREAK = exports.getVisitFn = exports.visitWithTypeInfo = exports.visitInParallel = exports.visit = exports.Source = exports.print = exports.parseType = exports.parseValue = exports.parse = exports.TokenKind = exports.createLexer = exports.Kind = exports.getLocation = undefined;

var _location = __webpack_require__(23);

Object.defineProperty(exports, 'getLocation', {
  enumerable: true,
  get: function get() {
    return _location.getLocation;
  }
});

var _lexer = __webpack_require__(24);

Object.defineProperty(exports, 'createLexer', {
  enumerable: true,
  get: function get() {
    return _lexer.createLexer;
  }
});
Object.defineProperty(exports, 'TokenKind', {
  enumerable: true,
  get: function get() {
    return _lexer.TokenKind;
  }
});

var _parser = __webpack_require__(20);

Object.defineProperty(exports, 'parse', {
  enumerable: true,
  get: function get() {
    return _parser.parse;
  }
});
Object.defineProperty(exports, 'parseValue', {
  enumerable: true,
  get: function get() {
    return _parser.parseValue;
  }
});
Object.defineProperty(exports, 'parseType', {
  enumerable: true,
  get: function get() {
    return _parser.parseType;
  }
});

var _printer = __webpack_require__(4);

Object.defineProperty(exports, 'print', {
  enumerable: true,
  get: function get() {
    return _printer.print;
  }
});

var _source = __webpack_require__(33);

Object.defineProperty(exports, 'Source', {
  enumerable: true,
  get: function get() {
    return _source.Source;
  }
});

var _visitor = __webpack_require__(16);

Object.defineProperty(exports, 'visit', {
  enumerable: true,
  get: function get() {
    return _visitor.visit;
  }
});
Object.defineProperty(exports, 'visitInParallel', {
  enumerable: true,
  get: function get() {
    return _visitor.visitInParallel;
  }
});
Object.defineProperty(exports, 'visitWithTypeInfo', {
  enumerable: true,
  get: function get() {
    return _visitor.visitWithTypeInfo;
  }
});
Object.defineProperty(exports, 'getVisitFn', {
  enumerable: true,
  get: function get() {
    return _visitor.getVisitFn;
  }
});
Object.defineProperty(exports, 'BREAK', {
  enumerable: true,
  get: function get() {
    return _visitor.BREAK;
  }
});

var _kinds = __webpack_require__(3);

var Kind = _interopRequireWildcard(_kinds);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.Kind = Kind;

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _execute = __webpack_require__(30);

Object.defineProperty(exports, 'execute', {
  enumerable: true,
  get: function get() {
    return _execute.execute;
  }
});
Object.defineProperty(exports, 'defaultFieldResolver', {
  enumerable: true,
  get: function get() {
    return _execute.defaultFieldResolver;
  }
});
Object.defineProperty(exports, 'responsePathAsArray', {
  enumerable: true,
  get: function get() {
    return _execute.responsePathAsArray;
  }
});

var _values = __webpack_require__(31);

Object.defineProperty(exports, 'getDirectiveValues', {
  enumerable: true,
  get: function get() {
    return _values.getDirectiveValues;
  }
});

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _subscribe = __webpack_require__(87);

Object.defineProperty(exports, 'subscribe', {
  enumerable: true,
  get: function get() {
    return _subscribe.subscribe;
  }
});
Object.defineProperty(exports, 'createSourceEventStream', {
  enumerable: true,
  get: function get() {
    return _subscribe.createSourceEventStream;
  }
});

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.subscribe = subscribe;
exports.createSourceEventStream = createSourceEventStream;

var _iterall = __webpack_require__(12);

var _GraphQLError = __webpack_require__(11);

var _locatedError = __webpack_require__(34);

var _execute = __webpack_require__(30);

var _schema = __webpack_require__(5);

var _invariant = __webpack_require__(2);

var _invariant2 = _interopRequireDefault(_invariant);

var _mapAsyncIterator = __webpack_require__(88);

var _mapAsyncIterator2 = _interopRequireDefault(_mapAsyncIterator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Implements the "Subscribe" algorithm described in the GraphQL specification.
 *
 * Returns a Promise which resolves to either an AsyncIterator (if successful)
 * or an ExecutionResult (client error). The promise will be rejected if a
 * server error occurs.
 *
 * If the client-provided arguments to this function do not result in a
 * compliant subscription, a GraphQL Response (ExecutionResult) with
 * descriptive errors and no data will be returned.
 *
 * If the the source stream could not be created due to faulty subscription
 * resolver logic or underlying systems, the promise will resolve to a single
 * ExecutionResult containing `errors` and no `data`.
 *
 * If the operation succeeded, the promise resolves to an AsyncIterator, which
 * yields a stream of ExecutionResults representing the response stream.
 *
 * Accepts either an object with named arguments, or individual arguments.
 */

/* eslint-disable no-redeclare */
function subscribe(argsOrSchema, document, rootValue, contextValue, variableValues, operationName, fieldResolver, subscribeFieldResolver) {
  // Extract arguments from object args if provided.
  var args = arguments.length === 1 ? argsOrSchema : undefined;
  var schema = args ? args.schema : argsOrSchema;

  return args ? subscribeImpl(schema, args.document, args.rootValue, args.contextValue, args.variableValues, args.operationName, args.fieldResolver, args.subscribeFieldResolver) : subscribeImpl(schema, document, rootValue, contextValue, variableValues, operationName, fieldResolver, subscribeFieldResolver);
}

/**
 * This function checks if the error is a GraphQLError. If it is, report it as
 * an ExecutionResult, containing only errors and no data. Otherwise treat the
 * error as a system-class error and re-throw it.
 */
/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function reportGraphQLError(error) {
  if (error instanceof _GraphQLError.GraphQLError) {
    return { errors: [error] };
  }
  throw error;
}

function subscribeImpl(schema, document, rootValue, contextValue, variableValues, operationName, fieldResolver, subscribeFieldResolver) {
  var sourcePromise = createSourceEventStream(schema, document, rootValue, contextValue, variableValues, operationName, subscribeFieldResolver);

  // For each payload yielded from a subscription, map it over the normal
  // GraphQL `execute` function, with `payload` as the rootValue.
  // This implements the "MapSourceToResponseEvent" algorithm described in
  // the GraphQL specification. The `execute` function provides the
  // "ExecuteSubscriptionEvent" algorithm, as it is nearly identical to the
  // "ExecuteQuery" algorithm, for which `execute` is also used.
  var mapSourceToResponse = function mapSourceToResponse(payload) {
    return (0, _execute.execute)(schema, document, payload, contextValue, variableValues, operationName, fieldResolver);
  };

  // Resolve the Source Stream, then map every source value to a
  // ExecutionResult value as described above.
  return sourcePromise.then(function (sourceStream) {
    return (0, _mapAsyncIterator2.default)(sourceStream, mapSourceToResponse, reportGraphQLError);
  }, reportGraphQLError);
}

/**
 * Implements the "CreateSourceEventStream" algorithm described in the
 * GraphQL specification, resolving the subscription source event stream.
 *
 * Returns a Promise<AsyncIterable>.
 *
 * If the client-provided invalid arguments, the source stream could not be
 * created, or the resolver did not return an AsyncIterable, this function will
 * will throw an error, which should be caught and handled by the caller.
 *
 * A Source Event Stream represents a sequence of events, each of which triggers
 * a GraphQL execution for that event.
 *
 * This may be useful when hosting the stateful subscription service in a
 * different process or machine than the stateless GraphQL execution engine,
 * or otherwise separating these two steps. For more on this, see the
 * "Supporting Subscriptions at Scale" information in the GraphQL specification.
 */
function createSourceEventStream(schema, document, rootValue, contextValue, variableValues, operationName, fieldResolver) {
  // If arguments are missing or incorrectly typed, this is an internal
  // developer mistake which should throw an early error.
  (0, _execute.assertValidExecutionArguments)(schema, document, variableValues);

  return new Promise(function (resolve, reject) {
    // If a valid context cannot be created due to incorrect arguments,
    // this will throw an error.
    var exeContext = (0, _execute.buildExecutionContext)(schema, document, rootValue, contextValue, variableValues, operationName, fieldResolver);

    var type = (0, _execute.getOperationRootType)(schema, exeContext.operation);
    var fields = (0, _execute.collectFields)(exeContext, type, exeContext.operation.selectionSet, Object.create(null), Object.create(null));
    var responseNames = Object.keys(fields);
    var responseName = responseNames[0];
    var fieldNodes = fields[responseName];
    var fieldNode = fieldNodes[0];
    var fieldDef = (0, _execute.getFieldDef)(schema, type, fieldNode.name.value);
    !fieldDef ? (0, _invariant2.default)(0, 'This subscription is not defined by the schema.') : void 0;

    // Call the `subscribe()` resolver or the default resolver to produce an
    // AsyncIterable yielding raw payloads.
    var resolveFn = fieldDef.subscribe || exeContext.fieldResolver;

    var path = (0, _execute.addPath)(undefined, responseName);

    var info = (0, _execute.buildResolveInfo)(exeContext, fieldDef, fieldNodes, type, path);

    // resolveFieldValueOrError implements the "ResolveFieldEventStream"
    // algorithm from GraphQL specification. It differs from
    // "ResolveFieldValue" due to providing a different `resolveFn`.
    Promise.resolve((0, _execute.resolveFieldValueOrError)(exeContext, fieldDef, fieldNodes, resolveFn, rootValue, info)).then(function (subscription) {
      // Reject with a located GraphQLError if subscription source fails
      // to resolve.
      if (subscription instanceof Error) {
        var error = (0, _locatedError.locatedError)(subscription, fieldNodes, (0, _execute.responsePathAsArray)(path));
        reject(error);
      }

      if (!(0, _iterall.isAsyncIterable)(subscription)) {
        reject(new Error('Subscription must return Async Iterable. ' + 'Received: ' + String(subscription)));
      }

      resolve(subscription);
    }).catch(reject);
  });
}

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = mapAsyncIterator;

var _iterall = __webpack_require__(12);

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } /**
                                                                                                                                                                                                                   * Copyright (c) 2017-present, Facebook, Inc.
                                                                                                                                                                                                                   *
                                                                                                                                                                                                                   * This source code is licensed under the MIT license found in the
                                                                                                                                                                                                                   * LICENSE file in the root directory of this source tree.
                                                                                                                                                                                                                   *
                                                                                                                                                                                                                   * 
                                                                                                                                                                                                                   */

/**
 * Given an AsyncIterable and a callback function, return an AsyncIterator
 * which produces values mapped via calling the callback function.
 */
function mapAsyncIterator(iterable, callback, rejectCallback) {
  var iterator = (0, _iterall.getAsyncIterator)(iterable);
  var $return = void 0;
  var abruptClose = void 0;
  if (typeof iterator.return === 'function') {
    $return = iterator.return;
    abruptClose = function abruptClose(error) {
      var rethrow = function rethrow() {
        return Promise.reject(error);
      };
      return $return.call(iterator).then(rethrow, rethrow);
    };
  }

  function mapResult(result) {
    return result.done ? result : asyncMapValue(result.value, callback).then(iteratorResult, abruptClose);
  }

  var mapReject = void 0;
  if (rejectCallback) {
    // Capture rejectCallback to ensure it cannot be null.
    var reject = rejectCallback;
    mapReject = function mapReject(error) {
      return asyncMapValue(error, reject).then(iteratorResult, abruptClose);
    };
  }

  /* TODO: Flow doesn't support symbols as keys:
     https://github.com/facebook/flow/issues/3258 */
  return _defineProperty({
    next: function next() {
      return iterator.next().then(mapResult, mapReject);
    },
    return: function _return() {
      return $return ? $return.call(iterator).then(mapResult, mapReject) : Promise.resolve({ value: undefined, done: true });
    },
    throw: function _throw(error) {
      if (typeof iterator.throw === 'function') {
        return iterator.throw(error).then(mapResult, mapReject);
      }
      return Promise.reject(error).catch(abruptClose);
    }
  }, _iterall.$$asyncIterator, function () {
    return this;
  });
}

function asyncMapValue(value, callback) {
  return new Promise(function (resolve) {
    return resolve(callback(value));
  });
}

function iteratorResult(value) {
  return { value: value, done: false };
}

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _validate = __webpack_require__(35);

Object.defineProperty(exports, 'validate', {
  enumerable: true,
  get: function get() {
    return _validate.validate;
  }
});
Object.defineProperty(exports, 'ValidationContext', {
  enumerable: true,
  get: function get() {
    return _validate.ValidationContext;
  }
});

var _specifiedRules = __webpack_require__(36);

Object.defineProperty(exports, 'specifiedRules', {
  enumerable: true,
  get: function get() {
    return _specifiedRules.specifiedRules;
  }
});

var _ArgumentsOfCorrectType = __webpack_require__(57);

Object.defineProperty(exports, 'ArgumentsOfCorrectTypeRule', {
  enumerable: true,
  get: function get() {
    return _ArgumentsOfCorrectType.ArgumentsOfCorrectType;
  }
});

var _DefaultValuesOfCorrectType = __webpack_require__(59);

Object.defineProperty(exports, 'DefaultValuesOfCorrectTypeRule', {
  enumerable: true,
  get: function get() {
    return _DefaultValuesOfCorrectType.DefaultValuesOfCorrectType;
  }
});

var _FieldsOnCorrectType = __webpack_require__(44);

Object.defineProperty(exports, 'FieldsOnCorrectTypeRule', {
  enumerable: true,
  get: function get() {
    return _FieldsOnCorrectType.FieldsOnCorrectType;
  }
});

var _FragmentsOnCompositeTypes = __webpack_require__(41);

Object.defineProperty(exports, 'FragmentsOnCompositeTypesRule', {
  enumerable: true,
  get: function get() {
    return _FragmentsOnCompositeTypes.FragmentsOnCompositeTypes;
  }
});

var _KnownArgumentNames = __webpack_require__(55);

Object.defineProperty(exports, 'KnownArgumentNamesRule', {
  enumerable: true,
  get: function get() {
    return _KnownArgumentNames.KnownArgumentNames;
  }
});

var _KnownDirectives = __webpack_require__(53);

Object.defineProperty(exports, 'KnownDirectivesRule', {
  enumerable: true,
  get: function get() {
    return _KnownDirectives.KnownDirectives;
  }
});

var _KnownFragmentNames = __webpack_require__(46);

Object.defineProperty(exports, 'KnownFragmentNamesRule', {
  enumerable: true,
  get: function get() {
    return _KnownFragmentNames.KnownFragmentNames;
  }
});

var _KnownTypeNames = __webpack_require__(40);

Object.defineProperty(exports, 'KnownTypeNamesRule', {
  enumerable: true,
  get: function get() {
    return _KnownTypeNames.KnownTypeNames;
  }
});

var _LoneAnonymousOperation = __webpack_require__(38);

Object.defineProperty(exports, 'LoneAnonymousOperationRule', {
  enumerable: true,
  get: function get() {
    return _LoneAnonymousOperation.LoneAnonymousOperation;
  }
});

var _NoFragmentCycles = __webpack_require__(49);

Object.defineProperty(exports, 'NoFragmentCyclesRule', {
  enumerable: true,
  get: function get() {
    return _NoFragmentCycles.NoFragmentCycles;
  }
});

var _NoUndefinedVariables = __webpack_require__(51);

Object.defineProperty(exports, 'NoUndefinedVariablesRule', {
  enumerable: true,
  get: function get() {
    return _NoUndefinedVariables.NoUndefinedVariables;
  }
});

var _NoUnusedFragments = __webpack_require__(47);

Object.defineProperty(exports, 'NoUnusedFragmentsRule', {
  enumerable: true,
  get: function get() {
    return _NoUnusedFragments.NoUnusedFragments;
  }
});

var _NoUnusedVariables = __webpack_require__(52);

Object.defineProperty(exports, 'NoUnusedVariablesRule', {
  enumerable: true,
  get: function get() {
    return _NoUnusedVariables.NoUnusedVariables;
  }
});

var _OverlappingFieldsCanBeMerged = __webpack_require__(61);

Object.defineProperty(exports, 'OverlappingFieldsCanBeMergedRule', {
  enumerable: true,
  get: function get() {
    return _OverlappingFieldsCanBeMerged.OverlappingFieldsCanBeMerged;
  }
});

var _PossibleFragmentSpreads = __webpack_require__(48);

Object.defineProperty(exports, 'PossibleFragmentSpreadsRule', {
  enumerable: true,
  get: function get() {
    return _PossibleFragmentSpreads.PossibleFragmentSpreads;
  }
});

var _ProvidedNonNullArguments = __webpack_require__(58);

Object.defineProperty(exports, 'ProvidedNonNullArgumentsRule', {
  enumerable: true,
  get: function get() {
    return _ProvidedNonNullArguments.ProvidedNonNullArguments;
  }
});

var _ScalarLeafs = __webpack_require__(43);

Object.defineProperty(exports, 'ScalarLeafsRule', {
  enumerable: true,
  get: function get() {
    return _ScalarLeafs.ScalarLeafs;
  }
});

var _SingleFieldSubscriptions = __webpack_require__(39);

Object.defineProperty(exports, 'SingleFieldSubscriptionsRule', {
  enumerable: true,
  get: function get() {
    return _SingleFieldSubscriptions.SingleFieldSubscriptions;
  }
});

var _UniqueArgumentNames = __webpack_require__(56);

Object.defineProperty(exports, 'UniqueArgumentNamesRule', {
  enumerable: true,
  get: function get() {
    return _UniqueArgumentNames.UniqueArgumentNames;
  }
});

var _UniqueDirectivesPerLocation = __webpack_require__(54);

Object.defineProperty(exports, 'UniqueDirectivesPerLocationRule', {
  enumerable: true,
  get: function get() {
    return _UniqueDirectivesPerLocation.UniqueDirectivesPerLocation;
  }
});

var _UniqueFragmentNames = __webpack_require__(45);

Object.defineProperty(exports, 'UniqueFragmentNamesRule', {
  enumerable: true,
  get: function get() {
    return _UniqueFragmentNames.UniqueFragmentNames;
  }
});

var _UniqueInputFieldNames = __webpack_require__(62);

Object.defineProperty(exports, 'UniqueInputFieldNamesRule', {
  enumerable: true,
  get: function get() {
    return _UniqueInputFieldNames.UniqueInputFieldNames;
  }
});

var _UniqueOperationNames = __webpack_require__(37);

Object.defineProperty(exports, 'UniqueOperationNamesRule', {
  enumerable: true,
  get: function get() {
    return _UniqueOperationNames.UniqueOperationNames;
  }
});

var _UniqueVariableNames = __webpack_require__(50);

Object.defineProperty(exports, 'UniqueVariableNamesRule', {
  enumerable: true,
  get: function get() {
    return _UniqueVariableNames.UniqueVariableNames;
  }
});

var _VariablesAreInputTypes = __webpack_require__(42);

Object.defineProperty(exports, 'VariablesAreInputTypesRule', {
  enumerable: true,
  get: function get() {
    return _VariablesAreInputTypes.VariablesAreInputTypes;
  }
});

var _VariablesInAllowedPosition = __webpack_require__(60);

Object.defineProperty(exports, 'VariablesInAllowedPositionRule', {
  enumerable: true,
  get: function get() {
    return _VariablesInAllowedPosition.VariablesInAllowedPosition;
  }
});

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _introspectionQuery = __webpack_require__(91);

Object.defineProperty(exports, 'introspectionQuery', {
  enumerable: true,
  get: function get() {
    return _introspectionQuery.introspectionQuery;
  }
});

var _getOperationAST = __webpack_require__(92);

Object.defineProperty(exports, 'getOperationAST', {
  enumerable: true,
  get: function get() {
    return _getOperationAST.getOperationAST;
  }
});

var _buildClientSchema = __webpack_require__(93);

Object.defineProperty(exports, 'buildClientSchema', {
  enumerable: true,
  get: function get() {
    return _buildClientSchema.buildClientSchema;
  }
});

var _buildASTSchema = __webpack_require__(64);

Object.defineProperty(exports, 'buildASTSchema', {
  enumerable: true,
  get: function get() {
    return _buildASTSchema.buildASTSchema;
  }
});
Object.defineProperty(exports, 'buildSchema', {
  enumerable: true,
  get: function get() {
    return _buildASTSchema.buildSchema;
  }
});

var _extendSchema = __webpack_require__(94);

Object.defineProperty(exports, 'extendSchema', {
  enumerable: true,
  get: function get() {
    return _extendSchema.extendSchema;
  }
});

var _schemaPrinter = __webpack_require__(95);

Object.defineProperty(exports, 'printSchema', {
  enumerable: true,
  get: function get() {
    return _schemaPrinter.printSchema;
  }
});
Object.defineProperty(exports, 'printType', {
  enumerable: true,
  get: function get() {
    return _schemaPrinter.printType;
  }
});
Object.defineProperty(exports, 'printIntrospectionSchema', {
  enumerable: true,
  get: function get() {
    return _schemaPrinter.printIntrospectionSchema;
  }
});

var _typeFromAST = __webpack_require__(7);

Object.defineProperty(exports, 'typeFromAST', {
  enumerable: true,
  get: function get() {
    return _typeFromAST.typeFromAST;
  }
});

var _valueFromAST = __webpack_require__(18);

Object.defineProperty(exports, 'valueFromAST', {
  enumerable: true,
  get: function get() {
    return _valueFromAST.valueFromAST;
  }
});

var _astFromValue = __webpack_require__(26);

Object.defineProperty(exports, 'astFromValue', {
  enumerable: true,
  get: function get() {
    return _astFromValue.astFromValue;
  }
});

var _TypeInfo = __webpack_require__(27);

Object.defineProperty(exports, 'TypeInfo', {
  enumerable: true,
  get: function get() {
    return _TypeInfo.TypeInfo;
  }
});

var _isValidJSValue = __webpack_require__(63);

Object.defineProperty(exports, 'isValidJSValue', {
  enumerable: true,
  get: function get() {
    return _isValidJSValue.isValidJSValue;
  }
});

var _isValidLiteralValue = __webpack_require__(22);

Object.defineProperty(exports, 'isValidLiteralValue', {
  enumerable: true,
  get: function get() {
    return _isValidLiteralValue.isValidLiteralValue;
  }
});

var _concatAST = __webpack_require__(96);

Object.defineProperty(exports, 'concatAST', {
  enumerable: true,
  get: function get() {
    return _concatAST.concatAST;
  }
});

var _separateOperations = __webpack_require__(97);

Object.defineProperty(exports, 'separateOperations', {
  enumerable: true,
  get: function get() {
    return _separateOperations.separateOperations;
  }
});

var _typeComparators = __webpack_require__(21);

Object.defineProperty(exports, 'isEqualType', {
  enumerable: true,
  get: function get() {
    return _typeComparators.isEqualType;
  }
});
Object.defineProperty(exports, 'isTypeSubTypeOf', {
  enumerable: true,
  get: function get() {
    return _typeComparators.isTypeSubTypeOf;
  }
});
Object.defineProperty(exports, 'doTypesOverlap', {
  enumerable: true,
  get: function get() {
    return _typeComparators.doTypesOverlap;
  }
});

var _assertValidName = __webpack_require__(25);

Object.defineProperty(exports, 'assertValidName', {
  enumerable: true,
  get: function get() {
    return _assertValidName.assertValidName;
  }
});

var _findBreakingChanges = __webpack_require__(98);

Object.defineProperty(exports, 'BreakingChangeType', {
  enumerable: true,
  get: function get() {
    return _findBreakingChanges.BreakingChangeType;
  }
});
Object.defineProperty(exports, 'DangerousChangeType', {
  enumerable: true,
  get: function get() {
    return _findBreakingChanges.DangerousChangeType;
  }
});
Object.defineProperty(exports, 'findBreakingChanges', {
  enumerable: true,
  get: function get() {
    return _findBreakingChanges.findBreakingChanges;
  }
});
Object.defineProperty(exports, 'findDangerousChanges', {
  enumerable: true,
  get: function get() {
    return _findBreakingChanges.findDangerousChanges;
  }
});

var _findDeprecatedUsages = __webpack_require__(99);

Object.defineProperty(exports, 'findDeprecatedUsages', {
  enumerable: true,
  get: function get() {
    return _findDeprecatedUsages.findDeprecatedUsages;
  }
});

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var introspectionQuery = exports.introspectionQuery = '\n  query IntrospectionQuery {\n    __schema {\n      queryType { name }\n      mutationType { name }\n      subscriptionType { name }\n      types {\n        ...FullType\n      }\n      directives {\n        name\n        description\n        locations\n        args {\n          ...InputValue\n        }\n      }\n    }\n  }\n\n  fragment FullType on __Type {\n    kind\n    name\n    description\n    fields(includeDeprecated: true) {\n      name\n      description\n      args {\n        ...InputValue\n      }\n      type {\n        ...TypeRef\n      }\n      isDeprecated\n      deprecationReason\n    }\n    inputFields {\n      ...InputValue\n    }\n    interfaces {\n      ...TypeRef\n    }\n    enumValues(includeDeprecated: true) {\n      name\n      description\n      isDeprecated\n      deprecationReason\n    }\n    possibleTypes {\n      ...TypeRef\n    }\n  }\n\n  fragment InputValue on __InputValue {\n    name\n    description\n    type { ...TypeRef }\n    defaultValue\n  }\n\n  fragment TypeRef on __Type {\n    kind\n    name\n    ofType {\n      kind\n      name\n      ofType {\n        kind\n        name\n        ofType {\n          kind\n          name\n          ofType {\n            kind\n            name\n            ofType {\n              kind\n              name\n              ofType {\n                kind\n                name\n                ofType {\n                  kind\n                  name\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n'; /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             * Copyright (c) 2015-present, Facebook, Inc.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             * This source code is licensed under the MIT license found in the
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             * LICENSE file in the root directory of this source tree.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             */

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getOperationAST = getOperationAST;

var _kinds = __webpack_require__(3);

/**
 * Returns an operation AST given a document AST and optionally an operation
 * name. If a name is not provided, an operation is only returned if only one is
 * provided in the document.
 */
function getOperationAST(documentAST, operationName) {
  var operation = null;
  for (var i = 0; i < documentAST.definitions.length; i++) {
    var definition = documentAST.definitions[i];
    if (definition.kind === _kinds.OPERATION_DEFINITION) {
      if (!operationName) {
        // If no operation name was provided, only return an Operation if there
        // is one defined in the document. Upon encountering the second, return
        // null.
        if (operation) {
          return null;
        }
        operation = definition;
      } else if (definition.name && definition.name.value === operationName) {
        return definition;
      }
    }
  }
  return operation;
} /**
   * Copyright (c) 2015-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *
   * 
   */

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buildClientSchema = buildClientSchema;

var _invariant = __webpack_require__(2);

var _invariant2 = _interopRequireDefault(_invariant);

var _keyMap = __webpack_require__(14);

var _keyMap2 = _interopRequireDefault(_keyMap);

var _keyValMap = __webpack_require__(32);

var _keyValMap2 = _interopRequireDefault(_keyValMap);

var _valueFromAST = __webpack_require__(18);

var _parser = __webpack_require__(20);

var _schema = __webpack_require__(5);

var _definition = __webpack_require__(1);

var _introspection = __webpack_require__(10);

var _scalars = __webpack_require__(8);

var _directives = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Build a GraphQLSchema for use by client tools.
 *
 * Given the result of a client running the introspection query, creates and
 * returns a GraphQLSchema instance which can be then used with all graphql-js
 * tools, but cannot be used to execute a query, as introspection does not
 * represent the "resolver", "parse" or "serialize" functions or any other
 * server-internal mechanisms.
 */
function buildClientSchema(introspection) {

  // Get the schema from the introspection result.
  var schemaIntrospection = introspection.__schema;

  // Converts the list of types into a keyMap based on the type names.
  var typeIntrospectionMap = (0, _keyMap2.default)(schemaIntrospection.types, function (type) {
    return type.name;
  });

  // A cache to use to store the actual GraphQLType definition objects by name.
  // Initialize to the GraphQL built in scalars. All functions below are inline
  // so that this type def cache is within the scope of the closure.
  var typeDefCache = {
    String: _scalars.GraphQLString,
    Int: _scalars.GraphQLInt,
    Float: _scalars.GraphQLFloat,
    Boolean: _scalars.GraphQLBoolean,
    ID: _scalars.GraphQLID,
    __Schema: _introspection.__Schema,
    __Directive: _introspection.__Directive,
    __DirectiveLocation: _introspection.__DirectiveLocation,
    __Type: _introspection.__Type,
    __Field: _introspection.__Field,
    __InputValue: _introspection.__InputValue,
    __EnumValue: _introspection.__EnumValue,
    __TypeKind: _introspection.__TypeKind
  };

  // Given a type reference in introspection, return the GraphQLType instance.
  // preferring cached instances before building new instances.
  function getType(typeRef) {
    if (typeRef.kind === _introspection.TypeKind.LIST) {
      var itemRef = typeRef.ofType;
      if (!itemRef) {
        throw new Error('Decorated type deeper than introspection query.');
      }
      return new _definition.GraphQLList(getType(itemRef));
    }
    if (typeRef.kind === _introspection.TypeKind.NON_NULL) {
      var nullableRef = typeRef.ofType;
      if (!nullableRef) {
        throw new Error('Decorated type deeper than introspection query.');
      }
      var nullableType = getType(nullableRef);
      !!(nullableType instanceof _definition.GraphQLNonNull) ? (0, _invariant2.default)(0, 'No nesting nonnull.') : void 0;
      return new _definition.GraphQLNonNull(nullableType);
    }
    return getNamedType(typeRef.name);
  }

  function getNamedType(typeName) {
    if (typeDefCache[typeName]) {
      return typeDefCache[typeName];
    }
    var typeIntrospection = typeIntrospectionMap[typeName];
    if (!typeIntrospection) {
      throw new Error('Invalid or incomplete schema, unknown type: ' + typeName + '. Ensure ' + 'that a full introspection query is used in order to build a ' + 'client schema.');
    }
    var typeDef = buildType(typeIntrospection);
    typeDefCache[typeName] = typeDef;
    return typeDef;
  }

  function getInputType(typeRef) {
    var type = getType(typeRef);
    !(0, _definition.isInputType)(type) ? (0, _invariant2.default)(0, 'Introspection must provide input type for arguments.') : void 0;
    return type;
  }

  function getOutputType(typeRef) {
    var type = getType(typeRef);
    !(0, _definition.isOutputType)(type) ? (0, _invariant2.default)(0, 'Introspection must provide output type for fields.') : void 0;
    return type;
  }

  function getObjectType(typeRef) {
    var type = getType(typeRef);
    !(type instanceof _definition.GraphQLObjectType) ? (0, _invariant2.default)(0, 'Introspection must provide object type for possibleTypes.') : void 0;
    return type;
  }

  function getInterfaceType(typeRef) {
    var type = getType(typeRef);
    !(type instanceof _definition.GraphQLInterfaceType) ? (0, _invariant2.default)(0, 'Introspection must provide interface type for interfaces.') : void 0;
    return type;
  }

  // Given a type's introspection result, construct the correct
  // GraphQLType instance.
  function buildType(type) {
    switch (type.kind) {
      case _introspection.TypeKind.SCALAR:
        return buildScalarDef(type);
      case _introspection.TypeKind.OBJECT:
        return buildObjectDef(type);
      case _introspection.TypeKind.INTERFACE:
        return buildInterfaceDef(type);
      case _introspection.TypeKind.UNION:
        return buildUnionDef(type);
      case _introspection.TypeKind.ENUM:
        return buildEnumDef(type);
      case _introspection.TypeKind.INPUT_OBJECT:
        return buildInputObjectDef(type);
      default:
        throw new Error('Invalid or incomplete schema, unknown kind: ' + type.kind + '. Ensure ' + 'that a full introspection query is used in order to build a ' + 'client schema.');
    }
  }

  function buildScalarDef(scalarIntrospection) {
    return new _definition.GraphQLScalarType({
      name: scalarIntrospection.name,
      description: scalarIntrospection.description,
      serialize: function serialize(id) {
        return id;
      },
      // Note: validation calls the parse functions to determine if a
      // literal value is correct. Returning null would cause use of custom
      // scalars to always fail validation. Returning false causes them to
      // always pass validation.
      parseValue: function parseValue() {
        return false;
      },
      parseLiteral: function parseLiteral() {
        return false;
      }
    });
  }

  function buildObjectDef(objectIntrospection) {
    return new _definition.GraphQLObjectType({
      name: objectIntrospection.name,
      description: objectIntrospection.description,
      interfaces: objectIntrospection.interfaces.map(getInterfaceType),
      fields: function fields() {
        return buildFieldDefMap(objectIntrospection);
      }
    });
  }

  function buildInterfaceDef(interfaceIntrospection) {
    return new _definition.GraphQLInterfaceType({
      name: interfaceIntrospection.name,
      description: interfaceIntrospection.description,
      fields: function fields() {
        return buildFieldDefMap(interfaceIntrospection);
      },
      resolveType: cannotExecuteClientSchema
    });
  }

  function buildUnionDef(unionIntrospection) {
    return new _definition.GraphQLUnionType({
      name: unionIntrospection.name,
      description: unionIntrospection.description,
      types: unionIntrospection.possibleTypes.map(getObjectType),
      resolveType: cannotExecuteClientSchema
    });
  }

  function buildEnumDef(enumIntrospection) {
    return new _definition.GraphQLEnumType({
      name: enumIntrospection.name,
      description: enumIntrospection.description,
      values: (0, _keyValMap2.default)(enumIntrospection.enumValues, function (valueIntrospection) {
        return valueIntrospection.name;
      }, function (valueIntrospection) {
        return {
          description: valueIntrospection.description,
          deprecationReason: valueIntrospection.deprecationReason
        };
      })
    });
  }

  function buildInputObjectDef(inputObjectIntrospection) {
    return new _definition.GraphQLInputObjectType({
      name: inputObjectIntrospection.name,
      description: inputObjectIntrospection.description,
      fields: function fields() {
        return buildInputValueDefMap(inputObjectIntrospection.inputFields);
      }
    });
  }

  function buildFieldDefMap(typeIntrospection) {
    return (0, _keyValMap2.default)(typeIntrospection.fields, function (fieldIntrospection) {
      return fieldIntrospection.name;
    }, function (fieldIntrospection) {
      return {
        description: fieldIntrospection.description,
        deprecationReason: fieldIntrospection.deprecationReason,
        type: getOutputType(fieldIntrospection.type),
        args: buildInputValueDefMap(fieldIntrospection.args)
      };
    });
  }

  function buildInputValueDefMap(inputValueIntrospections) {
    return (0, _keyValMap2.default)(inputValueIntrospections, function (inputValue) {
      return inputValue.name;
    }, buildInputValue);
  }

  function buildInputValue(inputValueIntrospection) {
    var type = getInputType(inputValueIntrospection.type);
    var defaultValue = inputValueIntrospection.defaultValue ? (0, _valueFromAST.valueFromAST)((0, _parser.parseValue)(inputValueIntrospection.defaultValue), type) : undefined;
    return {
      name: inputValueIntrospection.name,
      description: inputValueIntrospection.description,
      type: type,
      defaultValue: defaultValue
    };
  }

  function buildDirective(directiveIntrospection) {
    // Support deprecated `on****` fields for building `locations`, as this
    // is used by GraphiQL which may need to support outdated servers.
    var locations = directiveIntrospection.locations ? directiveIntrospection.locations.slice() : [].concat(!directiveIntrospection.onField ? [] : [_directives.DirectiveLocation.FIELD], !directiveIntrospection.onOperation ? [] : [_directives.DirectiveLocation.QUERY, _directives.DirectiveLocation.MUTATION, _directives.DirectiveLocation.SUBSCRIPTION], !directiveIntrospection.onFragment ? [] : [_directives.DirectiveLocation.FRAGMENT_DEFINITION, _directives.DirectiveLocation.FRAGMENT_SPREAD, _directives.DirectiveLocation.INLINE_FRAGMENT]);
    return new _directives.GraphQLDirective({
      name: directiveIntrospection.name,
      description: directiveIntrospection.description,
      locations: locations,
      args: buildInputValueDefMap(directiveIntrospection.args)
    });
  }

  // Iterate through all types, getting the type definition for each, ensuring
  // that any type not directly referenced by a field will get created.
  var types = schemaIntrospection.types.map(function (typeIntrospection) {
    return getNamedType(typeIntrospection.name);
  });

  // Get the root Query, Mutation, and Subscription types.
  var queryType = getObjectType(schemaIntrospection.queryType);

  var mutationType = schemaIntrospection.mutationType ? getObjectType(schemaIntrospection.mutationType) : null;

  var subscriptionType = schemaIntrospection.subscriptionType ? getObjectType(schemaIntrospection.subscriptionType) : null;

  // Get the directives supported by Introspection, assuming empty-set if
  // directives were not queried for.
  var directives = schemaIntrospection.directives ? schemaIntrospection.directives.map(buildDirective) : [];

  // Then produce and return a Schema with these types.
  return new _schema.GraphQLSchema({
    query: queryType,
    mutation: mutationType,
    subscription: subscriptionType,
    types: types,
    directives: directives
  });
} /**
   * Copyright (c) 2015-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *
   * 
   */

function cannotExecuteClientSchema() {
  throw new Error('Client Schema cannot use Interface or Union types for execution.');
}

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.extendSchema = extendSchema;

var _invariant = __webpack_require__(2);

var _invariant2 = _interopRequireDefault(_invariant);

var _keyMap = __webpack_require__(14);

var _keyMap2 = _interopRequireDefault(_keyMap);

var _keyValMap = __webpack_require__(32);

var _keyValMap2 = _interopRequireDefault(_keyValMap);

var _buildASTSchema = __webpack_require__(64);

var _valueFromAST = __webpack_require__(18);

var _GraphQLError = __webpack_require__(11);

var _schema = __webpack_require__(5);

var _definition = __webpack_require__(1);

var _directives = __webpack_require__(6);

var _introspection = __webpack_require__(10);

var _scalars = __webpack_require__(8);

var _kinds = __webpack_require__(3);

var Kind = _interopRequireWildcard(_kinds);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Produces a new schema given an existing schema and a document which may
 * contain GraphQL type extensions and definitions. The original schema will
 * remain unaltered.
 *
 * Because a schema represents a graph of references, a schema cannot be
 * extended without effectively making an entire copy. We do not know until it's
 * too late if subgraphs remain unchanged.
 *
 * This algorithm copies the provided schema, applying extensions while
 * producing the copy. The original schema remains unaltered.
 */
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function extendSchema(schema, documentAST) {
  !(schema instanceof _schema.GraphQLSchema) ? (0, _invariant2.default)(0, 'Must provide valid GraphQLSchema') : void 0;

  !(documentAST && documentAST.kind === Kind.DOCUMENT) ? (0, _invariant2.default)(0, 'Must provide valid Document AST') : void 0;

  // Collect the type definitions and extensions found in the document.
  var typeDefinitionMap = Object.create(null);
  var typeExtensionsMap = Object.create(null);

  // New directives and types are separate because a directives and types can
  // have the same name. For example, a type named "skip".
  var directiveDefinitions = [];

  for (var i = 0; i < documentAST.definitions.length; i++) {
    var def = documentAST.definitions[i];
    switch (def.kind) {
      case Kind.OBJECT_TYPE_DEFINITION:
      case Kind.INTERFACE_TYPE_DEFINITION:
      case Kind.ENUM_TYPE_DEFINITION:
      case Kind.UNION_TYPE_DEFINITION:
      case Kind.SCALAR_TYPE_DEFINITION:
      case Kind.INPUT_OBJECT_TYPE_DEFINITION:
        // Sanity check that none of the defined types conflict with the
        // schema's existing types.
        var typeName = def.name.value;
        if (schema.getType(typeName)) {
          throw new _GraphQLError.GraphQLError('Type "' + typeName + '" already exists in the schema. It cannot also ' + 'be defined in this type definition.', [def]);
        }
        typeDefinitionMap[typeName] = def;
        break;
      case Kind.TYPE_EXTENSION_DEFINITION:
        // Sanity check that this type extension exists within the
        // schema's existing types.
        var extendedTypeName = def.definition.name.value;
        var existingType = schema.getType(extendedTypeName);
        if (!existingType) {
          throw new _GraphQLError.GraphQLError('Cannot extend type "' + extendedTypeName + '" because it does not ' + 'exist in the existing schema.', [def.definition]);
        }
        if (!(existingType instanceof _definition.GraphQLObjectType)) {
          throw new _GraphQLError.GraphQLError('Cannot extend non-object type "' + extendedTypeName + '".', [def.definition]);
        }
        var extensions = typeExtensionsMap[extendedTypeName];
        if (extensions) {
          extensions.push(def);
        } else {
          extensions = [def];
        }
        typeExtensionsMap[extendedTypeName] = extensions;
        break;
      case Kind.DIRECTIVE_DEFINITION:
        var directiveName = def.name.value;
        var existingDirective = schema.getDirective(directiveName);
        if (existingDirective) {
          throw new _GraphQLError.GraphQLError('Directive "' + directiveName + '" already exists in the schema. It ' + 'cannot be redefined.', [def]);
        }
        directiveDefinitions.push(def);
        break;
    }
  }

  // If this document contains no new types, extensions, or directives then
  // return the same unmodified GraphQLSchema instance.
  if (Object.keys(typeExtensionsMap).length === 0 && Object.keys(typeDefinitionMap).length === 0 && directiveDefinitions.length === 0) {
    return schema;
  }

  // A cache to use to store the actual GraphQLType definition objects by name.
  // Initialize to the GraphQL built in scalars and introspection types. All
  // functions below are inline so that this type def cache is within the scope
  // of the closure.
  var typeDefCache = {
    String: _scalars.GraphQLString,
    Int: _scalars.GraphQLInt,
    Float: _scalars.GraphQLFloat,
    Boolean: _scalars.GraphQLBoolean,
    ID: _scalars.GraphQLID,
    __Schema: _introspection.__Schema,
    __Directive: _introspection.__Directive,
    __DirectiveLocation: _introspection.__DirectiveLocation,
    __Type: _introspection.__Type,
    __Field: _introspection.__Field,
    __InputValue: _introspection.__InputValue,
    __EnumValue: _introspection.__EnumValue,
    __TypeKind: _introspection.__TypeKind
  };

  // Get the root Query, Mutation, and Subscription object types.
  var queryType = getTypeFromDef(schema.getQueryType());

  var existingMutationType = schema.getMutationType();
  var mutationType = existingMutationType ? getTypeFromDef(existingMutationType) : null;

  var existingSubscriptionType = schema.getSubscriptionType();
  var subscriptionType = existingSubscriptionType ? getTypeFromDef(existingSubscriptionType) : null;

  // Iterate through all types, getting the type definition for each, ensuring
  // that any type not directly referenced by a field will get created.
  var typeMap = schema.getTypeMap();
  var types = Object.keys(typeMap).map(function (typeName) {
    return getTypeFromDef(typeMap[typeName]);
  });

  // Do the same with new types, appending to the list of defined types.
  Object.keys(typeDefinitionMap).forEach(function (typeName) {
    types.push(getTypeFromAST(typeDefinitionMap[typeName]));
  });

  // Then produce and return a Schema with these types.
  return new _schema.GraphQLSchema({
    query: queryType,
    mutation: mutationType,
    subscription: subscriptionType,
    types: types,
    directives: getMergedDirectives(),
    astNode: schema.astNode
  });

  // Below are functions used for producing this schema that have closed over
  // this scope and have access to the schema, cache, and newly defined types.

  function getMergedDirectives() {
    var existingDirectives = schema.getDirectives();
    !existingDirectives ? (0, _invariant2.default)(0, 'schema must have default directives') : void 0;

    var newDirectives = directiveDefinitions.map(function (directiveNode) {
      return getDirective(directiveNode);
    });
    return existingDirectives.concat(newDirectives);
  }

  function getTypeFromDef(typeDef) {
    var type = _getNamedType(typeDef.name);
    !type ? (0, _invariant2.default)(0, 'Missing type from schema') : void 0;
    return type;
  }

  function getTypeFromAST(node) {
    var type = _getNamedType(node.name.value);
    if (!type) {
      throw new _GraphQLError.GraphQLError('Unknown type: "' + node.name.value + '". Ensure that this type exists ' + 'either in the original schema, or is added in a type definition.', [node]);
    }
    return type;
  }

  function getObjectTypeFromAST(node) {
    var type = getTypeFromAST(node);
    !(type instanceof _definition.GraphQLObjectType) ? (0, _invariant2.default)(0, 'Must be Object type.') : void 0;
    return type;
  }

  function getInterfaceTypeFromAST(node) {
    var type = getTypeFromAST(node);
    !(type instanceof _definition.GraphQLInterfaceType) ? (0, _invariant2.default)(0, 'Must be Interface type.') : void 0;
    return type;
  }

  function getInputTypeFromAST(node) {
    return (0, _definition.assertInputType)(getTypeFromAST(node));
  }

  function getOutputTypeFromAST(node) {
    return (0, _definition.assertOutputType)(getTypeFromAST(node));
  }

  // Given a name, returns a type from either the existing schema or an
  // added type.
  function _getNamedType(typeName) {
    var cachedTypeDef = typeDefCache[typeName];
    if (cachedTypeDef) {
      return cachedTypeDef;
    }

    var existingType = schema.getType(typeName);
    if (existingType) {
      var typeDef = extendType(existingType);
      typeDefCache[typeName] = typeDef;
      return typeDef;
    }

    var typeNode = typeDefinitionMap[typeName];
    if (typeNode) {
      var _typeDef = buildType(typeNode);
      typeDefCache[typeName] = _typeDef;
      return _typeDef;
    }
  }

  // Given a type's introspection result, construct the correct
  // GraphQLType instance.
  function extendType(type) {
    if (type instanceof _definition.GraphQLObjectType) {
      return extendObjectType(type);
    }
    if (type instanceof _definition.GraphQLInterfaceType) {
      return extendInterfaceType(type);
    }
    if (type instanceof _definition.GraphQLUnionType) {
      return extendUnionType(type);
    }
    return type;
  }

  function extendObjectType(type) {
    var name = type.name;
    var extensionASTNodes = type.extensionASTNodes;
    if (typeExtensionsMap[name]) {
      extensionASTNodes = extensionASTNodes.concat(typeExtensionsMap[name]);
    }

    return new _definition.GraphQLObjectType({
      name: name,
      description: type.description,
      interfaces: function interfaces() {
        return extendImplementedInterfaces(type);
      },
      fields: function fields() {
        return extendFieldMap(type);
      },
      astNode: type.astNode,
      extensionASTNodes: extensionASTNodes,
      isTypeOf: type.isTypeOf
    });
  }

  function extendInterfaceType(type) {
    return new _definition.GraphQLInterfaceType({
      name: type.name,
      description: type.description,
      fields: function fields() {
        return extendFieldMap(type);
      },
      astNode: type.astNode,
      resolveType: type.resolveType
    });
  }

  function extendUnionType(type) {
    return new _definition.GraphQLUnionType({
      name: type.name,
      description: type.description,
      types: type.getTypes().map(getTypeFromDef),
      astNode: type.astNode,
      resolveType: type.resolveType
    });
  }

  function extendImplementedInterfaces(type) {
    var interfaces = type.getInterfaces().map(getTypeFromDef);

    // If there are any extensions to the interfaces, apply those here.
    var extensions = typeExtensionsMap[type.name];
    if (extensions) {
      extensions.forEach(function (extension) {
        extension.definition.interfaces.forEach(function (namedType) {
          var interfaceName = namedType.name.value;
          if (interfaces.some(function (def) {
            return def.name === interfaceName;
          })) {
            throw new _GraphQLError.GraphQLError('Type "' + type.name + '" already implements "' + interfaceName + '". ' + 'It cannot also be implemented in this type extension.', [namedType]);
          }
          interfaces.push(getInterfaceTypeFromAST(namedType));
        });
      });
    }

    return interfaces;
  }

  function extendFieldMap(type) {
    var newFieldMap = Object.create(null);
    var oldFieldMap = type.getFields();
    Object.keys(oldFieldMap).forEach(function (fieldName) {
      var field = oldFieldMap[fieldName];
      newFieldMap[fieldName] = {
        description: field.description,
        deprecationReason: field.deprecationReason,
        type: extendFieldType(field.type),
        args: (0, _keyMap2.default)(field.args, function (arg) {
          return arg.name;
        }),
        astNode: field.astNode,
        resolve: field.resolve
      };
    });

    // If there are any extensions to the fields, apply those here.
    var extensions = typeExtensionsMap[type.name];
    if (extensions) {
      extensions.forEach(function (extension) {
        extension.definition.fields.forEach(function (field) {
          var fieldName = field.name.value;
          if (oldFieldMap[fieldName]) {
            throw new _GraphQLError.GraphQLError('Field "' + type.name + '.' + fieldName + '" already exists in the ' + 'schema. It cannot also be defined in this type extension.', [field]);
          }
          newFieldMap[fieldName] = {
            description: (0, _buildASTSchema.getDescription)(field),
            type: buildOutputFieldType(field.type),
            args: buildInputValues(field.arguments),
            deprecationReason: (0, _buildASTSchema.getDeprecationReason)(field),
            astNode: field
          };
        });
      });
    }

    return newFieldMap;
  }

  function extendFieldType(typeDef) {
    if (typeDef instanceof _definition.GraphQLList) {
      return new _definition.GraphQLList(extendFieldType(typeDef.ofType));
    }
    if (typeDef instanceof _definition.GraphQLNonNull) {
      return new _definition.GraphQLNonNull(extendFieldType(typeDef.ofType));
    }
    return getTypeFromDef(typeDef);
  }

  function buildType(typeNode) {
    switch (typeNode.kind) {
      case Kind.OBJECT_TYPE_DEFINITION:
        return buildObjectType(typeNode);
      case Kind.INTERFACE_TYPE_DEFINITION:
        return buildInterfaceType(typeNode);
      case Kind.UNION_TYPE_DEFINITION:
        return buildUnionType(typeNode);
      case Kind.SCALAR_TYPE_DEFINITION:
        return buildScalarType(typeNode);
      case Kind.ENUM_TYPE_DEFINITION:
        return buildEnumType(typeNode);
      case Kind.INPUT_OBJECT_TYPE_DEFINITION:
        return buildInputObjectType(typeNode);
    }
    throw new TypeError('Unknown type kind ' + typeNode.kind);
  }

  function buildObjectType(typeNode) {
    return new _definition.GraphQLObjectType({
      name: typeNode.name.value,
      description: (0, _buildASTSchema.getDescription)(typeNode),
      interfaces: function interfaces() {
        return buildImplementedInterfaces(typeNode);
      },
      fields: function fields() {
        return buildFieldMap(typeNode);
      },
      astNode: typeNode
    });
  }

  function buildInterfaceType(typeNode) {
    return new _definition.GraphQLInterfaceType({
      name: typeNode.name.value,
      description: (0, _buildASTSchema.getDescription)(typeNode),
      fields: function fields() {
        return buildFieldMap(typeNode);
      },
      astNode: typeNode,
      resolveType: cannotExecuteExtendedSchema
    });
  }

  function buildUnionType(typeNode) {
    return new _definition.GraphQLUnionType({
      name: typeNode.name.value,
      description: (0, _buildASTSchema.getDescription)(typeNode),
      types: typeNode.types.map(getObjectTypeFromAST),
      astNode: typeNode,
      resolveType: cannotExecuteExtendedSchema
    });
  }

  function buildScalarType(typeNode) {
    return new _definition.GraphQLScalarType({
      name: typeNode.name.value,
      description: (0, _buildASTSchema.getDescription)(typeNode),
      astNode: typeNode,
      serialize: function serialize(id) {
        return id;
      },
      // Note: validation calls the parse functions to determine if a
      // literal value is correct. Returning null would cause use of custom
      // scalars to always fail validation. Returning false causes them to
      // always pass validation.
      parseValue: function parseValue() {
        return false;
      },
      parseLiteral: function parseLiteral() {
        return false;
      }
    });
  }

  function buildEnumType(typeNode) {
    return new _definition.GraphQLEnumType({
      name: typeNode.name.value,
      description: (0, _buildASTSchema.getDescription)(typeNode),
      values: (0, _keyValMap2.default)(typeNode.values, function (enumValue) {
        return enumValue.name.value;
      }, function (enumValue) {
        return {
          description: (0, _buildASTSchema.getDescription)(enumValue),
          deprecationReason: (0, _buildASTSchema.getDeprecationReason)(enumValue),
          astNode: enumValue
        };
      }),
      astNode: typeNode
    });
  }

  function buildInputObjectType(typeNode) {
    return new _definition.GraphQLInputObjectType({
      name: typeNode.name.value,
      description: (0, _buildASTSchema.getDescription)(typeNode),
      fields: function fields() {
        return buildInputValues(typeNode.fields);
      },
      astNode: typeNode
    });
  }

  function getDirective(directiveNode) {
    return new _directives.GraphQLDirective({
      name: directiveNode.name.value,
      description: (0, _buildASTSchema.getDescription)(directiveNode),
      locations: directiveNode.locations.map(function (node) {
        return node.value;
      }),
      args: directiveNode.arguments && buildInputValues(directiveNode.arguments),
      astNode: directiveNode
    });
  }

  function buildImplementedInterfaces(typeNode) {
    return typeNode.interfaces && typeNode.interfaces.map(getInterfaceTypeFromAST);
  }

  function buildFieldMap(typeNode) {
    return (0, _keyValMap2.default)(typeNode.fields, function (field) {
      return field.name.value;
    }, function (field) {
      return {
        type: buildOutputFieldType(field.type),
        description: (0, _buildASTSchema.getDescription)(field),
        args: buildInputValues(field.arguments),
        deprecationReason: (0, _buildASTSchema.getDeprecationReason)(field),
        astNode: field
      };
    });
  }

  function buildInputValues(values) {
    return (0, _keyValMap2.default)(values, function (value) {
      return value.name.value;
    }, function (value) {
      var type = buildInputFieldType(value.type);
      return {
        type: type,
        description: (0, _buildASTSchema.getDescription)(value),
        defaultValue: (0, _valueFromAST.valueFromAST)(value.defaultValue, type),
        astNode: value
      };
    });
  }

  function buildInputFieldType(typeNode) {
    if (typeNode.kind === Kind.LIST_TYPE) {
      return new _definition.GraphQLList(buildInputFieldType(typeNode.type));
    }
    if (typeNode.kind === Kind.NON_NULL_TYPE) {
      var nullableType = buildInputFieldType(typeNode.type);
      !!(nullableType instanceof _definition.GraphQLNonNull) ? (0, _invariant2.default)(0, 'Must be nullable') : void 0;
      return new _definition.GraphQLNonNull(nullableType);
    }
    return getInputTypeFromAST(typeNode);
  }

  function buildOutputFieldType(typeNode) {
    if (typeNode.kind === Kind.LIST_TYPE) {
      return new _definition.GraphQLList(buildOutputFieldType(typeNode.type));
    }
    if (typeNode.kind === Kind.NON_NULL_TYPE) {
      var nullableType = buildOutputFieldType(typeNode.type);
      !!(nullableType instanceof _definition.GraphQLNonNull) ? (0, _invariant2.default)(0, 'Must be nullable') : void 0;
      return new _definition.GraphQLNonNull(nullableType);
    }
    return getOutputTypeFromAST(typeNode);
  }
}

function cannotExecuteExtendedSchema() {
  throw new Error('Extended Schema cannot use Interface or Union types for execution.');
}

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.printSchema = printSchema;
exports.printIntrospectionSchema = printIntrospectionSchema;
exports.printType = printType;

var _invariant = __webpack_require__(2);

var _invariant2 = _interopRequireDefault(_invariant);

var _isNullish = __webpack_require__(9);

var _isNullish2 = _interopRequireDefault(_isNullish);

var _isInvalid = __webpack_require__(17);

var _isInvalid2 = _interopRequireDefault(_isInvalid);

var _astFromValue = __webpack_require__(26);

var _printer = __webpack_require__(4);

var _definition = __webpack_require__(1);

var _scalars = __webpack_require__(8);

var _directives = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function printSchema(schema) {
  return printFilteredSchema(schema, function (n) {
    return !isSpecDirective(n);
  }, isDefinedType);
}

function printIntrospectionSchema(schema) {
  return printFilteredSchema(schema, isSpecDirective, isIntrospectionType);
}

function isSpecDirective(directiveName) {
  return directiveName === 'skip' || directiveName === 'include' || directiveName === 'deprecated';
}

function isDefinedType(typename) {
  return !isIntrospectionType(typename) && !isBuiltInScalar(typename);
}

function isIntrospectionType(typename) {
  return typename.indexOf('__') === 0;
}

function isBuiltInScalar(typename) {
  return typename === 'String' || typename === 'Boolean' || typename === 'Int' || typename === 'Float' || typename === 'ID';
}

function printFilteredSchema(schema, directiveFilter, typeFilter) {
  var directives = schema.getDirectives().filter(function (directive) {
    return directiveFilter(directive.name);
  });
  var typeMap = schema.getTypeMap();
  var types = Object.keys(typeMap).filter(typeFilter).sort(function (name1, name2) {
    return name1.localeCompare(name2);
  }).map(function (typeName) {
    return typeMap[typeName];
  });

  return [printSchemaDefinition(schema)].concat(directives.map(printDirective), types.map(printType)).filter(Boolean).join('\n\n') + '\n';
}

function printSchemaDefinition(schema) {
  if (isSchemaOfCommonNames(schema)) {
    return;
  }

  var operationTypes = [];

  var queryType = schema.getQueryType();
  if (queryType) {
    operationTypes.push('  query: ' + queryType.name);
  }

  var mutationType = schema.getMutationType();
  if (mutationType) {
    operationTypes.push('  mutation: ' + mutationType.name);
  }

  var subscriptionType = schema.getSubscriptionType();
  if (subscriptionType) {
    operationTypes.push('  subscription: ' + subscriptionType.name);
  }

  return 'schema {\n' + operationTypes.join('\n') + '\n}';
}

/**
 * GraphQL schema define root types for each type of operation. These types are
 * the same as any other type and can be named in any manner, however there is
 * a common naming convention:
 *
 *   schema {
 *     query: Query
 *     mutation: Mutation
 *   }
 *
 * When using this naming convention, the schema description can be omitted.
 */
function isSchemaOfCommonNames(schema) {
  var queryType = schema.getQueryType();
  if (queryType && queryType.name !== 'Query') {
    return false;
  }

  var mutationType = schema.getMutationType();
  if (mutationType && mutationType.name !== 'Mutation') {
    return false;
  }

  var subscriptionType = schema.getSubscriptionType();
  if (subscriptionType && subscriptionType.name !== 'Subscription') {
    return false;
  }

  return true;
}

function printType(type) {
  if (type instanceof _definition.GraphQLScalarType) {
    return printScalar(type);
  } else if (type instanceof _definition.GraphQLObjectType) {
    return printObject(type);
  } else if (type instanceof _definition.GraphQLInterfaceType) {
    return printInterface(type);
  } else if (type instanceof _definition.GraphQLUnionType) {
    return printUnion(type);
  } else if (type instanceof _definition.GraphQLEnumType) {
    return printEnum(type);
  }
  !(type instanceof _definition.GraphQLInputObjectType) ? (0, _invariant2.default)(0) : void 0;
  return printInputObject(type);
}

function printScalar(type) {
  return printDescription(type) + ('scalar ' + type.name);
}

function printObject(type) {
  var interfaces = type.getInterfaces();
  var implementedInterfaces = interfaces.length ? ' implements ' + interfaces.map(function (i) {
    return i.name;
  }).join(', ') : '';
  return printDescription(type) + ('type ' + type.name + implementedInterfaces + ' {\n') + printFields(type) + '\n' + '}';
}

function printInterface(type) {
  return printDescription(type) + ('interface ' + type.name + ' {\n') + printFields(type) + '\n' + '}';
}

function printUnion(type) {
  return printDescription(type) + ('union ' + type.name + ' = ' + type.getTypes().join(' | '));
}

function printEnum(type) {
  return printDescription(type) + ('enum ' + type.name + ' {\n') + printEnumValues(type.getValues()) + '\n' + '}';
}

function printEnumValues(values) {
  return values.map(function (value, i) {
    return printDescription(value, '  ', !i) + '  ' + value.name + printDeprecated(value);
  }).join('\n');
}

function printInputObject(type) {
  var fieldMap = type.getFields();
  var fields = Object.keys(fieldMap).map(function (fieldName) {
    return fieldMap[fieldName];
  });
  return printDescription(type) + ('input ' + type.name + ' {\n') + fields.map(function (f, i) {
    return printDescription(f, '  ', !i) + '  ' + printInputValue(f);
  }).join('\n') + '\n' + '}';
}

function printFields(type) {
  var fieldMap = type.getFields();
  var fields = Object.keys(fieldMap).map(function (fieldName) {
    return fieldMap[fieldName];
  });
  return fields.map(function (f, i) {
    return printDescription(f, '  ', !i) + '  ' + f.name + printArgs(f.args, '  ') + ': ' + String(f.type) + printDeprecated(f);
  }).join('\n');
}

function printArgs(args) {
  var indentation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  if (args.length === 0) {
    return '';
  }

  // If every arg does not have a description, print them on one line.
  if (args.every(function (arg) {
    return !arg.description;
  })) {
    return '(' + args.map(printInputValue).join(', ') + ')';
  }

  return '(\n' + args.map(function (arg, i) {
    return printDescription(arg, '  ' + indentation, !i) + '  ' + indentation + printInputValue(arg);
  }).join('\n') + '\n' + indentation + ')';
}

function printInputValue(arg) {
  var argDecl = arg.name + ': ' + String(arg.type);
  if (!(0, _isInvalid2.default)(arg.defaultValue)) {
    argDecl += ' = ' + (0, _printer.print)((0, _astFromValue.astFromValue)(arg.defaultValue, arg.type));
  }
  return argDecl;
}

function printDirective(directive) {
  return printDescription(directive) + 'directive @' + directive.name + printArgs(directive.args) + ' on ' + directive.locations.join(' | ');
}

function printDeprecated(fieldOrEnumVal) {
  var reason = fieldOrEnumVal.deprecationReason;
  if ((0, _isNullish2.default)(reason)) {
    return '';
  }
  if (reason === '' || reason === _directives.DEFAULT_DEPRECATION_REASON) {
    return ' @deprecated';
  }
  return ' @deprecated(reason: ' + (0, _printer.print)((0, _astFromValue.astFromValue)(reason, _scalars.GraphQLString)) + ')';
}

function printDescription(def) {
  var indentation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var firstInBlock = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  if (!def.description) {
    return '';
  }
  var lines = def.description.split('\n');
  var description = indentation && !firstInBlock ? '\n' : '';
  for (var i = 0; i < lines.length; i++) {
    if (lines[i] === '') {
      description += indentation + '#\n';
    } else {
      // For > 120 character long lines, cut at space boundaries into sublines
      // of ~80 chars.
      var sublines = breakLine(lines[i], 120 - indentation.length);
      for (var j = 0; j < sublines.length; j++) {
        description += indentation + '# ' + sublines[j] + '\n';
      }
    }
  }
  return description;
}

function breakLine(line, len) {
  if (line.length < len + 5) {
    return [line];
  }
  var parts = line.split(new RegExp('((?: |^).{15,' + (len - 40) + '}(?= |$))'));
  if (parts.length < 4) {
    return [line];
  }
  var sublines = [parts[0] + parts[1] + parts[2]];
  for (var i = 3; i < parts.length; i += 2) {
    sublines.push(parts[i].slice(1) + parts[i + 1]);
  }
  return sublines;
}

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.concatAST = concatAST;


/**
 * Provided a collection of ASTs, presumably each from different files,
 * concatenate the ASTs together into batched AST, useful for validating many
 * GraphQL source files which together represent one conceptual application.
 */
function concatAST(asts) {
  var batchDefinitions = [];
  for (var i = 0; i < asts.length; i++) {
    var definitions = asts[i].definitions;
    for (var j = 0; j < definitions.length; j++) {
      batchDefinitions.push(definitions[j]);
    }
  }
  return {
    kind: 'Document',
    definitions: batchDefinitions
  };
} /**
   * Copyright (c) 2015-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *
   * 
   */

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.separateOperations = separateOperations;

var _visitor = __webpack_require__(16);

/**
 * separateOperations accepts a single AST document which may contain many
 * operations and fragments and returns a collection of AST documents each of
 * which contains a single operation as well the fragment definitions it
 * refers to.
 */
function separateOperations(documentAST) {
  var operations = [];
  var fragments = Object.create(null);
  var positions = new Map();
  var depGraph = Object.create(null);
  var fromName = void 0;
  var idx = 0;

  // Populate metadata and build a dependency graph.
  (0, _visitor.visit)(documentAST, {
    OperationDefinition: function OperationDefinition(node) {
      fromName = opName(node);
      operations.push(node);
      positions.set(node, idx++);
    },
    FragmentDefinition: function FragmentDefinition(node) {
      fromName = node.name.value;
      fragments[fromName] = node;
      positions.set(node, idx++);
    },
    FragmentSpread: function FragmentSpread(node) {
      var toName = node.name.value;
      (depGraph[fromName] || (depGraph[fromName] = Object.create(null)))[toName] = true;
    }
  });

  // For each operation, produce a new synthesized AST which includes only what
  // is necessary for completing that operation.
  var separatedDocumentASTs = Object.create(null);
  operations.forEach(function (operation) {
    var operationName = opName(operation);
    var dependencies = Object.create(null);
    collectTransitiveDependencies(dependencies, depGraph, operationName);

    // The list of definition nodes to be included for this operation, sorted
    // to retain the same order as the original document.
    var definitions = [operation];
    Object.keys(dependencies).forEach(function (name) {
      definitions.push(fragments[name]);
    });
    definitions.sort(function (n1, n2) {
      return (positions.get(n1) || 0) - (positions.get(n2) || 0);
    });

    separatedDocumentASTs[operationName] = {
      kind: 'Document',
      definitions: definitions
    };
  });

  return separatedDocumentASTs;
} /**
   * Copyright (c) 2015-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *
   * 
   */

// Provides the empty string for anonymous operations.
function opName(operation) {
  return operation.name ? operation.name.value : '';
}

// From a dependency graph, collects a list of transitive dependencies by
// recursing through a dependency graph.
function collectTransitiveDependencies(collected, depGraph, fromName) {
  var immediateDeps = depGraph[fromName];
  if (immediateDeps) {
    Object.keys(immediateDeps).forEach(function (toName) {
      if (!collected[toName]) {
        collected[toName] = true;
        collectTransitiveDependencies(collected, depGraph, toName);
      }
    });
  }
}

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DangerousChangeType = exports.BreakingChangeType = undefined;
exports.findBreakingChanges = findBreakingChanges;
exports.findDangerousChanges = findDangerousChanges;
exports.findRemovedTypes = findRemovedTypes;
exports.findTypesThatChangedKind = findTypesThatChangedKind;
exports.findArgChanges = findArgChanges;
exports.findFieldsThatChangedType = findFieldsThatChangedType;
exports.findFieldsThatChangedTypeOnInputObjectTypes = findFieldsThatChangedTypeOnInputObjectTypes;
exports.findTypesRemovedFromUnions = findTypesRemovedFromUnions;
exports.findTypesAddedToUnions = findTypesAddedToUnions;
exports.findValuesRemovedFromEnums = findValuesRemovedFromEnums;
exports.findValuesAddedToEnums = findValuesAddedToEnums;
exports.findInterfacesRemovedFromObjectTypes = findInterfacesRemovedFromObjectTypes;

var _definition = __webpack_require__(1);

var _schema = __webpack_require__(5);

/**
 * Copyright (c) 2016-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

var BreakingChangeType = exports.BreakingChangeType = {
  FIELD_CHANGED_KIND: 'FIELD_CHANGED_KIND',
  FIELD_REMOVED: 'FIELD_REMOVED',
  TYPE_CHANGED_KIND: 'TYPE_CHANGED_KIND',
  TYPE_REMOVED: 'TYPE_REMOVED',
  TYPE_REMOVED_FROM_UNION: 'TYPE_REMOVED_FROM_UNION',
  VALUE_REMOVED_FROM_ENUM: 'VALUE_REMOVED_FROM_ENUM',
  ARG_REMOVED: 'ARG_REMOVED',
  ARG_CHANGED_KIND: 'ARG_CHANGED_KIND',
  NON_NULL_ARG_ADDED: 'NON_NULL_ARG_ADDED',
  NON_NULL_INPUT_FIELD_ADDED: 'NON_NULL_INPUT_FIELD_ADDED',
  INTERFACE_REMOVED_FROM_OBJECT: 'INTERFACE_REMOVED_FROM_OBJECT'
};

var DangerousChangeType = exports.DangerousChangeType = {
  ARG_DEFAULT_VALUE_CHANGE: 'ARG_DEFAULT_VALUE_CHANGE',
  VALUE_ADDED_TO_ENUM: 'VALUE_ADDED_TO_ENUM',
  TYPE_ADDED_TO_UNION: 'TYPE_ADDED_TO_UNION'
};

/**
 * Given two schemas, returns an Array containing descriptions of all the types
 * of breaking changes covered by the other functions down below.
 */
function findBreakingChanges(oldSchema, newSchema) {
  return [].concat(findRemovedTypes(oldSchema, newSchema), findTypesThatChangedKind(oldSchema, newSchema), findFieldsThatChangedType(oldSchema, newSchema), findTypesRemovedFromUnions(oldSchema, newSchema), findValuesRemovedFromEnums(oldSchema, newSchema), findArgChanges(oldSchema, newSchema).breakingChanges, findInterfacesRemovedFromObjectTypes(oldSchema, newSchema));
}

/**
 * Given two schemas, returns an Array containing descriptions of all the types
 * of potentially dangerous changes covered by the other functions down below.
 */
function findDangerousChanges(oldSchema, newSchema) {
  return [].concat(findArgChanges(oldSchema, newSchema).dangerousChanges, findValuesAddedToEnums(oldSchema, newSchema), findTypesAddedToUnions(oldSchema, newSchema));
}

/**
 * Given two schemas, returns an Array containing descriptions of any breaking
 * changes in the newSchema related to removing an entire type.
 */
function findRemovedTypes(oldSchema, newSchema) {
  var oldTypeMap = oldSchema.getTypeMap();
  var newTypeMap = newSchema.getTypeMap();

  var breakingChanges = [];
  Object.keys(oldTypeMap).forEach(function (typeName) {
    if (!newTypeMap[typeName]) {
      breakingChanges.push({
        type: BreakingChangeType.TYPE_REMOVED,
        description: typeName + ' was removed.'
      });
    }
  });
  return breakingChanges;
}

/**
 * Given two schemas, returns an Array containing descriptions of any breaking
 * changes in the newSchema related to changing the type of a type.
 */
function findTypesThatChangedKind(oldSchema, newSchema) {
  var oldTypeMap = oldSchema.getTypeMap();
  var newTypeMap = newSchema.getTypeMap();

  var breakingChanges = [];
  Object.keys(oldTypeMap).forEach(function (typeName) {
    if (!newTypeMap[typeName]) {
      return;
    }
    var oldType = oldTypeMap[typeName];
    var newType = newTypeMap[typeName];
    if (!(oldType instanceof newType.constructor)) {
      breakingChanges.push({
        type: BreakingChangeType.TYPE_CHANGED_KIND,
        description: typeName + ' changed from ' + (typeKindName(oldType) + ' to ' + typeKindName(newType) + '.')
      });
    }
  });
  return breakingChanges;
}

/**
 * Given two schemas, returns an Array containing descriptions of any
 * breaking or dangerous changes in the newSchema related to arguments
 * (such as removal or change of type of an argument, or a change in an
 * argument's default value).
 */
function findArgChanges(oldSchema, newSchema) {
  var oldTypeMap = oldSchema.getTypeMap();
  var newTypeMap = newSchema.getTypeMap();

  var breakingChanges = [];
  var dangerousChanges = [];

  Object.keys(oldTypeMap).forEach(function (typeName) {
    var oldType = oldTypeMap[typeName];
    var newType = newTypeMap[typeName];
    if (!(oldType instanceof _definition.GraphQLObjectType || oldType instanceof _definition.GraphQLInterfaceType) || !(newType instanceof oldType.constructor)) {
      return;
    }

    var oldTypeFields = oldType.getFields();
    var newTypeFields = newType.getFields();

    Object.keys(oldTypeFields).forEach(function (fieldName) {
      if (!newTypeFields[fieldName]) {
        return;
      }

      oldTypeFields[fieldName].args.forEach(function (oldArgDef) {
        var newArgs = newTypeFields[fieldName].args;
        var newArgDef = newArgs.find(function (arg) {
          return arg.name === oldArgDef.name;
        });

        // Arg not present
        if (!newArgDef) {
          breakingChanges.push({
            type: BreakingChangeType.ARG_REMOVED,
            description: oldType.name + '.' + fieldName + ' arg ' + (oldArgDef.name + ' was removed')
          });
        } else {
          var isSafe = isChangeSafeForInputObjectFieldOrFieldArg(oldArgDef.type, newArgDef.type);
          if (!isSafe) {
            breakingChanges.push({
              type: BreakingChangeType.ARG_CHANGED_KIND,
              description: oldType.name + '.' + fieldName + ' arg ' + (oldArgDef.name + ' has changed type from ') + (oldArgDef.type.toString() + ' to ' + newArgDef.type.toString())
            });
          } else if (oldArgDef.defaultValue !== undefined && oldArgDef.defaultValue !== newArgDef.defaultValue) {
            dangerousChanges.push({
              type: DangerousChangeType.ARG_DEFAULT_VALUE_CHANGE,
              description: oldType.name + '.' + fieldName + ' arg ' + (oldArgDef.name + ' has changed defaultValue')
            });
          }
        }
      });
      // Check if a non-null arg was added to the field
      newTypeFields[fieldName].args.forEach(function (newArgDef) {
        var oldArgs = oldTypeFields[fieldName].args;
        var oldArgDef = oldArgs.find(function (arg) {
          return arg.name === newArgDef.name;
        });
        if (!oldArgDef && newArgDef.type instanceof _definition.GraphQLNonNull) {
          breakingChanges.push({
            type: BreakingChangeType.NON_NULL_ARG_ADDED,
            description: 'A non-null arg ' + newArgDef.name + ' on ' + (newType.name + '.' + fieldName + ' was added')
          });
        }
      });
    });
  });

  return {
    breakingChanges: breakingChanges,
    dangerousChanges: dangerousChanges
  };
}

function typeKindName(type) {
  if (type instanceof _definition.GraphQLScalarType) {
    return 'a Scalar type';
  }
  if (type instanceof _definition.GraphQLObjectType) {
    return 'an Object type';
  }
  if (type instanceof _definition.GraphQLInterfaceType) {
    return 'an Interface type';
  }
  if (type instanceof _definition.GraphQLUnionType) {
    return 'a Union type';
  }
  if (type instanceof _definition.GraphQLEnumType) {
    return 'an Enum type';
  }
  if (type instanceof _definition.GraphQLInputObjectType) {
    return 'an Input type';
  }
  throw new TypeError('Unknown type ' + type.constructor.name);
}

/**
 * Given two schemas, returns an Array containing descriptions of any breaking
 * changes in the newSchema related to the fields on a type. This includes if
 * a field has been removed from a type, if a field has changed type, or if
 * a non-null field is added to an input type.
 */
function findFieldsThatChangedType(oldSchema, newSchema) {
  return [].concat(findFieldsThatChangedTypeOnObjectOrInterfaceTypes(oldSchema, newSchema), findFieldsThatChangedTypeOnInputObjectTypes(oldSchema, newSchema));
}

function findFieldsThatChangedTypeOnObjectOrInterfaceTypes(oldSchema, newSchema) {
  var oldTypeMap = oldSchema.getTypeMap();
  var newTypeMap = newSchema.getTypeMap();

  var breakingFieldChanges = [];
  Object.keys(oldTypeMap).forEach(function (typeName) {
    var oldType = oldTypeMap[typeName];
    var newType = newTypeMap[typeName];
    if (!(oldType instanceof _definition.GraphQLObjectType || oldType instanceof _definition.GraphQLInterfaceType) || !(newType instanceof oldType.constructor)) {
      return;
    }

    var oldTypeFieldsDef = oldType.getFields();
    var newTypeFieldsDef = newType.getFields();
    Object.keys(oldTypeFieldsDef).forEach(function (fieldName) {
      // Check if the field is missing on the type in the new schema.
      if (!(fieldName in newTypeFieldsDef)) {
        breakingFieldChanges.push({
          type: BreakingChangeType.FIELD_REMOVED,
          description: typeName + '.' + fieldName + ' was removed.'
        });
      } else {
        var oldFieldType = oldTypeFieldsDef[fieldName].type;
        var newFieldType = newTypeFieldsDef[fieldName].type;
        var isSafe = isChangeSafeForObjectOrInterfaceField(oldFieldType, newFieldType);
        if (!isSafe) {
          var oldFieldTypeString = (0, _definition.isNamedType)(oldFieldType) ? oldFieldType.name : oldFieldType.toString();
          var newFieldTypeString = (0, _definition.isNamedType)(newFieldType) ? newFieldType.name : newFieldType.toString();
          breakingFieldChanges.push({
            type: BreakingChangeType.FIELD_CHANGED_KIND,
            description: typeName + '.' + fieldName + ' changed type from ' + (oldFieldTypeString + ' to ' + newFieldTypeString + '.')
          });
        }
      }
    });
  });
  return breakingFieldChanges;
}

function findFieldsThatChangedTypeOnInputObjectTypes(oldSchema, newSchema) {
  var oldTypeMap = oldSchema.getTypeMap();
  var newTypeMap = newSchema.getTypeMap();

  var breakingFieldChanges = [];
  Object.keys(oldTypeMap).forEach(function (typeName) {
    var oldType = oldTypeMap[typeName];
    var newType = newTypeMap[typeName];
    if (!(oldType instanceof _definition.GraphQLInputObjectType) || !(newType instanceof _definition.GraphQLInputObjectType)) {
      return;
    }

    var oldTypeFieldsDef = oldType.getFields();
    var newTypeFieldsDef = newType.getFields();
    Object.keys(oldTypeFieldsDef).forEach(function (fieldName) {
      // Check if the field is missing on the type in the new schema.
      if (!(fieldName in newTypeFieldsDef)) {
        breakingFieldChanges.push({
          type: BreakingChangeType.FIELD_REMOVED,
          description: typeName + '.' + fieldName + ' was removed.'
        });
      } else {
        var oldFieldType = oldTypeFieldsDef[fieldName].type;
        var newFieldType = newTypeFieldsDef[fieldName].type;

        var isSafe = isChangeSafeForInputObjectFieldOrFieldArg(oldFieldType, newFieldType);
        if (!isSafe) {
          var oldFieldTypeString = (0, _definition.isNamedType)(oldFieldType) ? oldFieldType.name : oldFieldType.toString();
          var newFieldTypeString = (0, _definition.isNamedType)(newFieldType) ? newFieldType.name : newFieldType.toString();
          breakingFieldChanges.push({
            type: BreakingChangeType.FIELD_CHANGED_KIND,
            description: typeName + '.' + fieldName + ' changed type from ' + (oldFieldTypeString + ' to ' + newFieldTypeString + '.')
          });
        }
      }
    });
    // Check if a non-null field was added to the input object type
    Object.keys(newTypeFieldsDef).forEach(function (fieldName) {
      if (!(fieldName in oldTypeFieldsDef) && newTypeFieldsDef[fieldName].type instanceof _definition.GraphQLNonNull) {
        breakingFieldChanges.push({
          type: BreakingChangeType.NON_NULL_INPUT_FIELD_ADDED,
          description: 'A non-null field ' + fieldName + ' on ' + ('input type ' + newType.name + ' was added.')
        });
      }
    });
  });
  return breakingFieldChanges;
}

function isChangeSafeForObjectOrInterfaceField(oldType, newType) {
  if ((0, _definition.isNamedType)(oldType)) {
    return (
      // if they're both named types, see if their names are equivalent
      (0, _definition.isNamedType)(newType) && oldType.name === newType.name ||
      // moving from nullable to non-null of the same underlying type is safe
      newType instanceof _definition.GraphQLNonNull && isChangeSafeForObjectOrInterfaceField(oldType, newType.ofType)
    );
  } else if (oldType instanceof _definition.GraphQLList) {
    return (
      // if they're both lists, make sure the underlying types are compatible
      newType instanceof _definition.GraphQLList && isChangeSafeForObjectOrInterfaceField(oldType.ofType, newType.ofType) ||
      // moving from nullable to non-null of the same underlying type is safe
      newType instanceof _definition.GraphQLNonNull && isChangeSafeForObjectOrInterfaceField(oldType, newType.ofType)
    );
  } else if (oldType instanceof _definition.GraphQLNonNull) {
    // if they're both non-null, make sure the underlying types are compatible
    return newType instanceof _definition.GraphQLNonNull && isChangeSafeForObjectOrInterfaceField(oldType.ofType, newType.ofType);
  }
  return false;
}

function isChangeSafeForInputObjectFieldOrFieldArg(oldType, newType) {
  if ((0, _definition.isNamedType)(oldType)) {
    // if they're both named types, see if their names are equivalent
    return (0, _definition.isNamedType)(newType) && oldType.name === newType.name;
  } else if (oldType instanceof _definition.GraphQLList) {
    // if they're both lists, make sure the underlying types are compatible
    return newType instanceof _definition.GraphQLList && isChangeSafeForInputObjectFieldOrFieldArg(oldType.ofType, newType.ofType);
  } else if (oldType instanceof _definition.GraphQLNonNull) {
    return (
      // if they're both non-null, make sure the underlying types are
      // compatible
      newType instanceof _definition.GraphQLNonNull && isChangeSafeForInputObjectFieldOrFieldArg(oldType.ofType, newType.ofType) ||
      // moving from non-null to nullable of the same underlying type is safe
      !(newType instanceof _definition.GraphQLNonNull) && isChangeSafeForInputObjectFieldOrFieldArg(oldType.ofType, newType)
    );
  }
  return false;
}

/**
 * Given two schemas, returns an Array containing descriptions of any breaking
 * changes in the newSchema related to removing types from a union type.
 */
function findTypesRemovedFromUnions(oldSchema, newSchema) {
  var oldTypeMap = oldSchema.getTypeMap();
  var newTypeMap = newSchema.getTypeMap();

  var typesRemovedFromUnion = [];
  Object.keys(oldTypeMap).forEach(function (typeName) {
    var oldType = oldTypeMap[typeName];
    var newType = newTypeMap[typeName];
    if (!(oldType instanceof _definition.GraphQLUnionType) || !(newType instanceof _definition.GraphQLUnionType)) {
      return;
    }
    var typeNamesInNewUnion = Object.create(null);
    newType.getTypes().forEach(function (type) {
      typeNamesInNewUnion[type.name] = true;
    });
    oldType.getTypes().forEach(function (type) {
      if (!typeNamesInNewUnion[type.name]) {
        typesRemovedFromUnion.push({
          type: BreakingChangeType.TYPE_REMOVED_FROM_UNION,
          description: type.name + ' was removed from union type ' + typeName + '.'
        });
      }
    });
  });
  return typesRemovedFromUnion;
}

/**
 * Given two schemas, returns an Array containing descriptions of any dangerous
 * changes in the newSchema related to adding types to a union type.
 */
function findTypesAddedToUnions(oldSchema, newSchema) {
  var oldTypeMap = oldSchema.getTypeMap();
  var newTypeMap = newSchema.getTypeMap();

  var typesAddedToUnion = [];
  Object.keys(newTypeMap).forEach(function (typeName) {
    var oldType = oldTypeMap[typeName];
    var newType = newTypeMap[typeName];
    if (!(oldType instanceof _definition.GraphQLUnionType) || !(newType instanceof _definition.GraphQLUnionType)) {
      return;
    }
    var typeNamesInOldUnion = Object.create(null);
    oldType.getTypes().forEach(function (type) {
      typeNamesInOldUnion[type.name] = true;
    });
    newType.getTypes().forEach(function (type) {
      if (!typeNamesInOldUnion[type.name]) {
        typesAddedToUnion.push({
          type: DangerousChangeType.TYPE_ADDED_TO_UNION,
          description: type.name + ' was added to union type ' + typeName + '.'
        });
      }
    });
  });
  return typesAddedToUnion;
}
/**
 * Given two schemas, returns an Array containing descriptions of any breaking
 * changes in the newSchema related to removing values from an enum type.
 */
function findValuesRemovedFromEnums(oldSchema, newSchema) {
  var oldTypeMap = oldSchema.getTypeMap();
  var newTypeMap = newSchema.getTypeMap();

  var valuesRemovedFromEnums = [];
  Object.keys(oldTypeMap).forEach(function (typeName) {
    var oldType = oldTypeMap[typeName];
    var newType = newTypeMap[typeName];
    if (!(oldType instanceof _definition.GraphQLEnumType) || !(newType instanceof _definition.GraphQLEnumType)) {
      return;
    }
    var valuesInNewEnum = Object.create(null);
    newType.getValues().forEach(function (value) {
      valuesInNewEnum[value.name] = true;
    });
    oldType.getValues().forEach(function (value) {
      if (!valuesInNewEnum[value.name]) {
        valuesRemovedFromEnums.push({
          type: BreakingChangeType.VALUE_REMOVED_FROM_ENUM,
          description: value.name + ' was removed from enum type ' + typeName + '.'
        });
      }
    });
  });
  return valuesRemovedFromEnums;
}

/**
 * Given two schemas, returns an Array containing descriptions of any dangerous
 * changes in the newSchema related to adding values to an enum type.
 */
function findValuesAddedToEnums(oldSchema, newSchema) {
  var oldTypeMap = oldSchema.getTypeMap();
  var newTypeMap = newSchema.getTypeMap();

  var valuesAddedToEnums = [];
  Object.keys(oldTypeMap).forEach(function (typeName) {
    var oldType = oldTypeMap[typeName];
    var newType = newTypeMap[typeName];
    if (!(oldType instanceof _definition.GraphQLEnumType) || !(newType instanceof _definition.GraphQLEnumType)) {
      return;
    }

    var valuesInOldEnum = Object.create(null);
    oldType.getValues().forEach(function (value) {
      valuesInOldEnum[value.name] = true;
    });
    newType.getValues().forEach(function (value) {
      if (!valuesInOldEnum[value.name]) {
        valuesAddedToEnums.push({
          type: DangerousChangeType.VALUE_ADDED_TO_ENUM,
          description: value.name + ' was added to enum type ' + typeName + '.'
        });
      }
    });
  });
  return valuesAddedToEnums;
}

function findInterfacesRemovedFromObjectTypes(oldSchema, newSchema) {
  var oldTypeMap = oldSchema.getTypeMap();
  var newTypeMap = newSchema.getTypeMap();
  var breakingChanges = [];

  Object.keys(oldTypeMap).forEach(function (typeName) {
    var oldType = oldTypeMap[typeName];
    var newType = newTypeMap[typeName];
    if (!(oldType instanceof _definition.GraphQLObjectType) || !(newType instanceof _definition.GraphQLObjectType)) {
      return;
    }

    var oldInterfaces = oldType.getInterfaces();
    var newInterfaces = newType.getInterfaces();
    oldInterfaces.forEach(function (oldInterface) {
      if (!newInterfaces.some(function (int) {
        return int.name === oldInterface.name;
      })) {
        breakingChanges.push({
          type: BreakingChangeType.INTERFACE_REMOVED_FROM_OBJECT,
          description: typeName + ' no longer implements interface ' + (oldInterface.name + '.')
        });
      }
    });
  });
  return breakingChanges;
}

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findDeprecatedUsages = findDeprecatedUsages;

var _GraphQLError = __webpack_require__(11);

var _visitor = __webpack_require__(16);

var _definition = __webpack_require__(1);

var _schema = __webpack_require__(5);

var _TypeInfo = __webpack_require__(27);

/**
 * A validation rule which reports deprecated usages.
 *
 * Returns a list of GraphQLError instances describing each deprecated use.
 */
function findDeprecatedUsages(schema, ast) {
  var errors = [];
  var typeInfo = new _TypeInfo.TypeInfo(schema);

  (0, _visitor.visit)(ast, (0, _visitor.visitWithTypeInfo)(typeInfo, {
    Field: function Field(node) {
      var fieldDef = typeInfo.getFieldDef();
      if (fieldDef && fieldDef.isDeprecated) {
        var parentType = typeInfo.getParentType();
        if (parentType) {
          var reason = fieldDef.deprecationReason;
          errors.push(new _GraphQLError.GraphQLError('The field ' + parentType.name + '.' + fieldDef.name + ' is deprecated.' + (reason ? ' ' + reason : ''), [node]));
        }
      }
    },
    EnumValue: function EnumValue(node) {
      var enumVal = typeInfo.getEnumValue();
      if (enumVal && enumVal.isDeprecated) {
        var type = (0, _definition.getNamedType)(typeInfo.getInputType());
        if (type) {
          var reason = enumVal.deprecationReason;
          errors.push(new _GraphQLError.GraphQLError('The enum value ' + type.name + '.' + enumVal.name + ' is deprecated.' + (reason ? ' ' + reason : ''), [node]));
        }
      }
    }
  }));

  return errors;
} /**
   * Copyright (c) 2015-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *
   * 
   */

/***/ }),
/* 100 */
/***/ (function(module, exports) {

module.exports = {"0":{"profile":{"picture":"https://secure.meetupstatic.com/photos/member/d/4/d/c/thumb_137634492.jpeg","url":"https://www.meetup.com/digital-east/members/105378092/"},"name":"Robert Preus-MacL­aren","id":0,"friends":[]},"1":{"profile":{"picture":"https://secure.meetupstatic.com/photos/member/4/7/6/a/thumb_219078282.jpeg","url":"https://www.meetup.com/digital-east/members/161160282/"},"name":"Emily-Jayn­e Crittenden­","id":1,"friends":[25,16,11,15,7]},"2":{"profile":{"picture":"https://secure.meetupstatic.com/s/img/458386242735519287330/noPhoto_50.png","url":"https://www.meetup.com/digital-east/members/79443942/"},"name":"Joe Strachan","id":2,"friends":[10,26,11,5,1,14,22]},"3":{"profile":{"picture":"https://secure.meetupstatic.com/photos/member/5/5/2/e/thumb_260361806.jpeg","url":"https://www.meetup.com/digital-east/members/184806481/"},"name":"Adrian Pickering","id":3,"friends":[7,16,24,8]},"4":{"profile":{"picture":"https://secure.meetupstatic.com/photos/member/c/4/0/6/thumb_83810182.jpeg","url":"https://www.meetup.com/digital-east/members/69820262/"},"name":"Chris Yallop","id":4,"friends":[22,23]},"5":{"profile":{"picture":"https://secure.meetupstatic.com/s/img/458386242735519287330/noPhoto_50.png","url":"https://www.meetup.com/digital-east/members/116715402/"},"name":"Katja Mordaunt","id":5,"friends":[]},"6":{"profile":{"picture":"https://secure.meetupstatic.com/s/img/458386242735519287330/noPhoto_50.png","url":"https://www.meetup.com/digital-east/members/212544219/"},"name":"Steph","id":6,"friends":[2,24,13,18,1,7,3,5,19,9]},"7":{"profile":{"picture":"https://secure.meetupstatic.com/photos/member/d/f/0/4/thumb_254217092.jpeg","url":"https://www.meetup.com/digital-east/members/200418615/"},"name":"Jamie Pearcey","id":7,"friends":[23,5,0,2,6,10,21]},"8":{"profile":{"picture":"https://secure.meetupstatic.com/photos/member/5/c/5/6/thumb_260543638.jpeg","url":"https://www.meetup.com/digital-east/members/213865742/"},"name":"Claire Riseboroug­h +1","id":8,"friends":[]},"9":{"profile":{"picture":"https://secure.meetupstatic.com/photos/member/8/9/6/a/thumb_256895178.jpeg","url":"https://www.meetup.com/digital-east/members/205907159/"},"name":"Shyam Rallapalli­","id":9,"friends":[11,21,20,12,18,0]},"10":{"profile":{"picture":"https://secure.meetupstatic.com/photos/member/6/d/b/c/thumb_161188092.jpeg","url":"https://www.meetup.com/digital-east/members/121670152/"},"name":"John Heaser","id":10,"friends":[3,14,26,16]},"11":{"profile":{"picture":"https://secure.meetupstatic.com/photos/member/d/9/f/0/thumb_135175792.jpeg","url":"https://www.meetup.com/digital-east/members/91208692/"},"name":"Stephen Gowen","id":11,"friends":[24,2]},"12":{"profile":{"picture":"https://secure.meetupstatic.com/photos/member/4/7/e/2/thumb_139038402.jpeg","url":"https://www.meetup.com/digital-east/members/106253472/"},"name":"Geoff Bones","id":12,"friends":[16,17,1,9,6]},"13":{"profile":{"picture":"https://secure.meetupstatic.com/photos/member/9/4/c/2/thumb_91538082.jpeg","url":"https://www.meetup.com/digital-east/members/25130492/"},"name":"Mike Diplock","id":13,"friends":[8,16,3,24,10,6,21,7,25,23,0]},"14":{"profile":{"picture":"https://secure.meetupstatic.com/photos/member/5/6/6/d/thumb_262042125.jpeg","url":"https://www.meetup.com/digital-east/members/217045173/"},"name":"Sam Regan","id":14,"friends":[6,13,0,16,26,19,12,15]},"15":{"profile":{"picture":"https://secure.meetupstatic.com/s/img/458386242735519287330/noPhoto_50.png","url":"https://www.meetup.com/digital-east/members/60045582/"},"name":"Matthew","id":15,"friends":[4,1,6,20,24,10,0,3,2,23,19,18,25,9,12,13,5]},"16":{"profile":{"picture":"https://secure.meetupstatic.com/photos/member/4/1/f/f/thumb_255676895.jpeg","url":"https://www.meetup.com/digital-east/members/129598562/"},"name":"Dave Rant","id":16,"friends":[14,5,8,4,15,21,3,2,26]},"17":{"profile":{"picture":"https://secure.meetupstatic.com/s/img/458386242735519287330/noPhoto_50.png","url":"https://www.meetup.com/digital-east/members/193586161/"},"name":"Alex Newark","id":17,"friends":[2]},"18":{"profile":{"picture":"https://secure.meetupstatic.com/photos/member/1/9/4/8/thumb_176826472.jpeg","url":"https://www.meetup.com/digital-east/members/60435142/"},"name":"Martin Payne","id":18,"friends":[19,25,26,16,4,7,5,17,0]},"19":{"profile":{"picture":"https://secure.meetupstatic.com/photos/member/a/8/5/4/thumb_79483092.jpeg","url":"https://www.meetup.com/digital-east/members/67743422/"},"name":"Paul Thornton","id":19,"friends":[16,21,8,11,20,0,5,23,15,4,14]},"20":{"profile":{"picture":"https://secure.meetupstatic.com/photos/member/8/1/b/c/thumb_90033212.jpeg","url":"https://www.meetup.com/digital-east/members/75326122/"},"name":"Rupert Redington","id":20,"friends":[5,14,12,2,10,9,11,19,26]},"21":{"profile":{"picture":"https://secure.meetupstatic.com/s/img/458386242735519287330/noPhoto_50.png","url":"https://www.meetup.com/digital-east/members/187354758/"},"name":"Anthony Stansbridg­e","id":21,"friends":[13,24,23,15,25]},"22":{"profile":{"picture":"https://secure.meetupstatic.com/s/img/458386242735519287330/noPhoto_50.png","url":"https://www.meetup.com/digital-east/members/240587284/"},"name":"Steve Lee","id":22,"friends":[11,9,20,15,14,18]},"23":{"profile":{"picture":"https://secure.meetupstatic.com/photos/member/5/b/4/1/thumb_19403361.jpeg","url":"https://www.meetup.com/digital-east/members/20843401/"},"name":"Ashwini","id":23,"friends":[7,0,24,3,2,16,8,25,22]},"24":{"profile":{"picture":"https://secure.meetupstatic.com/photos/member/e/7/b/e/thumb_263639326.jpeg","url":"https://www.meetup.com/digital-east/members/220607449/"},"name":"Rachel Lawson","id":24,"friends":[7,1,21,12,18,4,19,25,14,13]},"25":{"profile":{"picture":"https://secure.meetupstatic.com/photos/member/b/a/d/a/thumb_271847834.jpeg","url":"https://www.meetup.com/digital-east/members/144444282/"},"name":"William Corner","id":25,"friends":[3,17,1,20,6,24,5,10,19,16,8]},"26":{"profile":{"picture":"https://secure.meetupstatic.com/s/img/458386242735519287330/noPhoto_50.png","url":"https://www.meetup.com/digital-east/members/227507198/"},"name":"Luke Meppem","id":26,"friends":[13,11,19]},"27":{"profile":{"picture":"https://secure.meetupstatic.com/photos/member/b/2/0/8/thumb_271605576.jpeg","url":"https://www.meetup.com/digital-east/members/239087267/"},"name":"Alex Moore","id":27,"friends":[21,7,0,15,13,22,23,17,24,6,20,10,1,5,11,3,2,25]}}

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * reveal.js
 * http://lab.hakim.se/reveal-js
 * MIT licensed
 *
 * Copyright (C) 2017 Hakim El Hattab, http://hakim.se
 */
(function( root, factory ) {
	if( true ) {
		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
			root.Reveal = factory();
			return root.Reveal;
		}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else if( typeof exports === 'object' ) {
		// Node. Does not work with strict CommonJS.
		module.exports = factory();
	} else {
		// Browser globals.
		root.Reveal = factory();
	}
}( this, function() {

	'use strict';

	var Reveal;

	// The reveal.js version
	var VERSION = '3.5.0';

	var SLIDES_SELECTOR = '.slides section',
		HORIZONTAL_SLIDES_SELECTOR = '.slides>section',
		VERTICAL_SLIDES_SELECTOR = '.slides>section.present>section',
		HOME_SLIDE_SELECTOR = '.slides>section:first-of-type',
		UA = navigator.userAgent,

		// Configuration defaults, can be overridden at initialization time
		config = {

			// The "normal" size of the presentation, aspect ratio will be preserved
			// when the presentation is scaled to fit different resolutions
			width: 960,
			height: 700,

			// Factor of the display size that should remain empty around the content
			margin: 0.04,

			// Bounds for smallest/largest possible scale to apply to content
			minScale: 0.2,
			maxScale: 2.0,

			// Display controls in the bottom right corner
			controls: true,

			// Display a presentation progress bar
			progress: true,

			// Display the page number of the current slide
			slideNumber: false,

			// Determine which displays to show the slide number on
			showSlideNumber: 'all',

			// Push each slide change to the browser history
			history: false,

			// Enable keyboard shortcuts for navigation
			keyboard: true,

			// Optional function that blocks keyboard events when retuning false
			keyboardCondition: null,

			// Enable the slide overview mode
			overview: true,

			// Vertical centering of slides
			center: true,

			// Enables touch navigation on devices with touch input
			touch: true,

			// Loop the presentation
			loop: false,

			// Change the presentation direction to be RTL
			rtl: false,

			// Randomizes the order of slides each time the presentation loads
			shuffle: false,

			// Turns fragments on and off globally
			fragments: true,

			// Flags if the presentation is running in an embedded mode,
			// i.e. contained within a limited portion of the screen
			embedded: false,

			// Flags if we should show a help overlay when the question-mark
			// key is pressed
			help: true,

			// Flags if it should be possible to pause the presentation (blackout)
			pause: true,

			// Flags if speaker notes should be visible to all viewers
			showNotes: false,

			// Global override for autolaying embedded media (video/audio/iframe)
			// - null: Media will only autoplay if data-autoplay is present
			// - true: All media will autoplay, regardless of individual setting
			// - false: No media will autoplay, regardless of individual setting
			autoPlayMedia: null,

			// Number of milliseconds between automatically proceeding to the
			// next slide, disabled when set to 0, this value can be overwritten
			// by using a data-autoslide attribute on your slides
			autoSlide: 0,

			// Stop auto-sliding after user input
			autoSlideStoppable: true,

			// Use this method for navigation when auto-sliding (defaults to navigateNext)
			autoSlideMethod: null,

			// Enable slide navigation via mouse wheel
			mouseWheel: false,

			// Apply a 3D roll to links on hover
			rollingLinks: false,

			// Hides the address bar on mobile devices
			hideAddressBar: true,

			// Opens links in an iframe preview overlay
			previewLinks: false,

			// Exposes the reveal.js API through window.postMessage
			postMessage: true,

			// Dispatches all reveal.js events to the parent window through postMessage
			postMessageEvents: false,

			// Focuses body when page changes visibility to ensure keyboard shortcuts work
			focusBodyOnPageVisibilityChange: true,

			// Transition style
			transition: 'slide', // none/fade/slide/convex/concave/zoom

			// Transition speed
			transitionSpeed: 'default', // default/fast/slow

			// Transition style for full page slide backgrounds
			backgroundTransition: 'fade', // none/fade/slide/convex/concave/zoom

			// Parallax background image
			parallaxBackgroundImage: '', // CSS syntax, e.g. "a.jpg"

			// Parallax background size
			parallaxBackgroundSize: '', // CSS syntax, e.g. "3000px 2000px"

			// Amount of pixels to move the parallax background per slide step
			parallaxBackgroundHorizontal: null,
			parallaxBackgroundVertical: null,

			// The maximum number of pages a single slide can expand onto when printing
			// to PDF, unlimited by default
			pdfMaxPagesPerSlide: Number.POSITIVE_INFINITY,

			// Offset used to reduce the height of content within exported PDF pages.
			// This exists to account for environment differences based on how you
			// print to PDF. CLI printing options, like phantomjs and wkpdf, can end
			// on precisely the total height of the document whereas in-browser
			// printing has to end one pixel before.
			pdfPageHeightOffset: -1,

			// Number of slides away from the current that are visible
			viewDistance: 3,

			// The display mode that will be used to show slides
			display: 'block',

			// Script dependencies to load
			dependencies: []

		},

		// Flags if Reveal.initialize() has been called
		initialized = false,

		// Flags if reveal.js is loaded (has dispatched the 'ready' event)
		loaded = false,

		// Flags if the overview mode is currently active
		overview = false,

		// Holds the dimensions of our overview slides, including margins
		overviewSlideWidth = null,
		overviewSlideHeight = null,

		// The horizontal and vertical index of the currently active slide
		indexh,
		indexv,

		// The previous and current slide HTML elements
		previousSlide,
		currentSlide,

		previousBackground,

		// Slides may hold a data-state attribute which we pick up and apply
		// as a class to the body. This list contains the combined state of
		// all current slides.
		state = [],

		// The current scale of the presentation (see width/height config)
		scale = 1,

		// CSS transform that is currently applied to the slides container,
		// split into two groups
		slidesTransform = { layout: '', overview: '' },

		// Cached references to DOM elements
		dom = {},

		// Features supported by the browser, see #checkCapabilities()
		features = {},

		// Client is a mobile device, see #checkCapabilities()
		isMobileDevice,

		// Client is a desktop Chrome, see #checkCapabilities()
		isChrome,

		// Throttles mouse wheel navigation
		lastMouseWheelStep = 0,

		// Delays updates to the URL due to a Chrome thumbnailer bug
		writeURLTimeout = 0,

		// Flags if the interaction event listeners are bound
		eventsAreBound = false,

		// The current auto-slide duration
		autoSlide = 0,

		// Auto slide properties
		autoSlidePlayer,
		autoSlideTimeout = 0,
		autoSlideStartTime = -1,
		autoSlidePaused = false,

		// Holds information about the currently ongoing touch input
		touch = {
			startX: 0,
			startY: 0,
			startSpan: 0,
			startCount: 0,
			captured: false,
			threshold: 40
		},

		// Holds information about the keyboard shortcuts
		keyboardShortcuts = {
			'N  ,  SPACE':			'Next slide',
			'P':					'Previous slide',
			'&#8592;  ,  H':		'Navigate left',
			'&#8594;  ,  L':		'Navigate right',
			'&#8593;  ,  K':		'Navigate up',
			'&#8595;  ,  J':		'Navigate down',
			'Home':					'First slide',
			'End':					'Last slide',
			'B  ,  .':				'Pause',
			'F':					'Fullscreen',
			'ESC, O':				'Slide overview'
		};

	/**
	 * Starts up the presentation if the client is capable.
	 */
	function initialize( options ) {

		// Make sure we only initialize once
		if( initialized === true ) return;

		initialized = true;

		checkCapabilities();

		if( !features.transforms2d && !features.transforms3d ) {
			document.body.setAttribute( 'class', 'no-transforms' );

			// Since JS won't be running any further, we load all lazy
			// loading elements upfront
			var images = toArray( document.getElementsByTagName( 'img' ) ),
				iframes = toArray( document.getElementsByTagName( 'iframe' ) );

			var lazyLoadable = images.concat( iframes );

			for( var i = 0, len = lazyLoadable.length; i < len; i++ ) {
				var element = lazyLoadable[i];
				if( element.getAttribute( 'data-src' ) ) {
					element.setAttribute( 'src', element.getAttribute( 'data-src' ) );
					element.removeAttribute( 'data-src' );
				}
			}

			// If the browser doesn't support core features we won't be
			// using JavaScript to control the presentation
			return;
		}

		// Cache references to key DOM elements
		dom.wrapper = document.querySelector( '.reveal' );
		dom.slides = document.querySelector( '.reveal .slides' );

		// Force a layout when the whole page, incl fonts, has loaded
		window.addEventListener( 'load', layout, false );

		var query = Reveal.getQueryHash();

		// Do not accept new dependencies via query config to avoid
		// the potential of malicious script injection
		if( typeof query['dependencies'] !== 'undefined' ) delete query['dependencies'];

		// Copy options over to our config object
		extend( config, options );
		extend( config, query );

		// Hide the address bar in mobile browsers
		hideAddressBar();

		// Loads the dependencies and continues to #start() once done
		load();

	}

	/**
	 * Inspect the client to see what it's capable of, this
	 * should only happens once per runtime.
	 */
	function checkCapabilities() {

		isMobileDevice = /(iphone|ipod|ipad|android)/gi.test( UA );
		isChrome = /chrome/i.test( UA ) && !/edge/i.test( UA );

		var testElement = document.createElement( 'div' );

		features.transforms3d = 'WebkitPerspective' in testElement.style ||
								'MozPerspective' in testElement.style ||
								'msPerspective' in testElement.style ||
								'OPerspective' in testElement.style ||
								'perspective' in testElement.style;

		features.transforms2d = 'WebkitTransform' in testElement.style ||
								'MozTransform' in testElement.style ||
								'msTransform' in testElement.style ||
								'OTransform' in testElement.style ||
								'transform' in testElement.style;

		features.requestAnimationFrameMethod = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame;
		features.requestAnimationFrame = typeof features.requestAnimationFrameMethod === 'function';

		features.canvas = !!document.createElement( 'canvas' ).getContext;

		// Transitions in the overview are disabled in desktop and
		// Safari due to lag
		features.overviewTransitions = !/Version\/[\d\.]+.*Safari/.test( UA );

		// Flags if we should use zoom instead of transform to scale
		// up slides. Zoom produces crisper results but has a lot of
		// xbrowser quirks so we only use it in whitelsited browsers.
		features.zoom = 'zoom' in testElement.style && !isMobileDevice &&
						( isChrome || /Version\/[\d\.]+.*Safari/.test( UA ) );

	}

    /**
     * Loads the dependencies of reveal.js. Dependencies are
     * defined via the configuration option 'dependencies'
     * and will be loaded prior to starting/binding reveal.js.
     * Some dependencies may have an 'async' flag, if so they
     * will load after reveal.js has been started up.
     */
	function load() {

		var scripts = [],
			scriptsAsync = [],
			scriptsToPreload = 0;

		// Called once synchronous scripts finish loading
		function proceed() {
			if( scriptsAsync.length ) {
				// Load asynchronous scripts
				head.js.apply( null, scriptsAsync );
			}

			start();
		}

		function loadScript( s ) {
			head.ready( s.src.match( /([\w\d_\-]*)\.?js$|[^\\\/]*$/i )[0], function() {
				// Extension may contain callback functions
				if( typeof s.callback === 'function' ) {
					s.callback.apply( this );
				}

				if( --scriptsToPreload === 0 ) {
					proceed();
				}
			});
		}

		for( var i = 0, len = config.dependencies.length; i < len; i++ ) {
			var s = config.dependencies[i];

			// Load if there's no condition or the condition is truthy
			if( !s.condition || s.condition() ) {
				if( s.async ) {
					scriptsAsync.push( s.src );
				}
				else {
					scripts.push( s.src );
				}

				loadScript( s );
			}
		}

		if( scripts.length ) {
			scriptsToPreload = scripts.length;

			// Load synchronous scripts
			head.js.apply( null, scripts );
		}
		else {
			proceed();
		}

	}

	/**
	 * Starts up reveal.js by binding input events and navigating
	 * to the current URL deeplink if there is one.
	 */
	function start() {

		// Make sure we've got all the DOM elements we need
		setupDOM();

		// Listen to messages posted to this window
		setupPostMessage();

		// Prevent the slides from being scrolled out of view
		setupScrollPrevention();

		// Resets all vertical slides so that only the first is visible
		resetVerticalSlides();

		// Updates the presentation to match the current configuration values
		configure();

		// Read the initial hash
		readURL();

		// Update all backgrounds
		updateBackground( true );

		// Notify listeners that the presentation is ready but use a 1ms
		// timeout to ensure it's not fired synchronously after #initialize()
		setTimeout( function() {
			// Enable transitions now that we're loaded
			dom.slides.classList.remove( 'no-transition' );

			loaded = true;

			dom.wrapper.classList.add( 'ready' );

			dispatchEvent( 'ready', {
				'indexh': indexh,
				'indexv': indexv,
				'currentSlide': currentSlide
			} );
		}, 1 );

		// Special setup and config is required when printing to PDF
		if( isPrintingPDF() ) {
			removeEventListeners();

			// The document needs to have loaded for the PDF layout
			// measurements to be accurate
			if( document.readyState === 'complete' ) {
				setupPDF();
			}
			else {
				window.addEventListener( 'load', setupPDF );
			}
		}

	}

	/**
	 * Finds and stores references to DOM elements which are
	 * required by the presentation. If a required element is
	 * not found, it is created.
	 */
	function setupDOM() {

		// Prevent transitions while we're loading
		dom.slides.classList.add( 'no-transition' );

		// Background element
		dom.background = createSingletonNode( dom.wrapper, 'div', 'backgrounds', null );

		// Progress bar
		dom.progress = createSingletonNode( dom.wrapper, 'div', 'progress', '<span></span>' );
		dom.progressbar = dom.progress.querySelector( 'span' );

		// Arrow controls
		createSingletonNode( dom.wrapper, 'aside', 'controls',
			'<button class="navigate-left" aria-label="previous slide"></button>' +
			'<button class="navigate-right" aria-label="next slide"></button>' +
			'<button class="navigate-up" aria-label="above slide"></button>' +
			'<button class="navigate-down" aria-label="below slide"></button>' );

		// Slide number
		dom.slideNumber = createSingletonNode( dom.wrapper, 'div', 'slide-number', '' );

		// Element containing notes that are visible to the audience
		dom.speakerNotes = createSingletonNode( dom.wrapper, 'div', 'speaker-notes', null );
		dom.speakerNotes.setAttribute( 'data-prevent-swipe', '' );
		dom.speakerNotes.setAttribute( 'tabindex', '0' );

		// Overlay graphic which is displayed during the paused mode
		createSingletonNode( dom.wrapper, 'div', 'pause-overlay', null );

		// Cache references to elements
		dom.controls = document.querySelector( '.reveal .controls' );

		dom.wrapper.setAttribute( 'role', 'application' );

		// There can be multiple instances of controls throughout the page
		dom.controlsLeft = toArray( document.querySelectorAll( '.navigate-left' ) );
		dom.controlsRight = toArray( document.querySelectorAll( '.navigate-right' ) );
		dom.controlsUp = toArray( document.querySelectorAll( '.navigate-up' ) );
		dom.controlsDown = toArray( document.querySelectorAll( '.navigate-down' ) );
		dom.controlsPrev = toArray( document.querySelectorAll( '.navigate-prev' ) );
		dom.controlsNext = toArray( document.querySelectorAll( '.navigate-next' ) );

		dom.statusDiv = createStatusDiv();
	}

	/**
	 * Creates a hidden div with role aria-live to announce the
	 * current slide content. Hide the div off-screen to make it
	 * available only to Assistive Technologies.
	 *
	 * @return {HTMLElement}
	 */
	function createStatusDiv() {

		var statusDiv = document.getElementById( 'aria-status-div' );
		if( !statusDiv ) {
			statusDiv = document.createElement( 'div' );
			statusDiv.style.position = 'absolute';
			statusDiv.style.height = '1px';
			statusDiv.style.width = '1px';
			statusDiv.style.overflow = 'hidden';
			statusDiv.style.clip = 'rect( 1px, 1px, 1px, 1px )';
			statusDiv.setAttribute( 'id', 'aria-status-div' );
			statusDiv.setAttribute( 'aria-live', 'polite' );
			statusDiv.setAttribute( 'aria-atomic','true' );
			dom.wrapper.appendChild( statusDiv );
		}
		return statusDiv;

	}

	/**
	 * Converts the given HTML element into a string of text
	 * that can be announced to a screen reader. Hidden
	 * elements are excluded.
	 */
	function getStatusText( node ) {

		var text = '';

		// Text node
		if( node.nodeType === 3 ) {
			text += node.textContent;
		}
		// Element node
		else if( node.nodeType === 1 ) {

			var isAriaHidden = node.getAttribute( 'aria-hidden' );
			var isDisplayHidden = window.getComputedStyle( node )['display'] === 'none';
			if( isAriaHidden !== 'true' && !isDisplayHidden ) {

				toArray( node.childNodes ).forEach( function( child ) {
					text += getStatusText( child );
				} );

			}

		}

		return text;

	}

	/**
	 * Configures the presentation for printing to a static
	 * PDF.
	 */
	function setupPDF() {

		var slideSize = getComputedSlideSize( window.innerWidth, window.innerHeight );

		// Dimensions of the PDF pages
		var pageWidth = Math.floor( slideSize.width * ( 1 + config.margin ) ),
			pageHeight = Math.floor( slideSize.height * ( 1 + config.margin ) );

		// Dimensions of slides within the pages
		var slideWidth = slideSize.width,
			slideHeight = slideSize.height;

		// Let the browser know what page size we want to print
		injectStyleSheet( '@page{size:'+ pageWidth +'px '+ pageHeight +'px; margin: 0px;}' );

		// Limit the size of certain elements to the dimensions of the slide
		injectStyleSheet( '.reveal section>img, .reveal section>video, .reveal section>iframe{max-width: '+ slideWidth +'px; max-height:'+ slideHeight +'px}' );

		document.body.classList.add( 'print-pdf' );
		document.body.style.width = pageWidth + 'px';
		document.body.style.height = pageHeight + 'px';

		// Make sure stretch elements fit on slide
		layoutSlideContents( slideWidth, slideHeight );

		// Add each slide's index as attributes on itself, we need these
		// indices to generate slide numbers below
		toArray( dom.wrapper.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR ) ).forEach( function( hslide, h ) {
			hslide.setAttribute( 'data-index-h', h );

			if( hslide.classList.contains( 'stack' ) ) {
				toArray( hslide.querySelectorAll( 'section' ) ).forEach( function( vslide, v ) {
					vslide.setAttribute( 'data-index-h', h );
					vslide.setAttribute( 'data-index-v', v );
				} );
			}
		} );

		// Slide and slide background layout
		toArray( dom.wrapper.querySelectorAll( SLIDES_SELECTOR ) ).forEach( function( slide ) {

			// Vertical stacks are not centred since their section
			// children will be
			if( slide.classList.contains( 'stack' ) === false ) {
				// Center the slide inside of the page, giving the slide some margin
				var left = ( pageWidth - slideWidth ) / 2,
					top = ( pageHeight - slideHeight ) / 2;

				var contentHeight = slide.scrollHeight;
				var numberOfPages = Math.max( Math.ceil( contentHeight / pageHeight ), 1 );

				// Adhere to configured pages per slide limit
				numberOfPages = Math.min( numberOfPages, config.pdfMaxPagesPerSlide );

				// Center slides vertically
				if( numberOfPages === 1 && config.center || slide.classList.contains( 'center' ) ) {
					top = Math.max( ( pageHeight - contentHeight ) / 2, 0 );
				}

				// Wrap the slide in a page element and hide its overflow
				// so that no page ever flows onto another
				var page = document.createElement( 'div' );
				page.className = 'pdf-page';
				page.style.height = ( ( pageHeight + config.pdfPageHeightOffset ) * numberOfPages ) + 'px';
				slide.parentNode.insertBefore( page, slide );
				page.appendChild( slide );

				// Position the slide inside of the page
				slide.style.left = left + 'px';
				slide.style.top = top + 'px';
				slide.style.width = slideWidth + 'px';

				if( slide.slideBackgroundElement ) {
					page.insertBefore( slide.slideBackgroundElement, slide );
				}

				// Inject notes if `showNotes` is enabled
				if( config.showNotes ) {

					// Are there notes for this slide?
					var notes = getSlideNotes( slide );
					if( notes ) {

						var notesSpacing = 8;
						var notesLayout = typeof config.showNotes === 'string' ? config.showNotes : 'inline';
						var notesElement = document.createElement( 'div' );
						notesElement.classList.add( 'speaker-notes' );
						notesElement.classList.add( 'speaker-notes-pdf' );
						notesElement.setAttribute( 'data-layout', notesLayout );
						notesElement.innerHTML = notes;

						if( notesLayout === 'separate-page' ) {
							page.parentNode.insertBefore( notesElement, page.nextSibling );
						}
						else {
							notesElement.style.left = notesSpacing + 'px';
							notesElement.style.bottom = notesSpacing + 'px';
							notesElement.style.width = ( pageWidth - notesSpacing*2 ) + 'px';
							page.appendChild( notesElement );
						}

					}

				}

				// Inject slide numbers if `slideNumbers` are enabled
				if( config.slideNumber && /all|print/i.test( config.showSlideNumber ) ) {
					var slideNumberH = parseInt( slide.getAttribute( 'data-index-h' ), 10 ) + 1,
						slideNumberV = parseInt( slide.getAttribute( 'data-index-v' ), 10 ) + 1;

					var numberElement = document.createElement( 'div' );
					numberElement.classList.add( 'slide-number' );
					numberElement.classList.add( 'slide-number-pdf' );
					numberElement.innerHTML = formatSlideNumber( slideNumberH, '.', slideNumberV );
					page.appendChild( numberElement );
				}
			}

		} );

		// Show all fragments
		toArray( dom.wrapper.querySelectorAll( SLIDES_SELECTOR + ' .fragment' ) ).forEach( function( fragment ) {
			fragment.classList.add( 'visible' );
		} );

		// Notify subscribers that the PDF layout is good to go
		dispatchEvent( 'pdf-ready' );

	}

	/**
	 * This is an unfortunate necessity. Some actions – such as
	 * an input field being focused in an iframe or using the
	 * keyboard to expand text selection beyond the bounds of
	 * a slide – can trigger our content to be pushed out of view.
	 * This scrolling can not be prevented by hiding overflow in
	 * CSS (we already do) so we have to resort to repeatedly
	 * checking if the slides have been offset :(
	 */
	function setupScrollPrevention() {

		setInterval( function() {
			if( dom.wrapper.scrollTop !== 0 || dom.wrapper.scrollLeft !== 0 ) {
				dom.wrapper.scrollTop = 0;
				dom.wrapper.scrollLeft = 0;
			}
		}, 1000 );

	}

	/**
	 * Creates an HTML element and returns a reference to it.
	 * If the element already exists the existing instance will
	 * be returned.
	 *
	 * @param {HTMLElement} container
	 * @param {string} tagname
	 * @param {string} classname
	 * @param {string} innerHTML
	 *
	 * @return {HTMLElement}
	 */
	function createSingletonNode( container, tagname, classname, innerHTML ) {

		// Find all nodes matching the description
		var nodes = container.querySelectorAll( '.' + classname );

		// Check all matches to find one which is a direct child of
		// the specified container
		for( var i = 0; i < nodes.length; i++ ) {
			var testNode = nodes[i];
			if( testNode.parentNode === container ) {
				return testNode;
			}
		}

		// If no node was found, create it now
		var node = document.createElement( tagname );
		node.classList.add( classname );
		if( typeof innerHTML === 'string' ) {
			node.innerHTML = innerHTML;
		}
		container.appendChild( node );

		return node;

	}

	/**
	 * Creates the slide background elements and appends them
	 * to the background container. One element is created per
	 * slide no matter if the given slide has visible background.
	 */
	function createBackgrounds() {

		var printMode = isPrintingPDF();

		// Clear prior backgrounds
		dom.background.innerHTML = '';
		dom.background.classList.add( 'no-transition' );

		// Iterate over all horizontal slides
		toArray( dom.wrapper.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR ) ).forEach( function( slideh ) {

			var backgroundStack = createBackground( slideh, dom.background );

			// Iterate over all vertical slides
			toArray( slideh.querySelectorAll( 'section' ) ).forEach( function( slidev ) {

				createBackground( slidev, backgroundStack );

				backgroundStack.classList.add( 'stack' );

			} );

		} );

		// Add parallax background if specified
		if( config.parallaxBackgroundImage ) {

			dom.background.style.backgroundImage = 'url("' + config.parallaxBackgroundImage + '")';
			dom.background.style.backgroundSize = config.parallaxBackgroundSize;

			// Make sure the below properties are set on the element - these properties are
			// needed for proper transitions to be set on the element via CSS. To remove
			// annoying background slide-in effect when the presentation starts, apply
			// these properties after short time delay
			setTimeout( function() {
				dom.wrapper.classList.add( 'has-parallax-background' );
			}, 1 );

		}
		else {

			dom.background.style.backgroundImage = '';
			dom.wrapper.classList.remove( 'has-parallax-background' );

		}

	}

	/**
	 * Creates a background for the given slide.
	 *
	 * @param {HTMLElement} slide
	 * @param {HTMLElement} container The element that the background
	 * should be appended to
	 * @return {HTMLElement} New background div
	 */
	function createBackground( slide, container ) {

		var data = {
			background: slide.getAttribute( 'data-background' ),
			backgroundSize: slide.getAttribute( 'data-background-size' ),
			backgroundImage: slide.getAttribute( 'data-background-image' ),
			backgroundVideo: slide.getAttribute( 'data-background-video' ),
			backgroundIframe: slide.getAttribute( 'data-background-iframe' ),
			backgroundColor: slide.getAttribute( 'data-background-color' ),
			backgroundRepeat: slide.getAttribute( 'data-background-repeat' ),
			backgroundPosition: slide.getAttribute( 'data-background-position' ),
			backgroundTransition: slide.getAttribute( 'data-background-transition' )
		};

		var element = document.createElement( 'div' );

		// Carry over custom classes from the slide to the background
		element.className = 'slide-background ' + slide.className.replace( /present|past|future/, '' );

		if( data.background ) {
			// Auto-wrap image urls in url(...)
			if( /^(http|file|\/\/)/gi.test( data.background ) || /\.(svg|png|jpg|jpeg|gif|bmp)([?#]|$)/gi.test( data.background ) ) {
				slide.setAttribute( 'data-background-image', data.background );
			}
			else {
				element.style.background = data.background;
			}
		}

		// Create a hash for this combination of background settings.
		// This is used to determine when two slide backgrounds are
		// the same.
		if( data.background || data.backgroundColor || data.backgroundImage || data.backgroundVideo || data.backgroundIframe ) {
			element.setAttribute( 'data-background-hash', data.background +
															data.backgroundSize +
															data.backgroundImage +
															data.backgroundVideo +
															data.backgroundIframe +
															data.backgroundColor +
															data.backgroundRepeat +
															data.backgroundPosition +
															data.backgroundTransition );
		}

		// Additional and optional background properties
		if( data.backgroundSize ) element.style.backgroundSize = data.backgroundSize;
		if( data.backgroundSize ) element.setAttribute( 'data-background-size', data.backgroundSize );
		if( data.backgroundColor ) element.style.backgroundColor = data.backgroundColor;
		if( data.backgroundRepeat ) element.style.backgroundRepeat = data.backgroundRepeat;
		if( data.backgroundPosition ) element.style.backgroundPosition = data.backgroundPosition;
		if( data.backgroundTransition ) element.setAttribute( 'data-background-transition', data.backgroundTransition );

		container.appendChild( element );

		// If backgrounds are being recreated, clear old classes
		slide.classList.remove( 'has-dark-background' );
		slide.classList.remove( 'has-light-background' );

		slide.slideBackgroundElement = element;

		// If this slide has a background color, add a class that
		// signals if it is light or dark. If the slide has no background
		// color, no class will be set
		var computedBackgroundStyle = window.getComputedStyle( element );
		if( computedBackgroundStyle && computedBackgroundStyle.backgroundColor ) {
			var rgb = colorToRgb( computedBackgroundStyle.backgroundColor );

			// Ignore fully transparent backgrounds. Some browsers return
			// rgba(0,0,0,0) when reading the computed background color of
			// an element with no background
			if( rgb && rgb.a !== 0 ) {
				if( colorBrightness( computedBackgroundStyle.backgroundColor ) < 128 ) {
					slide.classList.add( 'has-dark-background' );
				}
				else {
					slide.classList.add( 'has-light-background' );
				}
			}
		}

		return element;

	}

	/**
	 * Registers a listener to postMessage events, this makes it
	 * possible to call all reveal.js API methods from another
	 * window. For example:
	 *
	 * revealWindow.postMessage( JSON.stringify({
	 *   method: 'slide',
	 *   args: [ 2 ]
	 * }), '*' );
	 */
	function setupPostMessage() {

		if( config.postMessage ) {
			window.addEventListener( 'message', function ( event ) {
				var data = event.data;

				// Make sure we're dealing with JSON
				if( typeof data === 'string' && data.charAt( 0 ) === '{' && data.charAt( data.length - 1 ) === '}' ) {
					data = JSON.parse( data );

					// Check if the requested method can be found
					if( data.method && typeof Reveal[data.method] === 'function' ) {
						Reveal[data.method].apply( Reveal, data.args );
					}
				}
			}, false );
		}

	}

	/**
	 * Applies the configuration settings from the config
	 * object. May be called multiple times.
	 *
	 * @param {object} options
	 */
	function configure( options ) {

		var numberOfSlides = dom.wrapper.querySelectorAll( SLIDES_SELECTOR ).length;

		dom.wrapper.classList.remove( config.transition );

		// New config options may be passed when this method
		// is invoked through the API after initialization
		if( typeof options === 'object' ) extend( config, options );

		// Force linear transition based on browser capabilities
		if( features.transforms3d === false ) config.transition = 'linear';

		dom.wrapper.classList.add( config.transition );

		dom.wrapper.setAttribute( 'data-transition-speed', config.transitionSpeed );
		dom.wrapper.setAttribute( 'data-background-transition', config.backgroundTransition );

		dom.controls.style.display = config.controls ? 'block' : 'none';
		dom.progress.style.display = config.progress ? 'block' : 'none';

		if( config.shuffle ) {
			shuffle();
		}

		if( config.rtl ) {
			dom.wrapper.classList.add( 'rtl' );
		}
		else {
			dom.wrapper.classList.remove( 'rtl' );
		}

		if( config.center ) {
			dom.wrapper.classList.add( 'center' );
		}
		else {
			dom.wrapper.classList.remove( 'center' );
		}

		// Exit the paused mode if it was configured off
		if( config.pause === false ) {
			resume();
		}

		if( config.showNotes ) {
			dom.speakerNotes.classList.add( 'visible' );
			dom.speakerNotes.setAttribute( 'data-layout', typeof config.showNotes === 'string' ? config.showNotes : 'inline' );
		}
		else {
			dom.speakerNotes.classList.remove( 'visible' );
		}

		if( config.mouseWheel ) {
			document.addEventListener( 'DOMMouseScroll', onDocumentMouseScroll, false ); // FF
			document.addEventListener( 'mousewheel', onDocumentMouseScroll, false );
		}
		else {
			document.removeEventListener( 'DOMMouseScroll', onDocumentMouseScroll, false ); // FF
			document.removeEventListener( 'mousewheel', onDocumentMouseScroll, false );
		}

		// Rolling 3D links
		if( config.rollingLinks ) {
			enableRollingLinks();
		}
		else {
			disableRollingLinks();
		}

		// Iframe link previews
		if( config.previewLinks ) {
			enablePreviewLinks();
			disablePreviewLinks( '[data-preview-link=false]' );
		}
		else {
			disablePreviewLinks();
			enablePreviewLinks( '[data-preview-link]:not([data-preview-link=false])' );
		}

		// Remove existing auto-slide controls
		if( autoSlidePlayer ) {
			autoSlidePlayer.destroy();
			autoSlidePlayer = null;
		}

		// Generate auto-slide controls if needed
		if( numberOfSlides > 1 && config.autoSlide && config.autoSlideStoppable && features.canvas && features.requestAnimationFrame ) {
			autoSlidePlayer = new Playback( dom.wrapper, function() {
				return Math.min( Math.max( ( Date.now() - autoSlideStartTime ) / autoSlide, 0 ), 1 );
			} );

			autoSlidePlayer.on( 'click', onAutoSlidePlayerClick );
			autoSlidePaused = false;
		}

		// When fragments are turned off they should be visible
		if( config.fragments === false ) {
			toArray( dom.slides.querySelectorAll( '.fragment' ) ).forEach( function( element ) {
				element.classList.add( 'visible' );
				element.classList.remove( 'current-fragment' );
			} );
		}

		// Slide numbers
		var slideNumberDisplay = 'none';
		if( config.slideNumber && !isPrintingPDF() ) {
			if( config.showSlideNumber === 'all' ) {
				slideNumberDisplay = 'block';
			}
			else if( config.showSlideNumber === 'speaker' && isSpeakerNotes() ) {
				slideNumberDisplay = 'block';
			}
		}

		dom.slideNumber.style.display = slideNumberDisplay;

		sync();

	}

	/**
	 * Binds all event listeners.
	 */
	function addEventListeners() {

		eventsAreBound = true;

		window.addEventListener( 'hashchange', onWindowHashChange, false );
		window.addEventListener( 'resize', onWindowResize, false );

		if( config.touch ) {
			dom.wrapper.addEventListener( 'touchstart', onTouchStart, false );
			dom.wrapper.addEventListener( 'touchmove', onTouchMove, false );
			dom.wrapper.addEventListener( 'touchend', onTouchEnd, false );

			// Support pointer-style touch interaction as well
			if( window.navigator.pointerEnabled ) {
				// IE 11 uses un-prefixed version of pointer events
				dom.wrapper.addEventListener( 'pointerdown', onPointerDown, false );
				dom.wrapper.addEventListener( 'pointermove', onPointerMove, false );
				dom.wrapper.addEventListener( 'pointerup', onPointerUp, false );
			}
			else if( window.navigator.msPointerEnabled ) {
				// IE 10 uses prefixed version of pointer events
				dom.wrapper.addEventListener( 'MSPointerDown', onPointerDown, false );
				dom.wrapper.addEventListener( 'MSPointerMove', onPointerMove, false );
				dom.wrapper.addEventListener( 'MSPointerUp', onPointerUp, false );
			}
		}

		if( config.keyboard ) {
			document.addEventListener( 'keydown', onDocumentKeyDown, false );
			document.addEventListener( 'keypress', onDocumentKeyPress, false );
		}

		if( config.progress && dom.progress ) {
			dom.progress.addEventListener( 'click', onProgressClicked, false );
		}

		if( config.focusBodyOnPageVisibilityChange ) {
			var visibilityChange;

			if( 'hidden' in document ) {
				visibilityChange = 'visibilitychange';
			}
			else if( 'msHidden' in document ) {
				visibilityChange = 'msvisibilitychange';
			}
			else if( 'webkitHidden' in document ) {
				visibilityChange = 'webkitvisibilitychange';
			}

			if( visibilityChange ) {
				document.addEventListener( visibilityChange, onPageVisibilityChange, false );
			}
		}

		// Listen to both touch and click events, in case the device
		// supports both
		var pointerEvents = [ 'touchstart', 'click' ];

		// Only support touch for Android, fixes double navigations in
		// stock browser
		if( UA.match( /android/gi ) ) {
			pointerEvents = [ 'touchstart' ];
		}

		pointerEvents.forEach( function( eventName ) {
			dom.controlsLeft.forEach( function( el ) { el.addEventListener( eventName, onNavigateLeftClicked, false ); } );
			dom.controlsRight.forEach( function( el ) { el.addEventListener( eventName, onNavigateRightClicked, false ); } );
			dom.controlsUp.forEach( function( el ) { el.addEventListener( eventName, onNavigateUpClicked, false ); } );
			dom.controlsDown.forEach( function( el ) { el.addEventListener( eventName, onNavigateDownClicked, false ); } );
			dom.controlsPrev.forEach( function( el ) { el.addEventListener( eventName, onNavigatePrevClicked, false ); } );
			dom.controlsNext.forEach( function( el ) { el.addEventListener( eventName, onNavigateNextClicked, false ); } );
		} );

	}

	/**
	 * Unbinds all event listeners.
	 */
	function removeEventListeners() {

		eventsAreBound = false;

		document.removeEventListener( 'keydown', onDocumentKeyDown, false );
		document.removeEventListener( 'keypress', onDocumentKeyPress, false );
		window.removeEventListener( 'hashchange', onWindowHashChange, false );
		window.removeEventListener( 'resize', onWindowResize, false );

		dom.wrapper.removeEventListener( 'touchstart', onTouchStart, false );
		dom.wrapper.removeEventListener( 'touchmove', onTouchMove, false );
		dom.wrapper.removeEventListener( 'touchend', onTouchEnd, false );

		// IE11
		if( window.navigator.pointerEnabled ) {
			dom.wrapper.removeEventListener( 'pointerdown', onPointerDown, false );
			dom.wrapper.removeEventListener( 'pointermove', onPointerMove, false );
			dom.wrapper.removeEventListener( 'pointerup', onPointerUp, false );
		}
		// IE10
		else if( window.navigator.msPointerEnabled ) {
			dom.wrapper.removeEventListener( 'MSPointerDown', onPointerDown, false );
			dom.wrapper.removeEventListener( 'MSPointerMove', onPointerMove, false );
			dom.wrapper.removeEventListener( 'MSPointerUp', onPointerUp, false );
		}

		if ( config.progress && dom.progress ) {
			dom.progress.removeEventListener( 'click', onProgressClicked, false );
		}

		[ 'touchstart', 'click' ].forEach( function( eventName ) {
			dom.controlsLeft.forEach( function( el ) { el.removeEventListener( eventName, onNavigateLeftClicked, false ); } );
			dom.controlsRight.forEach( function( el ) { el.removeEventListener( eventName, onNavigateRightClicked, false ); } );
			dom.controlsUp.forEach( function( el ) { el.removeEventListener( eventName, onNavigateUpClicked, false ); } );
			dom.controlsDown.forEach( function( el ) { el.removeEventListener( eventName, onNavigateDownClicked, false ); } );
			dom.controlsPrev.forEach( function( el ) { el.removeEventListener( eventName, onNavigatePrevClicked, false ); } );
			dom.controlsNext.forEach( function( el ) { el.removeEventListener( eventName, onNavigateNextClicked, false ); } );
		} );

	}

	/**
	 * Extend object a with the properties of object b.
	 * If there's a conflict, object b takes precedence.
	 *
	 * @param {object} a
	 * @param {object} b
	 */
	function extend( a, b ) {

		for( var i in b ) {
			a[ i ] = b[ i ];
		}

	}

	/**
	 * Converts the target object to an array.
	 *
	 * @param {object} o
	 * @return {object[]}
	 */
	function toArray( o ) {

		return Array.prototype.slice.call( o );

	}

	/**
	 * Utility for deserializing a value.
	 *
	 * @param {*} value
	 * @return {*}
	 */
	function deserialize( value ) {

		if( typeof value === 'string' ) {
			if( value === 'null' ) return null;
			else if( value === 'true' ) return true;
			else if( value === 'false' ) return false;
			else if( value.match( /^[\d\.]+$/ ) ) return parseFloat( value );
		}

		return value;

	}

	/**
	 * Measures the distance in pixels between point a
	 * and point b.
	 *
	 * @param {object} a point with x/y properties
	 * @param {object} b point with x/y properties
	 *
	 * @return {number}
	 */
	function distanceBetween( a, b ) {

		var dx = a.x - b.x,
			dy = a.y - b.y;

		return Math.sqrt( dx*dx + dy*dy );

	}

	/**
	 * Applies a CSS transform to the target element.
	 *
	 * @param {HTMLElement} element
	 * @param {string} transform
	 */
	function transformElement( element, transform ) {

		element.style.WebkitTransform = transform;
		element.style.MozTransform = transform;
		element.style.msTransform = transform;
		element.style.transform = transform;

	}

	/**
	 * Applies CSS transforms to the slides container. The container
	 * is transformed from two separate sources: layout and the overview
	 * mode.
	 *
	 * @param {object} transforms
	 */
	function transformSlides( transforms ) {

		// Pick up new transforms from arguments
		if( typeof transforms.layout === 'string' ) slidesTransform.layout = transforms.layout;
		if( typeof transforms.overview === 'string' ) slidesTransform.overview = transforms.overview;

		// Apply the transforms to the slides container
		if( slidesTransform.layout ) {
			transformElement( dom.slides, slidesTransform.layout + ' ' + slidesTransform.overview );
		}
		else {
			transformElement( dom.slides, slidesTransform.overview );
		}

	}

	/**
	 * Injects the given CSS styles into the DOM.
	 *
	 * @param {string} value
	 */
	function injectStyleSheet( value ) {

		var tag = document.createElement( 'style' );
		tag.type = 'text/css';
		if( tag.styleSheet ) {
			tag.styleSheet.cssText = value;
		}
		else {
			tag.appendChild( document.createTextNode( value ) );
		}
		document.getElementsByTagName( 'head' )[0].appendChild( tag );

	}

	/**
	 * Find the closest parent that matches the given
	 * selector.
	 *
	 * @param {HTMLElement} target The child element
	 * @param {String} selector The CSS selector to match
	 * the parents against
	 *
	 * @return {HTMLElement} The matched parent or null
	 * if no matching parent was found
	 */
	function closestParent( target, selector ) {

		var parent = target.parentNode;

		while( parent ) {

			// There's some overhead doing this each time, we don't
			// want to rewrite the element prototype but should still
			// be enough to feature detect once at startup...
			var matchesMethod = parent.matches || parent.matchesSelector || parent.msMatchesSelector;

			// If we find a match, we're all set
			if( matchesMethod && matchesMethod.call( parent, selector ) ) {
				return parent;
			}

			// Keep searching
			parent = parent.parentNode;

		}

		return null;

	}

	/**
	 * Converts various color input formats to an {r:0,g:0,b:0} object.
	 *
	 * @param {string} color The string representation of a color
	 * @example
	 * colorToRgb('#000');
	 * @example
	 * colorToRgb('#000000');
	 * @example
	 * colorToRgb('rgb(0,0,0)');
	 * @example
	 * colorToRgb('rgba(0,0,0)');
	 *
	 * @return {{r: number, g: number, b: number, [a]: number}|null}
	 */
	function colorToRgb( color ) {

		var hex3 = color.match( /^#([0-9a-f]{3})$/i );
		if( hex3 && hex3[1] ) {
			hex3 = hex3[1];
			return {
				r: parseInt( hex3.charAt( 0 ), 16 ) * 0x11,
				g: parseInt( hex3.charAt( 1 ), 16 ) * 0x11,
				b: parseInt( hex3.charAt( 2 ), 16 ) * 0x11
			};
		}

		var hex6 = color.match( /^#([0-9a-f]{6})$/i );
		if( hex6 && hex6[1] ) {
			hex6 = hex6[1];
			return {
				r: parseInt( hex6.substr( 0, 2 ), 16 ),
				g: parseInt( hex6.substr( 2, 2 ), 16 ),
				b: parseInt( hex6.substr( 4, 2 ), 16 )
			};
		}

		var rgb = color.match( /^rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/i );
		if( rgb ) {
			return {
				r: parseInt( rgb[1], 10 ),
				g: parseInt( rgb[2], 10 ),
				b: parseInt( rgb[3], 10 )
			};
		}

		var rgba = color.match( /^rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\,\s*([\d]+|[\d]*.[\d]+)\s*\)$/i );
		if( rgba ) {
			return {
				r: parseInt( rgba[1], 10 ),
				g: parseInt( rgba[2], 10 ),
				b: parseInt( rgba[3], 10 ),
				a: parseFloat( rgba[4] )
			};
		}

		return null;

	}

	/**
	 * Calculates brightness on a scale of 0-255.
	 *
	 * @param {string} color See colorToRgb for supported formats.
	 * @see {@link colorToRgb}
	 */
	function colorBrightness( color ) {

		if( typeof color === 'string' ) color = colorToRgb( color );

		if( color ) {
			return ( color.r * 299 + color.g * 587 + color.b * 114 ) / 1000;
		}

		return null;

	}

	/**
	 * Returns the remaining height within the parent of the
	 * target element.
	 *
	 * remaining height = [ configured parent height ] - [ current parent height ]
	 *
	 * @param {HTMLElement} element
	 * @param {number} [height]
	 */
	function getRemainingHeight( element, height ) {

		height = height || 0;

		if( element ) {
			var newHeight, oldHeight = element.style.height;

			// Change the .stretch element height to 0 in order find the height of all
			// the other elements
			element.style.height = '0px';
			newHeight = height - element.parentNode.offsetHeight;

			// Restore the old height, just in case
			element.style.height = oldHeight + 'px';

			return newHeight;
		}

		return height;

	}

	/**
	 * Checks if this instance is being used to print a PDF.
	 */
	function isPrintingPDF() {

		return ( /print-pdf/gi ).test( window.location.search );

	}

	/**
	 * Hides the address bar if we're on a mobile device.
	 */
	function hideAddressBar() {

		if( config.hideAddressBar && isMobileDevice ) {
			// Events that should trigger the address bar to hide
			window.addEventListener( 'load', removeAddressBar, false );
			window.addEventListener( 'orientationchange', removeAddressBar, false );
		}

	}

	/**
	 * Causes the address bar to hide on mobile devices,
	 * more vertical space ftw.
	 */
	function removeAddressBar() {

		setTimeout( function() {
			window.scrollTo( 0, 1 );
		}, 10 );

	}

	/**
	 * Dispatches an event of the specified type from the
	 * reveal DOM element.
	 */
	function dispatchEvent( type, args ) {

		var event = document.createEvent( 'HTMLEvents', 1, 2 );
		event.initEvent( type, true, true );
		extend( event, args );
		dom.wrapper.dispatchEvent( event );

		// If we're in an iframe, post each reveal.js event to the
		// parent window. Used by the notes plugin
		if( config.postMessageEvents && window.parent !== window.self ) {
			window.parent.postMessage( JSON.stringify({ namespace: 'reveal', eventName: type, state: getState() }), '*' );
		}

	}

	/**
	 * Wrap all links in 3D goodness.
	 */
	function enableRollingLinks() {

		if( features.transforms3d && !( 'msPerspective' in document.body.style ) ) {
			var anchors = dom.wrapper.querySelectorAll( SLIDES_SELECTOR + ' a' );

			for( var i = 0, len = anchors.length; i < len; i++ ) {
				var anchor = anchors[i];

				if( anchor.textContent && !anchor.querySelector( '*' ) && ( !anchor.className || !anchor.classList.contains( anchor, 'roll' ) ) ) {
					var span = document.createElement('span');
					span.setAttribute('data-title', anchor.text);
					span.innerHTML = anchor.innerHTML;

					anchor.classList.add( 'roll' );
					anchor.innerHTML = '';
					anchor.appendChild(span);
				}
			}
		}

	}

	/**
	 * Unwrap all 3D links.
	 */
	function disableRollingLinks() {

		var anchors = dom.wrapper.querySelectorAll( SLIDES_SELECTOR + ' a.roll' );

		for( var i = 0, len = anchors.length; i < len; i++ ) {
			var anchor = anchors[i];
			var span = anchor.querySelector( 'span' );

			if( span ) {
				anchor.classList.remove( 'roll' );
				anchor.innerHTML = span.innerHTML;
			}
		}

	}

	/**
	 * Bind preview frame links.
	 *
	 * @param {string} [selector=a] - selector for anchors
	 */
	function enablePreviewLinks( selector ) {

		var anchors = toArray( document.querySelectorAll( selector ? selector : 'a' ) );

		anchors.forEach( function( element ) {
			if( /^(http|www)/gi.test( element.getAttribute( 'href' ) ) ) {
				element.addEventListener( 'click', onPreviewLinkClicked, false );
			}
		} );

	}

	/**
	 * Unbind preview frame links.
	 */
	function disablePreviewLinks( selector ) {

		var anchors = toArray( document.querySelectorAll( selector ? selector : 'a' ) );

		anchors.forEach( function( element ) {
			if( /^(http|www)/gi.test( element.getAttribute( 'href' ) ) ) {
				element.removeEventListener( 'click', onPreviewLinkClicked, false );
			}
		} );

	}

	/**
	 * Opens a preview window for the target URL.
	 *
	 * @param {string} url - url for preview iframe src
	 */
	function showPreview( url ) {

		closeOverlay();

		dom.overlay = document.createElement( 'div' );
		dom.overlay.classList.add( 'overlay' );
		dom.overlay.classList.add( 'overlay-preview' );
		dom.wrapper.appendChild( dom.overlay );

		dom.overlay.innerHTML = [
			'<header>',
				'<a class="close" href="#"><span class="icon"></span></a>',
				'<a class="external" href="'+ url +'" target="_blank"><span class="icon"></span></a>',
			'</header>',
			'<div class="spinner"></div>',
			'<div class="viewport">',
				'<iframe src="'+ url +'"></iframe>',
				'<small class="viewport-inner">',
					'<span class="x-frame-error">Unable to load iframe. This is likely due to the site\'s policy (x-frame-options).</span>',
				'</small>',
			'</div>'
		].join('');

		dom.overlay.querySelector( 'iframe' ).addEventListener( 'load', function( event ) {
			dom.overlay.classList.add( 'loaded' );
		}, false );

		dom.overlay.querySelector( '.close' ).addEventListener( 'click', function( event ) {
			closeOverlay();
			event.preventDefault();
		}, false );

		dom.overlay.querySelector( '.external' ).addEventListener( 'click', function( event ) {
			closeOverlay();
		}, false );

		setTimeout( function() {
			dom.overlay.classList.add( 'visible' );
		}, 1 );

	}

	/**
	 * Open or close help overlay window.
	 *
	 * @param {Boolean} [override] Flag which overrides the
	 * toggle logic and forcibly sets the desired state. True means
	 * help is open, false means it's closed.
	 */
	function toggleHelp( override ){

		if( typeof override === 'boolean' ) {
			override ? showHelp() : closeOverlay();
		}
		else {
			if( dom.overlay ) {
				closeOverlay();
			}
			else {
				showHelp();
			}
		}
	}

	/**
	 * Opens an overlay window with help material.
	 */
	function showHelp() {

		if( config.help ) {

			closeOverlay();

			dom.overlay = document.createElement( 'div' );
			dom.overlay.classList.add( 'overlay' );
			dom.overlay.classList.add( 'overlay-help' );
			dom.wrapper.appendChild( dom.overlay );

			var html = '<p class="title">Keyboard Shortcuts</p><br/>';

			html += '<table><th>KEY</th><th>ACTION</th>';
			for( var key in keyboardShortcuts ) {
				html += '<tr><td>' + key + '</td><td>' + keyboardShortcuts[ key ] + '</td></tr>';
			}

			html += '</table>';

			dom.overlay.innerHTML = [
				'<header>',
					'<a class="close" href="#"><span class="icon"></span></a>',
				'</header>',
				'<div class="viewport">',
					'<div class="viewport-inner">'+ html +'</div>',
				'</div>'
			].join('');

			dom.overlay.querySelector( '.close' ).addEventListener( 'click', function( event ) {
				closeOverlay();
				event.preventDefault();
			}, false );

			setTimeout( function() {
				dom.overlay.classList.add( 'visible' );
			}, 1 );

		}

	}

	/**
	 * Closes any currently open overlay.
	 */
	function closeOverlay() {

		if( dom.overlay ) {
			dom.overlay.parentNode.removeChild( dom.overlay );
			dom.overlay = null;
		}

	}

	/**
	 * Applies JavaScript-controlled layout rules to the
	 * presentation.
	 */
	function layout() {

		if( dom.wrapper && !isPrintingPDF() ) {

			var size = getComputedSlideSize();

			// Layout the contents of the slides
			layoutSlideContents( config.width, config.height );

			dom.slides.style.width = size.width + 'px';
			dom.slides.style.height = size.height + 'px';

			// Determine scale of content to fit within available space
			scale = Math.min( size.presentationWidth / size.width, size.presentationHeight / size.height );

			// Respect max/min scale settings
			scale = Math.max( scale, config.minScale );
			scale = Math.min( scale, config.maxScale );

			// Don't apply any scaling styles if scale is 1
			if( scale === 1 ) {
				dom.slides.style.zoom = '';
				dom.slides.style.left = '';
				dom.slides.style.top = '';
				dom.slides.style.bottom = '';
				dom.slides.style.right = '';
				transformSlides( { layout: '' } );
			}
			else {
				// Prefer zoom for scaling up so that content remains crisp.
				// Don't use zoom to scale down since that can lead to shifts
				// in text layout/line breaks.
				if( scale > 1 && features.zoom ) {
					dom.slides.style.zoom = scale;
					dom.slides.style.left = '';
					dom.slides.style.top = '';
					dom.slides.style.bottom = '';
					dom.slides.style.right = '';
					transformSlides( { layout: '' } );
				}
				// Apply scale transform as a fallback
				else {
					dom.slides.style.zoom = '';
					dom.slides.style.left = '50%';
					dom.slides.style.top = '50%';
					dom.slides.style.bottom = 'auto';
					dom.slides.style.right = 'auto';
					transformSlides( { layout: 'translate(-50%, -50%) scale('+ scale +')' } );
				}
			}

			// Select all slides, vertical and horizontal
			var slides = toArray( dom.wrapper.querySelectorAll( SLIDES_SELECTOR ) );

			for( var i = 0, len = slides.length; i < len; i++ ) {
				var slide = slides[ i ];

				// Don't bother updating invisible slides
				if( slide.style.display === 'none' ) {
					continue;
				}

				if( config.center || slide.classList.contains( 'center' ) ) {
					// Vertical stacks are not centred since their section
					// children will be
					if( slide.classList.contains( 'stack' ) ) {
						slide.style.top = 0;
					}
					else {
						slide.style.top = Math.max( ( size.height - slide.scrollHeight ) / 2, 0 ) + 'px';
					}
				}
				else {
					slide.style.top = '';
				}

			}

			updateProgress();
			updateParallax();

			if( isOverview() ) {
				updateOverview();
			}

		}

	}

	/**
	 * Applies layout logic to the contents of all slides in
	 * the presentation.
	 *
	 * @param {string|number} width
	 * @param {string|number} height
	 */
	function layoutSlideContents( width, height ) {

		// Handle sizing of elements with the 'stretch' class
		toArray( dom.slides.querySelectorAll( 'section > .stretch' ) ).forEach( function( element ) {

			// Determine how much vertical space we can use
			var remainingHeight = getRemainingHeight( element, height );

			// Consider the aspect ratio of media elements
			if( /(img|video)/gi.test( element.nodeName ) ) {
				var nw = element.naturalWidth || element.videoWidth,
					nh = element.naturalHeight || element.videoHeight;

				var es = Math.min( width / nw, remainingHeight / nh );

				element.style.width = ( nw * es ) + 'px';
				element.style.height = ( nh * es ) + 'px';

			}
			else {
				element.style.width = width + 'px';
				element.style.height = remainingHeight + 'px';
			}

		} );

	}

	/**
	 * Calculates the computed pixel size of our slides. These
	 * values are based on the width and height configuration
	 * options.
	 *
	 * @param {number} [presentationWidth=dom.wrapper.offsetWidth]
	 * @param {number} [presentationHeight=dom.wrapper.offsetHeight]
	 */
	function getComputedSlideSize( presentationWidth, presentationHeight ) {

		var size = {
			// Slide size
			width: config.width,
			height: config.height,

			// Presentation size
			presentationWidth: presentationWidth || dom.wrapper.offsetWidth,
			presentationHeight: presentationHeight || dom.wrapper.offsetHeight
		};

		// Reduce available space by margin
		size.presentationWidth -= ( size.presentationWidth * config.margin );
		size.presentationHeight -= ( size.presentationHeight * config.margin );

		// Slide width may be a percentage of available width
		if( typeof size.width === 'string' && /%$/.test( size.width ) ) {
			size.width = parseInt( size.width, 10 ) / 100 * size.presentationWidth;
		}

		// Slide height may be a percentage of available height
		if( typeof size.height === 'string' && /%$/.test( size.height ) ) {
			size.height = parseInt( size.height, 10 ) / 100 * size.presentationHeight;
		}

		return size;

	}

	/**
	 * Stores the vertical index of a stack so that the same
	 * vertical slide can be selected when navigating to and
	 * from the stack.
	 *
	 * @param {HTMLElement} stack The vertical stack element
	 * @param {string|number} [v=0] Index to memorize
	 */
	function setPreviousVerticalIndex( stack, v ) {

		if( typeof stack === 'object' && typeof stack.setAttribute === 'function' ) {
			stack.setAttribute( 'data-previous-indexv', v || 0 );
		}

	}

	/**
	 * Retrieves the vertical index which was stored using
	 * #setPreviousVerticalIndex() or 0 if no previous index
	 * exists.
	 *
	 * @param {HTMLElement} stack The vertical stack element
	 */
	function getPreviousVerticalIndex( stack ) {

		if( typeof stack === 'object' && typeof stack.setAttribute === 'function' && stack.classList.contains( 'stack' ) ) {
			// Prefer manually defined start-indexv
			var attributeName = stack.hasAttribute( 'data-start-indexv' ) ? 'data-start-indexv' : 'data-previous-indexv';

			return parseInt( stack.getAttribute( attributeName ) || 0, 10 );
		}

		return 0;

	}

	/**
	 * Displays the overview of slides (quick nav) by scaling
	 * down and arranging all slide elements.
	 */
	function activateOverview() {

		// Only proceed if enabled in config
		if( config.overview && !isOverview() ) {

			overview = true;

			dom.wrapper.classList.add( 'overview' );
			dom.wrapper.classList.remove( 'overview-deactivating' );

			if( features.overviewTransitions ) {
				setTimeout( function() {
					dom.wrapper.classList.add( 'overview-animated' );
				}, 1 );
			}

			// Don't auto-slide while in overview mode
			cancelAutoSlide();

			// Move the backgrounds element into the slide container to
			// that the same scaling is applied
			dom.slides.appendChild( dom.background );

			// Clicking on an overview slide navigates to it
			toArray( dom.wrapper.querySelectorAll( SLIDES_SELECTOR ) ).forEach( function( slide ) {
				if( !slide.classList.contains( 'stack' ) ) {
					slide.addEventListener( 'click', onOverviewSlideClicked, true );
				}
			} );

			// Calculate slide sizes
			var margin = 70;
			var slideSize = getComputedSlideSize();
			overviewSlideWidth = slideSize.width + margin;
			overviewSlideHeight = slideSize.height + margin;

			// Reverse in RTL mode
			if( config.rtl ) {
				overviewSlideWidth = -overviewSlideWidth;
			}

			updateSlidesVisibility();
			layoutOverview();
			updateOverview();

			layout();

			// Notify observers of the overview showing
			dispatchEvent( 'overviewshown', {
				'indexh': indexh,
				'indexv': indexv,
				'currentSlide': currentSlide
			} );

		}

	}

	/**
	 * Uses CSS transforms to position all slides in a grid for
	 * display inside of the overview mode.
	 */
	function layoutOverview() {

		// Layout slides
		toArray( dom.wrapper.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR ) ).forEach( function( hslide, h ) {
			hslide.setAttribute( 'data-index-h', h );
			transformElement( hslide, 'translate3d(' + ( h * overviewSlideWidth ) + 'px, 0, 0)' );

			if( hslide.classList.contains( 'stack' ) ) {

				toArray( hslide.querySelectorAll( 'section' ) ).forEach( function( vslide, v ) {
					vslide.setAttribute( 'data-index-h', h );
					vslide.setAttribute( 'data-index-v', v );

					transformElement( vslide, 'translate3d(0, ' + ( v * overviewSlideHeight ) + 'px, 0)' );
				} );

			}
		} );

		// Layout slide backgrounds
		toArray( dom.background.childNodes ).forEach( function( hbackground, h ) {
			transformElement( hbackground, 'translate3d(' + ( h * overviewSlideWidth ) + 'px, 0, 0)' );

			toArray( hbackground.querySelectorAll( '.slide-background' ) ).forEach( function( vbackground, v ) {
				transformElement( vbackground, 'translate3d(0, ' + ( v * overviewSlideHeight ) + 'px, 0)' );
			} );
		} );

	}

	/**
	 * Moves the overview viewport to the current slides.
	 * Called each time the current slide changes.
	 */
	function updateOverview() {

		var vmin = Math.min( window.innerWidth, window.innerHeight );
		var scale = Math.max( vmin / 5, 150 ) / vmin;

		transformSlides( {
			overview: [
				'scale('+ scale +')',
				'translateX('+ ( -indexh * overviewSlideWidth ) +'px)',
				'translateY('+ ( -indexv * overviewSlideHeight ) +'px)'
			].join( ' ' )
		} );

	}

	/**
	 * Exits the slide overview and enters the currently
	 * active slide.
	 */
	function deactivateOverview() {

		// Only proceed if enabled in config
		if( config.overview ) {

			overview = false;

			dom.wrapper.classList.remove( 'overview' );
			dom.wrapper.classList.remove( 'overview-animated' );

			// Temporarily add a class so that transitions can do different things
			// depending on whether they are exiting/entering overview, or just
			// moving from slide to slide
			dom.wrapper.classList.add( 'overview-deactivating' );

			setTimeout( function () {
				dom.wrapper.classList.remove( 'overview-deactivating' );
			}, 1 );

			// Move the background element back out
			dom.wrapper.appendChild( dom.background );

			// Clean up changes made to slides
			toArray( dom.wrapper.querySelectorAll( SLIDES_SELECTOR ) ).forEach( function( slide ) {
				transformElement( slide, '' );

				slide.removeEventListener( 'click', onOverviewSlideClicked, true );
			} );

			// Clean up changes made to backgrounds
			toArray( dom.background.querySelectorAll( '.slide-background' ) ).forEach( function( background ) {
				transformElement( background, '' );
			} );

			transformSlides( { overview: '' } );

			slide( indexh, indexv );

			layout();

			cueAutoSlide();

			// Notify observers of the overview hiding
			dispatchEvent( 'overviewhidden', {
				'indexh': indexh,
				'indexv': indexv,
				'currentSlide': currentSlide
			} );

		}
	}

	/**
	 * Toggles the slide overview mode on and off.
	 *
	 * @param {Boolean} [override] Flag which overrides the
	 * toggle logic and forcibly sets the desired state. True means
	 * overview is open, false means it's closed.
	 */
	function toggleOverview( override ) {

		if( typeof override === 'boolean' ) {
			override ? activateOverview() : deactivateOverview();
		}
		else {
			isOverview() ? deactivateOverview() : activateOverview();
		}

	}

	/**
	 * Checks if the overview is currently active.
	 *
	 * @return {Boolean} true if the overview is active,
	 * false otherwise
	 */
	function isOverview() {

		return overview;

	}

	/**
	 * Checks if the current or specified slide is vertical
	 * (nested within another slide).
	 *
	 * @param {HTMLElement} [slide=currentSlide] The slide to check
	 * orientation of
	 * @return {Boolean}
	 */
	function isVerticalSlide( slide ) {

		// Prefer slide argument, otherwise use current slide
		slide = slide ? slide : currentSlide;

		return slide && slide.parentNode && !!slide.parentNode.nodeName.match( /section/i );

	}

	/**
	 * Handling the fullscreen functionality via the fullscreen API
	 *
	 * @see http://fullscreen.spec.whatwg.org/
	 * @see https://developer.mozilla.org/en-US/docs/DOM/Using_fullscreen_mode
	 */
	function enterFullscreen() {

		var element = document.documentElement;

		// Check which implementation is available
		var requestMethod = element.requestFullscreen ||
							element.webkitRequestFullscreen ||
							element.webkitRequestFullScreen ||
							element.mozRequestFullScreen ||
							element.msRequestFullscreen;

		if( requestMethod ) {
			requestMethod.apply( element );
		}

	}

	/**
	 * Enters the paused mode which fades everything on screen to
	 * black.
	 */
	function pause() {

		if( config.pause ) {
			var wasPaused = dom.wrapper.classList.contains( 'paused' );

			cancelAutoSlide();
			dom.wrapper.classList.add( 'paused' );

			if( wasPaused === false ) {
				dispatchEvent( 'paused' );
			}
		}

	}

	/**
	 * Exits from the paused mode.
	 */
	function resume() {

		var wasPaused = dom.wrapper.classList.contains( 'paused' );
		dom.wrapper.classList.remove( 'paused' );

		cueAutoSlide();

		if( wasPaused ) {
			dispatchEvent( 'resumed' );
		}

	}

	/**
	 * Toggles the paused mode on and off.
	 */
	function togglePause( override ) {

		if( typeof override === 'boolean' ) {
			override ? pause() : resume();
		}
		else {
			isPaused() ? resume() : pause();
		}

	}

	/**
	 * Checks if we are currently in the paused mode.
	 *
	 * @return {Boolean}
	 */
	function isPaused() {

		return dom.wrapper.classList.contains( 'paused' );

	}

	/**
	 * Toggles the auto slide mode on and off.
	 *
	 * @param {Boolean} [override] Flag which sets the desired state.
	 * True means autoplay starts, false means it stops.
	 */

	function toggleAutoSlide( override ) {

		if( typeof override === 'boolean' ) {
			override ? resumeAutoSlide() : pauseAutoSlide();
		}

		else {
			autoSlidePaused ? resumeAutoSlide() : pauseAutoSlide();
		}

	}

	/**
	 * Checks if the auto slide mode is currently on.
	 *
	 * @return {Boolean}
	 */
	function isAutoSliding() {

		return !!( autoSlide && !autoSlidePaused );

	}

	/**
	 * Steps from the current point in the presentation to the
	 * slide which matches the specified horizontal and vertical
	 * indices.
	 *
	 * @param {number} [h=indexh] Horizontal index of the target slide
	 * @param {number} [v=indexv] Vertical index of the target slide
	 * @param {number} [f] Index of a fragment within the
	 * target slide to activate
	 * @param {number} [o] Origin for use in multimaster environments
	 */
	function slide( h, v, f, o ) {

		// Remember where we were at before
		previousSlide = currentSlide;

		// Query all horizontal slides in the deck
		var horizontalSlides = dom.wrapper.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR );

		// Abort if there are no slides
		if( horizontalSlides.length === 0 ) return;

		// If no vertical index is specified and the upcoming slide is a
		// stack, resume at its previous vertical index
		if( v === undefined && !isOverview() ) {
			v = getPreviousVerticalIndex( horizontalSlides[ h ] );
		}

		// If we were on a vertical stack, remember what vertical index
		// it was on so we can resume at the same position when returning
		if( previousSlide && previousSlide.parentNode && previousSlide.parentNode.classList.contains( 'stack' ) ) {
			setPreviousVerticalIndex( previousSlide.parentNode, indexv );
		}

		// Remember the state before this slide
		var stateBefore = state.concat();

		// Reset the state array
		state.length = 0;

		var indexhBefore = indexh || 0,
			indexvBefore = indexv || 0;

		// Activate and transition to the new slide
		indexh = updateSlides( HORIZONTAL_SLIDES_SELECTOR, h === undefined ? indexh : h );
		indexv = updateSlides( VERTICAL_SLIDES_SELECTOR, v === undefined ? indexv : v );

		// Update the visibility of slides now that the indices have changed
		updateSlidesVisibility();

		layout();

		// Apply the new state
		stateLoop: for( var i = 0, len = state.length; i < len; i++ ) {
			// Check if this state existed on the previous slide. If it
			// did, we will avoid adding it repeatedly
			for( var j = 0; j < stateBefore.length; j++ ) {
				if( stateBefore[j] === state[i] ) {
					stateBefore.splice( j, 1 );
					continue stateLoop;
				}
			}

			document.documentElement.classList.add( state[i] );

			// Dispatch custom event matching the state's name
			dispatchEvent( state[i] );
		}

		// Clean up the remains of the previous state
		while( stateBefore.length ) {
			document.documentElement.classList.remove( stateBefore.pop() );
		}

		// Update the overview if it's currently active
		if( isOverview() ) {
			updateOverview();
		}

		// Find the current horizontal slide and any possible vertical slides
		// within it
		var currentHorizontalSlide = horizontalSlides[ indexh ],
			currentVerticalSlides = currentHorizontalSlide.querySelectorAll( 'section' );

		// Store references to the previous and current slides
		currentSlide = currentVerticalSlides[ indexv ] || currentHorizontalSlide;

		// Show fragment, if specified
		if( typeof f !== 'undefined' ) {
			navigateFragment( f );
		}

		// Dispatch an event if the slide changed
		var slideChanged = ( indexh !== indexhBefore || indexv !== indexvBefore );
		if( slideChanged ) {
			dispatchEvent( 'slidechanged', {
				'indexh': indexh,
				'indexv': indexv,
				'previousSlide': previousSlide,
				'currentSlide': currentSlide,
				'origin': o
			} );
		}
		else {
			// Ensure that the previous slide is never the same as the current
			previousSlide = null;
		}

		// Solves an edge case where the previous slide maintains the
		// 'present' class when navigating between adjacent vertical
		// stacks
		if( previousSlide ) {
			previousSlide.classList.remove( 'present' );
			previousSlide.setAttribute( 'aria-hidden', 'true' );

			// Reset all slides upon navigate to home
			// Issue: #285
			if ( dom.wrapper.querySelector( HOME_SLIDE_SELECTOR ).classList.contains( 'present' ) ) {
				// Launch async task
				setTimeout( function () {
					var slides = toArray( dom.wrapper.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR + '.stack') ), i;
					for( i in slides ) {
						if( slides[i] ) {
							// Reset stack
							setPreviousVerticalIndex( slides[i], 0 );
						}
					}
				}, 0 );
			}
		}

		// Handle embedded content
		if( slideChanged || !previousSlide ) {
			stopEmbeddedContent( previousSlide );
			startEmbeddedContent( currentSlide );
		}

		// Announce the current slide contents, for screen readers
		dom.statusDiv.textContent = getStatusText( currentSlide );

		updateControls();
		updateProgress();
		updateBackground();
		updateParallax();
		updateSlideNumber();
		updateNotes();

		// Update the URL hash
		writeURL();

		cueAutoSlide();

	}

	/**
	 * Syncs the presentation with the current DOM. Useful
	 * when new slides or control elements are added or when
	 * the configuration has changed.
	 */
	function sync() {

		// Subscribe to input
		removeEventListeners();
		addEventListeners();

		// Force a layout to make sure the current config is accounted for
		layout();

		// Reflect the current autoSlide value
		autoSlide = config.autoSlide;

		// Start auto-sliding if it's enabled
		cueAutoSlide();

		// Re-create the slide backgrounds
		createBackgrounds();

		// Write the current hash to the URL
		writeURL();

		sortAllFragments();

		updateControls();
		updateProgress();
		updateSlideNumber();
		updateSlidesVisibility();
		updateBackground( true );
		updateNotes();

		formatEmbeddedContent();

		// Start or stop embedded content depending on global config
		if( config.autoPlayMedia === false ) {
			stopEmbeddedContent( currentSlide );
		}
		else {
			startEmbeddedContent( currentSlide );
		}

		if( isOverview() ) {
			layoutOverview();
		}

	}

	/**
	 * Resets all vertical slides so that only the first
	 * is visible.
	 */
	function resetVerticalSlides() {

		var horizontalSlides = toArray( dom.wrapper.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR ) );
		horizontalSlides.forEach( function( horizontalSlide ) {

			var verticalSlides = toArray( horizontalSlide.querySelectorAll( 'section' ) );
			verticalSlides.forEach( function( verticalSlide, y ) {

				if( y > 0 ) {
					verticalSlide.classList.remove( 'present' );
					verticalSlide.classList.remove( 'past' );
					verticalSlide.classList.add( 'future' );
					verticalSlide.setAttribute( 'aria-hidden', 'true' );
				}

			} );

		} );

	}

	/**
	 * Sorts and formats all of fragments in the
	 * presentation.
	 */
	function sortAllFragments() {

		var horizontalSlides = toArray( dom.wrapper.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR ) );
		horizontalSlides.forEach( function( horizontalSlide ) {

			var verticalSlides = toArray( horizontalSlide.querySelectorAll( 'section' ) );
			verticalSlides.forEach( function( verticalSlide, y ) {

				sortFragments( verticalSlide.querySelectorAll( '.fragment' ) );

			} );

			if( verticalSlides.length === 0 ) sortFragments( horizontalSlide.querySelectorAll( '.fragment' ) );

		} );

	}

	/**
	 * Randomly shuffles all slides in the deck.
	 */
	function shuffle() {

		var slides = toArray( dom.wrapper.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR ) );

		slides.forEach( function( slide ) {

			// Insert this slide next to another random slide. This may
			// cause the slide to insert before itself but that's fine.
			dom.slides.insertBefore( slide, slides[ Math.floor( Math.random() * slides.length ) ] );

		} );

	}

	/**
	 * Updates one dimension of slides by showing the slide
	 * with the specified index.
	 *
	 * @param {string} selector A CSS selector that will fetch
	 * the group of slides we are working with
	 * @param {number} index The index of the slide that should be
	 * shown
	 *
	 * @return {number} The index of the slide that is now shown,
	 * might differ from the passed in index if it was out of
	 * bounds.
	 */
	function updateSlides( selector, index ) {

		// Select all slides and convert the NodeList result to
		// an array
		var slides = toArray( dom.wrapper.querySelectorAll( selector ) ),
			slidesLength = slides.length;

		var printMode = isPrintingPDF();

		if( slidesLength ) {

			// Should the index loop?
			if( config.loop ) {
				index %= slidesLength;

				if( index < 0 ) {
					index = slidesLength + index;
				}
			}

			// Enforce max and minimum index bounds
			index = Math.max( Math.min( index, slidesLength - 1 ), 0 );

			for( var i = 0; i < slidesLength; i++ ) {
				var element = slides[i];

				var reverse = config.rtl && !isVerticalSlide( element );

				element.classList.remove( 'past' );
				element.classList.remove( 'present' );
				element.classList.remove( 'future' );

				// http://www.w3.org/html/wg/drafts/html/master/editing.html#the-hidden-attribute
				element.setAttribute( 'hidden', '' );
				element.setAttribute( 'aria-hidden', 'true' );

				// If this element contains vertical slides
				if( element.querySelector( 'section' ) ) {
					element.classList.add( 'stack' );
				}

				// If we're printing static slides, all slides are "present"
				if( printMode ) {
					element.classList.add( 'present' );
					continue;
				}

				if( i < index ) {
					// Any element previous to index is given the 'past' class
					element.classList.add( reverse ? 'future' : 'past' );

					if( config.fragments ) {
						var pastFragments = toArray( element.querySelectorAll( '.fragment' ) );

						// Show all fragments on prior slides
						while( pastFragments.length ) {
							var pastFragment = pastFragments.pop();
							pastFragment.classList.add( 'visible' );
							pastFragment.classList.remove( 'current-fragment' );
						}
					}
				}
				else if( i > index ) {
					// Any element subsequent to index is given the 'future' class
					element.classList.add( reverse ? 'past' : 'future' );

					if( config.fragments ) {
						var futureFragments = toArray( element.querySelectorAll( '.fragment.visible' ) );

						// No fragments in future slides should be visible ahead of time
						while( futureFragments.length ) {
							var futureFragment = futureFragments.pop();
							futureFragment.classList.remove( 'visible' );
							futureFragment.classList.remove( 'current-fragment' );
						}
					}
				}
			}

			// Mark the current slide as present
			slides[index].classList.add( 'present' );
			slides[index].removeAttribute( 'hidden' );
			slides[index].removeAttribute( 'aria-hidden' );

			// If this slide has a state associated with it, add it
			// onto the current state of the deck
			var slideState = slides[index].getAttribute( 'data-state' );
			if( slideState ) {
				state = state.concat( slideState.split( ' ' ) );
			}

		}
		else {
			// Since there are no slides we can't be anywhere beyond the
			// zeroth index
			index = 0;
		}

		return index;

	}

	/**
	 * Optimization method; hide all slides that are far away
	 * from the present slide.
	 */
	function updateSlidesVisibility() {

		// Select all slides and convert the NodeList result to
		// an array
		var horizontalSlides = toArray( dom.wrapper.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR ) ),
			horizontalSlidesLength = horizontalSlides.length,
			distanceX,
			distanceY;

		if( horizontalSlidesLength && typeof indexh !== 'undefined' ) {

			// The number of steps away from the present slide that will
			// be visible
			var viewDistance = isOverview() ? 10 : config.viewDistance;

			// Limit view distance on weaker devices
			if( isMobileDevice ) {
				viewDistance = isOverview() ? 6 : 2;
			}

			// All slides need to be visible when exporting to PDF
			if( isPrintingPDF() ) {
				viewDistance = Number.MAX_VALUE;
			}

			for( var x = 0; x < horizontalSlidesLength; x++ ) {
				var horizontalSlide = horizontalSlides[x];

				var verticalSlides = toArray( horizontalSlide.querySelectorAll( 'section' ) ),
					verticalSlidesLength = verticalSlides.length;

				// Determine how far away this slide is from the present
				distanceX = Math.abs( ( indexh || 0 ) - x ) || 0;

				// If the presentation is looped, distance should measure
				// 1 between the first and last slides
				if( config.loop ) {
					distanceX = Math.abs( ( ( indexh || 0 ) - x ) % ( horizontalSlidesLength - viewDistance ) ) || 0;
				}

				// Show the horizontal slide if it's within the view distance
				if( distanceX < viewDistance ) {
					showSlide( horizontalSlide );
				}
				else {
					hideSlide( horizontalSlide );
				}

				if( verticalSlidesLength ) {

					var oy = getPreviousVerticalIndex( horizontalSlide );

					for( var y = 0; y < verticalSlidesLength; y++ ) {
						var verticalSlide = verticalSlides[y];

						distanceY = x === ( indexh || 0 ) ? Math.abs( ( indexv || 0 ) - y ) : Math.abs( y - oy );

						if( distanceX + distanceY < viewDistance ) {
							showSlide( verticalSlide );
						}
						else {
							hideSlide( verticalSlide );
						}
					}

				}
			}

		}

	}

	/**
	 * Pick up notes from the current slide and display them
	 * to the viewer.
	 *
	 * @see {@link config.showNotes}
	 */
	function updateNotes() {

		if( config.showNotes && dom.speakerNotes && currentSlide && !isPrintingPDF() ) {

			dom.speakerNotes.innerHTML = getSlideNotes() || '';

		}

	}

	/**
	 * Updates the progress bar to reflect the current slide.
	 */
	function updateProgress() {

		// Update progress if enabled
		if( config.progress && dom.progressbar ) {

			dom.progressbar.style.width = getProgress() * dom.wrapper.offsetWidth + 'px';

		}

	}

	/**
	 * Updates the slide number div to reflect the current slide.
	 *
	 * The following slide number formats are available:
	 *  "h.v":	horizontal . vertical slide number (default)
	 *  "h/v":	horizontal / vertical slide number
	 *    "c":	flattened slide number
	 *  "c/t":	flattened slide number / total slides
	 */
	function updateSlideNumber() {

		// Update slide number if enabled
		if( config.slideNumber && dom.slideNumber ) {

			var value = [];
			var format = 'h.v';

			// Check if a custom number format is available
			if( typeof config.slideNumber === 'string' ) {
				format = config.slideNumber;
			}

			switch( format ) {
				case 'c':
					value.push( getSlidePastCount() + 1 );
					break;
				case 'c/t':
					value.push( getSlidePastCount() + 1, '/', getTotalSlides() );
					break;
				case 'h/v':
					value.push( indexh + 1 );
					if( isVerticalSlide() ) value.push( '/', indexv + 1 );
					break;
				default:
					value.push( indexh + 1 );
					if( isVerticalSlide() ) value.push( '.', indexv + 1 );
			}

			dom.slideNumber.innerHTML = formatSlideNumber( value[0], value[1], value[2] );
		}

	}

	/**
	 * Applies HTML formatting to a slide number before it's
	 * written to the DOM.
	 *
	 * @param {number} a Current slide
	 * @param {string} delimiter Character to separate slide numbers
	 * @param {(number|*)} b Total slides
	 * @return {string} HTML string fragment
	 */
	function formatSlideNumber( a, delimiter, b ) {

		if( typeof b === 'number' && !isNaN( b ) ) {
			return  '<span class="slide-number-a">'+ a +'</span>' +
					'<span class="slide-number-delimiter">'+ delimiter +'</span>' +
					'<span class="slide-number-b">'+ b +'</span>';
		}
		else {
			return '<span class="slide-number-a">'+ a +'</span>';
		}

	}

	/**
	 * Updates the state of all control/navigation arrows.
	 */
	function updateControls() {

		var routes = availableRoutes();
		var fragments = availableFragments();

		// Remove the 'enabled' class from all directions
		dom.controlsLeft.concat( dom.controlsRight )
						.concat( dom.controlsUp )
						.concat( dom.controlsDown )
						.concat( dom.controlsPrev )
						.concat( dom.controlsNext ).forEach( function( node ) {
			node.classList.remove( 'enabled' );
			node.classList.remove( 'fragmented' );

			// Set 'disabled' attribute on all directions
			node.setAttribute( 'disabled', 'disabled' );
		} );

		// Add the 'enabled' class to the available routes; remove 'disabled' attribute to enable buttons
		if( routes.left ) dom.controlsLeft.forEach( function( el ) { el.classList.add( 'enabled' ); el.removeAttribute( 'disabled' ); } );
		if( routes.right ) dom.controlsRight.forEach( function( el ) { el.classList.add( 'enabled' ); el.removeAttribute( 'disabled' ); } );
		if( routes.up ) dom.controlsUp.forEach( function( el ) { el.classList.add( 'enabled' ); el.removeAttribute( 'disabled' ); } );
		if( routes.down ) dom.controlsDown.forEach( function( el ) { el.classList.add( 'enabled' ); el.removeAttribute( 'disabled' ); } );

		// Prev/next buttons
		if( routes.left || routes.up ) dom.controlsPrev.forEach( function( el ) { el.classList.add( 'enabled' ); el.removeAttribute( 'disabled' ); } );
		if( routes.right || routes.down ) dom.controlsNext.forEach( function( el ) { el.classList.add( 'enabled' ); el.removeAttribute( 'disabled' ); } );

		// Highlight fragment directions
		if( currentSlide ) {

			// Always apply fragment decorator to prev/next buttons
			if( fragments.prev ) dom.controlsPrev.forEach( function( el ) { el.classList.add( 'fragmented', 'enabled' ); el.removeAttribute( 'disabled' ); } );
			if( fragments.next ) dom.controlsNext.forEach( function( el ) { el.classList.add( 'fragmented', 'enabled' ); el.removeAttribute( 'disabled' ); } );

			// Apply fragment decorators to directional buttons based on
			// what slide axis they are in
			if( isVerticalSlide( currentSlide ) ) {
				if( fragments.prev ) dom.controlsUp.forEach( function( el ) { el.classList.add( 'fragmented', 'enabled' ); el.removeAttribute( 'disabled' ); } );
				if( fragments.next ) dom.controlsDown.forEach( function( el ) { el.classList.add( 'fragmented', 'enabled' ); el.removeAttribute( 'disabled' ); } );
			}
			else {
				if( fragments.prev ) dom.controlsLeft.forEach( function( el ) { el.classList.add( 'fragmented', 'enabled' ); el.removeAttribute( 'disabled' ); } );
				if( fragments.next ) dom.controlsRight.forEach( function( el ) { el.classList.add( 'fragmented', 'enabled' ); el.removeAttribute( 'disabled' ); } );
			}

		}

	}

	/**
	 * Updates the background elements to reflect the current
	 * slide.
	 *
	 * @param {boolean} includeAll If true, the backgrounds of
	 * all vertical slides (not just the present) will be updated.
	 */
	function updateBackground( includeAll ) {

		var currentBackground = null;

		// Reverse past/future classes when in RTL mode
		var horizontalPast = config.rtl ? 'future' : 'past',
			horizontalFuture = config.rtl ? 'past' : 'future';

		// Update the classes of all backgrounds to match the
		// states of their slides (past/present/future)
		toArray( dom.background.childNodes ).forEach( function( backgroundh, h ) {

			backgroundh.classList.remove( 'past' );
			backgroundh.classList.remove( 'present' );
			backgroundh.classList.remove( 'future' );

			if( h < indexh ) {
				backgroundh.classList.add( horizontalPast );
			}
			else if ( h > indexh ) {
				backgroundh.classList.add( horizontalFuture );
			}
			else {
				backgroundh.classList.add( 'present' );

				// Store a reference to the current background element
				currentBackground = backgroundh;
			}

			if( includeAll || h === indexh ) {
				toArray( backgroundh.querySelectorAll( '.slide-background' ) ).forEach( function( backgroundv, v ) {

					backgroundv.classList.remove( 'past' );
					backgroundv.classList.remove( 'present' );
					backgroundv.classList.remove( 'future' );

					if( v < indexv ) {
						backgroundv.classList.add( 'past' );
					}
					else if ( v > indexv ) {
						backgroundv.classList.add( 'future' );
					}
					else {
						backgroundv.classList.add( 'present' );

						// Only if this is the present horizontal and vertical slide
						if( h === indexh ) currentBackground = backgroundv;
					}

				} );
			}

		} );

		// Stop content inside of previous backgrounds
		if( previousBackground ) {

			stopEmbeddedContent( previousBackground );

		}

		// Start content in the current background
		if( currentBackground ) {

			startEmbeddedContent( currentBackground );

			var backgroundImageURL = currentBackground.style.backgroundImage || '';

			// Restart GIFs (doesn't work in Firefox)
			if( /\.gif/i.test( backgroundImageURL ) ) {
				currentBackground.style.backgroundImage = '';
				window.getComputedStyle( currentBackground ).opacity;
				currentBackground.style.backgroundImage = backgroundImageURL;
			}

			// Don't transition between identical backgrounds. This
			// prevents unwanted flicker.
			var previousBackgroundHash = previousBackground ? previousBackground.getAttribute( 'data-background-hash' ) : null;
			var currentBackgroundHash = currentBackground.getAttribute( 'data-background-hash' );
			if( currentBackgroundHash && currentBackgroundHash === previousBackgroundHash && currentBackground !== previousBackground ) {
				dom.background.classList.add( 'no-transition' );
			}

			previousBackground = currentBackground;

		}

		// If there's a background brightness flag for this slide,
		// bubble it to the .reveal container
		if( currentSlide ) {
			[ 'has-light-background', 'has-dark-background' ].forEach( function( classToBubble ) {
				if( currentSlide.classList.contains( classToBubble ) ) {
					dom.wrapper.classList.add( classToBubble );
				}
				else {
					dom.wrapper.classList.remove( classToBubble );
				}
			} );
		}

		// Allow the first background to apply without transition
		setTimeout( function() {
			dom.background.classList.remove( 'no-transition' );
		}, 1 );

	}

	/**
	 * Updates the position of the parallax background based
	 * on the current slide index.
	 */
	function updateParallax() {

		if( config.parallaxBackgroundImage ) {

			var horizontalSlides = dom.wrapper.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR ),
				verticalSlides = dom.wrapper.querySelectorAll( VERTICAL_SLIDES_SELECTOR );

			var backgroundSize = dom.background.style.backgroundSize.split( ' ' ),
				backgroundWidth, backgroundHeight;

			if( backgroundSize.length === 1 ) {
				backgroundWidth = backgroundHeight = parseInt( backgroundSize[0], 10 );
			}
			else {
				backgroundWidth = parseInt( backgroundSize[0], 10 );
				backgroundHeight = parseInt( backgroundSize[1], 10 );
			}

			var slideWidth = dom.background.offsetWidth,
				horizontalSlideCount = horizontalSlides.length,
				horizontalOffsetMultiplier,
				horizontalOffset;

			if( typeof config.parallaxBackgroundHorizontal === 'number' ) {
				horizontalOffsetMultiplier = config.parallaxBackgroundHorizontal;
			}
			else {
				horizontalOffsetMultiplier = horizontalSlideCount > 1 ? ( backgroundWidth - slideWidth ) / ( horizontalSlideCount-1 ) : 0;
			}

			horizontalOffset = horizontalOffsetMultiplier * indexh * -1;

			var slideHeight = dom.background.offsetHeight,
				verticalSlideCount = verticalSlides.length,
				verticalOffsetMultiplier,
				verticalOffset;

			if( typeof config.parallaxBackgroundVertical === 'number' ) {
				verticalOffsetMultiplier = config.parallaxBackgroundVertical;
			}
			else {
				verticalOffsetMultiplier = ( backgroundHeight - slideHeight ) / ( verticalSlideCount-1 );
			}

			verticalOffset = verticalSlideCount > 0 ?  verticalOffsetMultiplier * indexv : 0;

			dom.background.style.backgroundPosition = horizontalOffset + 'px ' + -verticalOffset + 'px';

		}

	}

	/**
	 * Called when the given slide is within the configured view
	 * distance. Shows the slide element and loads any content
	 * that is set to load lazily (data-src).
	 *
	 * @param {HTMLElement} slide Slide to show
	 */
	/**
	 * Called when the given slide is within the configured view
	 * distance. Shows the slide element and loads any content
	 * that is set to load lazily (data-src).
	 *
	 * @param {HTMLElement} slide Slide to show
	 */
	function showSlide( slide ) {

		// Show the slide element
		slide.style.display = config.display;

		// Media elements with data-src attributes
		toArray( slide.querySelectorAll( 'img[data-src], video[data-src], audio[data-src]' ) ).forEach( function( element ) {
			element.setAttribute( 'src', element.getAttribute( 'data-src' ) );
			element.removeAttribute( 'data-src' );
		} );

		// Media elements with <source> children
		toArray( slide.querySelectorAll( 'video, audio' ) ).forEach( function( media ) {
			var sources = 0;

			toArray( media.querySelectorAll( 'source[data-src]' ) ).forEach( function( source ) {
				source.setAttribute( 'src', source.getAttribute( 'data-src' ) );
				source.removeAttribute( 'data-src' );
				sources += 1;
			} );

			// If we rewrote sources for this video/audio element, we need
			// to manually tell it to load from its new origin
			if( sources > 0 ) {
				media.load();
			}
		} );


		// Show the corresponding background element
		var indices = getIndices( slide );
		var background = getSlideBackground( indices.h, indices.v );
		if( background ) {
			background.style.display = 'block';

			// If the background contains media, load it
			if( background.hasAttribute( 'data-loaded' ) === false ) {
				background.setAttribute( 'data-loaded', 'true' );

				var backgroundImage = slide.getAttribute( 'data-background-image' ),
					backgroundVideo = slide.getAttribute( 'data-background-video' ),
					backgroundVideoLoop = slide.hasAttribute( 'data-background-video-loop' ),
					backgroundVideoMuted = slide.hasAttribute( 'data-background-video-muted' ),
					backgroundIframe = slide.getAttribute( 'data-background-iframe' );

				// Images
				if( backgroundImage ) {
					background.style.backgroundImage = 'url('+ backgroundImage +')';
				}
				// Videos
				else if ( backgroundVideo && !isSpeakerNotes() ) {
					var video = document.createElement( 'video' );

					if( backgroundVideoLoop ) {
						video.setAttribute( 'loop', '' );
					}

					if( backgroundVideoMuted ) {
						video.muted = true;
					}

					// Inline video playback works (at least in Mobile Safari) as
					// long as the video is muted and the `playsinline` attribute is
					// present
					if( isMobileDevice ) {
						video.muted = true;
						video.autoplay = true;
						video.setAttribute( 'playsinline', '' );
					}

					// Support comma separated lists of video sources
					backgroundVideo.split( ',' ).forEach( function( source ) {
						video.innerHTML += '<source src="'+ source +'">';
					} );

					background.appendChild( video );
				}
				// Iframes
				else if( backgroundIframe ) {
					var iframe = document.createElement( 'iframe' );
					iframe.setAttribute( 'allowfullscreen', '' );
					iframe.setAttribute( 'mozallowfullscreen', '' );
					iframe.setAttribute( 'webkitallowfullscreen', '' );

					// Only load autoplaying content when the slide is shown to
					// avoid having it play in the background
					if( /autoplay=(1|true|yes)/gi.test( backgroundIframe ) ) {
						iframe.setAttribute( 'data-src', backgroundIframe );
					}
					else {
						iframe.setAttribute( 'src', backgroundIframe );
					}

					iframe.style.width  = '100%';
					iframe.style.height = '100%';
					iframe.style.maxHeight = '100%';
					iframe.style.maxWidth = '100%';

					background.appendChild( iframe );
				}
			}

		}

	}

	/**
	 * Called when the given slide is moved outside of the
	 * configured view distance.
	 *
	 * @param {HTMLElement} slide
	 */
	function hideSlide( slide ) {

		// Hide the slide element
		slide.style.display = 'none';

		// Hide the corresponding background element
		var indices = getIndices( slide );
		var background = getSlideBackground( indices.h, indices.v );
		if( background ) {
			background.style.display = 'none';
		}

	}

	/**
	 * Determine what available routes there are for navigation.
	 *
	 * @return {{left: boolean, right: boolean, up: boolean, down: boolean}}
	 */
	function availableRoutes() {

		var horizontalSlides = dom.wrapper.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR ),
			verticalSlides = dom.wrapper.querySelectorAll( VERTICAL_SLIDES_SELECTOR );

		var routes = {
			left: indexh > 0 || config.loop,
			right: indexh < horizontalSlides.length - 1 || config.loop,
			up: indexv > 0,
			down: indexv < verticalSlides.length - 1
		};

		// reverse horizontal controls for rtl
		if( config.rtl ) {
			var left = routes.left;
			routes.left = routes.right;
			routes.right = left;
		}

		return routes;

	}

	/**
	 * Returns an object describing the available fragment
	 * directions.
	 *
	 * @return {{prev: boolean, next: boolean}}
	 */
	function availableFragments() {

		if( currentSlide && config.fragments ) {
			var fragments = currentSlide.querySelectorAll( '.fragment' );
			var hiddenFragments = currentSlide.querySelectorAll( '.fragment:not(.visible)' );

			return {
				prev: fragments.length - hiddenFragments.length > 0,
				next: !!hiddenFragments.length
			};
		}
		else {
			return { prev: false, next: false };
		}

	}

	/**
	 * Enforces origin-specific format rules for embedded media.
	 */
	function formatEmbeddedContent() {

		var _appendParamToIframeSource = function( sourceAttribute, sourceURL, param ) {
			toArray( dom.slides.querySelectorAll( 'iframe['+ sourceAttribute +'*="'+ sourceURL +'"]' ) ).forEach( function( el ) {
				var src = el.getAttribute( sourceAttribute );
				if( src && src.indexOf( param ) === -1 ) {
					el.setAttribute( sourceAttribute, src + ( !/\?/.test( src ) ? '?' : '&' ) + param );
				}
			});
		};

		// YouTube frames must include "?enablejsapi=1"
		_appendParamToIframeSource( 'src', 'youtube.com/embed/', 'enablejsapi=1' );
		_appendParamToIframeSource( 'data-src', 'youtube.com/embed/', 'enablejsapi=1' );

		// Vimeo frames must include "?api=1"
		_appendParamToIframeSource( 'src', 'player.vimeo.com/', 'api=1' );
		_appendParamToIframeSource( 'data-src', 'player.vimeo.com/', 'api=1' );

	}

	/**
	 * Start playback of any embedded content inside of
	 * the given element.
	 *
	 * @param {HTMLElement} element
	 */
	function startEmbeddedContent( element ) {

		if( element && !isSpeakerNotes() ) {

			// Restart GIFs
			toArray( element.querySelectorAll( 'img[src$=".gif"]' ) ).forEach( function( el ) {
				// Setting the same unchanged source like this was confirmed
				// to work in Chrome, FF & Safari
				el.setAttribute( 'src', el.getAttribute( 'src' ) );
			} );

			// HTML5 media elements
			toArray( element.querySelectorAll( 'video, audio' ) ).forEach( function( el ) {
				if( closestParent( el, '.fragment' ) && !closestParent( el, '.fragment.visible' ) ) {
					return;
				}

				// Prefer an explicit global autoplay setting
				var autoplay = config.autoPlayMedia;

				// If no global setting is available, fall back on the element's
				// own autoplay setting
				if( typeof autoplay !== 'boolean' ) {
					autoplay = el.hasAttribute( 'data-autoplay' ) || !!closestParent( el, '.slide-background' );
				}

				if( autoplay && typeof el.play === 'function' ) {

					if( el.readyState > 1 ) {
						startEmbeddedMedia( { target: el } );
					}
					else {
						el.removeEventListener( 'loadeddata', startEmbeddedMedia ); // remove first to avoid dupes
						el.addEventListener( 'loadeddata', startEmbeddedMedia );
					}

				}
			} );

			// Normal iframes
			toArray( element.querySelectorAll( 'iframe[src]' ) ).forEach( function( el ) {
				if( closestParent( el, '.fragment' ) && !closestParent( el, '.fragment.visible' ) ) {
					return;
				}

				startEmbeddedIframe( { target: el } );
			} );

			// Lazy loading iframes
			toArray( element.querySelectorAll( 'iframe[data-src]' ) ).forEach( function( el ) {
				if( closestParent( el, '.fragment' ) && !closestParent( el, '.fragment.visible' ) ) {
					return;
				}

				if( el.getAttribute( 'src' ) !== el.getAttribute( 'data-src' ) ) {
					el.removeEventListener( 'load', startEmbeddedIframe ); // remove first to avoid dupes
					el.addEventListener( 'load', startEmbeddedIframe );
					el.setAttribute( 'src', el.getAttribute( 'data-src' ) );
				}
			} );

		}

	}

	/**
	 * Starts playing an embedded video/audio element after
	 * it has finished loading.
	 *
	 * @param {object} event
	 */
	function startEmbeddedMedia( event ) {

		var isAttachedToDOM = !!closestParent( event.target, 'html' ),
			isVisible  		= !!closestParent( event.target, '.present' );

		if( isAttachedToDOM && isVisible ) {
			event.target.currentTime = 0;
			event.target.play();
		}

		event.target.removeEventListener( 'loadeddata', startEmbeddedMedia );

	}

	/**
	 * "Starts" the content of an embedded iframe using the
	 * postMessage API.
	 *
	 * @param {object} event
	 */
	function startEmbeddedIframe( event ) {

		var iframe = event.target;

		if( iframe && iframe.contentWindow ) {

			var isAttachedToDOM = !!closestParent( event.target, 'html' ),
				isVisible  		= !!closestParent( event.target, '.present' );

			if( isAttachedToDOM && isVisible ) {

				// Prefer an explicit global autoplay setting
				var autoplay = config.autoPlayMedia;

				// If no global setting is available, fall back on the element's
				// own autoplay setting
				if( typeof autoplay !== 'boolean' ) {
					autoplay = iframe.hasAttribute( 'data-autoplay' ) || !!closestParent( iframe, '.slide-background' );
				}

				// YouTube postMessage API
				if( /youtube\.com\/embed\//.test( iframe.getAttribute( 'src' ) ) && autoplay ) {
					iframe.contentWindow.postMessage( '{"event":"command","func":"playVideo","args":""}', '*' );
				}
				// Vimeo postMessage API
				else if( /player\.vimeo\.com\//.test( iframe.getAttribute( 'src' ) ) && autoplay ) {
					iframe.contentWindow.postMessage( '{"method":"play"}', '*' );
				}
				// Generic postMessage API
				else {
					iframe.contentWindow.postMessage( 'slide:start', '*' );
				}

			}

		}

	}

	/**
	 * Stop playback of any embedded content inside of
	 * the targeted slide.
	 *
	 * @param {HTMLElement} element
	 */
	function stopEmbeddedContent( element ) {

		if( element && element.parentNode ) {
			// HTML5 media elements
			toArray( element.querySelectorAll( 'video, audio' ) ).forEach( function( el ) {
				if( !el.hasAttribute( 'data-ignore' ) && typeof el.pause === 'function' ) {
					el.setAttribute('data-paused-by-reveal', '');
					el.pause();
				}
			} );

			// Generic postMessage API for non-lazy loaded iframes
			toArray( element.querySelectorAll( 'iframe' ) ).forEach( function( el ) {
				if( el.contentWindow ) el.contentWindow.postMessage( 'slide:stop', '*' );
				el.removeEventListener( 'load', startEmbeddedIframe );
			});

			// YouTube postMessage API
			toArray( element.querySelectorAll( 'iframe[src*="youtube.com/embed/"]' ) ).forEach( function( el ) {
				if( !el.hasAttribute( 'data-ignore' ) && el.contentWindow && typeof el.contentWindow.postMessage === 'function' ) {
					el.contentWindow.postMessage( '{"event":"command","func":"pauseVideo","args":""}', '*' );
				}
			});

			// Vimeo postMessage API
			toArray( element.querySelectorAll( 'iframe[src*="player.vimeo.com/"]' ) ).forEach( function( el ) {
				if( !el.hasAttribute( 'data-ignore' ) && el.contentWindow && typeof el.contentWindow.postMessage === 'function' ) {
					el.contentWindow.postMessage( '{"method":"pause"}', '*' );
				}
			});

			// Lazy loading iframes
			toArray( element.querySelectorAll( 'iframe[data-src]' ) ).forEach( function( el ) {
				// Only removing the src doesn't actually unload the frame
				// in all browsers (Firefox) so we set it to blank first
				el.setAttribute( 'src', 'about:blank' );
				el.removeAttribute( 'src' );
			} );
		}

	}

	/**
	 * Returns the number of past slides. This can be used as a global
	 * flattened index for slides.
	 *
	 * @return {number} Past slide count
	 */
	function getSlidePastCount() {

		var horizontalSlides = toArray( dom.wrapper.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR ) );

		// The number of past slides
		var pastCount = 0;

		// Step through all slides and count the past ones
		mainLoop: for( var i = 0; i < horizontalSlides.length; i++ ) {

			var horizontalSlide = horizontalSlides[i];
			var verticalSlides = toArray( horizontalSlide.querySelectorAll( 'section' ) );

			for( var j = 0; j < verticalSlides.length; j++ ) {

				// Stop as soon as we arrive at the present
				if( verticalSlides[j].classList.contains( 'present' ) ) {
					break mainLoop;
				}

				pastCount++;

			}

			// Stop as soon as we arrive at the present
			if( horizontalSlide.classList.contains( 'present' ) ) {
				break;
			}

			// Don't count the wrapping section for vertical slides
			if( horizontalSlide.classList.contains( 'stack' ) === false ) {
				pastCount++;
			}

		}

		return pastCount;

	}

	/**
	 * Returns a value ranging from 0-1 that represents
	 * how far into the presentation we have navigated.
	 *
	 * @return {number}
	 */
	function getProgress() {

		// The number of past and total slides
		var totalCount = getTotalSlides();
		var pastCount = getSlidePastCount();

		if( currentSlide ) {

			var allFragments = currentSlide.querySelectorAll( '.fragment' );

			// If there are fragments in the current slide those should be
			// accounted for in the progress.
			if( allFragments.length > 0 ) {
				var visibleFragments = currentSlide.querySelectorAll( '.fragment.visible' );

				// This value represents how big a portion of the slide progress
				// that is made up by its fragments (0-1)
				var fragmentWeight = 0.9;

				// Add fragment progress to the past slide count
				pastCount += ( visibleFragments.length / allFragments.length ) * fragmentWeight;
			}

		}

		return pastCount / ( totalCount - 1 );

	}

	/**
	 * Checks if this presentation is running inside of the
	 * speaker notes window.
	 *
	 * @return {boolean}
	 */
	function isSpeakerNotes() {

		return !!window.location.search.match( /receiver/gi );

	}

	/**
	 * Reads the current URL (hash) and navigates accordingly.
	 */
	function readURL() {

		var hash = window.location.hash;

		// Attempt to parse the hash as either an index or name
		var bits = hash.slice( 2 ).split( '/' ),
			name = hash.replace( /#|\//gi, '' );

		// If the first bit is invalid and there is a name we can
		// assume that this is a named link
		if( isNaN( parseInt( bits[0], 10 ) ) && name.length ) {
			var element;

			// Ensure the named link is a valid HTML ID attribute
			if( /^[a-zA-Z][\w:.-]*$/.test( name ) ) {
				// Find the slide with the specified ID
				element = document.getElementById( name );
			}

			if( element ) {
				// Find the position of the named slide and navigate to it
				var indices = Reveal.getIndices( element );
				slide( indices.h, indices.v );
			}
			// If the slide doesn't exist, navigate to the current slide
			else {
				slide( indexh || 0, indexv || 0 );
			}
		}
		else {
			// Read the index components of the hash
			var h = parseInt( bits[0], 10 ) || 0,
				v = parseInt( bits[1], 10 ) || 0;

			if( h !== indexh || v !== indexv ) {
				slide( h, v );
			}
		}

	}

	/**
	 * Updates the page URL (hash) to reflect the current
	 * state.
	 *
	 * @param {number} delay The time in ms to wait before
	 * writing the hash
	 */
	function writeURL( delay ) {

		if( config.history ) {

			// Make sure there's never more than one timeout running
			clearTimeout( writeURLTimeout );

			// If a delay is specified, timeout this call
			if( typeof delay === 'number' ) {
				writeURLTimeout = setTimeout( writeURL, delay );
			}
			else if( currentSlide ) {
				var url = '/';

				// Attempt to create a named link based on the slide's ID
				var id = currentSlide.getAttribute( 'id' );
				if( id ) {
					id = id.replace( /[^a-zA-Z0-9\-\_\:\.]/g, '' );
				}

				// If the current slide has an ID, use that as a named link
				if( typeof id === 'string' && id.length ) {
					url = '/' + id;
				}
				// Otherwise use the /h/v index
				else {
					if( indexh > 0 || indexv > 0 ) url += indexh;
					if( indexv > 0 ) url += '/' + indexv;
				}

				window.location.hash = url;
			}
		}

	}
	/**
	 * Retrieves the h/v location and fragment of the current,
	 * or specified, slide.
	 *
	 * @param {HTMLElement} [slide] If specified, the returned
	 * index will be for this slide rather than the currently
	 * active one
	 *
	 * @return {{h: number, v: number, f: number}}
	 */
	function getIndices( slide ) {

		// By default, return the current indices
		var h = indexh,
			v = indexv,
			f;

		// If a slide is specified, return the indices of that slide
		if( slide ) {
			var isVertical = isVerticalSlide( slide );
			var slideh = isVertical ? slide.parentNode : slide;

			// Select all horizontal slides
			var horizontalSlides = toArray( dom.wrapper.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR ) );

			// Now that we know which the horizontal slide is, get its index
			h = Math.max( horizontalSlides.indexOf( slideh ), 0 );

			// Assume we're not vertical
			v = undefined;

			// If this is a vertical slide, grab the vertical index
			if( isVertical ) {
				v = Math.max( toArray( slide.parentNode.querySelectorAll( 'section' ) ).indexOf( slide ), 0 );
			}
		}

		if( !slide && currentSlide ) {
			var hasFragments = currentSlide.querySelectorAll( '.fragment' ).length > 0;
			if( hasFragments ) {
				var currentFragment = currentSlide.querySelector( '.current-fragment' );
				if( currentFragment && currentFragment.hasAttribute( 'data-fragment-index' ) ) {
					f = parseInt( currentFragment.getAttribute( 'data-fragment-index' ), 10 );
				}
				else {
					f = currentSlide.querySelectorAll( '.fragment.visible' ).length - 1;
				}
			}
		}

		return { h: h, v: v, f: f };

	}

	/**
	 * Retrieves all slides in this presentation.
	 */
	function getSlides() {

		return toArray( dom.wrapper.querySelectorAll( SLIDES_SELECTOR + ':not(.stack)' ));

	}

	/**
	 * Retrieves the total number of slides in this presentation.
	 *
	 * @return {number}
	 */
	function getTotalSlides() {

		return getSlides().length;

	}

	/**
	 * Returns the slide element matching the specified index.
	 *
	 * @return {HTMLElement}
	 */
	function getSlide( x, y ) {

		var horizontalSlide = dom.wrapper.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR )[ x ];
		var verticalSlides = horizontalSlide && horizontalSlide.querySelectorAll( 'section' );

		if( verticalSlides && verticalSlides.length && typeof y === 'number' ) {
			return verticalSlides ? verticalSlides[ y ] : undefined;
		}

		return horizontalSlide;

	}

	/**
	 * Returns the background element for the given slide.
	 * All slides, even the ones with no background properties
	 * defined, have a background element so as long as the
	 * index is valid an element will be returned.
	 *
	 * @param {number} x Horizontal background index
	 * @param {number} y Vertical background index
	 * @return {(HTMLElement[]|*)}
	 */
	function getSlideBackground( x, y ) {

		// When printing to PDF the slide backgrounds are nested
		// inside of the slides
		if( isPrintingPDF() ) {
			var slide = getSlide( x, y );
			if( slide ) {
				return slide.slideBackgroundElement;
			}

			return undefined;
		}

		var horizontalBackground = dom.wrapper.querySelectorAll( '.backgrounds>.slide-background' )[ x ];
		var verticalBackgrounds = horizontalBackground && horizontalBackground.querySelectorAll( '.slide-background' );

		if( verticalBackgrounds && verticalBackgrounds.length && typeof y === 'number' ) {
			return verticalBackgrounds ? verticalBackgrounds[ y ] : undefined;
		}

		return horizontalBackground;

	}

	/**
	 * Retrieves the speaker notes from a slide. Notes can be
	 * defined in two ways:
	 * 1. As a data-notes attribute on the slide <section>
	 * 2. As an <aside class="notes"> inside of the slide
	 *
	 * @param {HTMLElement} [slide=currentSlide]
	 * @return {(string|null)}
	 */
	function getSlideNotes( slide ) {

		// Default to the current slide
		slide = slide || currentSlide;

		// Notes can be specified via the data-notes attribute...
		if( slide.hasAttribute( 'data-notes' ) ) {
			return slide.getAttribute( 'data-notes' );
		}

		// ... or using an <aside class="notes"> element
		var notesElement = slide.querySelector( 'aside.notes' );
		if( notesElement ) {
			return notesElement.innerHTML;
		}

		return null;

	}

	/**
	 * Retrieves the current state of the presentation as
	 * an object. This state can then be restored at any
	 * time.
	 *
	 * @return {{indexh: number, indexv: number, indexf: number, paused: boolean, overview: boolean}}
	 */
	function getState() {

		var indices = getIndices();

		return {
			indexh: indices.h,
			indexv: indices.v,
			indexf: indices.f,
			paused: isPaused(),
			overview: isOverview()
		};

	}

	/**
	 * Restores the presentation to the given state.
	 *
	 * @param {object} state As generated by getState()
	 * @see {@link getState} generates the parameter `state`
	 */
	function setState( state ) {

		if( typeof state === 'object' ) {
			slide( deserialize( state.indexh ), deserialize( state.indexv ), deserialize( state.indexf ) );

			var pausedFlag = deserialize( state.paused ),
				overviewFlag = deserialize( state.overview );

			if( typeof pausedFlag === 'boolean' && pausedFlag !== isPaused() ) {
				togglePause( pausedFlag );
			}

			if( typeof overviewFlag === 'boolean' && overviewFlag !== isOverview() ) {
				toggleOverview( overviewFlag );
			}
		}

	}

	/**
	 * Return a sorted fragments list, ordered by an increasing
	 * "data-fragment-index" attribute.
	 *
	 * Fragments will be revealed in the order that they are returned by
	 * this function, so you can use the index attributes to control the
	 * order of fragment appearance.
	 *
	 * To maintain a sensible default fragment order, fragments are presumed
	 * to be passed in document order. This function adds a "fragment-index"
	 * attribute to each node if such an attribute is not already present,
	 * and sets that attribute to an integer value which is the position of
	 * the fragment within the fragments list.
	 *
	 * @param {object[]|*} fragments
	 * @return {object[]} sorted Sorted array of fragments
	 */
	function sortFragments( fragments ) {

		fragments = toArray( fragments );

		var ordered = [],
			unordered = [],
			sorted = [];

		// Group ordered and unordered elements
		fragments.forEach( function( fragment, i ) {
			if( fragment.hasAttribute( 'data-fragment-index' ) ) {
				var index = parseInt( fragment.getAttribute( 'data-fragment-index' ), 10 );

				if( !ordered[index] ) {
					ordered[index] = [];
				}

				ordered[index].push( fragment );
			}
			else {
				unordered.push( [ fragment ] );
			}
		} );

		// Append fragments without explicit indices in their
		// DOM order
		ordered = ordered.concat( unordered );

		// Manually count the index up per group to ensure there
		// are no gaps
		var index = 0;

		// Push all fragments in their sorted order to an array,
		// this flattens the groups
		ordered.forEach( function( group ) {
			group.forEach( function( fragment ) {
				sorted.push( fragment );
				fragment.setAttribute( 'data-fragment-index', index );
			} );

			index ++;
		} );

		return sorted;

	}

	/**
	 * Navigate to the specified slide fragment.
	 *
	 * @param {?number} index The index of the fragment that
	 * should be shown, -1 means all are invisible
	 * @param {number} offset Integer offset to apply to the
	 * fragment index
	 *
	 * @return {boolean} true if a change was made in any
	 * fragments visibility as part of this call
	 */
	function navigateFragment( index, offset ) {

		if( currentSlide && config.fragments ) {

			var fragments = sortFragments( currentSlide.querySelectorAll( '.fragment' ) );
			if( fragments.length ) {

				// If no index is specified, find the current
				if( typeof index !== 'number' ) {
					var lastVisibleFragment = sortFragments( currentSlide.querySelectorAll( '.fragment.visible' ) ).pop();

					if( lastVisibleFragment ) {
						index = parseInt( lastVisibleFragment.getAttribute( 'data-fragment-index' ) || 0, 10 );
					}
					else {
						index = -1;
					}
				}

				// If an offset is specified, apply it to the index
				if( typeof offset === 'number' ) {
					index += offset;
				}

				var fragmentsShown = [],
					fragmentsHidden = [];

				toArray( fragments ).forEach( function( element, i ) {

					if( element.hasAttribute( 'data-fragment-index' ) ) {
						i = parseInt( element.getAttribute( 'data-fragment-index' ), 10 );
					}

					// Visible fragments
					if( i <= index ) {
						if( !element.classList.contains( 'visible' ) ) fragmentsShown.push( element );
						element.classList.add( 'visible' );
						element.classList.remove( 'current-fragment' );

						// Announce the fragments one by one to the Screen Reader
						dom.statusDiv.textContent = getStatusText( element );

						if( i === index ) {
							element.classList.add( 'current-fragment' );
							startEmbeddedContent( element );
						}
					}
					// Hidden fragments
					else {
						if( element.classList.contains( 'visible' ) ) fragmentsHidden.push( element );
						element.classList.remove( 'visible' );
						element.classList.remove( 'current-fragment' );
					}

				} );

				if( fragmentsHidden.length ) {
					dispatchEvent( 'fragmenthidden', { fragment: fragmentsHidden[0], fragments: fragmentsHidden } );
				}

				if( fragmentsShown.length ) {
					dispatchEvent( 'fragmentshown', { fragment: fragmentsShown[0], fragments: fragmentsShown } );
				}

				updateControls();
				updateProgress();

				return !!( fragmentsShown.length || fragmentsHidden.length );

			}

		}

		return false;

	}

	/**
	 * Navigate to the next slide fragment.
	 *
	 * @return {boolean} true if there was a next fragment,
	 * false otherwise
	 */
	function nextFragment() {

		return navigateFragment( null, 1 );

	}

	/**
	 * Navigate to the previous slide fragment.
	 *
	 * @return {boolean} true if there was a previous fragment,
	 * false otherwise
	 */
	function previousFragment() {

		return navigateFragment( null, -1 );

	}

	/**
	 * Cues a new automated slide if enabled in the config.
	 */
	function cueAutoSlide() {

		cancelAutoSlide();

		if( currentSlide ) {

			var fragment = currentSlide.querySelector( '.current-fragment' );

			// When the slide first appears there is no "current" fragment so
			// we look for a data-autoslide timing on the first fragment
			if( !fragment ) fragment = currentSlide.querySelector( '.fragment' );

			var fragmentAutoSlide = fragment ? fragment.getAttribute( 'data-autoslide' ) : null;
			var parentAutoSlide = currentSlide.parentNode ? currentSlide.parentNode.getAttribute( 'data-autoslide' ) : null;
			var slideAutoSlide = currentSlide.getAttribute( 'data-autoslide' );

			// Pick value in the following priority order:
			// 1. Current fragment's data-autoslide
			// 2. Current slide's data-autoslide
			// 3. Parent slide's data-autoslide
			// 4. Global autoSlide setting
			if( fragmentAutoSlide ) {
				autoSlide = parseInt( fragmentAutoSlide, 10 );
			}
			else if( slideAutoSlide ) {
				autoSlide = parseInt( slideAutoSlide, 10 );
			}
			else if( parentAutoSlide ) {
				autoSlide = parseInt( parentAutoSlide, 10 );
			}
			else {
				autoSlide = config.autoSlide;
			}

			// If there are media elements with data-autoplay,
			// automatically set the autoSlide duration to the
			// length of that media. Not applicable if the slide
			// is divided up into fragments.
			// playbackRate is accounted for in the duration.
			if( currentSlide.querySelectorAll( '.fragment' ).length === 0 ) {
				toArray( currentSlide.querySelectorAll( 'video, audio' ) ).forEach( function( el ) {
					if( el.hasAttribute( 'data-autoplay' ) ) {
						if( autoSlide && (el.duration * 1000 / el.playbackRate ) > autoSlide ) {
							autoSlide = ( el.duration * 1000 / el.playbackRate ) + 1000;
						}
					}
				} );
			}

			// Cue the next auto-slide if:
			// - There is an autoSlide value
			// - Auto-sliding isn't paused by the user
			// - The presentation isn't paused
			// - The overview isn't active
			// - The presentation isn't over
			if( autoSlide && !autoSlidePaused && !isPaused() && !isOverview() && ( !Reveal.isLastSlide() || availableFragments().next || config.loop === true ) ) {
				autoSlideTimeout = setTimeout( function() {
					typeof config.autoSlideMethod === 'function' ? config.autoSlideMethod() : navigateNext();
					cueAutoSlide();
				}, autoSlide );
				autoSlideStartTime = Date.now();
			}

			if( autoSlidePlayer ) {
				autoSlidePlayer.setPlaying( autoSlideTimeout !== -1 );
			}

		}

	}

	/**
	 * Cancels any ongoing request to auto-slide.
	 */
	function cancelAutoSlide() {

		clearTimeout( autoSlideTimeout );
		autoSlideTimeout = -1;

	}

	function pauseAutoSlide() {

		if( autoSlide && !autoSlidePaused ) {
			autoSlidePaused = true;
			dispatchEvent( 'autoslidepaused' );
			clearTimeout( autoSlideTimeout );

			if( autoSlidePlayer ) {
				autoSlidePlayer.setPlaying( false );
			}
		}

	}

	function resumeAutoSlide() {

		if( autoSlide && autoSlidePaused ) {
			autoSlidePaused = false;
			dispatchEvent( 'autoslideresumed' );
			cueAutoSlide();
		}

	}

	function navigateLeft() {

		// Reverse for RTL
		if( config.rtl ) {
			if( ( isOverview() || nextFragment() === false ) && availableRoutes().left ) {
				slide( indexh + 1 );
			}
		}
		// Normal navigation
		else if( ( isOverview() || previousFragment() === false ) && availableRoutes().left ) {
			slide( indexh - 1 );
		}

	}

	function navigateRight() {

		// Reverse for RTL
		if( config.rtl ) {
			if( ( isOverview() || previousFragment() === false ) && availableRoutes().right ) {
				slide( indexh - 1 );
			}
		}
		// Normal navigation
		else if( ( isOverview() || nextFragment() === false ) && availableRoutes().right ) {
			slide( indexh + 1 );
		}

	}

	function navigateUp() {

		// Prioritize hiding fragments
		if( ( isOverview() || previousFragment() === false ) && availableRoutes().up ) {
			slide( indexh, indexv - 1 );
		}

	}

	function navigateDown() {

		// Prioritize revealing fragments
		if( ( isOverview() || nextFragment() === false ) && availableRoutes().down ) {
			slide( indexh, indexv + 1 );
		}

	}

	/**
	 * Navigates backwards, prioritized in the following order:
	 * 1) Previous fragment
	 * 2) Previous vertical slide
	 * 3) Previous horizontal slide
	 */
	function navigatePrev() {

		// Prioritize revealing fragments
		if( previousFragment() === false ) {
			if( availableRoutes().up ) {
				navigateUp();
			}
			else {
				// Fetch the previous horizontal slide, if there is one
				var previousSlide;

				if( config.rtl ) {
					previousSlide = toArray( dom.wrapper.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR + '.future' ) ).pop();
				}
				else {
					previousSlide = toArray( dom.wrapper.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR + '.past' ) ).pop();
				}

				if( previousSlide ) {
					var v = ( previousSlide.querySelectorAll( 'section' ).length - 1 ) || undefined;
					var h = indexh - 1;
					slide( h, v );
				}
			}
		}

	}

	/**
	 * The reverse of #navigatePrev().
	 */
	function navigateNext() {

		// Prioritize revealing fragments
		if( nextFragment() === false ) {
			if( availableRoutes().down ) {
				navigateDown();
			}
			else if( config.rtl ) {
				navigateLeft();
			}
			else {
				navigateRight();
			}
		}

	}

	/**
	 * Checks if the target element prevents the triggering of
	 * swipe navigation.
	 */
	function isSwipePrevented( target ) {

		while( target && typeof target.hasAttribute === 'function' ) {
			if( target.hasAttribute( 'data-prevent-swipe' ) ) return true;
			target = target.parentNode;
		}

		return false;

	}


	// --------------------------------------------------------------------//
	// ----------------------------- EVENTS -------------------------------//
	// --------------------------------------------------------------------//

	/**
	 * Called by all event handlers that are based on user
	 * input.
	 *
	 * @param {object} [event]
	 */
	function onUserInput( event ) {

		if( config.autoSlideStoppable ) {
			pauseAutoSlide();
		}

	}

	/**
	 * Handler for the document level 'keypress' event.
	 *
	 * @param {object} event
	 */
	function onDocumentKeyPress( event ) {

		// Check if the pressed key is question mark
		if( event.shiftKey && event.charCode === 63 ) {
			toggleHelp();
		}

	}

	/**
	 * Handler for the document level 'keydown' event.
	 *
	 * @param {object} event
	 */
	function onDocumentKeyDown( event ) {

		// If there's a condition specified and it returns false,
		// ignore this event
		if( typeof config.keyboardCondition === 'function' && config.keyboardCondition() === false ) {
			return true;
		}

		// Remember if auto-sliding was paused so we can toggle it
		var autoSlideWasPaused = autoSlidePaused;

		onUserInput( event );

		// Check if there's a focused element that could be using
		// the keyboard
		var activeElementIsCE = document.activeElement && document.activeElement.contentEditable !== 'inherit';
		var activeElementIsInput = document.activeElement && document.activeElement.tagName && /input|textarea/i.test( document.activeElement.tagName );
		var activeElementIsNotes = document.activeElement && document.activeElement.className && /speaker-notes/i.test( document.activeElement.className);

		// Disregard the event if there's a focused element or a
		// keyboard modifier key is present
		if( activeElementIsCE || activeElementIsInput || activeElementIsNotes || (event.shiftKey && event.keyCode !== 32) || event.altKey || event.ctrlKey || event.metaKey ) return;

		// While paused only allow resume keyboard events; 'b', 'v', '.'
		var resumeKeyCodes = [66,86,190,191];
		var key;

		// Custom key bindings for togglePause should be able to resume
		if( typeof config.keyboard === 'object' ) {
			for( key in config.keyboard ) {
				if( config.keyboard[key] === 'togglePause' ) {
					resumeKeyCodes.push( parseInt( key, 10 ) );
				}
			}
		}

		if( isPaused() && resumeKeyCodes.indexOf( event.keyCode ) === -1 ) {
			return false;
		}

		var triggered = false;

		// 1. User defined key bindings
		if( typeof config.keyboard === 'object' ) {

			for( key in config.keyboard ) {

				// Check if this binding matches the pressed key
				if( parseInt( key, 10 ) === event.keyCode ) {

					var value = config.keyboard[ key ];

					// Callback function
					if( typeof value === 'function' ) {
						value.apply( null, [ event ] );
					}
					// String shortcuts to reveal.js API
					else if( typeof value === 'string' && typeof Reveal[ value ] === 'function' ) {
						Reveal[ value ].call();
					}

					triggered = true;

				}

			}

		}

		// 2. System defined key bindings
		if( triggered === false ) {

			// Assume true and try to prove false
			triggered = true;

			switch( event.keyCode ) {
				// p, page up
				case 80: case 33: navigatePrev(); break;
				// n, page down
				case 78: case 34: navigateNext(); break;
				// h, left
				case 72: case 37: navigateLeft(); break;
				// l, right
				case 76: case 39: navigateRight(); break;
				// k, up
				case 75: case 38: navigateUp(); break;
				// j, down
				case 74: case 40: navigateDown(); break;
				// home
				case 36: slide( 0 ); break;
				// end
				case 35: slide( Number.MAX_VALUE ); break;
				// space
				case 32: isOverview() ? deactivateOverview() : event.shiftKey ? navigatePrev() : navigateNext(); break;
				// return
				case 13: isOverview() ? deactivateOverview() : triggered = false; break;
				// two-spot, semicolon, b, v, period, Logitech presenter tools "black screen" button
				case 58: case 59: case 66: case 86: case 190: case 191: togglePause(); break;
				// f
				case 70: enterFullscreen(); break;
				// a
				case 65: if ( config.autoSlideStoppable ) toggleAutoSlide( autoSlideWasPaused ); break;
				default:
					triggered = false;
			}

		}

		// If the input resulted in a triggered action we should prevent
		// the browsers default behavior
		if( triggered ) {
			event.preventDefault && event.preventDefault();
		}
		// ESC or O key
		else if ( ( event.keyCode === 27 || event.keyCode === 79 ) && features.transforms3d ) {
			if( dom.overlay ) {
				closeOverlay();
			}
			else {
				toggleOverview();
			}

			event.preventDefault && event.preventDefault();
		}

		// If auto-sliding is enabled we need to cue up
		// another timeout
		cueAutoSlide();

	}

	/**
	 * Handler for the 'touchstart' event, enables support for
	 * swipe and pinch gestures.
	 *
	 * @param {object} event
	 */
	function onTouchStart( event ) {

		if( isSwipePrevented( event.target ) ) return true;

		touch.startX = event.touches[0].clientX;
		touch.startY = event.touches[0].clientY;
		touch.startCount = event.touches.length;

		// If there's two touches we need to memorize the distance
		// between those two points to detect pinching
		if( event.touches.length === 2 && config.overview ) {
			touch.startSpan = distanceBetween( {
				x: event.touches[1].clientX,
				y: event.touches[1].clientY
			}, {
				x: touch.startX,
				y: touch.startY
			} );
		}

	}

	/**
	 * Handler for the 'touchmove' event.
	 *
	 * @param {object} event
	 */
	function onTouchMove( event ) {

		if( isSwipePrevented( event.target ) ) return true;

		// Each touch should only trigger one action
		if( !touch.captured ) {
			onUserInput( event );

			var currentX = event.touches[0].clientX;
			var currentY = event.touches[0].clientY;

			// If the touch started with two points and still has
			// two active touches; test for the pinch gesture
			if( event.touches.length === 2 && touch.startCount === 2 && config.overview ) {

				// The current distance in pixels between the two touch points
				var currentSpan = distanceBetween( {
					x: event.touches[1].clientX,
					y: event.touches[1].clientY
				}, {
					x: touch.startX,
					y: touch.startY
				} );

				// If the span is larger than the desire amount we've got
				// ourselves a pinch
				if( Math.abs( touch.startSpan - currentSpan ) > touch.threshold ) {
					touch.captured = true;

					if( currentSpan < touch.startSpan ) {
						activateOverview();
					}
					else {
						deactivateOverview();
					}
				}

				event.preventDefault();

			}
			// There was only one touch point, look for a swipe
			else if( event.touches.length === 1 && touch.startCount !== 2 ) {

				var deltaX = currentX - touch.startX,
					deltaY = currentY - touch.startY;

				if( deltaX > touch.threshold && Math.abs( deltaX ) > Math.abs( deltaY ) ) {
					touch.captured = true;
					navigateLeft();
				}
				else if( deltaX < -touch.threshold && Math.abs( deltaX ) > Math.abs( deltaY ) ) {
					touch.captured = true;
					navigateRight();
				}
				else if( deltaY > touch.threshold ) {
					touch.captured = true;
					navigateUp();
				}
				else if( deltaY < -touch.threshold ) {
					touch.captured = true;
					navigateDown();
				}

				// If we're embedded, only block touch events if they have
				// triggered an action
				if( config.embedded ) {
					if( touch.captured || isVerticalSlide( currentSlide ) ) {
						event.preventDefault();
					}
				}
				// Not embedded? Block them all to avoid needless tossing
				// around of the viewport in iOS
				else {
					event.preventDefault();
				}

			}
		}
		// There's a bug with swiping on some Android devices unless
		// the default action is always prevented
		else if( UA.match( /android/gi ) ) {
			event.preventDefault();
		}

	}

	/**
	 * Handler for the 'touchend' event.
	 *
	 * @param {object} event
	 */
	function onTouchEnd( event ) {

		touch.captured = false;

	}

	/**
	 * Convert pointer down to touch start.
	 *
	 * @param {object} event
	 */
	function onPointerDown( event ) {

		if( event.pointerType === event.MSPOINTER_TYPE_TOUCH || event.pointerType === "touch" ) {
			event.touches = [{ clientX: event.clientX, clientY: event.clientY }];
			onTouchStart( event );
		}

	}

	/**
	 * Convert pointer move to touch move.
	 *
	 * @param {object} event
	 */
	function onPointerMove( event ) {

		if( event.pointerType === event.MSPOINTER_TYPE_TOUCH || event.pointerType === "touch" )  {
			event.touches = [{ clientX: event.clientX, clientY: event.clientY }];
			onTouchMove( event );
		}

	}

	/**
	 * Convert pointer up to touch end.
	 *
	 * @param {object} event
	 */
	function onPointerUp( event ) {

		if( event.pointerType === event.MSPOINTER_TYPE_TOUCH || event.pointerType === "touch" )  {
			event.touches = [{ clientX: event.clientX, clientY: event.clientY }];
			onTouchEnd( event );
		}

	}

	/**
	 * Handles mouse wheel scrolling, throttled to avoid skipping
	 * multiple slides.
	 *
	 * @param {object} event
	 */
	function onDocumentMouseScroll( event ) {

		if( Date.now() - lastMouseWheelStep > 600 ) {

			lastMouseWheelStep = Date.now();

			var delta = event.detail || -event.wheelDelta;
			if( delta > 0 ) {
				navigateNext();
			}
			else if( delta < 0 ) {
				navigatePrev();
			}

		}

	}

	/**
	 * Clicking on the progress bar results in a navigation to the
	 * closest approximate horizontal slide using this equation:
	 *
	 * ( clickX / presentationWidth ) * numberOfSlides
	 *
	 * @param {object} event
	 */
	function onProgressClicked( event ) {

		onUserInput( event );

		event.preventDefault();

		var slidesTotal = toArray( dom.wrapper.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR ) ).length;
		var slideIndex = Math.floor( ( event.clientX / dom.wrapper.offsetWidth ) * slidesTotal );

		if( config.rtl ) {
			slideIndex = slidesTotal - slideIndex;
		}

		slide( slideIndex );

	}

	/**
	 * Event handler for navigation control buttons.
	 */
	function onNavigateLeftClicked( event ) { event.preventDefault(); onUserInput(); navigateLeft(); }
	function onNavigateRightClicked( event ) { event.preventDefault(); onUserInput(); navigateRight(); }
	function onNavigateUpClicked( event ) { event.preventDefault(); onUserInput(); navigateUp(); }
	function onNavigateDownClicked( event ) { event.preventDefault(); onUserInput(); navigateDown(); }
	function onNavigatePrevClicked( event ) { event.preventDefault(); onUserInput(); navigatePrev(); }
	function onNavigateNextClicked( event ) { event.preventDefault(); onUserInput(); navigateNext(); }

	/**
	 * Handler for the window level 'hashchange' event.
	 *
	 * @param {object} [event]
	 */
	function onWindowHashChange( event ) {

		readURL();

	}

	/**
	 * Handler for the window level 'resize' event.
	 *
	 * @param {object} [event]
	 */
	function onWindowResize( event ) {

		layout();

	}

	/**
	 * Handle for the window level 'visibilitychange' event.
	 *
	 * @param {object} [event]
	 */
	function onPageVisibilityChange( event ) {

		var isHidden =  document.webkitHidden ||
						document.msHidden ||
						document.hidden;

		// If, after clicking a link or similar and we're coming back,
		// focus the document.body to ensure we can use keyboard shortcuts
		if( isHidden === false && document.activeElement !== document.body ) {
			// Not all elements support .blur() - SVGs among them.
			if( typeof document.activeElement.blur === 'function' ) {
				document.activeElement.blur();
			}
			document.body.focus();
		}

	}

	/**
	 * Invoked when a slide is and we're in the overview.
	 *
	 * @param {object} event
	 */
	function onOverviewSlideClicked( event ) {

		// TODO There's a bug here where the event listeners are not
		// removed after deactivating the overview.
		if( eventsAreBound && isOverview() ) {
			event.preventDefault();

			var element = event.target;

			while( element && !element.nodeName.match( /section/gi ) ) {
				element = element.parentNode;
			}

			if( element && !element.classList.contains( 'disabled' ) ) {

				deactivateOverview();

				if( element.nodeName.match( /section/gi ) ) {
					var h = parseInt( element.getAttribute( 'data-index-h' ), 10 ),
						v = parseInt( element.getAttribute( 'data-index-v' ), 10 );

					slide( h, v );
				}

			}
		}

	}

	/**
	 * Handles clicks on links that are set to preview in the
	 * iframe overlay.
	 *
	 * @param {object} event
	 */
	function onPreviewLinkClicked( event ) {

		if( event.currentTarget && event.currentTarget.hasAttribute( 'href' ) ) {
			var url = event.currentTarget.getAttribute( 'href' );
			if( url ) {
				showPreview( url );
				event.preventDefault();
			}
		}

	}

	/**
	 * Handles click on the auto-sliding controls element.
	 *
	 * @param {object} [event]
	 */
	function onAutoSlidePlayerClick( event ) {

		// Replay
		if( Reveal.isLastSlide() && config.loop === false ) {
			slide( 0, 0 );
			resumeAutoSlide();
		}
		// Resume
		else if( autoSlidePaused ) {
			resumeAutoSlide();
		}
		// Pause
		else {
			pauseAutoSlide();
		}

	}


	// --------------------------------------------------------------------//
	// ------------------------ PLAYBACK COMPONENT ------------------------//
	// --------------------------------------------------------------------//


	/**
	 * Constructor for the playback component, which displays
	 * play/pause/progress controls.
	 *
	 * @param {HTMLElement} container The component will append
	 * itself to this
	 * @param {function} progressCheck A method which will be
	 * called frequently to get the current progress on a range
	 * of 0-1
	 */
	function Playback( container, progressCheck ) {

		// Cosmetics
		this.diameter = 100;
		this.diameter2 = this.diameter/2;
		this.thickness = 6;

		// Flags if we are currently playing
		this.playing = false;

		// Current progress on a 0-1 range
		this.progress = 0;

		// Used to loop the animation smoothly
		this.progressOffset = 1;

		this.container = container;
		this.progressCheck = progressCheck;

		this.canvas = document.createElement( 'canvas' );
		this.canvas.className = 'playback';
		this.canvas.width = this.diameter;
		this.canvas.height = this.diameter;
		this.canvas.style.width = this.diameter2 + 'px';
		this.canvas.style.height = this.diameter2 + 'px';
		this.context = this.canvas.getContext( '2d' );

		this.container.appendChild( this.canvas );

		this.render();

	}

	/**
	 * @param value
	 */
	Playback.prototype.setPlaying = function( value ) {

		var wasPlaying = this.playing;

		this.playing = value;

		// Start repainting if we weren't already
		if( !wasPlaying && this.playing ) {
			this.animate();
		}
		else {
			this.render();
		}

	};

	Playback.prototype.animate = function() {

		var progressBefore = this.progress;

		this.progress = this.progressCheck();

		// When we loop, offset the progress so that it eases
		// smoothly rather than immediately resetting
		if( progressBefore > 0.8 && this.progress < 0.2 ) {
			this.progressOffset = this.progress;
		}

		this.render();

		if( this.playing ) {
			features.requestAnimationFrameMethod.call( window, this.animate.bind( this ) );
		}

	};

	/**
	 * Renders the current progress and playback state.
	 */
	Playback.prototype.render = function() {

		var progress = this.playing ? this.progress : 0,
			radius = ( this.diameter2 ) - this.thickness,
			x = this.diameter2,
			y = this.diameter2,
			iconSize = 28;

		// Ease towards 1
		this.progressOffset += ( 1 - this.progressOffset ) * 0.1;

		var endAngle = ( - Math.PI / 2 ) + ( progress * ( Math.PI * 2 ) );
		var startAngle = ( - Math.PI / 2 ) + ( this.progressOffset * ( Math.PI * 2 ) );

		this.context.save();
		this.context.clearRect( 0, 0, this.diameter, this.diameter );

		// Solid background color
		this.context.beginPath();
		this.context.arc( x, y, radius + 4, 0, Math.PI * 2, false );
		this.context.fillStyle = 'rgba( 0, 0, 0, 0.4 )';
		this.context.fill();

		// Draw progress track
		this.context.beginPath();
		this.context.arc( x, y, radius, 0, Math.PI * 2, false );
		this.context.lineWidth = this.thickness;
		this.context.strokeStyle = '#666';
		this.context.stroke();

		if( this.playing ) {
			// Draw progress on top of track
			this.context.beginPath();
			this.context.arc( x, y, radius, startAngle, endAngle, false );
			this.context.lineWidth = this.thickness;
			this.context.strokeStyle = '#fff';
			this.context.stroke();
		}

		this.context.translate( x - ( iconSize / 2 ), y - ( iconSize / 2 ) );

		// Draw play/pause icons
		if( this.playing ) {
			this.context.fillStyle = '#fff';
			this.context.fillRect( 0, 0, iconSize / 2 - 4, iconSize );
			this.context.fillRect( iconSize / 2 + 4, 0, iconSize / 2 - 4, iconSize );
		}
		else {
			this.context.beginPath();
			this.context.translate( 4, 0 );
			this.context.moveTo( 0, 0 );
			this.context.lineTo( iconSize - 4, iconSize / 2 );
			this.context.lineTo( 0, iconSize );
			this.context.fillStyle = '#fff';
			this.context.fill();
		}

		this.context.restore();

	};

	Playback.prototype.on = function( type, listener ) {
		this.canvas.addEventListener( type, listener, false );
	};

	Playback.prototype.off = function( type, listener ) {
		this.canvas.removeEventListener( type, listener, false );
	};

	Playback.prototype.destroy = function() {

		this.playing = false;

		if( this.canvas.parentNode ) {
			this.container.removeChild( this.canvas );
		}

	};


	// --------------------------------------------------------------------//
	// ------------------------------- API --------------------------------//
	// --------------------------------------------------------------------//


	Reveal = {
		VERSION: VERSION,

		initialize: initialize,
		configure: configure,
		sync: sync,

		// Navigation methods
		slide: slide,
		left: navigateLeft,
		right: navigateRight,
		up: navigateUp,
		down: navigateDown,
		prev: navigatePrev,
		next: navigateNext,

		// Fragment methods
		navigateFragment: navigateFragment,
		prevFragment: previousFragment,
		nextFragment: nextFragment,

		// Deprecated aliases
		navigateTo: slide,
		navigateLeft: navigateLeft,
		navigateRight: navigateRight,
		navigateUp: navigateUp,
		navigateDown: navigateDown,
		navigatePrev: navigatePrev,
		navigateNext: navigateNext,

		// Forces an update in slide layout
		layout: layout,

		// Randomizes the order of slides
		shuffle: shuffle,

		// Returns an object with the available routes as booleans (left/right/top/bottom)
		availableRoutes: availableRoutes,

		// Returns an object with the available fragments as booleans (prev/next)
		availableFragments: availableFragments,

		// Toggles a help overlay with keyboard shortcuts
		toggleHelp: toggleHelp,

		// Toggles the overview mode on/off
		toggleOverview: toggleOverview,

		// Toggles the "black screen" mode on/off
		togglePause: togglePause,

		// Toggles the auto slide mode on/off
		toggleAutoSlide: toggleAutoSlide,

		// State checks
		isOverview: isOverview,
		isPaused: isPaused,
		isAutoSliding: isAutoSliding,

		// Adds or removes all internal event listeners (such as keyboard)
		addEventListeners: addEventListeners,
		removeEventListeners: removeEventListeners,

		// Facility for persisting and restoring the presentation state
		getState: getState,
		setState: setState,

		// Presentation progress
		getSlidePastCount: getSlidePastCount,

		// Presentation progress on range of 0-1
		getProgress: getProgress,

		// Returns the indices of the current, or specified, slide
		getIndices: getIndices,

		// Returns an Array of all slides
		getSlides: getSlides,

		// Returns the total number of slides
		getTotalSlides: getTotalSlides,

		// Returns the slide element at the specified index
		getSlide: getSlide,

		// Returns the slide background element at the specified index
		getSlideBackground: getSlideBackground,

		// Returns the speaker notes string for a slide, or null
		getSlideNotes: getSlideNotes,

		// Returns the previous slide element, may be null
		getPreviousSlide: function() {
			return previousSlide;
		},

		// Returns the current slide element
		getCurrentSlide: function() {
			return currentSlide;
		},

		// Returns the current scale of the presentation content
		getScale: function() {
			return scale;
		},

		// Returns the current configuration object
		getConfig: function() {
			return config;
		},

		// Helper method, retrieves query string as a key/value hash
		getQueryHash: function() {
			var query = {};

			location.search.replace( /[A-Z0-9]+?=([\w\.%-]*)/gi, function(a) {
				query[ a.split( '=' ).shift() ] = a.split( '=' ).pop();
			} );

			// Basic deserialization
			for( var i in query ) {
				var value = query[ i ];

				query[ i ] = deserialize( unescape( value ) );
			}

			return query;
		},

		// Returns true if we're currently on the first slide
		isFirstSlide: function() {
			return ( indexh === 0 && indexv === 0 );
		},

		// Returns true if we're currently on the last slide
		isLastSlide: function() {
			if( currentSlide ) {
				// Does this slide has next a sibling?
				if( currentSlide.nextElementSibling ) return false;

				// If it's vertical, does its parent have a next sibling?
				if( isVerticalSlide( currentSlide ) && currentSlide.parentNode.nextElementSibling ) return false;

				return true;
			}

			return false;
		},

		// Checks if reveal.js has been loaded and is ready for use
		isReady: function() {
			return loaded;
		},

		// Forward event binding to the reveal DOM element
		addEventListener: function( type, listener, useCapture ) {
			if( 'addEventListener' in window ) {
				( dom.wrapper || document.querySelector( '.reveal' ) ).addEventListener( type, listener, useCapture );
			}
		},
		removeEventListener: function( type, listener, useCapture ) {
			if( 'addEventListener' in window ) {
				( dom.wrapper || document.querySelector( '.reveal' ) ).removeEventListener( type, listener, useCapture );
			}
		},

		// Programatically triggers a keyboard event
		triggerKey: function( keyCode ) {
			onDocumentKeyDown( { keyCode: keyCode } );
		},

		// Registers a new shortcut to include in the help overlay
		registerKeyboardShortcut: function( key, value ) {
			keyboardShortcuts[key] = value;
		}
	};

	return Reveal;

}));


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(103);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(19)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!./reveal.css", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!./reveal.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)(undefined);
// imports


// module
exports.push([module.i, "/*!\n * reveal.js\n * http://lab.hakim.se/reveal-js\n * MIT licensed\n *\n * Copyright (C) 2017 Hakim El Hattab, http://hakim.se\n */\n/*********************************************\n * RESET STYLES\n *********************************************/\nhtml, body, .reveal div, .reveal span, .reveal applet, .reveal object, .reveal iframe,\n.reveal h1, .reveal h2, .reveal h3, .reveal h4, .reveal h5, .reveal h6, .reveal p, .reveal blockquote, .reveal pre,\n.reveal a, .reveal abbr, .reveal acronym, .reveal address, .reveal big, .reveal cite, .reveal code,\n.reveal del, .reveal dfn, .reveal em, .reveal img, .reveal ins, .reveal kbd, .reveal q, .reveal s, .reveal samp,\n.reveal small, .reveal strike, .reveal strong, .reveal sub, .reveal sup, .reveal tt, .reveal var,\n.reveal b, .reveal u, .reveal center,\n.reveal dl, .reveal dt, .reveal dd, .reveal ol, .reveal ul, .reveal li,\n.reveal fieldset, .reveal form, .reveal label, .reveal legend,\n.reveal table, .reveal caption, .reveal tbody, .reveal tfoot, .reveal thead, .reveal tr, .reveal th, .reveal td,\n.reveal article, .reveal aside, .reveal canvas, .reveal details, .reveal embed,\n.reveal figure, .reveal figcaption, .reveal footer, .reveal header, .reveal hgroup,\n.reveal menu, .reveal nav, .reveal output, .reveal ruby, .reveal section, .reveal summary,\n.reveal time, .reveal mark, .reveal audio, .reveal video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline; }\n\n.reveal article, .reveal aside, .reveal details, .reveal figcaption, .reveal figure,\n.reveal footer, .reveal header, .reveal hgroup, .reveal menu, .reveal nav, .reveal section {\n  display: block; }\n\n/*********************************************\n * GLOBAL STYLES\n *********************************************/\nhtml,\nbody {\n  width: 100%;\n  height: 100%;\n  overflow: hidden; }\n\nbody {\n  position: relative;\n  line-height: 1;\n  background-color: #fff;\n  color: #000; }\n\n/*********************************************\n * VIEW FRAGMENTS\n *********************************************/\n.reveal .slides section .fragment {\n  opacity: 0;\n  visibility: hidden;\n  -webkit-transition: all .2s ease;\n          transition: all .2s ease; }\n  .reveal .slides section .fragment.visible {\n    opacity: 1;\n    visibility: inherit; }\n\n.reveal .slides section .fragment.grow {\n  opacity: 1;\n  visibility: inherit; }\n  .reveal .slides section .fragment.grow.visible {\n    -webkit-transform: scale(1.3);\n            transform: scale(1.3); }\n\n.reveal .slides section .fragment.shrink {\n  opacity: 1;\n  visibility: inherit; }\n  .reveal .slides section .fragment.shrink.visible {\n    -webkit-transform: scale(0.7);\n            transform: scale(0.7); }\n\n.reveal .slides section .fragment.zoom-in {\n  -webkit-transform: scale(0.1);\n          transform: scale(0.1); }\n  .reveal .slides section .fragment.zoom-in.visible {\n    -webkit-transform: none;\n            transform: none; }\n\n.reveal .slides section .fragment.fade-out {\n  opacity: 1;\n  visibility: inherit; }\n  .reveal .slides section .fragment.fade-out.visible {\n    opacity: 0;\n    visibility: hidden; }\n\n.reveal .slides section .fragment.semi-fade-out {\n  opacity: 1;\n  visibility: inherit; }\n  .reveal .slides section .fragment.semi-fade-out.visible {\n    opacity: 0.5;\n    visibility: inherit; }\n\n.reveal .slides section .fragment.strike {\n  opacity: 1;\n  visibility: inherit; }\n  .reveal .slides section .fragment.strike.visible {\n    text-decoration: line-through; }\n\n.reveal .slides section .fragment.fade-up {\n  -webkit-transform: translate(0, 20%);\n          transform: translate(0, 20%); }\n  .reveal .slides section .fragment.fade-up.visible {\n    -webkit-transform: translate(0, 0);\n            transform: translate(0, 0); }\n\n.reveal .slides section .fragment.fade-down {\n  -webkit-transform: translate(0, -20%);\n          transform: translate(0, -20%); }\n  .reveal .slides section .fragment.fade-down.visible {\n    -webkit-transform: translate(0, 0);\n            transform: translate(0, 0); }\n\n.reveal .slides section .fragment.fade-right {\n  -webkit-transform: translate(-20%, 0);\n          transform: translate(-20%, 0); }\n  .reveal .slides section .fragment.fade-right.visible {\n    -webkit-transform: translate(0, 0);\n            transform: translate(0, 0); }\n\n.reveal .slides section .fragment.fade-left {\n  -webkit-transform: translate(20%, 0);\n          transform: translate(20%, 0); }\n  .reveal .slides section .fragment.fade-left.visible {\n    -webkit-transform: translate(0, 0);\n            transform: translate(0, 0); }\n\n.reveal .slides section .fragment.current-visible {\n  opacity: 0;\n  visibility: hidden; }\n  .reveal .slides section .fragment.current-visible.current-fragment {\n    opacity: 1;\n    visibility: inherit; }\n\n.reveal .slides section .fragment.highlight-red,\n.reveal .slides section .fragment.highlight-current-red,\n.reveal .slides section .fragment.highlight-green,\n.reveal .slides section .fragment.highlight-current-green,\n.reveal .slides section .fragment.highlight-blue,\n.reveal .slides section .fragment.highlight-current-blue {\n  opacity: 1;\n  visibility: inherit; }\n\n.reveal .slides section .fragment.highlight-red.visible {\n  color: #ff2c2d; }\n\n.reveal .slides section .fragment.highlight-green.visible {\n  color: #17ff2e; }\n\n.reveal .slides section .fragment.highlight-blue.visible {\n  color: #1b91ff; }\n\n.reveal .slides section .fragment.highlight-current-red.current-fragment {\n  color: #ff2c2d; }\n\n.reveal .slides section .fragment.highlight-current-green.current-fragment {\n  color: #17ff2e; }\n\n.reveal .slides section .fragment.highlight-current-blue.current-fragment {\n  color: #1b91ff; }\n\n/*********************************************\n * DEFAULT ELEMENT STYLES\n *********************************************/\n/* Fixes issue in Chrome where italic fonts did not appear when printing to PDF */\n.reveal:after {\n  content: '';\n  font-style: italic; }\n\n.reveal iframe {\n  z-index: 1; }\n\n/** Prevents layering issues in certain browser/transition combinations */\n.reveal a {\n  position: relative; }\n\n.reveal .stretch {\n  max-width: none;\n  max-height: none; }\n\n.reveal pre.stretch code {\n  height: 100%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n/*********************************************\n * CONTROLS\n *********************************************/\n.reveal .controls {\n  display: none;\n  position: fixed;\n  width: 110px;\n  height: 110px;\n  z-index: 30;\n  right: 10px;\n  bottom: 10px;\n  -webkit-user-select: none; }\n\n.reveal .controls button {\n  padding: 0;\n  position: absolute;\n  opacity: 0.05;\n  width: 0;\n  height: 0;\n  background-color: transparent;\n  border: 12px solid transparent;\n  -webkit-transform: scale(0.9999);\n          transform: scale(0.9999);\n  -webkit-transition: all 0.2s ease;\n          transition: all 0.2s ease;\n  -webkit-appearance: none;\n  -webkit-tap-highlight-color: transparent; }\n\n.reveal .controls .enabled {\n  opacity: 0.7;\n  cursor: pointer; }\n\n.reveal .controls .enabled:active {\n  margin-top: 1px; }\n\n.reveal .controls .navigate-left {\n  top: 42px;\n  border-right-width: 22px;\n  border-right-color: #000; }\n\n.reveal .controls .navigate-left.fragmented {\n  opacity: 0.3; }\n\n.reveal .controls .navigate-right {\n  left: 74px;\n  top: 42px;\n  border-left-width: 22px;\n  border-left-color: #000; }\n\n.reveal .controls .navigate-right.fragmented {\n  opacity: 0.3; }\n\n.reveal .controls .navigate-up {\n  left: 42px;\n  border-bottom-width: 22px;\n  border-bottom-color: #000; }\n\n.reveal .controls .navigate-up.fragmented {\n  opacity: 0.3; }\n\n.reveal .controls .navigate-down {\n  left: 42px;\n  top: 74px;\n  border-top-width: 22px;\n  border-top-color: #000; }\n\n.reveal .controls .navigate-down.fragmented {\n  opacity: 0.3; }\n\n/*********************************************\n * PROGRESS BAR\n *********************************************/\n.reveal .progress {\n  position: fixed;\n  display: none;\n  height: 3px;\n  width: 100%;\n  bottom: 0;\n  left: 0;\n  z-index: 10;\n  background-color: rgba(0, 0, 0, 0.2); }\n\n.reveal .progress:after {\n  content: '';\n  display: block;\n  position: absolute;\n  height: 20px;\n  width: 100%;\n  top: -20px; }\n\n.reveal .progress span {\n  display: block;\n  height: 100%;\n  width: 0px;\n  background-color: #000;\n  -webkit-transition: width 800ms cubic-bezier(0.26, 0.86, 0.44, 0.985);\n          transition: width 800ms cubic-bezier(0.26, 0.86, 0.44, 0.985); }\n\n/*********************************************\n * SLIDE NUMBER\n *********************************************/\n.reveal .slide-number {\n  position: fixed;\n  display: block;\n  right: 8px;\n  bottom: 8px;\n  z-index: 31;\n  font-family: Helvetica, sans-serif;\n  font-size: 12px;\n  line-height: 1;\n  color: #fff;\n  background-color: rgba(0, 0, 0, 0.4);\n  padding: 5px; }\n\n.reveal .slide-number-delimiter {\n  margin: 0 3px; }\n\n/*********************************************\n * SLIDES\n *********************************************/\n.reveal {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  -ms-touch-action: none;\n      touch-action: none; }\n\n.reveal .slides {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  pointer-events: none;\n  overflow: visible;\n  z-index: 1;\n  text-align: center;\n  -webkit-perspective: 600px;\n          perspective: 600px;\n  -webkit-perspective-origin: 50% 40%;\n          perspective-origin: 50% 40%; }\n\n.reveal .slides > section {\n  -ms-perspective: 600px; }\n\n.reveal .slides > section,\n.reveal .slides > section > section {\n  display: none;\n  position: absolute;\n  width: 100%;\n  padding: 20px 0px;\n  pointer-events: auto;\n  z-index: 10;\n  -webkit-transform-style: flat;\n          transform-style: flat;\n  -webkit-transition: -webkit-transform-origin 800ms cubic-bezier(0.26, 0.86, 0.44, 0.985), -webkit-transform 800ms cubic-bezier(0.26, 0.86, 0.44, 0.985), visibility 800ms cubic-bezier(0.26, 0.86, 0.44, 0.985), opacity 800ms cubic-bezier(0.26, 0.86, 0.44, 0.985);\n          transition: transform-origin 800ms cubic-bezier(0.26, 0.86, 0.44, 0.985), transform 800ms cubic-bezier(0.26, 0.86, 0.44, 0.985), visibility 800ms cubic-bezier(0.26, 0.86, 0.44, 0.985), opacity 800ms cubic-bezier(0.26, 0.86, 0.44, 0.985); }\n\n/* Global transition speed settings */\n.reveal[data-transition-speed=\"fast\"] .slides section {\n  -webkit-transition-duration: 400ms;\n          transition-duration: 400ms; }\n\n.reveal[data-transition-speed=\"slow\"] .slides section {\n  -webkit-transition-duration: 1200ms;\n          transition-duration: 1200ms; }\n\n/* Slide-specific transition speed overrides */\n.reveal .slides section[data-transition-speed=\"fast\"] {\n  -webkit-transition-duration: 400ms;\n          transition-duration: 400ms; }\n\n.reveal .slides section[data-transition-speed=\"slow\"] {\n  -webkit-transition-duration: 1200ms;\n          transition-duration: 1200ms; }\n\n.reveal .slides > section.stack {\n  padding-top: 0;\n  padding-bottom: 0; }\n\n.reveal .slides > section.present,\n.reveal .slides > section > section.present {\n  display: block;\n  z-index: 11;\n  opacity: 1; }\n\n.reveal .slides > section:empty,\n.reveal .slides > section > section:empty,\n.reveal .slides > section[data-background-interactive],\n.reveal .slides > section > section[data-background-interactive] {\n  pointer-events: none; }\n\n.reveal.center,\n.reveal.center .slides,\n.reveal.center .slides section {\n  min-height: 0 !important; }\n\n/* Don't allow interaction with invisible slides */\n.reveal .slides > section.future,\n.reveal .slides > section > section.future,\n.reveal .slides > section.past,\n.reveal .slides > section > section.past {\n  pointer-events: none; }\n\n.reveal.overview .slides > section,\n.reveal.overview .slides > section > section {\n  pointer-events: auto; }\n\n.reveal .slides > section.past,\n.reveal .slides > section.future,\n.reveal .slides > section > section.past,\n.reveal .slides > section > section.future {\n  opacity: 0; }\n\n/*********************************************\n * Mixins for readability of transitions\n *********************************************/\n/*********************************************\n * SLIDE TRANSITION\n * Aliased 'linear' for backwards compatibility\n *********************************************/\n.reveal.slide section {\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden; }\n\n.reveal .slides > section[data-transition=slide].past,\n.reveal .slides > section[data-transition~=slide-out].past,\n.reveal.slide .slides > section:not([data-transition]).past {\n  -webkit-transform: translate(-150%, 0);\n          transform: translate(-150%, 0); }\n\n.reveal .slides > section[data-transition=slide].future,\n.reveal .slides > section[data-transition~=slide-in].future,\n.reveal.slide .slides > section:not([data-transition]).future {\n  -webkit-transform: translate(150%, 0);\n          transform: translate(150%, 0); }\n\n.reveal .slides > section > section[data-transition=slide].past,\n.reveal .slides > section > section[data-transition~=slide-out].past,\n.reveal.slide .slides > section > section:not([data-transition]).past {\n  -webkit-transform: translate(0, -150%);\n          transform: translate(0, -150%); }\n\n.reveal .slides > section > section[data-transition=slide].future,\n.reveal .slides > section > section[data-transition~=slide-in].future,\n.reveal.slide .slides > section > section:not([data-transition]).future {\n  -webkit-transform: translate(0, 150%);\n          transform: translate(0, 150%); }\n\n.reveal.linear section {\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden; }\n\n.reveal .slides > section[data-transition=linear].past,\n.reveal .slides > section[data-transition~=linear-out].past,\n.reveal.linear .slides > section:not([data-transition]).past {\n  -webkit-transform: translate(-150%, 0);\n          transform: translate(-150%, 0); }\n\n.reveal .slides > section[data-transition=linear].future,\n.reveal .slides > section[data-transition~=linear-in].future,\n.reveal.linear .slides > section:not([data-transition]).future {\n  -webkit-transform: translate(150%, 0);\n          transform: translate(150%, 0); }\n\n.reveal .slides > section > section[data-transition=linear].past,\n.reveal .slides > section > section[data-transition~=linear-out].past,\n.reveal.linear .slides > section > section:not([data-transition]).past {\n  -webkit-transform: translate(0, -150%);\n          transform: translate(0, -150%); }\n\n.reveal .slides > section > section[data-transition=linear].future,\n.reveal .slides > section > section[data-transition~=linear-in].future,\n.reveal.linear .slides > section > section:not([data-transition]).future {\n  -webkit-transform: translate(0, 150%);\n          transform: translate(0, 150%); }\n\n/*********************************************\n * CONVEX TRANSITION\n * Aliased 'default' for backwards compatibility\n *********************************************/\n.reveal .slides section[data-transition=default].stack,\n.reveal.default .slides section.stack {\n  -webkit-transform-style: preserve-3d;\n          transform-style: preserve-3d; }\n\n.reveal .slides > section[data-transition=default].past,\n.reveal .slides > section[data-transition~=default-out].past,\n.reveal.default .slides > section:not([data-transition]).past {\n  -webkit-transform: translate3d(-100%, 0, 0) rotateY(-90deg) translate3d(-100%, 0, 0);\n          transform: translate3d(-100%, 0, 0) rotateY(-90deg) translate3d(-100%, 0, 0); }\n\n.reveal .slides > section[data-transition=default].future,\n.reveal .slides > section[data-transition~=default-in].future,\n.reveal.default .slides > section:not([data-transition]).future {\n  -webkit-transform: translate3d(100%, 0, 0) rotateY(90deg) translate3d(100%, 0, 0);\n          transform: translate3d(100%, 0, 0) rotateY(90deg) translate3d(100%, 0, 0); }\n\n.reveal .slides > section > section[data-transition=default].past,\n.reveal .slides > section > section[data-transition~=default-out].past,\n.reveal.default .slides > section > section:not([data-transition]).past {\n  -webkit-transform: translate3d(0, -300px, 0) rotateX(70deg) translate3d(0, -300px, 0);\n          transform: translate3d(0, -300px, 0) rotateX(70deg) translate3d(0, -300px, 0); }\n\n.reveal .slides > section > section[data-transition=default].future,\n.reveal .slides > section > section[data-transition~=default-in].future,\n.reveal.default .slides > section > section:not([data-transition]).future {\n  -webkit-transform: translate3d(0, 300px, 0) rotateX(-70deg) translate3d(0, 300px, 0);\n          transform: translate3d(0, 300px, 0) rotateX(-70deg) translate3d(0, 300px, 0); }\n\n.reveal .slides section[data-transition=convex].stack,\n.reveal.convex .slides section.stack {\n  -webkit-transform-style: preserve-3d;\n          transform-style: preserve-3d; }\n\n.reveal .slides > section[data-transition=convex].past,\n.reveal .slides > section[data-transition~=convex-out].past,\n.reveal.convex .slides > section:not([data-transition]).past {\n  -webkit-transform: translate3d(-100%, 0, 0) rotateY(-90deg) translate3d(-100%, 0, 0);\n          transform: translate3d(-100%, 0, 0) rotateY(-90deg) translate3d(-100%, 0, 0); }\n\n.reveal .slides > section[data-transition=convex].future,\n.reveal .slides > section[data-transition~=convex-in].future,\n.reveal.convex .slides > section:not([data-transition]).future {\n  -webkit-transform: translate3d(100%, 0, 0) rotateY(90deg) translate3d(100%, 0, 0);\n          transform: translate3d(100%, 0, 0) rotateY(90deg) translate3d(100%, 0, 0); }\n\n.reveal .slides > section > section[data-transition=convex].past,\n.reveal .slides > section > section[data-transition~=convex-out].past,\n.reveal.convex .slides > section > section:not([data-transition]).past {\n  -webkit-transform: translate3d(0, -300px, 0) rotateX(70deg) translate3d(0, -300px, 0);\n          transform: translate3d(0, -300px, 0) rotateX(70deg) translate3d(0, -300px, 0); }\n\n.reveal .slides > section > section[data-transition=convex].future,\n.reveal .slides > section > section[data-transition~=convex-in].future,\n.reveal.convex .slides > section > section:not([data-transition]).future {\n  -webkit-transform: translate3d(0, 300px, 0) rotateX(-70deg) translate3d(0, 300px, 0);\n          transform: translate3d(0, 300px, 0) rotateX(-70deg) translate3d(0, 300px, 0); }\n\n/*********************************************\n * CONCAVE TRANSITION\n *********************************************/\n.reveal .slides section[data-transition=concave].stack,\n.reveal.concave .slides section.stack {\n  -webkit-transform-style: preserve-3d;\n          transform-style: preserve-3d; }\n\n.reveal .slides > section[data-transition=concave].past,\n.reveal .slides > section[data-transition~=concave-out].past,\n.reveal.concave .slides > section:not([data-transition]).past {\n  -webkit-transform: translate3d(-100%, 0, 0) rotateY(90deg) translate3d(-100%, 0, 0);\n          transform: translate3d(-100%, 0, 0) rotateY(90deg) translate3d(-100%, 0, 0); }\n\n.reveal .slides > section[data-transition=concave].future,\n.reveal .slides > section[data-transition~=concave-in].future,\n.reveal.concave .slides > section:not([data-transition]).future {\n  -webkit-transform: translate3d(100%, 0, 0) rotateY(-90deg) translate3d(100%, 0, 0);\n          transform: translate3d(100%, 0, 0) rotateY(-90deg) translate3d(100%, 0, 0); }\n\n.reveal .slides > section > section[data-transition=concave].past,\n.reveal .slides > section > section[data-transition~=concave-out].past,\n.reveal.concave .slides > section > section:not([data-transition]).past {\n  -webkit-transform: translate3d(0, -80%, 0) rotateX(-70deg) translate3d(0, -80%, 0);\n          transform: translate3d(0, -80%, 0) rotateX(-70deg) translate3d(0, -80%, 0); }\n\n.reveal .slides > section > section[data-transition=concave].future,\n.reveal .slides > section > section[data-transition~=concave-in].future,\n.reveal.concave .slides > section > section:not([data-transition]).future {\n  -webkit-transform: translate3d(0, 80%, 0) rotateX(70deg) translate3d(0, 80%, 0);\n          transform: translate3d(0, 80%, 0) rotateX(70deg) translate3d(0, 80%, 0); }\n\n/*********************************************\n * ZOOM TRANSITION\n *********************************************/\n.reveal .slides section[data-transition=zoom],\n.reveal.zoom .slides section:not([data-transition]) {\n  -webkit-transition-timing-function: ease;\n          transition-timing-function: ease; }\n\n.reveal .slides > section[data-transition=zoom].past,\n.reveal .slides > section[data-transition~=zoom-out].past,\n.reveal.zoom .slides > section:not([data-transition]).past {\n  visibility: hidden;\n  -webkit-transform: scale(16);\n          transform: scale(16); }\n\n.reveal .slides > section[data-transition=zoom].future,\n.reveal .slides > section[data-transition~=zoom-in].future,\n.reveal.zoom .slides > section:not([data-transition]).future {\n  visibility: hidden;\n  -webkit-transform: scale(0.2);\n          transform: scale(0.2); }\n\n.reveal .slides > section > section[data-transition=zoom].past,\n.reveal .slides > section > section[data-transition~=zoom-out].past,\n.reveal.zoom .slides > section > section:not([data-transition]).past {\n  -webkit-transform: translate(0, -150%);\n          transform: translate(0, -150%); }\n\n.reveal .slides > section > section[data-transition=zoom].future,\n.reveal .slides > section > section[data-transition~=zoom-in].future,\n.reveal.zoom .slides > section > section:not([data-transition]).future {\n  -webkit-transform: translate(0, 150%);\n          transform: translate(0, 150%); }\n\n/*********************************************\n * CUBE TRANSITION\n *\n * WARNING:\n * this is deprecated and will be removed in a\n * future version.\n *********************************************/\n.reveal.cube .slides {\n  -webkit-perspective: 1300px;\n          perspective: 1300px; }\n\n.reveal.cube .slides section {\n  padding: 30px;\n  min-height: 700px;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  box-sizing: border-box;\n  -webkit-transform-style: preserve-3d;\n          transform-style: preserve-3d; }\n\n.reveal.center.cube .slides section {\n  min-height: 0; }\n\n.reveal.cube .slides section:not(.stack):before {\n  content: '';\n  position: absolute;\n  display: block;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  background: rgba(0, 0, 0, 0.1);\n  border-radius: 4px;\n  -webkit-transform: translateZ(-20px);\n          transform: translateZ(-20px); }\n\n.reveal.cube .slides section:not(.stack):after {\n  content: '';\n  position: absolute;\n  display: block;\n  width: 90%;\n  height: 30px;\n  left: 5%;\n  bottom: 0;\n  background: none;\n  z-index: 1;\n  border-radius: 4px;\n  box-shadow: 0px 95px 25px rgba(0, 0, 0, 0.2);\n  -webkit-transform: translateZ(-90px) rotateX(65deg);\n          transform: translateZ(-90px) rotateX(65deg); }\n\n.reveal.cube .slides > section.stack {\n  padding: 0;\n  background: none; }\n\n.reveal.cube .slides > section.past {\n  -webkit-transform-origin: 100% 0%;\n          transform-origin: 100% 0%;\n  -webkit-transform: translate3d(-100%, 0, 0) rotateY(-90deg);\n          transform: translate3d(-100%, 0, 0) rotateY(-90deg); }\n\n.reveal.cube .slides > section.future {\n  -webkit-transform-origin: 0% 0%;\n          transform-origin: 0% 0%;\n  -webkit-transform: translate3d(100%, 0, 0) rotateY(90deg);\n          transform: translate3d(100%, 0, 0) rotateY(90deg); }\n\n.reveal.cube .slides > section > section.past {\n  -webkit-transform-origin: 0% 100%;\n          transform-origin: 0% 100%;\n  -webkit-transform: translate3d(0, -100%, 0) rotateX(90deg);\n          transform: translate3d(0, -100%, 0) rotateX(90deg); }\n\n.reveal.cube .slides > section > section.future {\n  -webkit-transform-origin: 0% 0%;\n          transform-origin: 0% 0%;\n  -webkit-transform: translate3d(0, 100%, 0) rotateX(-90deg);\n          transform: translate3d(0, 100%, 0) rotateX(-90deg); }\n\n/*********************************************\n * PAGE TRANSITION\n *\n * WARNING:\n * this is deprecated and will be removed in a\n * future version.\n *********************************************/\n.reveal.page .slides {\n  -webkit-perspective-origin: 0% 50%;\n          perspective-origin: 0% 50%;\n  -webkit-perspective: 3000px;\n          perspective: 3000px; }\n\n.reveal.page .slides section {\n  padding: 30px;\n  min-height: 700px;\n  box-sizing: border-box;\n  -webkit-transform-style: preserve-3d;\n          transform-style: preserve-3d; }\n\n.reveal.page .slides section.past {\n  z-index: 12; }\n\n.reveal.page .slides section:not(.stack):before {\n  content: '';\n  position: absolute;\n  display: block;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  background: rgba(0, 0, 0, 0.1);\n  -webkit-transform: translateZ(-20px);\n          transform: translateZ(-20px); }\n\n.reveal.page .slides section:not(.stack):after {\n  content: '';\n  position: absolute;\n  display: block;\n  width: 90%;\n  height: 30px;\n  left: 5%;\n  bottom: 0;\n  background: none;\n  z-index: 1;\n  border-radius: 4px;\n  box-shadow: 0px 95px 25px rgba(0, 0, 0, 0.2);\n  -webkit-transform: translateZ(-90px) rotateX(65deg); }\n\n.reveal.page .slides > section.stack {\n  padding: 0;\n  background: none; }\n\n.reveal.page .slides > section.past {\n  -webkit-transform-origin: 0% 0%;\n          transform-origin: 0% 0%;\n  -webkit-transform: translate3d(-40%, 0, 0) rotateY(-80deg);\n          transform: translate3d(-40%, 0, 0) rotateY(-80deg); }\n\n.reveal.page .slides > section.future {\n  -webkit-transform-origin: 100% 0%;\n          transform-origin: 100% 0%;\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0); }\n\n.reveal.page .slides > section > section.past {\n  -webkit-transform-origin: 0% 0%;\n          transform-origin: 0% 0%;\n  -webkit-transform: translate3d(0, -40%, 0) rotateX(80deg);\n          transform: translate3d(0, -40%, 0) rotateX(80deg); }\n\n.reveal.page .slides > section > section.future {\n  -webkit-transform-origin: 0% 100%;\n          transform-origin: 0% 100%;\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0); }\n\n/*********************************************\n * FADE TRANSITION\n *********************************************/\n.reveal .slides section[data-transition=fade],\n.reveal.fade .slides section:not([data-transition]),\n.reveal.fade .slides > section > section:not([data-transition]) {\n  -webkit-transform: none;\n          transform: none;\n  -webkit-transition: opacity 0.5s;\n          transition: opacity 0.5s; }\n\n.reveal.fade.overview .slides section,\n.reveal.fade.overview .slides > section > section {\n  -webkit-transition: none;\n          transition: none; }\n\n/*********************************************\n * NO TRANSITION\n *********************************************/\n.reveal .slides section[data-transition=none],\n.reveal.none .slides section:not([data-transition]) {\n  -webkit-transform: none;\n          transform: none;\n  -webkit-transition: none;\n          transition: none; }\n\n/*********************************************\n * PAUSED MODE\n *********************************************/\n.reveal .pause-overlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: black;\n  visibility: hidden;\n  opacity: 0;\n  z-index: 100;\n  -webkit-transition: all 1s ease;\n          transition: all 1s ease; }\n\n.reveal.paused .pause-overlay {\n  visibility: visible;\n  opacity: 1; }\n\n/*********************************************\n * FALLBACK\n *********************************************/\n.no-transforms {\n  overflow-y: auto; }\n\n.no-transforms .reveal .slides {\n  position: relative;\n  width: 80%;\n  height: auto !important;\n  top: 0;\n  left: 50%;\n  margin: 0;\n  text-align: center; }\n\n.no-transforms .reveal .controls,\n.no-transforms .reveal .progress {\n  display: none !important; }\n\n.no-transforms .reveal .slides section {\n  display: block !important;\n  opacity: 1 !important;\n  position: relative !important;\n  height: auto;\n  min-height: 0;\n  top: 0;\n  left: -50%;\n  margin: 70px 0;\n  -webkit-transform: none;\n          transform: none; }\n\n.no-transforms .reveal .slides section section {\n  left: 0; }\n\n.reveal .no-transition,\n.reveal .no-transition * {\n  -webkit-transition: none !important;\n          transition: none !important; }\n\n/*********************************************\n * PER-SLIDE BACKGROUNDS\n *********************************************/\n.reveal .backgrounds {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  -webkit-perspective: 600px;\n          perspective: 600px; }\n\n.reveal .slide-background {\n  display: none;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  visibility: hidden;\n  overflow: hidden;\n  background-color: transparent;\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  background-size: cover;\n  -webkit-transition: all 800ms cubic-bezier(0.26, 0.86, 0.44, 0.985);\n          transition: all 800ms cubic-bezier(0.26, 0.86, 0.44, 0.985); }\n\n.reveal .slide-background.stack {\n  display: block; }\n\n.reveal .slide-background.present {\n  opacity: 1;\n  visibility: visible;\n  z-index: 2; }\n\n.print-pdf .reveal .slide-background {\n  opacity: 1 !important;\n  visibility: visible !important; }\n\n/* Video backgrounds */\n.reveal .slide-background video {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  max-width: none;\n  max-height: none;\n  top: 0;\n  left: 0;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.reveal .slide-background[data-background-size=\"contain\"] video {\n  -o-object-fit: contain;\n     object-fit: contain; }\n\n/* Immediate transition style */\n.reveal[data-background-transition=none] > .backgrounds .slide-background,\n.reveal > .backgrounds .slide-background[data-background-transition=none] {\n  -webkit-transition: none;\n          transition: none; }\n\n/* Slide */\n.reveal[data-background-transition=slide] > .backgrounds .slide-background,\n.reveal > .backgrounds .slide-background[data-background-transition=slide] {\n  opacity: 1;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden; }\n\n.reveal[data-background-transition=slide] > .backgrounds .slide-background.past,\n.reveal > .backgrounds .slide-background.past[data-background-transition=slide] {\n  -webkit-transform: translate(-100%, 0);\n          transform: translate(-100%, 0); }\n\n.reveal[data-background-transition=slide] > .backgrounds .slide-background.future,\n.reveal > .backgrounds .slide-background.future[data-background-transition=slide] {\n  -webkit-transform: translate(100%, 0);\n          transform: translate(100%, 0); }\n\n.reveal[data-background-transition=slide] > .backgrounds .slide-background > .slide-background.past,\n.reveal > .backgrounds .slide-background > .slide-background.past[data-background-transition=slide] {\n  -webkit-transform: translate(0, -100%);\n          transform: translate(0, -100%); }\n\n.reveal[data-background-transition=slide] > .backgrounds .slide-background > .slide-background.future,\n.reveal > .backgrounds .slide-background > .slide-background.future[data-background-transition=slide] {\n  -webkit-transform: translate(0, 100%);\n          transform: translate(0, 100%); }\n\n/* Convex */\n.reveal[data-background-transition=convex] > .backgrounds .slide-background.past,\n.reveal > .backgrounds .slide-background.past[data-background-transition=convex] {\n  opacity: 0;\n  -webkit-transform: translate3d(-100%, 0, 0) rotateY(-90deg) translate3d(-100%, 0, 0);\n          transform: translate3d(-100%, 0, 0) rotateY(-90deg) translate3d(-100%, 0, 0); }\n\n.reveal[data-background-transition=convex] > .backgrounds .slide-background.future,\n.reveal > .backgrounds .slide-background.future[data-background-transition=convex] {\n  opacity: 0;\n  -webkit-transform: translate3d(100%, 0, 0) rotateY(90deg) translate3d(100%, 0, 0);\n          transform: translate3d(100%, 0, 0) rotateY(90deg) translate3d(100%, 0, 0); }\n\n.reveal[data-background-transition=convex] > .backgrounds .slide-background > .slide-background.past,\n.reveal > .backgrounds .slide-background > .slide-background.past[data-background-transition=convex] {\n  opacity: 0;\n  -webkit-transform: translate3d(0, -100%, 0) rotateX(90deg) translate3d(0, -100%, 0);\n          transform: translate3d(0, -100%, 0) rotateX(90deg) translate3d(0, -100%, 0); }\n\n.reveal[data-background-transition=convex] > .backgrounds .slide-background > .slide-background.future,\n.reveal > .backgrounds .slide-background > .slide-background.future[data-background-transition=convex] {\n  opacity: 0;\n  -webkit-transform: translate3d(0, 100%, 0) rotateX(-90deg) translate3d(0, 100%, 0);\n          transform: translate3d(0, 100%, 0) rotateX(-90deg) translate3d(0, 100%, 0); }\n\n/* Concave */\n.reveal[data-background-transition=concave] > .backgrounds .slide-background.past,\n.reveal > .backgrounds .slide-background.past[data-background-transition=concave] {\n  opacity: 0;\n  -webkit-transform: translate3d(-100%, 0, 0) rotateY(90deg) translate3d(-100%, 0, 0);\n          transform: translate3d(-100%, 0, 0) rotateY(90deg) translate3d(-100%, 0, 0); }\n\n.reveal[data-background-transition=concave] > .backgrounds .slide-background.future,\n.reveal > .backgrounds .slide-background.future[data-background-transition=concave] {\n  opacity: 0;\n  -webkit-transform: translate3d(100%, 0, 0) rotateY(-90deg) translate3d(100%, 0, 0);\n          transform: translate3d(100%, 0, 0) rotateY(-90deg) translate3d(100%, 0, 0); }\n\n.reveal[data-background-transition=concave] > .backgrounds .slide-background > .slide-background.past,\n.reveal > .backgrounds .slide-background > .slide-background.past[data-background-transition=concave] {\n  opacity: 0;\n  -webkit-transform: translate3d(0, -100%, 0) rotateX(-90deg) translate3d(0, -100%, 0);\n          transform: translate3d(0, -100%, 0) rotateX(-90deg) translate3d(0, -100%, 0); }\n\n.reveal[data-background-transition=concave] > .backgrounds .slide-background > .slide-background.future,\n.reveal > .backgrounds .slide-background > .slide-background.future[data-background-transition=concave] {\n  opacity: 0;\n  -webkit-transform: translate3d(0, 100%, 0) rotateX(90deg) translate3d(0, 100%, 0);\n          transform: translate3d(0, 100%, 0) rotateX(90deg) translate3d(0, 100%, 0); }\n\n/* Zoom */\n.reveal[data-background-transition=zoom] > .backgrounds .slide-background,\n.reveal > .backgrounds .slide-background[data-background-transition=zoom] {\n  -webkit-transition-timing-function: ease;\n          transition-timing-function: ease; }\n\n.reveal[data-background-transition=zoom] > .backgrounds .slide-background.past,\n.reveal > .backgrounds .slide-background.past[data-background-transition=zoom] {\n  opacity: 0;\n  visibility: hidden;\n  -webkit-transform: scale(16);\n          transform: scale(16); }\n\n.reveal[data-background-transition=zoom] > .backgrounds .slide-background.future,\n.reveal > .backgrounds .slide-background.future[data-background-transition=zoom] {\n  opacity: 0;\n  visibility: hidden;\n  -webkit-transform: scale(0.2);\n          transform: scale(0.2); }\n\n.reveal[data-background-transition=zoom] > .backgrounds .slide-background > .slide-background.past,\n.reveal > .backgrounds .slide-background > .slide-background.past[data-background-transition=zoom] {\n  opacity: 0;\n  visibility: hidden;\n  -webkit-transform: scale(16);\n          transform: scale(16); }\n\n.reveal[data-background-transition=zoom] > .backgrounds .slide-background > .slide-background.future,\n.reveal > .backgrounds .slide-background > .slide-background.future[data-background-transition=zoom] {\n  opacity: 0;\n  visibility: hidden;\n  -webkit-transform: scale(0.2);\n          transform: scale(0.2); }\n\n/* Global transition speed settings */\n.reveal[data-transition-speed=\"fast\"] > .backgrounds .slide-background {\n  -webkit-transition-duration: 400ms;\n          transition-duration: 400ms; }\n\n.reveal[data-transition-speed=\"slow\"] > .backgrounds .slide-background {\n  -webkit-transition-duration: 1200ms;\n          transition-duration: 1200ms; }\n\n/*********************************************\n * OVERVIEW\n *********************************************/\n.reveal.overview {\n  -webkit-perspective-origin: 50% 50%;\n          perspective-origin: 50% 50%;\n  -webkit-perspective: 700px;\n          perspective: 700px; }\n  .reveal.overview .slides {\n    -moz-transform-style: preserve-3d; }\n  .reveal.overview .slides section {\n    height: 100%;\n    top: 0 !important;\n    opacity: 1 !important;\n    overflow: hidden;\n    visibility: visible !important;\n    cursor: pointer;\n    box-sizing: border-box; }\n  .reveal.overview .slides section:hover,\n  .reveal.overview .slides section.present {\n    outline: 10px solid rgba(150, 150, 150, 0.4);\n    outline-offset: 10px; }\n  .reveal.overview .slides section .fragment {\n    opacity: 1;\n    -webkit-transition: none;\n            transition: none; }\n  .reveal.overview .slides section:after,\n  .reveal.overview .slides section:before {\n    display: none !important; }\n  .reveal.overview .slides > section.stack {\n    padding: 0;\n    top: 0 !important;\n    background: none;\n    outline: none;\n    overflow: visible; }\n  .reveal.overview .backgrounds {\n    -webkit-perspective: inherit;\n            perspective: inherit;\n    -moz-transform-style: preserve-3d; }\n  .reveal.overview .backgrounds .slide-background {\n    opacity: 1;\n    visibility: visible;\n    outline: 10px solid rgba(150, 150, 150, 0.1);\n    outline-offset: 10px; }\n  .reveal.overview .backgrounds .slide-background.stack {\n    overflow: visible; }\n\n.reveal.overview .slides section,\n.reveal.overview-deactivating .slides section {\n  -webkit-transition: none;\n          transition: none; }\n\n.reveal.overview .backgrounds .slide-background,\n.reveal.overview-deactivating .backgrounds .slide-background {\n  -webkit-transition: none;\n          transition: none; }\n\n/*********************************************\n * RTL SUPPORT\n *********************************************/\n.reveal.rtl .slides,\n.reveal.rtl .slides h1,\n.reveal.rtl .slides h2,\n.reveal.rtl .slides h3,\n.reveal.rtl .slides h4,\n.reveal.rtl .slides h5,\n.reveal.rtl .slides h6 {\n  direction: rtl;\n  font-family: sans-serif; }\n\n.reveal.rtl pre,\n.reveal.rtl code {\n  direction: ltr; }\n\n.reveal.rtl ol,\n.reveal.rtl ul {\n  text-align: right; }\n\n.reveal.rtl .progress span {\n  float: right; }\n\n/*********************************************\n * PARALLAX BACKGROUND\n *********************************************/\n.reveal.has-parallax-background .backgrounds {\n  -webkit-transition: all 0.8s ease;\n          transition: all 0.8s ease; }\n\n/* Global transition speed settings */\n.reveal.has-parallax-background[data-transition-speed=\"fast\"] .backgrounds {\n  -webkit-transition-duration: 400ms;\n          transition-duration: 400ms; }\n\n.reveal.has-parallax-background[data-transition-speed=\"slow\"] .backgrounds {\n  -webkit-transition-duration: 1200ms;\n          transition-duration: 1200ms; }\n\n/*********************************************\n * LINK PREVIEW OVERLAY\n *********************************************/\n.reveal .overlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1000;\n  background: rgba(0, 0, 0, 0.9);\n  opacity: 0;\n  visibility: hidden;\n  -webkit-transition: all 0.3s ease;\n          transition: all 0.3s ease; }\n\n.reveal .overlay.visible {\n  opacity: 1;\n  visibility: visible; }\n\n.reveal .overlay .spinner {\n  position: absolute;\n  display: block;\n  top: 50%;\n  left: 50%;\n  width: 32px;\n  height: 32px;\n  margin: -16px 0 0 -16px;\n  z-index: 10;\n  background-image: url(data:image/gif;base64,R0lGODlhIAAgAPMAAJmZmf%2F%2F%2F6%2Bvr8nJybW1tcDAwOjo6Nvb26ioqKOjo7Ozs%2FLy8vz8%2FAAAAAAAAAAAACH%2FC05FVFNDQVBFMi4wAwEAAAAh%2FhpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh%2BQQJCgAAACwAAAAAIAAgAAAE5xDISWlhperN52JLhSSdRgwVo1ICQZRUsiwHpTJT4iowNS8vyW2icCF6k8HMMBkCEDskxTBDAZwuAkkqIfxIQyhBQBFvAQSDITM5VDW6XNE4KagNh6Bgwe60smQUB3d4Rz1ZBApnFASDd0hihh12BkE9kjAJVlycXIg7CQIFA6SlnJ87paqbSKiKoqusnbMdmDC2tXQlkUhziYtyWTxIfy6BE8WJt5YJvpJivxNaGmLHT0VnOgSYf0dZXS7APdpB309RnHOG5gDqXGLDaC457D1zZ%2FV%2FnmOM82XiHRLYKhKP1oZmADdEAAAh%2BQQJCgAAACwAAAAAIAAgAAAE6hDISWlZpOrNp1lGNRSdRpDUolIGw5RUYhhHukqFu8DsrEyqnWThGvAmhVlteBvojpTDDBUEIFwMFBRAmBkSgOrBFZogCASwBDEY%2FCZSg7GSE0gSCjQBMVG023xWBhklAnoEdhQEfyNqMIcKjhRsjEdnezB%2BA4k8gTwJhFuiW4dokXiloUepBAp5qaKpp6%2BHo7aWW54wl7obvEe0kRuoplCGepwSx2jJvqHEmGt6whJpGpfJCHmOoNHKaHx61WiSR92E4lbFoq%2BB6QDtuetcaBPnW6%2BO7wDHpIiK9SaVK5GgV543tzjgGcghAgAh%2BQQJCgAAACwAAAAAIAAgAAAE7hDISSkxpOrN5zFHNWRdhSiVoVLHspRUMoyUakyEe8PTPCATW9A14E0UvuAKMNAZKYUZCiBMuBakSQKG8G2FzUWox2AUtAQFcBKlVQoLgQReZhQlCIJesQXI5B0CBnUMOxMCenoCfTCEWBsJColTMANldx15BGs8B5wlCZ9Po6OJkwmRpnqkqnuSrayqfKmqpLajoiW5HJq7FL1Gr2mMMcKUMIiJgIemy7xZtJsTmsM4xHiKv5KMCXqfyUCJEonXPN2rAOIAmsfB3uPoAK%2B%2BG%2Bw48edZPK%2BM6hLJpQg484enXIdQFSS1u6UhksENEQAAIfkECQoAAAAsAAAAACAAIAAABOcQyEmpGKLqzWcZRVUQnZYg1aBSh2GUVEIQ2aQOE%2BG%2BcD4ntpWkZQj1JIiZIogDFFyHI0UxQwFugMSOFIPJftfVAEoZLBbcLEFhlQiqGp1Vd140AUklUN3eCA51C1EWMzMCezCBBmkxVIVHBWd3HHl9JQOIJSdSnJ0TDKChCwUJjoWMPaGqDKannasMo6WnM562R5YluZRwur0wpgqZE7NKUm%2BFNRPIhjBJxKZteWuIBMN4zRMIVIhffcgojwCF117i4nlLnY5ztRLsnOk%2BaV%2BoJY7V7m76PdkS4trKcdg0Zc0tTcKkRAAAIfkECQoAAAAsAAAAACAAIAAABO4QyEkpKqjqzScpRaVkXZWQEximw1BSCUEIlDohrft6cpKCk5xid5MNJTaAIkekKGQkWyKHkvhKsR7ARmitkAYDYRIbUQRQjWBwJRzChi9CRlBcY1UN4g0%2FVNB0AlcvcAYHRyZPdEQFYV8ccwR5HWxEJ02YmRMLnJ1xCYp0Y5idpQuhopmmC2KgojKasUQDk5BNAwwMOh2RtRq5uQuPZKGIJQIGwAwGf6I0JXMpC8C7kXWDBINFMxS4DKMAWVWAGYsAdNqW5uaRxkSKJOZKaU3tPOBZ4DuK2LATgJhkPJMgTwKCdFjyPHEnKxFCDhEAACH5BAkKAAAALAAAAAAgACAAAATzEMhJaVKp6s2nIkolIJ2WkBShpkVRWqqQrhLSEu9MZJKK9y1ZrqYK9WiClmvoUaF8gIQSNeF1Er4MNFn4SRSDARWroAIETg1iVwuHjYB1kYc1mwruwXKC9gmsJXliGxc%2BXiUCby9ydh1sOSdMkpMTBpaXBzsfhoc5l58Gm5yToAaZhaOUqjkDgCWNHAULCwOLaTmzswadEqggQwgHuQsHIoZCHQMMQgQGubVEcxOPFAcMDAYUA85eWARmfSRQCdcMe0zeP1AAygwLlJtPNAAL19DARdPzBOWSm1brJBi45soRAWQAAkrQIykShQ9wVhHCwCQCACH5BAkKAAAALAAAAAAgACAAAATrEMhJaVKp6s2nIkqFZF2VIBWhUsJaTokqUCoBq%2BE71SRQeyqUToLA7VxF0JDyIQh%2FMVVPMt1ECZlfcjZJ9mIKoaTl1MRIl5o4CUKXOwmyrCInCKqcWtvadL2SYhyASyNDJ0uIiRMDjI0Fd30%2FiI2UA5GSS5UDj2l6NoqgOgN4gksEBgYFf0FDqKgHnyZ9OX8HrgYHdHpcHQULXAS2qKpENRg7eAMLC7kTBaixUYFkKAzWAAnLC7FLVxLWDBLKCwaKTULgEwbLA4hJtOkSBNqITT3xEgfLpBtzE%2FjiuL04RGEBgwWhShRgQExHBAAh%2BQQJCgAAACwAAAAAIAAgAAAE7xDISWlSqerNpyJKhWRdlSAVoVLCWk6JKlAqAavhO9UkUHsqlE6CwO1cRdCQ8iEIfzFVTzLdRAmZX3I2SfZiCqGk5dTESJeaOAlClzsJsqwiJwiqnFrb2nS9kmIcgEsjQydLiIlHehhpejaIjzh9eomSjZR%2BipslWIRLAgMDOR2DOqKogTB9pCUJBagDBXR6XB0EBkIIsaRsGGMMAxoDBgYHTKJiUYEGDAzHC9EACcUGkIgFzgwZ0QsSBcXHiQvOwgDdEwfFs0sDzt4S6BK4xYjkDOzn0unFeBzOBijIm1Dgmg5YFQwsCMjp1oJ8LyIAACH5BAkKAAAALAAAAAAgACAAAATwEMhJaVKp6s2nIkqFZF2VIBWhUsJaTokqUCoBq%2BE71SRQeyqUToLA7VxF0JDyIQh%2FMVVPMt1ECZlfcjZJ9mIKoaTl1MRIl5o4CUKXOwmyrCInCKqcWtvadL2SYhyASyNDJ0uIiUd6GGl6NoiPOH16iZKNlH6KmyWFOggHhEEvAwwMA0N9GBsEC6amhnVcEwavDAazGwIDaH1ipaYLBUTCGgQDA8NdHz0FpqgTBwsLqAbWAAnIA4FWKdMLGdYGEgraigbT0OITBcg5QwPT4xLrROZL6AuQAPUS7bxLpoWidY0JtxLHKhwwMJBTHgPKdEQAACH5BAkKAAAALAAAAAAgACAAAATrEMhJaVKp6s2nIkqFZF2VIBWhUsJaTokqUCoBq%2BE71SRQeyqUToLA7VxF0JDyIQh%2FMVVPMt1ECZlfcjZJ9mIKoaTl1MRIl5o4CUKXOwmyrCInCKqcWtvadL2SYhyASyNDJ0uIiUd6GAULDJCRiXo1CpGXDJOUjY%2BYip9DhToJA4RBLwMLCwVDfRgbBAaqqoZ1XBMHswsHtxtFaH1iqaoGNgAIxRpbFAgfPQSqpbgGBqUD1wBXeCYp1AYZ19JJOYgH1KwA4UBvQwXUBxPqVD9L3sbp2BNk2xvvFPJd%2BMFCN6HAAIKgNggY0KtEBAAh%2BQQJCgAAACwAAAAAIAAgAAAE6BDISWlSqerNpyJKhWRdlSAVoVLCWk6JKlAqAavhO9UkUHsqlE6CwO1cRdCQ8iEIfzFVTzLdRAmZX3I2SfYIDMaAFdTESJeaEDAIMxYFqrOUaNW4E4ObYcCXaiBVEgULe0NJaxxtYksjh2NLkZISgDgJhHthkpU4mW6blRiYmZOlh4JWkDqILwUGBnE6TYEbCgevr0N1gH4At7gHiRpFaLNrrq8HNgAJA70AWxQIH1%2BvsYMDAzZQPC9VCNkDWUhGkuE5PxJNwiUK4UfLzOlD4WvzAHaoG9nxPi5d%2BjYUqfAhhykOFwJWiAAAIfkECQoAAAAsAAAAACAAIAAABPAQyElpUqnqzaciSoVkXVUMFaFSwlpOCcMYlErAavhOMnNLNo8KsZsMZItJEIDIFSkLGQoQTNhIsFehRww2CQLKF0tYGKYSg%2BygsZIuNqJksKgbfgIGepNo2cIUB3V1B3IvNiBYNQaDSTtfhhx0CwVPI0UJe0%2Bbm4g5VgcGoqOcnjmjqDSdnhgEoamcsZuXO1aWQy8KAwOAuTYYGwi7w5h%2BKr0SJ8MFihpNbx%2B4Erq7BYBuzsdiH1jCAzoSfl0rVirNbRXlBBlLX%2BBP0XJLAPGzTkAuAOqb0WT5AH7OcdCm5B8TgRwSRKIHQtaLCwg1RAAAOwAAAAAAAAAAAA%3D%3D);\n  visibility: visible;\n  opacity: 0.6;\n  -webkit-transition: all 0.3s ease;\n          transition: all 0.3s ease; }\n\n.reveal .overlay header {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 40px;\n  z-index: 2;\n  border-bottom: 1px solid #222; }\n\n.reveal .overlay header a {\n  display: inline-block;\n  width: 40px;\n  height: 40px;\n  line-height: 36px;\n  padding: 0 10px;\n  float: right;\n  opacity: 0.6;\n  box-sizing: border-box; }\n\n.reveal .overlay header a:hover {\n  opacity: 1; }\n\n.reveal .overlay header a .icon {\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  background-position: 50% 50%;\n  background-size: 100%;\n  background-repeat: no-repeat; }\n\n.reveal .overlay header a.close .icon {\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABkklEQVRYR8WX4VHDMAxG6wnoJrABZQPYBCaBTWAD2g1gE5gg6OOsXuxIlr40d81dfrSJ9V4c2VLK7spHuTJ/5wpM07QXuXc5X0opX2tEJcadjHuV80li/FgxTIEK/5QBCICBD6xEhSMGHgQPgBgLiYVAB1dpSqKDawxTohFw4JSEA3clzgIBPCURwE2JucBR7rhPJJv5OpJwDX+SfDjgx1wACQeJG1aChP9K/IMmdZ8DtESV1WyP3Bt4MwM6sj4NMxMYiqUWHQu4KYA/SYkIjOsm3BXYWMKFDwU2khjCQ4ELJUJ4SmClRArOCmSXGuKma0fYD5CbzHxFpCSGAhfAVSSUGDUk2BWZaff2g6GE15BsBQ9nwmpIGDiyHQddwNTMKkbZaf9fajXQca1EX44puJZUsnY0ObGmITE3GVLCbEhQUjGVt146j6oasWN+49Vph2w1pZ5EansNZqKBm1txbU57iRRcZ86RWMDdWtBJUHBHwoQPi1GV+JCbntmvok7iTX4/Up9mgyTc/FJYDTcndgH/AA5A/CHsyEkVAAAAAElFTkSuQmCC); }\n\n.reveal .overlay header a.external .icon {\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAcElEQVRYR+2WSQoAIQwEzf8f7XiOMkUQxUPlGkM3hVmiQfQR9GYnH1SsAQlI4DiBqkCMoNb9y2e90IAEJPAcgdznU9+engMaeJ7Azh5Y1U67gAho4DqBqmB1buAf0MB1AlVBek83ZPkmJMGc1wAR+AAqod/B97TRpQAAAABJRU5ErkJggg==); }\n\n.reveal .overlay .viewport {\n  position: absolute;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  top: 40px;\n  right: 0;\n  bottom: 0;\n  left: 0; }\n\n.reveal .overlay.overlay-preview .viewport iframe {\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n  max-height: 100%;\n  border: 0;\n  opacity: 0;\n  visibility: hidden;\n  -webkit-transition: all 0.3s ease;\n          transition: all 0.3s ease; }\n\n.reveal .overlay.overlay-preview.loaded .viewport iframe {\n  opacity: 1;\n  visibility: visible; }\n\n.reveal .overlay.overlay-preview.loaded .viewport-inner {\n  position: absolute;\n  z-index: -1;\n  left: 0;\n  top: 45%;\n  width: 100%;\n  text-align: center;\n  letter-spacing: normal; }\n\n.reveal .overlay.overlay-preview .x-frame-error {\n  opacity: 0;\n  -webkit-transition: opacity 0.3s ease 0.3s;\n          transition: opacity 0.3s ease 0.3s; }\n\n.reveal .overlay.overlay-preview.loaded .x-frame-error {\n  opacity: 1; }\n\n.reveal .overlay.overlay-preview.loaded .spinner {\n  opacity: 0;\n  visibility: hidden;\n  -webkit-transform: scale(0.2);\n          transform: scale(0.2); }\n\n.reveal .overlay.overlay-help .viewport {\n  overflow: auto;\n  color: #fff; }\n\n.reveal .overlay.overlay-help .viewport .viewport-inner {\n  width: 600px;\n  margin: auto;\n  padding: 20px 20px 80px 20px;\n  text-align: center;\n  letter-spacing: normal; }\n\n.reveal .overlay.overlay-help .viewport .viewport-inner .title {\n  font-size: 20px; }\n\n.reveal .overlay.overlay-help .viewport .viewport-inner table {\n  border: 1px solid #fff;\n  border-collapse: collapse;\n  font-size: 16px; }\n\n.reveal .overlay.overlay-help .viewport .viewport-inner table th,\n.reveal .overlay.overlay-help .viewport .viewport-inner table td {\n  width: 200px;\n  padding: 14px;\n  border: 1px solid #fff;\n  vertical-align: middle; }\n\n.reveal .overlay.overlay-help .viewport .viewport-inner table th {\n  padding-top: 20px;\n  padding-bottom: 20px; }\n\n/*********************************************\n * PLAYBACK COMPONENT\n *********************************************/\n.reveal .playback {\n  position: fixed;\n  left: 15px;\n  bottom: 20px;\n  z-index: 30;\n  cursor: pointer;\n  -webkit-transition: all 400ms ease;\n          transition: all 400ms ease; }\n\n.reveal.overview .playback {\n  opacity: 0;\n  visibility: hidden; }\n\n/*********************************************\n * ROLLING LINKS\n *********************************************/\n.reveal .roll {\n  display: inline-block;\n  line-height: 1.2;\n  overflow: hidden;\n  vertical-align: top;\n  -webkit-perspective: 400px;\n          perspective: 400px;\n  -webkit-perspective-origin: 50% 50%;\n          perspective-origin: 50% 50%; }\n\n.reveal .roll:hover {\n  background: none;\n  text-shadow: none; }\n\n.reveal .roll span {\n  display: block;\n  position: relative;\n  padding: 0 2px;\n  pointer-events: none;\n  -webkit-transition: all 400ms ease;\n          transition: all 400ms ease;\n  -webkit-transform-origin: 50% 0%;\n          transform-origin: 50% 0%;\n  -webkit-transform-style: preserve-3d;\n          transform-style: preserve-3d;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden; }\n\n.reveal .roll:hover span {\n  background: rgba(0, 0, 0, 0.5);\n  -webkit-transform: translate3d(0px, 0px, -45px) rotateX(90deg);\n          transform: translate3d(0px, 0px, -45px) rotateX(90deg); }\n\n.reveal .roll span:after {\n  content: attr(data-title);\n  display: block;\n  position: absolute;\n  left: 0;\n  top: 0;\n  padding: 0 2px;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  -webkit-transform-origin: 50% 0%;\n          transform-origin: 50% 0%;\n  -webkit-transform: translate3d(0px, 110%, 0px) rotateX(-90deg);\n          transform: translate3d(0px, 110%, 0px) rotateX(-90deg); }\n\n/*********************************************\n * SPEAKER NOTES\n *********************************************/\n.reveal aside.notes {\n  display: none; }\n\n.reveal .speaker-notes {\n  display: none;\n  position: absolute;\n  width: 70%;\n  max-height: 15%;\n  left: 15%;\n  bottom: 26px;\n  padding: 10px;\n  z-index: 1;\n  font-size: 18px;\n  line-height: 1.4;\n  color: #fff;\n  background-color: rgba(0, 0, 0, 0.5);\n  overflow: auto;\n  box-sizing: border-box;\n  text-align: left;\n  font-family: Helvetica, sans-serif;\n  -webkit-overflow-scrolling: touch; }\n\n.reveal .speaker-notes.visible:not(:empty) {\n  display: block; }\n\n@media screen and (max-width: 1024px) {\n  .reveal .speaker-notes {\n    font-size: 14px; } }\n\n@media screen and (max-width: 600px) {\n  .reveal .speaker-notes {\n    width: 90%;\n    left: 5%; } }\n\n/*********************************************\n * ZOOM PLUGIN\n *********************************************/\n.zoomed .reveal *,\n.zoomed .reveal *:before,\n.zoomed .reveal *:after {\n  -webkit-backface-visibility: visible !important;\n          backface-visibility: visible !important; }\n\n.zoomed .reveal .progress,\n.zoomed .reveal .controls {\n  opacity: 0; }\n\n.zoomed .reveal .roll span {\n  background: none; }\n\n.zoomed .reveal .roll span:after {\n  visibility: hidden; }\n", ""]);

// exports


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(105);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(19)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js!./black.css", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js!./black.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)(undefined);
// imports
exports.i(__webpack_require__(106), "");

// module
exports.push([module.i, "/**\n * Black theme for reveal.js. This is the opposite of the 'white' theme.\n *\n * By Hakim El Hattab, http://hakim.se\n */\nsection.has-light-background, section.has-light-background h1, section.has-light-background h2, section.has-light-background h3, section.has-light-background h4, section.has-light-background h5, section.has-light-background h6 {\n  color: #222; }\n\n/*********************************************\n * GLOBAL STYLES\n *********************************************/\nbody {\n  background: #222;\n  background-color: #222; }\n\n.reveal {\n  font-family: \"Source Sans Pro\", Helvetica, sans-serif;\n  font-size: 42px;\n  font-weight: normal;\n  color: #fff; }\n\n::selection {\n  color: #fff;\n  background: #bee4fd;\n  text-shadow: none; }\n\n::-moz-selection {\n  color: #fff;\n  background: #bee4fd;\n  text-shadow: none; }\n\n.reveal .slides > section,\n.reveal .slides > section > section {\n  line-height: 1.3;\n  font-weight: inherit; }\n\n/*********************************************\n * HEADERS\n *********************************************/\n.reveal h1,\n.reveal h2,\n.reveal h3,\n.reveal h4,\n.reveal h5,\n.reveal h6 {\n  margin: 0 0 20px 0;\n  color: #fff;\n  font-family: \"Source Sans Pro\", Helvetica, sans-serif;\n  font-weight: 600;\n  line-height: 1.2;\n  letter-spacing: normal;\n  text-transform: uppercase;\n  text-shadow: none;\n  word-wrap: break-word; }\n\n.reveal h1 {\n  font-size: 2.5em; }\n\n.reveal h2 {\n  font-size: 1.6em; }\n\n.reveal h3 {\n  font-size: 1.3em; }\n\n.reveal h4 {\n  font-size: 1em; }\n\n.reveal h1 {\n  text-shadow: none; }\n\n/*********************************************\n * OTHER\n *********************************************/\n.reveal p {\n  margin: 20px 0;\n  line-height: 1.3; }\n\n/* Ensure certain elements are never larger than the slide itself */\n.reveal img,\n.reveal video,\n.reveal iframe {\n  max-width: 95%;\n  max-height: 95%; }\n\n.reveal strong,\n.reveal b {\n  font-weight: bold; }\n\n.reveal em {\n  font-style: italic; }\n\n.reveal ol,\n.reveal dl,\n.reveal ul {\n  display: inline-block;\n  text-align: left;\n  margin: 0 0 0 1em; }\n\n.reveal ol {\n  list-style-type: decimal; }\n\n.reveal ul {\n  list-style-type: disc; }\n\n.reveal ul ul {\n  list-style-type: square; }\n\n.reveal ul ul ul {\n  list-style-type: circle; }\n\n.reveal ul ul,\n.reveal ul ol,\n.reveal ol ol,\n.reveal ol ul {\n  display: block;\n  margin-left: 40px; }\n\n.reveal dt {\n  font-weight: bold; }\n\n.reveal dd {\n  margin-left: 40px; }\n\n.reveal q,\n.reveal blockquote {\n  quotes: none; }\n\n.reveal blockquote {\n  display: block;\n  position: relative;\n  width: 70%;\n  margin: 20px auto;\n  padding: 5px;\n  font-style: italic;\n  background: rgba(255, 255, 255, 0.05);\n  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.2); }\n\n.reveal blockquote p:first-child,\n.reveal blockquote p:last-child {\n  display: inline-block; }\n\n.reveal q {\n  font-style: italic; }\n\n.reveal pre {\n  display: block;\n  position: relative;\n  width: 90%;\n  margin: 20px auto;\n  text-align: left;\n  font-size: 0.55em;\n  font-family: monospace;\n  line-height: 1.2em;\n  word-wrap: break-word;\n  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.3); }\n\n.reveal code {\n  font-family: monospace; }\n\n.reveal pre code {\n  display: block;\n  padding: 5px;\n  overflow: auto;\n  max-height: 400px;\n  word-wrap: normal; }\n\n.reveal table {\n  margin: auto;\n  border-collapse: collapse;\n  border-spacing: 0; }\n\n.reveal table th {\n  font-weight: bold; }\n\n.reveal table th,\n.reveal table td {\n  text-align: left;\n  padding: 0.2em 0.5em 0.2em 0.5em;\n  border-bottom: 1px solid; }\n\n.reveal table th[align=\"center\"],\n.reveal table td[align=\"center\"] {\n  text-align: center; }\n\n.reveal table th[align=\"right\"],\n.reveal table td[align=\"right\"] {\n  text-align: right; }\n\n.reveal table tbody tr:last-child th,\n.reveal table tbody tr:last-child td {\n  border-bottom: none; }\n\n.reveal sup {\n  vertical-align: super; }\n\n.reveal sub {\n  vertical-align: sub; }\n\n.reveal small {\n  display: inline-block;\n  font-size: 0.6em;\n  line-height: 1.2em;\n  vertical-align: top; }\n\n.reveal small * {\n  vertical-align: top; }\n\n/*********************************************\n * LINKS\n *********************************************/\n.reveal a {\n  color: #42affa;\n  text-decoration: none;\n  -webkit-transition: color .15s ease;\n  -moz-transition: color .15s ease;\n  transition: color .15s ease; }\n\n.reveal a:hover {\n  color: #8dcffc;\n  text-shadow: none;\n  border: none; }\n\n.reveal .roll span:after {\n  color: #fff;\n  background: #068de9; }\n\n/*********************************************\n * IMAGES\n *********************************************/\n.reveal section img {\n  margin: 15px 0px;\n  background: rgba(255, 255, 255, 0.12);\n  border: 4px solid #fff;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15); }\n\n.reveal section img.plain {\n  border: 0;\n  box-shadow: none; }\n\n.reveal a img {\n  -webkit-transition: all .15s linear;\n  -moz-transition: all .15s linear;\n  transition: all .15s linear; }\n\n.reveal a:hover img {\n  background: rgba(255, 255, 255, 0.2);\n  border-color: #42affa;\n  box-shadow: 0 0 20px rgba(0, 0, 0, 0.55); }\n\n/*********************************************\n * NAVIGATION CONTROLS\n *********************************************/\n.reveal .controls .navigate-left,\n.reveal .controls .navigate-left.enabled {\n  border-right-color: #42affa; }\n\n.reveal .controls .navigate-right,\n.reveal .controls .navigate-right.enabled {\n  border-left-color: #42affa; }\n\n.reveal .controls .navigate-up,\n.reveal .controls .navigate-up.enabled {\n  border-bottom-color: #42affa; }\n\n.reveal .controls .navigate-down,\n.reveal .controls .navigate-down.enabled {\n  border-top-color: #42affa; }\n\n.reveal .controls .navigate-left.enabled:hover {\n  border-right-color: #8dcffc; }\n\n.reveal .controls .navigate-right.enabled:hover {\n  border-left-color: #8dcffc; }\n\n.reveal .controls .navigate-up.enabled:hover {\n  border-bottom-color: #8dcffc; }\n\n.reveal .controls .navigate-down.enabled:hover {\n  border-top-color: #8dcffc; }\n\n/*********************************************\n * PROGRESS BAR\n *********************************************/\n.reveal .progress {\n  background: rgba(0, 0, 0, 0.2); }\n\n.reveal .progress span {\n  background: #42affa;\n  -webkit-transition: width 800ms cubic-bezier(0.26, 0.86, 0.44, 0.985);\n  -moz-transition: width 800ms cubic-bezier(0.26, 0.86, 0.44, 0.985);\n  transition: width 800ms cubic-bezier(0.26, 0.86, 0.44, 0.985); }\n", ""]);

// exports


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)(undefined);
// imports


// module
exports.push([module.i, "@font-face {\n    font-family: 'Source Sans Pro';\n    src: url(" + __webpack_require__(65) + ");\n    src: url(" + __webpack_require__(65) + "?#iefix) format('embedded-opentype'),\n         url(" + __webpack_require__(107) + ") format('woff'),\n         url(" + __webpack_require__(108) + ") format('truetype');\n    font-weight: normal;\n    font-style: normal;\n}\n\n@font-face {\n    font-family: 'Source Sans Pro';\n    src: url(" + __webpack_require__(66) + ");\n    src: url(" + __webpack_require__(66) + "?#iefix) format('embedded-opentype'),\n         url(" + __webpack_require__(109) + ") format('woff'),\n         url(" + __webpack_require__(110) + ") format('truetype');\n    font-weight: normal;\n    font-style: italic;\n}\n\n@font-face {\n    font-family: 'Source Sans Pro';\n    src: url(" + __webpack_require__(67) + ");\n    src: url(" + __webpack_require__(67) + "?#iefix) format('embedded-opentype'),\n         url(" + __webpack_require__(111) + ") format('woff'),\n         url(" + __webpack_require__(112) + ") format('truetype');\n    font-weight: 600;\n    font-style: normal;\n}\n\n@font-face {\n    font-family: 'Source Sans Pro';\n    src: url(" + __webpack_require__(68) + ");\n    src: url(" + __webpack_require__(68) + "?#iefix) format('embedded-opentype'),\n         url(" + __webpack_require__(113) + ") format('woff'),\n         url(" + __webpack_require__(114) + ") format('truetype');\n    font-weight: 600;\n    font-style: italic;\n}", ""]);

// exports


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "e7acc589bb558fe58936a853f570193c.woff";

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "2da39ecf9246383937da11b44b7bd9b4.ttf";

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "e74f0128884561828ce8c9cf5c284ab8.woff";

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "8256cfd7e4017a7690814879409212cd.ttf";

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "1cb8e94f1185f1131a0c895165998f2b.woff";

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "f3565095e6c9158140444970f5a2c5ed.ttf";

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "6b058fc2634b01d837c3432316c3141f.woff";

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "c7e698a4d0956f4a939f42a05685bbf5.ttf";

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(116);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(19)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!./style.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!./style.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)(undefined);
// imports


// module
exports.push([module.i, "li {\n  font-size: 20px !important;\n}\n\npre {\n  font-size: 14px !important;\n  display: inline-block !important;\n  max-height: auto !important;\n}\n\n.code {\n  display: flex;\n  justify-content: space-between;\n}\n", ""]);

// exports


/***/ })
/******/ ]);