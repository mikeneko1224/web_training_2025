import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace Proto. */
export namespace Proto {

    /** Properties of an Author. */
    interface IAuthor {

        /** Author id */
        id?: (number|null);

        /** Author name */
        name?: (string|null);
    }

    /** Represents an Author. */
    class Author implements IAuthor {

        /**
         * Constructs a new Author.
         * @param [properties] Properties to set
         */
        constructor(properties?: Proto.IAuthor);

        /** Author id. */
        public id: number;

        /** Author name. */
        public name: string;

        /**
         * Creates a new Author instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Author instance
         */
        public static create(properties?: Proto.IAuthor): Proto.Author;

        /**
         * Encodes the specified Author message. Does not implicitly {@link Proto.Author.verify|verify} messages.
         * @param message Author message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Proto.IAuthor, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Author message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Author
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Proto.Author;

        /**
         * Gets the default type url for Author
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Banner. */
    interface IBanner {

        /** Banner id */
        id?: (number|null);

        /** Banner image */
        image?: (Proto.IImage|null);
    }

    /** Represents a Banner. */
    class Banner implements IBanner {

        /**
         * Constructs a new Banner.
         * @param [properties] Properties to set
         */
        constructor(properties?: Proto.IBanner);

        /** Banner id. */
        public id: number;

        /** Banner image. */
        public image?: (Proto.IImage|null);

        /**
         * Creates a new Banner instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Banner instance
         */
        public static create(properties?: Proto.IBanner): Proto.Banner;

        /**
         * Encodes the specified Banner message. Does not implicitly {@link Proto.Banner.verify|verify} messages.
         * @param message Banner message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Proto.IBanner, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Banner message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Banner
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Proto.Banner;

        /**
         * Gets the default type url for Banner
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Chapter. */
    interface IChapter {

        /** Chapter id */
        id?: (number|null);

        /** Chapter name */
        name?: (string|null);

        /** Chapter subName */
        subName?: (string|null);

        /** Chapter period */
        period?: (Proto.IPeriod|null);

        /** Chapter thumbnail */
        thumbnail?: (Proto.IImage|null);
    }

    /** Represents a Chapter. */
    class Chapter implements IChapter {

        /**
         * Constructs a new Chapter.
         * @param [properties] Properties to set
         */
        constructor(properties?: Proto.IChapter);

        /** Chapter id. */
        public id: number;

        /** Chapter name. */
        public name: string;

        /** Chapter subName. */
        public subName: string;

        /** Chapter period. */
        public period?: (Proto.IPeriod|null);

        /** Chapter thumbnail. */
        public thumbnail?: (Proto.IImage|null);

        /** Chapter _period. */
        public _period?: "period";

        /**
         * Creates a new Chapter instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Chapter instance
         */
        public static create(properties?: Proto.IChapter): Proto.Chapter;

        /**
         * Encodes the specified Chapter message. Does not implicitly {@link Proto.Chapter.verify|verify} messages.
         * @param message Chapter message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Proto.IChapter, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Chapter message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Chapter
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Proto.Chapter;

        /**
         * Gets the default type url for Chapter
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an Image. */
    interface IImage {

        /** Image src */
        src?: (string|null);

        /** Image height */
        height?: (number|null);

        /** Image width */
        width?: (number|null);

        /** Image alt */
        alt?: (string|null);

        /** Image url */
        url?: (string|null);
    }

    /** Represents an Image. */
    class Image implements IImage {

        /**
         * Constructs a new Image.
         * @param [properties] Properties to set
         */
        constructor(properties?: Proto.IImage);

        /** Image src. */
        public src: string;

        /** Image height. */
        public height: number;

        /** Image width. */
        public width: number;

        /** Image alt. */
        public alt: string;

        /** Image url. */
        public url?: (string|null);

        /** Image _url. */
        public _url?: "url";

        /**
         * Creates a new Image instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Image instance
         */
        public static create(properties?: Proto.IImage): Proto.Image;

        /**
         * Encodes the specified Image message. Does not implicitly {@link Proto.Image.verify|verify} messages.
         * @param message Image message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Proto.IImage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Image message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Image
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Proto.Image;

        /**
         * Gets the default type url for Image
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Period. */
    interface IPeriod {

        /** Period start */
        start?: (string|null);

        /** Period end */
        end?: (string|null);
    }

    /** Represents a Period. */
    class Period implements IPeriod {

        /**
         * Constructs a new Period.
         * @param [properties] Properties to set
         */
        constructor(properties?: Proto.IPeriod);

        /** Period start. */
        public start: string;

        /** Period end. */
        public end: string;

        /**
         * Creates a new Period instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Period instance
         */
        public static create(properties?: Proto.IPeriod): Proto.Period;

        /**
         * Encodes the specified Period message. Does not implicitly {@link Proto.Period.verify|verify} messages.
         * @param message Period message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Proto.IPeriod, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Period message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Period
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Proto.Period;

        /**
         * Gets the default type url for Period
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Title. */
    interface ITitle {

        /** Title id */
        id?: (number|null);

        /** Title name */
        name?: (string|null);

        /** Title description */
        description?: (string|null);

        /** Title catchPhrase */
        catchPhrase?: (string|null);

        /** Title copyRight */
        copyRight?: (string|null);

        /** Title thumbnail */
        thumbnail?: (Proto.IImage|null);

        /** Title volume */
        volume?: (Proto.IVolume|null);

        /** Title relatedVolume */
        relatedVolume?: (Proto.IVolume|null);

        /** Title badge */
        badge?: (Proto.Title.Badge|null);

        /** Title author */
        author?: (Proto.IAuthor|null);

        /** Title firstChapterId */
        firstChapterId?: (number|null);
    }

    /** Represents a Title. */
    class Title implements ITitle {

        /**
         * Constructs a new Title.
         * @param [properties] Properties to set
         */
        constructor(properties?: Proto.ITitle);

        /** Title id. */
        public id: number;

        /** Title name. */
        public name: string;

        /** Title description. */
        public description: string;

        /** Title catchPhrase. */
        public catchPhrase: string;

        /** Title copyRight. */
        public copyRight: string;

        /** Title thumbnail. */
        public thumbnail?: (Proto.IImage|null);

        /** Title volume. */
        public volume?: (Proto.IVolume|null);

        /** Title relatedVolume. */
        public relatedVolume?: (Proto.IVolume|null);

        /** Title badge. */
        public badge: Proto.Title.Badge;

        /** Title author. */
        public author?: (Proto.IAuthor|null);

        /** Title firstChapterId. */
        public firstChapterId: number;

        /**
         * Creates a new Title instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Title instance
         */
        public static create(properties?: Proto.ITitle): Proto.Title;

        /**
         * Encodes the specified Title message. Does not implicitly {@link Proto.Title.verify|verify} messages.
         * @param message Title message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Proto.ITitle, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Title message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Title
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Proto.Title;

        /**
         * Gets the default type url for Title
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace Title {

        /** Badge enum. */
        enum Badge {
            NONE = 0,
            NEW = 1
        }
    }

    /** Properties of a User. */
    interface IUser {

        /** User id */
        id?: (number|null);

        /** User email */
        email?: (string|null);
    }

    /** Represents a User. */
    class User implements IUser {

        /**
         * Constructs a new User.
         * @param [properties] Properties to set
         */
        constructor(properties?: Proto.IUser);

        /** User id. */
        public id: number;

        /** User email. */
        public email: string;

        /**
         * Creates a new User instance using the specified properties.
         * @param [properties] Properties to set
         * @returns User instance
         */
        public static create(properties?: Proto.IUser): Proto.User;

        /**
         * Encodes the specified User message. Does not implicitly {@link Proto.User.verify|verify} messages.
         * @param message User message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Proto.IUser, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a User message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Proto.User;

        /**
         * Gets the default type url for User
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Volume. */
    interface IVolume {

        /** Volume id */
        id?: (number|null);

        /** Volume name */
        name?: (string|null);

        /** Volume description */
        description?: (string|null);

        /** Volume catchPhrase */
        catchPhrase?: (string|null);

        /** Volume releaseDate */
        releaseDate?: (string|null);

        /** Volume thumbnail */
        thumbnail?: (Proto.IImage|null);
    }

    /** Represents a Volume. */
    class Volume implements IVolume {

        /**
         * Constructs a new Volume.
         * @param [properties] Properties to set
         */
        constructor(properties?: Proto.IVolume);

        /** Volume id. */
        public id: number;

        /** Volume name. */
        public name: string;

        /** Volume description. */
        public description: string;

        /** Volume catchPhrase. */
        public catchPhrase: string;

        /** Volume releaseDate. */
        public releaseDate: string;

        /** Volume thumbnail. */
        public thumbnail?: (Proto.IImage|null);

        /**
         * Creates a new Volume instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Volume instance
         */
        public static create(properties?: Proto.IVolume): Proto.Volume;

        /**
         * Encodes the specified Volume message. Does not implicitly {@link Proto.Volume.verify|verify} messages.
         * @param message Volume message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Proto.IVolume, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Volume message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Volume
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Proto.Volume;

        /**
         * Gets the default type url for Volume
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a HistoryView. */
    interface IHistoryView {

        /** HistoryView titles */
        titles?: (Proto.ITitle[]|null);
    }

    /** Represents a HistoryView. */
    class HistoryView implements IHistoryView {

        /**
         * Constructs a new HistoryView.
         * @param [properties] Properties to set
         */
        constructor(properties?: Proto.IHistoryView);

        /** HistoryView titles. */
        public titles: Proto.ITitle[];

        /**
         * Creates a new HistoryView instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HistoryView instance
         */
        public static create(properties?: Proto.IHistoryView): Proto.HistoryView;

        /**
         * Encodes the specified HistoryView message. Does not implicitly {@link Proto.HistoryView.verify|verify} messages.
         * @param message HistoryView message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Proto.IHistoryView, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HistoryView message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HistoryView
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Proto.HistoryView;

        /**
         * Gets the default type url for HistoryView
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a TitleDetailView. */
    interface ITitleDetailView {

        /** TitleDetailView title */
        title?: (Proto.ITitle|null);

        /** TitleDetailView chapters */
        chapters?: (Proto.IChapter[]|null);

        /** TitleDetailView advertisement */
        advertisement?: (string|null);
    }

    /** Represents a TitleDetailView. */
    class TitleDetailView implements ITitleDetailView {

        /**
         * Constructs a new TitleDetailView.
         * @param [properties] Properties to set
         */
        constructor(properties?: Proto.ITitleDetailView);

        /** TitleDetailView title. */
        public title?: (Proto.ITitle|null);

        /** TitleDetailView chapters. */
        public chapters: Proto.IChapter[];

        /** TitleDetailView advertisement. */
        public advertisement: string;

        /**
         * Creates a new TitleDetailView instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TitleDetailView instance
         */
        public static create(properties?: Proto.ITitleDetailView): Proto.TitleDetailView;

        /**
         * Encodes the specified TitleDetailView message. Does not implicitly {@link Proto.TitleDetailView.verify|verify} messages.
         * @param message TitleDetailView message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Proto.ITitleDetailView, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TitleDetailView message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TitleDetailView
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Proto.TitleDetailView;

        /**
         * Gets the default type url for TitleDetailView
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a TopView. */
    interface ITopView {

        /** TopView banners */
        banners?: (Proto.IBanner[]|null);

        /** TopView updateTitles */
        updateTitles?: (Proto.ITitle[]|null);

        /** TopView newVolumes */
        newVolumes?: (Proto.IVolume[]|null);
    }

    /** Represents a TopView. */
    class TopView implements ITopView {

        /**
         * Constructs a new TopView.
         * @param [properties] Properties to set
         */
        constructor(properties?: Proto.ITopView);

        /** TopView banners. */
        public banners: Proto.IBanner[];

        /** TopView updateTitles. */
        public updateTitles: Proto.ITitle[];

        /** TopView newVolumes. */
        public newVolumes: Proto.IVolume[];

        /**
         * Creates a new TopView instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TopView instance
         */
        public static create(properties?: Proto.ITopView): Proto.TopView;

        /**
         * Encodes the specified TopView message. Does not implicitly {@link Proto.TopView.verify|verify} messages.
         * @param message TopView message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Proto.ITopView, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TopView message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TopView
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Proto.TopView;

        /**
         * Gets the default type url for TopView
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a UserView. */
    interface IUserView {

        /** UserView user */
        user?: (Proto.IUser|null);
    }

    /** Represents a UserView. */
    class UserView implements IUserView {

        /**
         * Constructs a new UserView.
         * @param [properties] Properties to set
         */
        constructor(properties?: Proto.IUserView);

        /** UserView user. */
        public user?: (Proto.IUser|null);

        /**
         * Creates a new UserView instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserView instance
         */
        public static create(properties?: Proto.IUserView): Proto.UserView;

        /**
         * Encodes the specified UserView message. Does not implicitly {@link Proto.UserView.verify|verify} messages.
         * @param message UserView message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Proto.IUserView, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserView message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserView
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Proto.UserView;

        /**
         * Gets the default type url for UserView
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ViewerView. */
    interface IViewerView {

        /** ViewerView pages */
        pages?: (Proto.IImage[]|null);

        /** ViewerView lastpage */
        lastpage?: (Proto.ViewerView.ILastPage|null);
    }

    /** Represents a ViewerView. */
    class ViewerView implements IViewerView {

        /**
         * Constructs a new ViewerView.
         * @param [properties] Properties to set
         */
        constructor(properties?: Proto.IViewerView);

        /** ViewerView pages. */
        public pages: Proto.IImage[];

        /** ViewerView lastpage. */
        public lastpage?: (Proto.ViewerView.ILastPage|null);

        /**
         * Creates a new ViewerView instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ViewerView instance
         */
        public static create(properties?: Proto.IViewerView): Proto.ViewerView;

        /**
         * Encodes the specified ViewerView message. Does not implicitly {@link Proto.ViewerView.verify|verify} messages.
         * @param message ViewerView message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Proto.IViewerView, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ViewerView message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ViewerView
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Proto.ViewerView;

        /**
         * Gets the default type url for ViewerView
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace ViewerView {

        /** Properties of a LastPage. */
        interface ILastPage {

            /** LastPage nextChapterId */
            nextChapterId?: (number|null);
        }

        /** Represents a LastPage. */
        class LastPage implements ILastPage {

            /**
             * Constructs a new LastPage.
             * @param [properties] Properties to set
             */
            constructor(properties?: Proto.ViewerView.ILastPage);

            /** LastPage nextChapterId. */
            public nextChapterId?: (number|null);

            /** LastPage _nextChapterId. */
            public _nextChapterId?: "nextChapterId";

            /**
             * Creates a new LastPage instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LastPage instance
             */
            public static create(properties?: Proto.ViewerView.ILastPage): Proto.ViewerView.LastPage;

            /**
             * Encodes the specified LastPage message. Does not implicitly {@link Proto.ViewerView.LastPage.verify|verify} messages.
             * @param message LastPage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Proto.ViewerView.ILastPage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LastPage message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LastPage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Proto.ViewerView.LastPage;

            /**
             * Gets the default type url for LastPage
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }
}
