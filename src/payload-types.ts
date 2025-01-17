/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
  auth: {
    users: UserAuthOperations;
    'club-member': ClubMemberAuthOperations;
  };
  collections: {
    media: Media;
    users: User;
    'sub-team-types': SubTeamType;
    'team-members': TeamMember;
    teams: Team;
    'sub-teams': SubTeam;
    events: Event;
    'event-tag': EventTag;
    'ribbon-tag': RibbonTag;
    'club-member': ClubMember;
    'payload-locked-documents': PayloadLockedDocument;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  collectionsJoins: {};
  collectionsSelect: {
    media: MediaSelect<false> | MediaSelect<true>;
    users: UsersSelect<false> | UsersSelect<true>;
    'sub-team-types': SubTeamTypesSelect<false> | SubTeamTypesSelect<true>;
    'team-members': TeamMembersSelect<false> | TeamMembersSelect<true>;
    teams: TeamsSelect<false> | TeamsSelect<true>;
    'sub-teams': SubTeamsSelect<false> | SubTeamsSelect<true>;
    events: EventsSelect<false> | EventsSelect<true>;
    'event-tag': EventTagSelect<false> | EventTagSelect<true>;
    'ribbon-tag': RibbonTagSelect<false> | RibbonTagSelect<true>;
    'club-member': ClubMemberSelect<false> | ClubMemberSelect<true>;
    'payload-locked-documents': PayloadLockedDocumentsSelect<false> | PayloadLockedDocumentsSelect<true>;
    'payload-preferences': PayloadPreferencesSelect<false> | PayloadPreferencesSelect<true>;
    'payload-migrations': PayloadMigrationsSelect<false> | PayloadMigrationsSelect<true>;
  };
  db: {
    defaultIDType: number;
  };
  globals: {};
  globalsSelect: {};
  locale: null;
  user:
    | (User & {
        collection: 'users';
      })
    | (ClubMember & {
        collection: 'club-member';
      });
  jobs: {
    tasks: unknown;
    workflows: unknown;
  };
}
export interface UserAuthOperations {
  forgotPassword: {
    email: string;
    password: string;
  };
  login: {
    email: string;
    password: string;
  };
  registerFirstUser: {
    email: string;
    password: string;
  };
  unlock: {
    email: string;
    password: string;
  };
}
export interface ClubMemberAuthOperations {
  forgotPassword: {
    email: string;
    password: string;
  };
  login: {
    email: string;
    password: string;
  };
  registerFirstUser: {
    email: string;
    password: string;
  };
  unlock: {
    email: string;
    password: string;
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media".
 */
export interface Media {
  id: number;
  alt?: string | null;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  thumbnailURL?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
  focalX?: number | null;
  focalY?: number | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface User {
  id: number;
  name?: string | null;
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "sub-team-types".
 */
export interface SubTeamType {
  id: number;
  name: string;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "team-members".
 */
export interface TeamMember {
  id: number;
  name: string;
  role: string;
  'membership-year': string;
  nameWithYear?: string | null;
  photo: number | Media;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "teams".
 */
export interface Team {
  id: number;
  name: string;
  year: string;
  nameWithYear?: string | null;
  'sub-teams'?: (number | SubTeam)[] | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "sub-teams".
 */
export interface SubTeam {
  id: number;
  name: string;
  type: number | SubTeamType;
  year: string;
  nameWithYear?: string | null;
  'prio-team-members'?:
    | {
        member?: (number | null) | TeamMember;
        id?: string | null;
      }[]
    | null;
  'team-members'?:
    | {
        member?: (number | null) | TeamMember;
        id?: string | null;
      }[]
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "events".
 */
export interface Event {
  id: number;
  title: string;
  date: string;
  endDate?: string | null;
  startTime?: string | null;
  endTime?: string | null;
  previewText: string;
  description: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  };
  registrationLink?: string | null;
  image: number | Media;
  eventTag: (number | EventTag)[];
  ribbonTag?: (number | null) | RibbonTag;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "event-tag".
 */
export interface EventTag {
  id: number;
  eventTag: string;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "ribbon-tag".
 */
export interface RibbonTag {
  id: number;
  ribbonTag: string;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "club-member".
 */
export interface ClubMember {
  id: number;
  firstName: string;
  lastName: string;
  roles?: 'club-member'[] | null;
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents".
 */
export interface PayloadLockedDocument {
  id: number;
  document?:
    | ({
        relationTo: 'media';
        value: number | Media;
      } | null)
    | ({
        relationTo: 'users';
        value: number | User;
      } | null)
    | ({
        relationTo: 'sub-team-types';
        value: number | SubTeamType;
      } | null)
    | ({
        relationTo: 'team-members';
        value: number | TeamMember;
      } | null)
    | ({
        relationTo: 'teams';
        value: number | Team;
      } | null)
    | ({
        relationTo: 'sub-teams';
        value: number | SubTeam;
      } | null)
    | ({
        relationTo: 'events';
        value: number | Event;
      } | null)
    | ({
        relationTo: 'event-tag';
        value: number | EventTag;
      } | null)
    | ({
        relationTo: 'ribbon-tag';
        value: number | RibbonTag;
      } | null)
    | ({
        relationTo: 'club-member';
        value: number | ClubMember;
      } | null);
  globalSlug?: string | null;
  user:
    | {
        relationTo: 'users';
        value: number | User;
      }
    | {
        relationTo: 'club-member';
        value: number | ClubMember;
      };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences".
 */
export interface PayloadPreference {
  id: number;
  user:
    | {
        relationTo: 'users';
        value: number | User;
      }
    | {
        relationTo: 'club-member';
        value: number | ClubMember;
      };
  key?: string | null;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations".
 */
export interface PayloadMigration {
  id: number;
  name?: string | null;
  batch?: number | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media_select".
 */
export interface MediaSelect<T extends boolean = true> {
  alt?: T;
  updatedAt?: T;
  createdAt?: T;
  url?: T;
  thumbnailURL?: T;
  filename?: T;
  mimeType?: T;
  filesize?: T;
  width?: T;
  height?: T;
  focalX?: T;
  focalY?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users_select".
 */
export interface UsersSelect<T extends boolean = true> {
  name?: T;
  updatedAt?: T;
  createdAt?: T;
  email?: T;
  resetPasswordToken?: T;
  resetPasswordExpiration?: T;
  salt?: T;
  hash?: T;
  loginAttempts?: T;
  lockUntil?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "sub-team-types_select".
 */
export interface SubTeamTypesSelect<T extends boolean = true> {
  name?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "team-members_select".
 */
export interface TeamMembersSelect<T extends boolean = true> {
  name?: T;
  role?: T;
  'membership-year'?: T;
  nameWithYear?: T;
  photo?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "teams_select".
 */
export interface TeamsSelect<T extends boolean = true> {
  name?: T;
  year?: T;
  nameWithYear?: T;
  'sub-teams'?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "sub-teams_select".
 */
export interface SubTeamsSelect<T extends boolean = true> {
  name?: T;
  type?: T;
  year?: T;
  nameWithYear?: T;
  'prio-team-members'?:
    | T
    | {
        member?: T;
        id?: T;
      };
  'team-members'?:
    | T
    | {
        member?: T;
        id?: T;
      };
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "events_select".
 */
export interface EventsSelect<T extends boolean = true> {
  title?: T;
  date?: T;
  endDate?: T;
  startTime?: T;
  endTime?: T;
  previewText?: T;
  description?: T;
  registrationLink?: T;
  image?: T;
  eventTag?: T;
  ribbonTag?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "event-tag_select".
 */
export interface EventTagSelect<T extends boolean = true> {
  eventTag?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "ribbon-tag_select".
 */
export interface RibbonTagSelect<T extends boolean = true> {
  ribbonTag?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "club-member_select".
 */
export interface ClubMemberSelect<T extends boolean = true> {
  firstName?: T;
  lastName?: T;
  roles?: T;
  updatedAt?: T;
  createdAt?: T;
  email?: T;
  resetPasswordToken?: T;
  resetPasswordExpiration?: T;
  salt?: T;
  hash?: T;
  loginAttempts?: T;
  lockUntil?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents_select".
 */
export interface PayloadLockedDocumentsSelect<T extends boolean = true> {
  document?: T;
  globalSlug?: T;
  user?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences_select".
 */
export interface PayloadPreferencesSelect<T extends boolean = true> {
  user?: T;
  key?: T;
  value?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations_select".
 */
export interface PayloadMigrationsSelect<T extends boolean = true> {
  name?: T;
  batch?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "auth".
 */
export interface Auth {
  [k: string]: unknown;
}


declare module 'payload' {
  export interface GeneratedTypes extends Config {}
}