/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const Proto = $root.Proto = (() => {

    /**
     * Namespace Proto.
     * @exports Proto
     * @namespace
     */
    const Proto = {};

    Proto.Author = (function() {

        /**
         * Properties of an Author.
         * @memberof Proto
         * @interface IAuthor
         * @property {number|null} [id] Author id
         * @property {string|null} [name] Author name
         */

        /**
         * Constructs a new Author.
         * @memberof Proto
         * @classdesc Represents an Author.
         * @implements IAuthor
         * @constructor
         * @param {Proto.IAuthor=} [properties] Properties to set
         */
        function Author(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Author id.
         * @member {number} id
         * @memberof Proto.Author
         * @instance
         */
        Author.prototype.id = 0;

        /**
         * Author name.
         * @member {string} name
         * @memberof Proto.Author
         * @instance
         */
        Author.prototype.name = "";

        /**
         * Creates a new Author instance using the specified properties.
         * @function create
         * @memberof Proto.Author
         * @static
         * @param {Proto.IAuthor=} [properties] Properties to set
         * @returns {Proto.Author} Author instance
         */
        Author.create = function create(properties) {
            return new Author(properties);
        };

        /**
         * Encodes the specified Author message. Does not implicitly {@link Proto.Author.verify|verify} messages.
         * @function encode
         * @memberof Proto.Author
         * @static
         * @param {Proto.IAuthor} message Author message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Author.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.id);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            return writer;
        };

        /**
         * Decodes an Author message from the specified reader or buffer.
         * @function decode
         * @memberof Proto.Author
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Proto.Author} Author
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Author.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.Proto.Author();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.uint32();
                        break;
                    }
                case 2: {
                        message.name = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for Author
         * @function getTypeUrl
         * @memberof Proto.Author
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Author.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/Proto.Author";
        };

        return Author;
    })();

    Proto.Banner = (function() {

        /**
         * Properties of a Banner.
         * @memberof Proto
         * @interface IBanner
         * @property {number|null} [id] Banner id
         * @property {Proto.IImage|null} [image] Banner image
         */

        /**
         * Constructs a new Banner.
         * @memberof Proto
         * @classdesc Represents a Banner.
         * @implements IBanner
         * @constructor
         * @param {Proto.IBanner=} [properties] Properties to set
         */
        function Banner(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Banner id.
         * @member {number} id
         * @memberof Proto.Banner
         * @instance
         */
        Banner.prototype.id = 0;

        /**
         * Banner image.
         * @member {Proto.IImage|null|undefined} image
         * @memberof Proto.Banner
         * @instance
         */
        Banner.prototype.image = null;

        /**
         * Creates a new Banner instance using the specified properties.
         * @function create
         * @memberof Proto.Banner
         * @static
         * @param {Proto.IBanner=} [properties] Properties to set
         * @returns {Proto.Banner} Banner instance
         */
        Banner.create = function create(properties) {
            return new Banner(properties);
        };

        /**
         * Encodes the specified Banner message. Does not implicitly {@link Proto.Banner.verify|verify} messages.
         * @function encode
         * @memberof Proto.Banner
         * @static
         * @param {Proto.IBanner} message Banner message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Banner.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.id);
            if (message.image != null && Object.hasOwnProperty.call(message, "image"))
                $root.Proto.Image.encode(message.image, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a Banner message from the specified reader or buffer.
         * @function decode
         * @memberof Proto.Banner
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Proto.Banner} Banner
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Banner.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.Proto.Banner();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.uint32();
                        break;
                    }
                case 2: {
                        message.image = $root.Proto.Image.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for Banner
         * @function getTypeUrl
         * @memberof Proto.Banner
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Banner.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/Proto.Banner";
        };

        return Banner;
    })();

    Proto.Chapter = (function() {

        /**
         * Properties of a Chapter.
         * @memberof Proto
         * @interface IChapter
         * @property {number|null} [id] Chapter id
         * @property {string|null} [name] Chapter name
         * @property {string|null} [subName] Chapter subName
         * @property {Proto.IPeriod|null} [period] Chapter period
         * @property {Proto.IImage|null} [thumbnail] Chapter thumbnail
         */

        /**
         * Constructs a new Chapter.
         * @memberof Proto
         * @classdesc Represents a Chapter.
         * @implements IChapter
         * @constructor
         * @param {Proto.IChapter=} [properties] Properties to set
         */
        function Chapter(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Chapter id.
         * @member {number} id
         * @memberof Proto.Chapter
         * @instance
         */
        Chapter.prototype.id = 0;

        /**
         * Chapter name.
         * @member {string} name
         * @memberof Proto.Chapter
         * @instance
         */
        Chapter.prototype.name = "";

        /**
         * Chapter subName.
         * @member {string} subName
         * @memberof Proto.Chapter
         * @instance
         */
        Chapter.prototype.subName = "";

        /**
         * Chapter period.
         * @member {Proto.IPeriod|null|undefined} period
         * @memberof Proto.Chapter
         * @instance
         */
        Chapter.prototype.period = null;

        /**
         * Chapter thumbnail.
         * @member {Proto.IImage|null|undefined} thumbnail
         * @memberof Proto.Chapter
         * @instance
         */
        Chapter.prototype.thumbnail = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        /**
         * Chapter _period.
         * @member {"period"|undefined} _period
         * @memberof Proto.Chapter
         * @instance
         */
        Object.defineProperty(Chapter.prototype, "_period", {
            get: $util.oneOfGetter($oneOfFields = ["period"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new Chapter instance using the specified properties.
         * @function create
         * @memberof Proto.Chapter
         * @static
         * @param {Proto.IChapter=} [properties] Properties to set
         * @returns {Proto.Chapter} Chapter instance
         */
        Chapter.create = function create(properties) {
            return new Chapter(properties);
        };

        /**
         * Encodes the specified Chapter message. Does not implicitly {@link Proto.Chapter.verify|verify} messages.
         * @function encode
         * @memberof Proto.Chapter
         * @static
         * @param {Proto.IChapter} message Chapter message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Chapter.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.id);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.subName != null && Object.hasOwnProperty.call(message, "subName"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.subName);
            if (message.period != null && Object.hasOwnProperty.call(message, "period"))
                $root.Proto.Period.encode(message.period, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.thumbnail != null && Object.hasOwnProperty.call(message, "thumbnail"))
                $root.Proto.Image.encode(message.thumbnail, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a Chapter message from the specified reader or buffer.
         * @function decode
         * @memberof Proto.Chapter
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Proto.Chapter} Chapter
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Chapter.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.Proto.Chapter();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.uint32();
                        break;
                    }
                case 2: {
                        message.name = reader.string();
                        break;
                    }
                case 3: {
                        message.subName = reader.string();
                        break;
                    }
                case 4: {
                        message.period = $root.Proto.Period.decode(reader, reader.uint32());
                        break;
                    }
                case 5: {
                        message.thumbnail = $root.Proto.Image.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for Chapter
         * @function getTypeUrl
         * @memberof Proto.Chapter
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Chapter.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/Proto.Chapter";
        };

        return Chapter;
    })();

    Proto.Image = (function() {

        /**
         * Properties of an Image.
         * @memberof Proto
         * @interface IImage
         * @property {string|null} [src] Image src
         * @property {number|null} [height] Image height
         * @property {number|null} [width] Image width
         * @property {string|null} [alt] Image alt
         * @property {string|null} [url] Image url
         */

        /**
         * Constructs a new Image.
         * @memberof Proto
         * @classdesc Represents an Image.
         * @implements IImage
         * @constructor
         * @param {Proto.IImage=} [properties] Properties to set
         */
        function Image(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Image src.
         * @member {string} src
         * @memberof Proto.Image
         * @instance
         */
        Image.prototype.src = "";

        /**
         * Image height.
         * @member {number} height
         * @memberof Proto.Image
         * @instance
         */
        Image.prototype.height = 0;

        /**
         * Image width.
         * @member {number} width
         * @memberof Proto.Image
         * @instance
         */
        Image.prototype.width = 0;

        /**
         * Image alt.
         * @member {string} alt
         * @memberof Proto.Image
         * @instance
         */
        Image.prototype.alt = "";

        /**
         * Image url.
         * @member {string|null|undefined} url
         * @memberof Proto.Image
         * @instance
         */
        Image.prototype.url = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        /**
         * Image _url.
         * @member {"url"|undefined} _url
         * @memberof Proto.Image
         * @instance
         */
        Object.defineProperty(Image.prototype, "_url", {
            get: $util.oneOfGetter($oneOfFields = ["url"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new Image instance using the specified properties.
         * @function create
         * @memberof Proto.Image
         * @static
         * @param {Proto.IImage=} [properties] Properties to set
         * @returns {Proto.Image} Image instance
         */
        Image.create = function create(properties) {
            return new Image(properties);
        };

        /**
         * Encodes the specified Image message. Does not implicitly {@link Proto.Image.verify|verify} messages.
         * @function encode
         * @memberof Proto.Image
         * @static
         * @param {Proto.IImage} message Image message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Image.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.src != null && Object.hasOwnProperty.call(message, "src"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.src);
            if (message.height != null && Object.hasOwnProperty.call(message, "height"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.height);
            if (message.width != null && Object.hasOwnProperty.call(message, "width"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.width);
            if (message.alt != null && Object.hasOwnProperty.call(message, "alt"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.alt);
            if (message.url != null && Object.hasOwnProperty.call(message, "url"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.url);
            return writer;
        };

        /**
         * Decodes an Image message from the specified reader or buffer.
         * @function decode
         * @memberof Proto.Image
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Proto.Image} Image
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Image.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.Proto.Image();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.src = reader.string();
                        break;
                    }
                case 2: {
                        message.height = reader.uint32();
                        break;
                    }
                case 3: {
                        message.width = reader.uint32();
                        break;
                    }
                case 4: {
                        message.alt = reader.string();
                        break;
                    }
                case 5: {
                        message.url = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for Image
         * @function getTypeUrl
         * @memberof Proto.Image
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Image.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/Proto.Image";
        };

        return Image;
    })();

    Proto.Period = (function() {

        /**
         * Properties of a Period.
         * @memberof Proto
         * @interface IPeriod
         * @property {string|null} [start] Period start
         * @property {string|null} [end] Period end
         */

        /**
         * Constructs a new Period.
         * @memberof Proto
         * @classdesc Represents a Period.
         * @implements IPeriod
         * @constructor
         * @param {Proto.IPeriod=} [properties] Properties to set
         */
        function Period(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Period start.
         * @member {string} start
         * @memberof Proto.Period
         * @instance
         */
        Period.prototype.start = "";

        /**
         * Period end.
         * @member {string} end
         * @memberof Proto.Period
         * @instance
         */
        Period.prototype.end = "";

        /**
         * Creates a new Period instance using the specified properties.
         * @function create
         * @memberof Proto.Period
         * @static
         * @param {Proto.IPeriod=} [properties] Properties to set
         * @returns {Proto.Period} Period instance
         */
        Period.create = function create(properties) {
            return new Period(properties);
        };

        /**
         * Encodes the specified Period message. Does not implicitly {@link Proto.Period.verify|verify} messages.
         * @function encode
         * @memberof Proto.Period
         * @static
         * @param {Proto.IPeriod} message Period message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Period.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.start != null && Object.hasOwnProperty.call(message, "start"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.start);
            if (message.end != null && Object.hasOwnProperty.call(message, "end"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.end);
            return writer;
        };

        /**
         * Decodes a Period message from the specified reader or buffer.
         * @function decode
         * @memberof Proto.Period
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Proto.Period} Period
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Period.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.Proto.Period();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.start = reader.string();
                        break;
                    }
                case 2: {
                        message.end = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for Period
         * @function getTypeUrl
         * @memberof Proto.Period
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Period.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/Proto.Period";
        };

        return Period;
    })();

    Proto.Title = (function() {

        /**
         * Properties of a Title.
         * @memberof Proto
         * @interface ITitle
         * @property {number|null} [id] Title id
         * @property {string|null} [name] Title name
         * @property {string|null} [description] Title description
         * @property {string|null} [catchPhrase] Title catchPhrase
         * @property {string|null} [copyRight] Title copyRight
         * @property {Proto.IImage|null} [thumbnail] Title thumbnail
         * @property {Proto.IVolume|null} [volume] Title volume
         * @property {Proto.IVolume|null} [relatedVolume] Title relatedVolume
         * @property {Proto.Title.Badge|null} [badge] Title badge
         * @property {Proto.IAuthor|null} [author] Title author
         * @property {number|null} [firstChapterId] Title firstChapterId
         */

        /**
         * Constructs a new Title.
         * @memberof Proto
         * @classdesc Represents a Title.
         * @implements ITitle
         * @constructor
         * @param {Proto.ITitle=} [properties] Properties to set
         */
        function Title(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Title id.
         * @member {number} id
         * @memberof Proto.Title
         * @instance
         */
        Title.prototype.id = 0;

        /**
         * Title name.
         * @member {string} name
         * @memberof Proto.Title
         * @instance
         */
        Title.prototype.name = "";

        /**
         * Title description.
         * @member {string} description
         * @memberof Proto.Title
         * @instance
         */
        Title.prototype.description = "";

        /**
         * Title catchPhrase.
         * @member {string} catchPhrase
         * @memberof Proto.Title
         * @instance
         */
        Title.prototype.catchPhrase = "";

        /**
         * Title copyRight.
         * @member {string} copyRight
         * @memberof Proto.Title
         * @instance
         */
        Title.prototype.copyRight = "";

        /**
         * Title thumbnail.
         * @member {Proto.IImage|null|undefined} thumbnail
         * @memberof Proto.Title
         * @instance
         */
        Title.prototype.thumbnail = null;

        /**
         * Title volume.
         * @member {Proto.IVolume|null|undefined} volume
         * @memberof Proto.Title
         * @instance
         */
        Title.prototype.volume = null;

        /**
         * Title relatedVolume.
         * @member {Proto.IVolume|null|undefined} relatedVolume
         * @memberof Proto.Title
         * @instance
         */
        Title.prototype.relatedVolume = null;

        /**
         * Title badge.
         * @member {Proto.Title.Badge} badge
         * @memberof Proto.Title
         * @instance
         */
        Title.prototype.badge = 0;

        /**
         * Title author.
         * @member {Proto.IAuthor|null|undefined} author
         * @memberof Proto.Title
         * @instance
         */
        Title.prototype.author = null;

        /**
         * Title firstChapterId.
         * @member {number} firstChapterId
         * @memberof Proto.Title
         * @instance
         */
        Title.prototype.firstChapterId = 0;

        /**
         * Creates a new Title instance using the specified properties.
         * @function create
         * @memberof Proto.Title
         * @static
         * @param {Proto.ITitle=} [properties] Properties to set
         * @returns {Proto.Title} Title instance
         */
        Title.create = function create(properties) {
            return new Title(properties);
        };

        /**
         * Encodes the specified Title message. Does not implicitly {@link Proto.Title.verify|verify} messages.
         * @function encode
         * @memberof Proto.Title
         * @static
         * @param {Proto.ITitle} message Title message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Title.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.id);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.description != null && Object.hasOwnProperty.call(message, "description"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.description);
            if (message.catchPhrase != null && Object.hasOwnProperty.call(message, "catchPhrase"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.catchPhrase);
            if (message.copyRight != null && Object.hasOwnProperty.call(message, "copyRight"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.copyRight);
            if (message.thumbnail != null && Object.hasOwnProperty.call(message, "thumbnail"))
                $root.Proto.Image.encode(message.thumbnail, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.volume != null && Object.hasOwnProperty.call(message, "volume"))
                $root.Proto.Volume.encode(message.volume, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.relatedVolume != null && Object.hasOwnProperty.call(message, "relatedVolume"))
                $root.Proto.Volume.encode(message.relatedVolume, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            if (message.badge != null && Object.hasOwnProperty.call(message, "badge"))
                writer.uint32(/* id 9, wireType 0 =*/72).int32(message.badge);
            if (message.author != null && Object.hasOwnProperty.call(message, "author"))
                $root.Proto.Author.encode(message.author, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
            if (message.firstChapterId != null && Object.hasOwnProperty.call(message, "firstChapterId"))
                writer.uint32(/* id 11, wireType 0 =*/88).uint32(message.firstChapterId);
            return writer;
        };

        /**
         * Decodes a Title message from the specified reader or buffer.
         * @function decode
         * @memberof Proto.Title
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Proto.Title} Title
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Title.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.Proto.Title();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.uint32();
                        break;
                    }
                case 2: {
                        message.name = reader.string();
                        break;
                    }
                case 3: {
                        message.description = reader.string();
                        break;
                    }
                case 4: {
                        message.catchPhrase = reader.string();
                        break;
                    }
                case 5: {
                        message.copyRight = reader.string();
                        break;
                    }
                case 6: {
                        message.thumbnail = $root.Proto.Image.decode(reader, reader.uint32());
                        break;
                    }
                case 7: {
                        message.volume = $root.Proto.Volume.decode(reader, reader.uint32());
                        break;
                    }
                case 8: {
                        message.relatedVolume = $root.Proto.Volume.decode(reader, reader.uint32());
                        break;
                    }
                case 9: {
                        message.badge = reader.int32();
                        break;
                    }
                case 10: {
                        message.author = $root.Proto.Author.decode(reader, reader.uint32());
                        break;
                    }
                case 11: {
                        message.firstChapterId = reader.uint32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for Title
         * @function getTypeUrl
         * @memberof Proto.Title
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Title.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/Proto.Title";
        };

        /**
         * Badge enum.
         * @name Proto.Title.Badge
         * @enum {number}
         * @property {number} NONE=0 NONE value
         * @property {number} NEW=1 NEW value
         */
        Title.Badge = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "NONE"] = 0;
            values[valuesById[1] = "NEW"] = 1;
            return values;
        })();

        return Title;
    })();

    Proto.User = (function() {

        /**
         * Properties of a User.
         * @memberof Proto
         * @interface IUser
         * @property {number|null} [id] User id
         * @property {string|null} [email] User email
         */

        /**
         * Constructs a new User.
         * @memberof Proto
         * @classdesc Represents a User.
         * @implements IUser
         * @constructor
         * @param {Proto.IUser=} [properties] Properties to set
         */
        function User(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * User id.
         * @member {number} id
         * @memberof Proto.User
         * @instance
         */
        User.prototype.id = 0;

        /**
         * User email.
         * @member {string} email
         * @memberof Proto.User
         * @instance
         */
        User.prototype.email = "";

        /**
         * Creates a new User instance using the specified properties.
         * @function create
         * @memberof Proto.User
         * @static
         * @param {Proto.IUser=} [properties] Properties to set
         * @returns {Proto.User} User instance
         */
        User.create = function create(properties) {
            return new User(properties);
        };

        /**
         * Encodes the specified User message. Does not implicitly {@link Proto.User.verify|verify} messages.
         * @function encode
         * @memberof Proto.User
         * @static
         * @param {Proto.IUser} message User message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        User.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.id);
            if (message.email != null && Object.hasOwnProperty.call(message, "email"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.email);
            return writer;
        };

        /**
         * Decodes a User message from the specified reader or buffer.
         * @function decode
         * @memberof Proto.User
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Proto.User} User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        User.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.Proto.User();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.uint32();
                        break;
                    }
                case 2: {
                        message.email = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for User
         * @function getTypeUrl
         * @memberof Proto.User
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        User.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/Proto.User";
        };

        return User;
    })();

    Proto.Volume = (function() {

        /**
         * Properties of a Volume.
         * @memberof Proto
         * @interface IVolume
         * @property {number|null} [id] Volume id
         * @property {string|null} [name] Volume name
         * @property {string|null} [description] Volume description
         * @property {string|null} [catchPhrase] Volume catchPhrase
         * @property {string|null} [releaseDate] Volume releaseDate
         * @property {Proto.IImage|null} [thumbnail] Volume thumbnail
         */

        /**
         * Constructs a new Volume.
         * @memberof Proto
         * @classdesc Represents a Volume.
         * @implements IVolume
         * @constructor
         * @param {Proto.IVolume=} [properties] Properties to set
         */
        function Volume(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Volume id.
         * @member {number} id
         * @memberof Proto.Volume
         * @instance
         */
        Volume.prototype.id = 0;

        /**
         * Volume name.
         * @member {string} name
         * @memberof Proto.Volume
         * @instance
         */
        Volume.prototype.name = "";

        /**
         * Volume description.
         * @member {string} description
         * @memberof Proto.Volume
         * @instance
         */
        Volume.prototype.description = "";

        /**
         * Volume catchPhrase.
         * @member {string} catchPhrase
         * @memberof Proto.Volume
         * @instance
         */
        Volume.prototype.catchPhrase = "";

        /**
         * Volume releaseDate.
         * @member {string} releaseDate
         * @memberof Proto.Volume
         * @instance
         */
        Volume.prototype.releaseDate = "";

        /**
         * Volume thumbnail.
         * @member {Proto.IImage|null|undefined} thumbnail
         * @memberof Proto.Volume
         * @instance
         */
        Volume.prototype.thumbnail = null;

        /**
         * Creates a new Volume instance using the specified properties.
         * @function create
         * @memberof Proto.Volume
         * @static
         * @param {Proto.IVolume=} [properties] Properties to set
         * @returns {Proto.Volume} Volume instance
         */
        Volume.create = function create(properties) {
            return new Volume(properties);
        };

        /**
         * Encodes the specified Volume message. Does not implicitly {@link Proto.Volume.verify|verify} messages.
         * @function encode
         * @memberof Proto.Volume
         * @static
         * @param {Proto.IVolume} message Volume message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Volume.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.id);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.description != null && Object.hasOwnProperty.call(message, "description"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.description);
            if (message.catchPhrase != null && Object.hasOwnProperty.call(message, "catchPhrase"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.catchPhrase);
            if (message.releaseDate != null && Object.hasOwnProperty.call(message, "releaseDate"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.releaseDate);
            if (message.thumbnail != null && Object.hasOwnProperty.call(message, "thumbnail"))
                $root.Proto.Image.encode(message.thumbnail, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a Volume message from the specified reader or buffer.
         * @function decode
         * @memberof Proto.Volume
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Proto.Volume} Volume
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Volume.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.Proto.Volume();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.uint32();
                        break;
                    }
                case 2: {
                        message.name = reader.string();
                        break;
                    }
                case 3: {
                        message.description = reader.string();
                        break;
                    }
                case 4: {
                        message.catchPhrase = reader.string();
                        break;
                    }
                case 5: {
                        message.releaseDate = reader.string();
                        break;
                    }
                case 6: {
                        message.thumbnail = $root.Proto.Image.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for Volume
         * @function getTypeUrl
         * @memberof Proto.Volume
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Volume.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/Proto.Volume";
        };

        return Volume;
    })();

    Proto.HistoryView = (function() {

        /**
         * Properties of a HistoryView.
         * @memberof Proto
         * @interface IHistoryView
         * @property {Array.<Proto.ITitle>|null} [titles] HistoryView titles
         */

        /**
         * Constructs a new HistoryView.
         * @memberof Proto
         * @classdesc Represents a HistoryView.
         * @implements IHistoryView
         * @constructor
         * @param {Proto.IHistoryView=} [properties] Properties to set
         */
        function HistoryView(properties) {
            this.titles = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HistoryView titles.
         * @member {Array.<Proto.ITitle>} titles
         * @memberof Proto.HistoryView
         * @instance
         */
        HistoryView.prototype.titles = $util.emptyArray;

        /**
         * Creates a new HistoryView instance using the specified properties.
         * @function create
         * @memberof Proto.HistoryView
         * @static
         * @param {Proto.IHistoryView=} [properties] Properties to set
         * @returns {Proto.HistoryView} HistoryView instance
         */
        HistoryView.create = function create(properties) {
            return new HistoryView(properties);
        };

        /**
         * Encodes the specified HistoryView message. Does not implicitly {@link Proto.HistoryView.verify|verify} messages.
         * @function encode
         * @memberof Proto.HistoryView
         * @static
         * @param {Proto.IHistoryView} message HistoryView message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HistoryView.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.titles != null && message.titles.length)
                for (let i = 0; i < message.titles.length; ++i)
                    $root.Proto.Title.encode(message.titles[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a HistoryView message from the specified reader or buffer.
         * @function decode
         * @memberof Proto.HistoryView
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Proto.HistoryView} HistoryView
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HistoryView.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.Proto.HistoryView();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.titles && message.titles.length))
                            message.titles = [];
                        message.titles.push($root.Proto.Title.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for HistoryView
         * @function getTypeUrl
         * @memberof Proto.HistoryView
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        HistoryView.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/Proto.HistoryView";
        };

        return HistoryView;
    })();

    Proto.TitleDetailView = (function() {

        /**
         * Properties of a TitleDetailView.
         * @memberof Proto
         * @interface ITitleDetailView
         * @property {Proto.ITitle|null} [title] TitleDetailView title
         * @property {Array.<Proto.IChapter>|null} [chapters] TitleDetailView chapters
         * @property {string|null} [advertisement] TitleDetailView advertisement
         */

        /**
         * Constructs a new TitleDetailView.
         * @memberof Proto
         * @classdesc Represents a TitleDetailView.
         * @implements ITitleDetailView
         * @constructor
         * @param {Proto.ITitleDetailView=} [properties] Properties to set
         */
        function TitleDetailView(properties) {
            this.chapters = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TitleDetailView title.
         * @member {Proto.ITitle|null|undefined} title
         * @memberof Proto.TitleDetailView
         * @instance
         */
        TitleDetailView.prototype.title = null;

        /**
         * TitleDetailView chapters.
         * @member {Array.<Proto.IChapter>} chapters
         * @memberof Proto.TitleDetailView
         * @instance
         */
        TitleDetailView.prototype.chapters = $util.emptyArray;

        /**
         * TitleDetailView advertisement.
         * @member {string} advertisement
         * @memberof Proto.TitleDetailView
         * @instance
         */
        TitleDetailView.prototype.advertisement = "";

        /**
         * Creates a new TitleDetailView instance using the specified properties.
         * @function create
         * @memberof Proto.TitleDetailView
         * @static
         * @param {Proto.ITitleDetailView=} [properties] Properties to set
         * @returns {Proto.TitleDetailView} TitleDetailView instance
         */
        TitleDetailView.create = function create(properties) {
            return new TitleDetailView(properties);
        };

        /**
         * Encodes the specified TitleDetailView message. Does not implicitly {@link Proto.TitleDetailView.verify|verify} messages.
         * @function encode
         * @memberof Proto.TitleDetailView
         * @static
         * @param {Proto.ITitleDetailView} message TitleDetailView message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TitleDetailView.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.title != null && Object.hasOwnProperty.call(message, "title"))
                $root.Proto.Title.encode(message.title, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.chapters != null && message.chapters.length)
                for (let i = 0; i < message.chapters.length; ++i)
                    $root.Proto.Chapter.encode(message.chapters[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.advertisement != null && Object.hasOwnProperty.call(message, "advertisement"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.advertisement);
            return writer;
        };

        /**
         * Decodes a TitleDetailView message from the specified reader or buffer.
         * @function decode
         * @memberof Proto.TitleDetailView
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Proto.TitleDetailView} TitleDetailView
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TitleDetailView.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.Proto.TitleDetailView();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.title = $root.Proto.Title.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        if (!(message.chapters && message.chapters.length))
                            message.chapters = [];
                        message.chapters.push($root.Proto.Chapter.decode(reader, reader.uint32()));
                        break;
                    }
                case 3: {
                        message.advertisement = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for TitleDetailView
         * @function getTypeUrl
         * @memberof Proto.TitleDetailView
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        TitleDetailView.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/Proto.TitleDetailView";
        };

        return TitleDetailView;
    })();

    Proto.TopView = (function() {

        /**
         * Properties of a TopView.
         * @memberof Proto
         * @interface ITopView
         * @property {Array.<Proto.IBanner>|null} [banners] TopView banners
         * @property {Array.<Proto.ITitle>|null} [updateTitles] TopView updateTitles
         * @property {Array.<Proto.IVolume>|null} [newVolumes] TopView newVolumes
         */

        /**
         * Constructs a new TopView.
         * @memberof Proto
         * @classdesc Represents a TopView.
         * @implements ITopView
         * @constructor
         * @param {Proto.ITopView=} [properties] Properties to set
         */
        function TopView(properties) {
            this.banners = [];
            this.updateTitles = [];
            this.newVolumes = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TopView banners.
         * @member {Array.<Proto.IBanner>} banners
         * @memberof Proto.TopView
         * @instance
         */
        TopView.prototype.banners = $util.emptyArray;

        /**
         * TopView updateTitles.
         * @member {Array.<Proto.ITitle>} updateTitles
         * @memberof Proto.TopView
         * @instance
         */
        TopView.prototype.updateTitles = $util.emptyArray;

        /**
         * TopView newVolumes.
         * @member {Array.<Proto.IVolume>} newVolumes
         * @memberof Proto.TopView
         * @instance
         */
        TopView.prototype.newVolumes = $util.emptyArray;

        /**
         * Creates a new TopView instance using the specified properties.
         * @function create
         * @memberof Proto.TopView
         * @static
         * @param {Proto.ITopView=} [properties] Properties to set
         * @returns {Proto.TopView} TopView instance
         */
        TopView.create = function create(properties) {
            return new TopView(properties);
        };

        /**
         * Encodes the specified TopView message. Does not implicitly {@link Proto.TopView.verify|verify} messages.
         * @function encode
         * @memberof Proto.TopView
         * @static
         * @param {Proto.ITopView} message TopView message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TopView.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.banners != null && message.banners.length)
                for (let i = 0; i < message.banners.length; ++i)
                    $root.Proto.Banner.encode(message.banners[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.updateTitles != null && message.updateTitles.length)
                for (let i = 0; i < message.updateTitles.length; ++i)
                    $root.Proto.Title.encode(message.updateTitles[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.newVolumes != null && message.newVolumes.length)
                for (let i = 0; i < message.newVolumes.length; ++i)
                    $root.Proto.Volume.encode(message.newVolumes[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a TopView message from the specified reader or buffer.
         * @function decode
         * @memberof Proto.TopView
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Proto.TopView} TopView
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TopView.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.Proto.TopView();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.banners && message.banners.length))
                            message.banners = [];
                        message.banners.push($root.Proto.Banner.decode(reader, reader.uint32()));
                        break;
                    }
                case 2: {
                        if (!(message.updateTitles && message.updateTitles.length))
                            message.updateTitles = [];
                        message.updateTitles.push($root.Proto.Title.decode(reader, reader.uint32()));
                        break;
                    }
                case 3: {
                        if (!(message.newVolumes && message.newVolumes.length))
                            message.newVolumes = [];
                        message.newVolumes.push($root.Proto.Volume.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for TopView
         * @function getTypeUrl
         * @memberof Proto.TopView
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        TopView.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/Proto.TopView";
        };

        return TopView;
    })();

    Proto.UserView = (function() {

        /**
         * Properties of a UserView.
         * @memberof Proto
         * @interface IUserView
         * @property {Proto.IUser|null} [user] UserView user
         */

        /**
         * Constructs a new UserView.
         * @memberof Proto
         * @classdesc Represents a UserView.
         * @implements IUserView
         * @constructor
         * @param {Proto.IUserView=} [properties] Properties to set
         */
        function UserView(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserView user.
         * @member {Proto.IUser|null|undefined} user
         * @memberof Proto.UserView
         * @instance
         */
        UserView.prototype.user = null;

        /**
         * Creates a new UserView instance using the specified properties.
         * @function create
         * @memberof Proto.UserView
         * @static
         * @param {Proto.IUserView=} [properties] Properties to set
         * @returns {Proto.UserView} UserView instance
         */
        UserView.create = function create(properties) {
            return new UserView(properties);
        };

        /**
         * Encodes the specified UserView message. Does not implicitly {@link Proto.UserView.verify|verify} messages.
         * @function encode
         * @memberof Proto.UserView
         * @static
         * @param {Proto.IUserView} message UserView message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserView.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.user != null && Object.hasOwnProperty.call(message, "user"))
                $root.Proto.User.encode(message.user, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a UserView message from the specified reader or buffer.
         * @function decode
         * @memberof Proto.UserView
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Proto.UserView} UserView
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserView.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.Proto.UserView();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.user = $root.Proto.User.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for UserView
         * @function getTypeUrl
         * @memberof Proto.UserView
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        UserView.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/Proto.UserView";
        };

        return UserView;
    })();

    Proto.ViewerView = (function() {

        /**
         * Properties of a ViewerView.
         * @memberof Proto
         * @interface IViewerView
         * @property {Array.<Proto.IImage>|null} [pages] ViewerView pages
         * @property {Proto.ViewerView.ILastPage|null} [lastpage] ViewerView lastpage
         */

        /**
         * Constructs a new ViewerView.
         * @memberof Proto
         * @classdesc Represents a ViewerView.
         * @implements IViewerView
         * @constructor
         * @param {Proto.IViewerView=} [properties] Properties to set
         */
        function ViewerView(properties) {
            this.pages = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ViewerView pages.
         * @member {Array.<Proto.IImage>} pages
         * @memberof Proto.ViewerView
         * @instance
         */
        ViewerView.prototype.pages = $util.emptyArray;

        /**
         * ViewerView lastpage.
         * @member {Proto.ViewerView.ILastPage|null|undefined} lastpage
         * @memberof Proto.ViewerView
         * @instance
         */
        ViewerView.prototype.lastpage = null;

        /**
         * Creates a new ViewerView instance using the specified properties.
         * @function create
         * @memberof Proto.ViewerView
         * @static
         * @param {Proto.IViewerView=} [properties] Properties to set
         * @returns {Proto.ViewerView} ViewerView instance
         */
        ViewerView.create = function create(properties) {
            return new ViewerView(properties);
        };

        /**
         * Encodes the specified ViewerView message. Does not implicitly {@link Proto.ViewerView.verify|verify} messages.
         * @function encode
         * @memberof Proto.ViewerView
         * @static
         * @param {Proto.IViewerView} message ViewerView message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ViewerView.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.pages != null && message.pages.length)
                for (let i = 0; i < message.pages.length; ++i)
                    $root.Proto.Image.encode(message.pages[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.lastpage != null && Object.hasOwnProperty.call(message, "lastpage"))
                $root.Proto.ViewerView.LastPage.encode(message.lastpage, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a ViewerView message from the specified reader or buffer.
         * @function decode
         * @memberof Proto.ViewerView
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Proto.ViewerView} ViewerView
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ViewerView.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.Proto.ViewerView();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.pages && message.pages.length))
                            message.pages = [];
                        message.pages.push($root.Proto.Image.decode(reader, reader.uint32()));
                        break;
                    }
                case 2: {
                        message.lastpage = $root.Proto.ViewerView.LastPage.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for ViewerView
         * @function getTypeUrl
         * @memberof Proto.ViewerView
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ViewerView.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/Proto.ViewerView";
        };

        ViewerView.LastPage = (function() {

            /**
             * Properties of a LastPage.
             * @memberof Proto.ViewerView
             * @interface ILastPage
             * @property {number|null} [nextChapterId] LastPage nextChapterId
             */

            /**
             * Constructs a new LastPage.
             * @memberof Proto.ViewerView
             * @classdesc Represents a LastPage.
             * @implements ILastPage
             * @constructor
             * @param {Proto.ViewerView.ILastPage=} [properties] Properties to set
             */
            function LastPage(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * LastPage nextChapterId.
             * @member {number|null|undefined} nextChapterId
             * @memberof Proto.ViewerView.LastPage
             * @instance
             */
            LastPage.prototype.nextChapterId = null;

            // OneOf field names bound to virtual getters and setters
            let $oneOfFields;

            /**
             * LastPage _nextChapterId.
             * @member {"nextChapterId"|undefined} _nextChapterId
             * @memberof Proto.ViewerView.LastPage
             * @instance
             */
            Object.defineProperty(LastPage.prototype, "_nextChapterId", {
                get: $util.oneOfGetter($oneOfFields = ["nextChapterId"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new LastPage instance using the specified properties.
             * @function create
             * @memberof Proto.ViewerView.LastPage
             * @static
             * @param {Proto.ViewerView.ILastPage=} [properties] Properties to set
             * @returns {Proto.ViewerView.LastPage} LastPage instance
             */
            LastPage.create = function create(properties) {
                return new LastPage(properties);
            };

            /**
             * Encodes the specified LastPage message. Does not implicitly {@link Proto.ViewerView.LastPage.verify|verify} messages.
             * @function encode
             * @memberof Proto.ViewerView.LastPage
             * @static
             * @param {Proto.ViewerView.ILastPage} message LastPage message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LastPage.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.nextChapterId != null && Object.hasOwnProperty.call(message, "nextChapterId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.nextChapterId);
                return writer;
            };

            /**
             * Decodes a LastPage message from the specified reader or buffer.
             * @function decode
             * @memberof Proto.ViewerView.LastPage
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Proto.ViewerView.LastPage} LastPage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            LastPage.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.Proto.ViewerView.LastPage();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.nextChapterId = reader.uint32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Gets the default type url for LastPage
             * @function getTypeUrl
             * @memberof Proto.ViewerView.LastPage
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            LastPage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/Proto.ViewerView.LastPage";
            };

            return LastPage;
        })();

        return ViewerView;
    })();

    return Proto;
})();

export { $root as default };
