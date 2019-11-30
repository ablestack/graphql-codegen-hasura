import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  /** 
 * The `GenericScalar` scalar type represents a generic
   * GraphQL scalar value that could be:
   * String, Boolean, Int, Float, List or Object.
 **/
  GenericScalar: any,
  /** 
 * The `DateTime` scalar type represents a DateTime
   * value as specified by
   * [iso8601](https://en.wikipedia.org/wiki/ISO_8601).
 **/
  DateTime: Date,
  /** 
 * Question jexl expression returning boolean.
   * 
   * Following transform can be used:
   * * answer - access answer of document by question slug
   * * mapby - map list by key. Helpful to work with table answers
   *   whereas an answer is a list of dicts.
   * 
   * Following context is available:
   * * form - access form of document
   * 
   * Examples:
   * * 'answer' == 'question-slug'|answer
   * * 'answer' in 'list-question-slug'|answer
   * * 'answer' in 'table-question-slug'|answer|mapby('column-question')
   * * 'form-slug' == form
 **/
  QuestionJexl: any,
  /** 
 * Group jexl represents a jexl expression returning group names.
   * 
   * Following transforms can be used:
   * * groups - return list of group names
   * 
   * Examples:
   * * ['group-name1', 'group-name2']|groups
 **/
  GroupJexl: any,
  /** 
 * Flow jexl represents a jexl expression returning task slugs.
   * 
   * Following transforms can be used:
   * * task - return single task
   * * tasks - return multiple tasks
   * 
   * Examples:
   * * 'task-slug'|task
   * * ['task-slug1', 'task-slug2']|tasks
 **/
  FlowJexl: any,
  uuid: any,
  jsonb: any,
  circle: any,
  polygon: any,
  timestamptz: any,
  /** 
 * Allows use of a JSON String for input / output from the GraphQL schema.
   * 
   * Use of this type is *not recommended* as you lose the benefits of having a defined, static
   * schema (one of the key benefits of GraphQL).
 **/
  JSONString: any,
  /** 
 * The `Date` scalar type represents a Date
   * value as specified by
   * [iso8601](https://en.wikipedia.org/wiki/ISO_8601).
 **/
  Date: any,
  /** The `Upload` scalar type represents a file upload. */
  Upload: any,
};

export type AddFormQuestionInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  form: Scalars['ID'],
  question: Scalars['ID'],
};

/** Add question at the end of form. */
export type AddFormQuestionPayload = {
   __typename?: 'AddFormQuestionPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  form?: Maybe<Form>,
};

export type AddWorkflowFlowInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  next: Scalars['FlowJexl'],
  tasks: Array<Maybe<Scalars['ID']>>,
  workflow: Scalars['ID'],
};

export type AddWorkflowFlowPayload = {
   __typename?: 'AddWorkflowFlowPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  workflow?: Maybe<Workflow>,
};

export type Answer = {
  createdAt: Scalars['DateTime'],
  createdByGroup?: Maybe<Scalars['String']>,
  createdByUser?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['ID']>,
  meta: Scalars['GenericScalar'],
  modifiedAt: Scalars['DateTime'],
  question: Question,
};

export type AnswerConnection = {
   __typename?: 'AnswerConnection',
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<AnswerEdge>>,
  /** Pagination data for this connection. */
  pageInfo: PageInfo,
  totalCount?: Maybe<Scalars['Int']>,
};

/** A Relay edge containing a `Answer` and its cursor. */
export type AnswerEdge = {
   __typename?: 'AnswerEdge',
  /** A cursor for use in pagination */
  cursor: Scalars['String'],
  /** The item at the end of the edge */
  node?: Maybe<Answer>,
};

export type AnswerFilterSetType = {
  createdByGroup?: Maybe<Scalars['String']>,
  createdByUser?: Maybe<Scalars['String']>,
  invert?: Maybe<Scalars['Boolean']>,
  metaHasKey?: Maybe<Scalars['String']>,
  metaValue?: Maybe<Array<Maybe<JsonValueFilterType>>>,
  orderBy?: Maybe<Array<Maybe<AnswerOrdering>>>,
  question?: Maybe<Scalars['ID']>,
  questions?: Maybe<Array<Maybe<Scalars['ID']>>>,
  search?: Maybe<Scalars['String']>,
};

export enum AnswerHierarchyMode {
  Direct = 'DIRECT',
  Family = 'FAMILY'
}

export enum AnswerLookupMode {
  Contains = 'CONTAINS',
  Exact = 'EXACT',
  Gt = 'GT',
  Gte = 'GTE',
  Icontains = 'ICONTAINS',
  Intersects = 'INTERSECTS',
  Lt = 'LT',
  Lte = 'LTE',
  Startswith = 'STARTSWITH'
}

/** An enumeration. */
export enum AnswerOrdering {
  /** Created at */
  CreatedAtAsc = 'CREATED_AT_ASC',
  /** Created at (descending) */
  CreatedAtDesc = 'CREATED_AT_DESC',
  /** Created by group */
  CreatedByGroupAsc = 'CREATED_BY_GROUP_ASC',
  /** Created by group (descending) */
  CreatedByGroupDesc = 'CREATED_BY_GROUP_DESC',
  /** Created by user */
  CreatedByUserAsc = 'CREATED_BY_USER_ASC',
  /** Created by user (descending) */
  CreatedByUserDesc = 'CREATED_BY_USER_DESC',
  /** Modified at */
  ModifiedAtAsc = 'MODIFIED_AT_ASC',
  /** Modified at (descending) */
  ModifiedAtDesc = 'MODIFIED_AT_DESC'
}

export type AnswerOrderSetType = {
  attribute?: Maybe<SortableAnswerAttributes>,
  direction?: Maybe<AscDesc>,
  meta?: Maybe<Scalars['String']>,
};

export enum AscDesc {
  Asc = 'ASC',
  Desc = 'DESC'
}

export enum CacheControlScope {
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export type CancelCaseInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
};

export type CancelCasePayload = {
   __typename?: 'CancelCasePayload',
  case?: Maybe<Case>,
  clientMutationId?: Maybe<Scalars['String']>,
};

export type Case = Node & {
   __typename?: 'Case',
  /** Time when case has either been canceled or completed */
  closedAt?: Maybe<Scalars['DateTime']>,
  closedByGroup?: Maybe<Scalars['String']>,
  closedByUser?: Maybe<Scalars['String']>,
  createdAt: Scalars['DateTime'],
  createdByGroup?: Maybe<Scalars['String']>,
  createdByUser?: Maybe<Scalars['String']>,
  document?: Maybe<Document>,
  /** The ID of the object. */
  id: Scalars['ID'],
  meta?: Maybe<Scalars['GenericScalar']>,
  modifiedAt: Scalars['DateTime'],
  parentWorkItem?: Maybe<WorkItem>,
  status: CaseStatus,
  workItems?: Maybe<WorkItemConnection>,
  workflow: Workflow,
};


export type CaseWorkItemsArgs = {
  addressedGroups?: Maybe<Array<Maybe<Scalars['String']>>>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  case?: Maybe<Scalars['ID']>,
  caseDocumentHasAnswer?: Maybe<Array<Maybe<HasAnswerFilterType>>>,
  caseMetaValue?: Maybe<Array<Maybe<JsonValueFilterType>>>,
  createdByGroup?: Maybe<Scalars['String']>,
  createdByUser?: Maybe<Scalars['String']>,
  documentHasAnswer?: Maybe<Array<Maybe<HasAnswerFilterType>>>,
  filter?: Maybe<Array<Maybe<WorkItemFilterSetType>>>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  metaHasKey?: Maybe<Scalars['String']>,
  metaValue?: Maybe<Array<Maybe<JsonValueFilterType>>>,
  order?: Maybe<Array<Maybe<WorkItemOrderSetType>>>,
  orderBy?: Maybe<Array<Maybe<WorkItemOrdering>>>,
  status?: Maybe<WorkItemStatusArgument>,
  task?: Maybe<Scalars['ID']>
};

export type CaseConnection = {
   __typename?: 'CaseConnection',
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<CaseEdge>>,
  /** Pagination data for this connection. */
  pageInfo: PageInfo,
  totalCount?: Maybe<Scalars['Int']>,
};

/** A Relay edge containing a `Case` and its cursor. */
export type CaseEdge = {
   __typename?: 'CaseEdge',
  /** A cursor for use in pagination */
  cursor: Scalars['String'],
  /** The item at the end of the edge */
  node?: Maybe<Case>,
};

export type CaseFilterSetType = {
  createdByGroup?: Maybe<Scalars['String']>,
  createdByUser?: Maybe<Scalars['String']>,
  documentForm?: Maybe<Scalars['String']>,
  hasAnswer?: Maybe<Array<Maybe<HasAnswerFilterType>>>,
  invert?: Maybe<Scalars['Boolean']>,
  metaHasKey?: Maybe<Scalars['String']>,
  metaValue?: Maybe<Array<Maybe<JsonValueFilterType>>>,
  orderBy?: Maybe<Array<Maybe<CaseOrdering>>>,
  orderByQuestionAnswerValue?: Maybe<Scalars['String']>,
  searchAnswers?: Maybe<Array<Maybe<SearchAnswersFilterType>>>,
  status?: Maybe<Array<Maybe<CaseStatusArgument>>>,
  workflow?: Maybe<Scalars['ID']>,
};

/** An enumeration. */
export enum CaseOrdering {
  /** Created at */
  CreatedAtAsc = 'CREATED_AT_ASC',
  /** Created at (descending) */
  CreatedAtDesc = 'CREATED_AT_DESC',
  /** Created by group */
  CreatedByGroupAsc = 'CREATED_BY_GROUP_ASC',
  /** Created by group (descending) */
  CreatedByGroupDesc = 'CREATED_BY_GROUP_DESC',
  /** Created by user */
  CreatedByUserAsc = 'CREATED_BY_USER_ASC',
  /** Created by user (descending) */
  CreatedByUserDesc = 'CREATED_BY_USER_DESC',
  /** Modified at */
  ModifiedAtAsc = 'MODIFIED_AT_ASC',
  /** Modified at (descending) */
  ModifiedAtDesc = 'MODIFIED_AT_DESC',
  /** Status */
  StatusAsc = 'STATUS_ASC',
  /** Status (descending) */
  StatusDesc = 'STATUS_DESC'
}

export type CaseOrderSetType = {
  attribute?: Maybe<SortableCaseAttributes>,
  direction?: Maybe<AscDesc>,
  documentAnswer?: Maybe<Scalars['String']>,
  meta?: Maybe<Scalars['String']>,
};

/** An enumeration. */
export enum CaseStatus {
  /** Case is cancelled. */
  Canceled = 'CANCELED',
  /** Case is done. */
  Completed = 'COMPLETED',
  /** Case is running and work items need to be completed. */
  Running = 'RUNNING'
}

/** An enumeration. */
export enum CaseStatusArgument {
  /** Case is cancelled. */
  Canceled = 'CANCELED',
  /** Case is done. */
  Completed = 'COMPLETED',
  /** Case is running and work items need to be completed. */
  Running = 'RUNNING'
}

export type ChoiceQuestion = Node & Question & {
   __typename?: 'ChoiceQuestion',
  createdAt: Scalars['DateTime'],
  createdByGroup?: Maybe<Scalars['String']>,
  createdByUser?: Maybe<Scalars['String']>,
  forms?: Maybe<FormConnection>,
  /** The ID of the object. */
  id: Scalars['ID'],
  infoText?: Maybe<Scalars['String']>,
  isArchived: Scalars['Boolean'],
  isHidden: Scalars['QuestionJexl'],
  /** Required expression is only evaluated when question is not hidden. */
  isRequired: Scalars['QuestionJexl'],
  label: Scalars['String'],
  meta: Scalars['GenericScalar'],
  modifiedAt: Scalars['DateTime'],
  options?: Maybe<OptionConnection>,
  slug: Scalars['String'],
  source?: Maybe<Question>,
};


export type ChoiceQuestionFormsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  createdByGroup?: Maybe<Scalars['String']>,
  createdByUser?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  isArchived?: Maybe<Scalars['Boolean']>,
  isPublished?: Maybe<Scalars['Boolean']>,
  last?: Maybe<Scalars['Int']>,
  metaHasKey?: Maybe<Scalars['String']>,
  metaValue?: Maybe<Array<Maybe<JsonValueFilterType>>>,
  name?: Maybe<Scalars['String']>,
  orderBy?: Maybe<Array<Maybe<FormOrdering>>>,
  search?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
  slugs?: Maybe<Array<Maybe<Scalars['String']>>>
};


export type ChoiceQuestionOptionsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  createdByGroup?: Maybe<Scalars['String']>,
  createdByUser?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  isArchived?: Maybe<Scalars['Boolean']>,
  label?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  metaHasKey?: Maybe<Scalars['String']>,
  metaValue?: Maybe<Array<Maybe<JsonValueFilterType>>>,
  orderBy?: Maybe<Array<Maybe<OptionOrdering>>>,
  search?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>
};


/** expression to compare columns of type circle. All fields are combined with logical 'AND'. */
export type Circle_Comparison_Exp = {
  _eq?: Maybe<Scalars['circle']>,
  _gt?: Maybe<Scalars['circle']>,
  _gte?: Maybe<Scalars['circle']>,
  _in?: Maybe<Array<Maybe<Scalars['circle']>>>,
  _is_null?: Maybe<Scalars['Boolean']>,
  _lt?: Maybe<Scalars['circle']>,
  _lte?: Maybe<Scalars['circle']>,
  _neq?: Maybe<Scalars['circle']>,
  _nin?: Maybe<Array<Maybe<Scalars['circle']>>>,
};

export type CompleteTaskFormTask = Node & Task & {
   __typename?: 'CompleteTaskFormTask',
  addressGroups?: Maybe<Scalars['GroupJexl']>,
  createdAt: Scalars['DateTime'],
  createdByGroup?: Maybe<Scalars['String']>,
  createdByUser?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  form: Form,
  /** The ID of the object. */
  id: Scalars['ID'],
  isArchived: Scalars['Boolean'],
  isMultipleInstance: Scalars['Boolean'],
  /** Time in seconds task may take to be processed. */
  leadTime?: Maybe<Scalars['Int']>,
  meta: Scalars['GenericScalar'],
  modifiedAt: Scalars['DateTime'],
  name: Scalars['String'],
  slug: Scalars['String'],
  type: TaskType,
};

export type CompleteWorkflowFormTask = Node & Task & {
   __typename?: 'CompleteWorkflowFormTask',
  addressGroups?: Maybe<Scalars['GroupJexl']>,
  createdAt: Scalars['DateTime'],
  createdByGroup?: Maybe<Scalars['String']>,
  createdByUser?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  /** The ID of the object. */
  id: Scalars['ID'],
  isArchived: Scalars['Boolean'],
  isMultipleInstance: Scalars['Boolean'],
  /** Time in seconds task may take to be processed. */
  leadTime?: Maybe<Scalars['Int']>,
  meta: Scalars['GenericScalar'],
  modifiedAt: Scalars['DateTime'],
  name: Scalars['String'],
  slug: Scalars['String'],
  type: TaskType,
};

export type CompleteWorkItemInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
};

export type CompleteWorkItemPayload = {
   __typename?: 'CompleteWorkItemPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  workItem?: Maybe<WorkItem>,
};

/** conflict action */
export enum Conflict_Action {
  /** ignore the insert on this row */
  Ignore = 'ignore',
  /** update the row with the given values */
  Update = 'update'
}

export type CopyFormInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  isPublished?: Maybe<Scalars['Boolean']>,
  name: Scalars['String'],
  slug: Scalars['String'],
  source: Scalars['ID'],
};

export type CopyFormPayload = {
   __typename?: 'CopyFormPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  form?: Maybe<Form>,
};

export type CopyOptionInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  label: Scalars['String'],
  slug: Scalars['String'],
  source: Scalars['ID'],
};

export type CopyOptionPayload = {
   __typename?: 'CopyOptionPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  option?: Maybe<Option>,
};

export type CopyQuestionInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  label: Scalars['String'],
  slug: Scalars['String'],
  source: Scalars['ID'],
};

export type CopyQuestionPayload = {
   __typename?: 'CopyQuestionPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  question?: Maybe<Question>,
};

export type CreateWorkItemInput = {
  /** Offer work item to be processed by a group of users, such are not committed to process it though. */
  addressedGroups?: Maybe<Array<Maybe<Scalars['String']>>>,
  /** Users responsible to undertake given work item. */
  assignedUsers?: Maybe<Array<Maybe<Scalars['String']>>>,
  case: Scalars['ID'],
  clientMutationId?: Maybe<Scalars['String']>,
  deadline?: Maybe<Scalars['DateTime']>,
  meta?: Maybe<Scalars['JSONString']>,
  multipleInstanceTask: Scalars['ID'],
};

export type CreateWorkItemPayload = {
   __typename?: 'CreateWorkItemPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  workItem?: Maybe<WorkItem>,
};

export type DataSource = {
   __typename?: 'DataSource',
  info?: Maybe<Scalars['String']>,
  name: Scalars['String'],
};

export type DataSourceConnection = {
   __typename?: 'DataSourceConnection',
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<DataSourceEdge>>,
  /** Pagination data for this connection. */
  pageInfo: PageInfo,
  totalCount?: Maybe<Scalars['Int']>,
};

export type DataSourceData = {
   __typename?: 'DataSourceData',
  label: Scalars['String'],
  slug: Scalars['String'],
};

export type DataSourceDataConnection = {
   __typename?: 'DataSourceDataConnection',
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<DataSourceDataEdge>>,
  /** Pagination data for this connection. */
  pageInfo: PageInfo,
  totalCount?: Maybe<Scalars['Int']>,
};

/** A Relay edge containing a `DataSourceData` and its cursor. */
export type DataSourceDataEdge = {
   __typename?: 'DataSourceDataEdge',
  /** A cursor for use in pagination */
  cursor: Scalars['String'],
  /** The item at the end of the edge */
  node?: Maybe<DataSourceData>,
};

/** A Relay edge containing a `DataSource` and its cursor. */
export type DataSourceEdge = {
   __typename?: 'DataSourceEdge',
  /** A cursor for use in pagination */
  cursor: Scalars['String'],
  /** The item at the end of the edge */
  node?: Maybe<DataSource>,
};


export type DateAnswer = Node & Answer & {
   __typename?: 'DateAnswer',
  createdAt: Scalars['DateTime'],
  createdByGroup?: Maybe<Scalars['String']>,
  createdByUser?: Maybe<Scalars['String']>,
  date?: Maybe<Scalars['Date']>,
  /** The ID of the object. */
  id: Scalars['ID'],
  meta: Scalars['GenericScalar'],
  modifiedAt: Scalars['DateTime'],
  question: Question,
  value: Scalars['Date'],
};

export type DateQuestion = Node & Question & {
   __typename?: 'DateQuestion',
  createdAt: Scalars['DateTime'],
  createdByGroup?: Maybe<Scalars['String']>,
  createdByUser?: Maybe<Scalars['String']>,
  forms?: Maybe<FormConnection>,
  /** The ID of the object. */
  id: Scalars['ID'],
  infoText?: Maybe<Scalars['String']>,
  isArchived: Scalars['Boolean'],
  isHidden: Scalars['QuestionJexl'],
  /** Required expression is only evaluated when question is not hidden. */
  isRequired: Scalars['QuestionJexl'],
  label: Scalars['String'],
  meta: Scalars['GenericScalar'],
  modifiedAt: Scalars['DateTime'],
  slug: Scalars['String'],
  source?: Maybe<Question>,
};


export type DateQuestionFormsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  createdByGroup?: Maybe<Scalars['String']>,
  createdByUser?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  isArchived?: Maybe<Scalars['Boolean']>,
  isPublished?: Maybe<Scalars['Boolean']>,
  last?: Maybe<Scalars['Int']>,
  metaHasKey?: Maybe<Scalars['String']>,
  metaValue?: Maybe<Array<Maybe<JsonValueFilterType>>>,
  name?: Maybe<Scalars['String']>,
  orderBy?: Maybe<Array<Maybe<FormOrdering>>>,
  search?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
  slugs?: Maybe<Array<Maybe<Scalars['String']>>>
};


export type Document = Node & {
   __typename?: 'Document',
  answers?: Maybe<AnswerConnection>,
  case?: Maybe<Case>,
  createdAt: Scalars['DateTime'],
  createdByGroup?: Maybe<Scalars['String']>,
  createdByUser?: Maybe<Scalars['String']>,
  form: Form,
  /** The ID of the object. */
  id: Scalars['ID'],
  meta?: Maybe<Scalars['GenericScalar']>,
  modifiedAt: Scalars['DateTime'],
  workItem?: Maybe<WorkItem>,
};


export type DocumentAnswersArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  createdByGroup?: Maybe<Scalars['String']>,
  createdByUser?: Maybe<Scalars['String']>,
  filter?: Maybe<Array<Maybe<AnswerFilterSetType>>>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  metaHasKey?: Maybe<Scalars['String']>,
  metaValue?: Maybe<Array<Maybe<JsonValueFilterType>>>,
  order?: Maybe<Array<Maybe<AnswerOrderSetType>>>,
  orderBy?: Maybe<Array<Maybe<AnswerOrdering>>>,
  question?: Maybe<Scalars['ID']>,
  questions?: Maybe<Array<Maybe<Scalars['ID']>>>,
  search?: Maybe<Scalars['String']>
};

export type DocumentConnection = {
   __typename?: 'DocumentConnection',
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<DocumentEdge>>,
  /** Pagination data for this connection. */
  pageInfo: PageInfo,
  totalCount?: Maybe<Scalars['Int']>,
};

/** A Relay edge containing a `Document` and its cursor. */
export type DocumentEdge = {
   __typename?: 'DocumentEdge',
  /** A cursor for use in pagination */
  cursor: Scalars['String'],
  /** The item at the end of the edge */
  node?: Maybe<Document>,
};

export type DocumentFilterSetType = {
  createdByGroup?: Maybe<Scalars['String']>,
  createdByUser?: Maybe<Scalars['String']>,
  form?: Maybe<Scalars['ID']>,
  forms?: Maybe<Array<Maybe<Scalars['ID']>>>,
  hasAnswer?: Maybe<Array<Maybe<HasAnswerFilterType>>>,
  id?: Maybe<Scalars['ID']>,
  invert?: Maybe<Scalars['Boolean']>,
  metaHasKey?: Maybe<Scalars['String']>,
  metaValue?: Maybe<Array<Maybe<JsonValueFilterType>>>,
  orderBy?: Maybe<Array<Maybe<DocumentOrdering>>>,
  rootDocument?: Maybe<Scalars['ID']>,
  search?: Maybe<Scalars['String']>,
  searchAnswers?: Maybe<Array<Maybe<SearchAnswersFilterType>>>,
};

/** An enumeration. */
export enum DocumentOrdering {
  /** Created at */
  CreatedAtAsc = 'CREATED_AT_ASC',
  /** Created at (descending) */
  CreatedAtDesc = 'CREATED_AT_DESC',
  /** Created by group */
  CreatedByGroupAsc = 'CREATED_BY_GROUP_ASC',
  /** Created by group (descending) */
  CreatedByGroupDesc = 'CREATED_BY_GROUP_DESC',
  /** Created by user */
  CreatedByUserAsc = 'CREATED_BY_USER_ASC',
  /** Created by user (descending) */
  CreatedByUserDesc = 'CREATED_BY_USER_DESC',
  /** Modified at */
  ModifiedAtAsc = 'MODIFIED_AT_ASC',
  /** Modified at (descending) */
  ModifiedAtDesc = 'MODIFIED_AT_DESC'
}

export type DocumentOrderSetType = {
  answerValue?: Maybe<Scalars['String']>,
  attribute?: Maybe<SortableDocumentAttributes>,
  direction?: Maybe<AscDesc>,
  meta?: Maybe<Scalars['String']>,
};

export type DocumentValidityConnection = {
   __typename?: 'DocumentValidityConnection',
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<DocumentValidityEdge>>,
  /** Pagination data for this connection. */
  pageInfo: PageInfo,
  totalCount?: Maybe<Scalars['Int']>,
};

/** A Relay edge containing a `DocumentValidity` and its cursor. */
export type DocumentValidityEdge = {
   __typename?: 'DocumentValidityEdge',
  /** A cursor for use in pagination */
  cursor: Scalars['String'],
  /** The item at the end of the edge */
  node?: Maybe<ValidationResult>,
};

export type DynamicChoiceQuestion = Node & Question & {
   __typename?: 'DynamicChoiceQuestion',
  createdAt: Scalars['DateTime'],
  createdByGroup?: Maybe<Scalars['String']>,
  createdByUser?: Maybe<Scalars['String']>,
  dataSource: Scalars['String'],
  forms?: Maybe<FormConnection>,
  /** The ID of the object. */
  id: Scalars['ID'],
  infoText?: Maybe<Scalars['String']>,
  isArchived: Scalars['Boolean'],
  isHidden: Scalars['QuestionJexl'],
  /** Required expression is only evaluated when question is not hidden. */
  isRequired: Scalars['QuestionJexl'],
  label: Scalars['String'],
  meta: Scalars['GenericScalar'],
  modifiedAt: Scalars['DateTime'],
  options?: Maybe<DataSourceDataConnection>,
  slug: Scalars['String'],
  source?: Maybe<Question>,
};


export type DynamicChoiceQuestionFormsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  createdByGroup?: Maybe<Scalars['String']>,
  createdByUser?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  isArchived?: Maybe<Scalars['Boolean']>,
  isPublished?: Maybe<Scalars['Boolean']>,
  last?: Maybe<Scalars['Int']>,
  metaHasKey?: Maybe<Scalars['String']>,
  metaValue?: Maybe<Array<Maybe<JsonValueFilterType>>>,
  name?: Maybe<Scalars['String']>,
  orderBy?: Maybe<Array<Maybe<FormOrdering>>>,
  search?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
  slugs?: Maybe<Array<Maybe<Scalars['String']>>>
};


export type DynamicChoiceQuestionOptionsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export type DynamicMultipleChoiceQuestion = Node & Question & {
   __typename?: 'DynamicMultipleChoiceQuestion',
  createdAt: Scalars['DateTime'],
  createdByGroup?: Maybe<Scalars['String']>,
  createdByUser?: Maybe<Scalars['String']>,
  dataSource: Scalars['String'],
  forms?: Maybe<FormConnection>,
  /** The ID of the object. */
  id: Scalars['ID'],
  infoText?: Maybe<Scalars['String']>,
  isArchived: Scalars['Boolean'],
  isHidden: Scalars['QuestionJexl'],
  /** Required expression is only evaluated when question is not hidden. */
  isRequired: Scalars['QuestionJexl'],
  label: Scalars['String'],
  meta: Scalars['GenericScalar'],
  modifiedAt: Scalars['DateTime'],
  options?: Maybe<DataSourceDataConnection>,
  slug: Scalars['String'],
  source?: Maybe<Question>,
};


export type DynamicMultipleChoiceQuestionFormsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  createdByGroup?: Maybe<Scalars['String']>,
  createdByUser?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  isArchived?: Maybe<Scalars['Boolean']>,
  isPublished?: Maybe<Scalars['Boolean']>,
  last?: Maybe<Scalars['Int']>,
  metaHasKey?: Maybe<Scalars['String']>,
  metaValue?: Maybe<Array<Maybe<JsonValueFilterType>>>,
  name?: Maybe<Scalars['String']>,
  orderBy?: Maybe<Array<Maybe<FormOrdering>>>,
  search?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
  slugs?: Maybe<Array<Maybe<Scalars['String']>>>
};


export type DynamicMultipleChoiceQuestionOptionsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export type File = Node & {
   __typename?: 'File',
  answer?: Maybe<FileAnswer>,
  createdAt: Scalars['DateTime'],
  createdByGroup?: Maybe<Scalars['String']>,
  createdByUser?: Maybe<Scalars['String']>,
  downloadUrl?: Maybe<Scalars['String']>,
  /** The ID of the object. */
  id: Scalars['ID'],
  metadata?: Maybe<Scalars['GenericScalar']>,
  modifiedAt: Scalars['DateTime'],
  name: Scalars['String'],
  uploadUrl?: Maybe<Scalars['String']>,
};

export type FileAnswer = Node & Answer & {
   __typename?: 'FileAnswer',
  createdAt: Scalars['DateTime'],
  createdByGroup?: Maybe<Scalars['String']>,
  createdByUser?: Maybe<Scalars['String']>,
  file?: Maybe<File>,
  /** The ID of the object. */
  id: Scalars['ID'],
  meta: Scalars['GenericScalar'],
  modifiedAt: Scalars['DateTime'],
  question: Question,
  value: File,
};

export type FileQuestion = Node & Question & {
   __typename?: 'FileQuestion',
  createdAt: Scalars['DateTime'],
  createdByGroup?: Maybe<Scalars['String']>,
  createdByUser?: Maybe<Scalars['String']>,
  forms?: Maybe<FormConnection>,
  /** The ID of the object. */
  id: Scalars['ID'],
  infoText?: Maybe<Scalars['String']>,
  isArchived: Scalars['Boolean'],
  isHidden: Scalars['QuestionJexl'],
  /** Required expression is only evaluated when question is not hidden. */
  isRequired: Scalars['QuestionJexl'],
  label: Scalars['String'],
  meta: Scalars['GenericScalar'],
  modifiedAt: Scalars['DateTime'],
  slug: Scalars['String'],
  source?: Maybe<Question>,
};


export type FileQuestionFormsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  createdByGroup?: Maybe<Scalars['String']>,
  createdByUser?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  isArchived?: Maybe<Scalars['Boolean']>,
  isPublished?: Maybe<Scalars['Boolean']>,
  last?: Maybe<Scalars['Int']>,
  metaHasKey?: Maybe<Scalars['String']>,
  metaValue?: Maybe<Array<Maybe<JsonValueFilterType>>>,
  name?: Maybe<Scalars['String']>,
  orderBy?: Maybe<Array<Maybe<FormOrdering>>>,
  search?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
  slugs?: Maybe<Array<Maybe<Scalars['String']>>>
};

export type FloatAnswer = Node & Answer & {
   __typename?: 'FloatAnswer',
  createdAt: Scalars['DateTime'],
  createdByGroup?: Maybe<Scalars['String']>,
  createdByUser?: Maybe<Scalars['String']>,
  /** The ID of the object. */
  id: Scalars['ID'],
  meta: Scalars['GenericScalar'],
  modifiedAt: Scalars['DateTime'],
  question: Question,
  value: Scalars['Float'],
};

export type FloatQuestion = Node & Question & {
   __typename?: 'FloatQuestion',
  createdAt: Scalars['DateTime'],
  createdByGroup?: Maybe<Scalars['String']>,
  createdByUser?: Maybe<Scalars['String']>,
  forms?: Maybe<FormConnection>,
  /** The ID of the object. */
  id: Scalars['ID'],
  infoText?: Maybe<Scalars['String']>,
  isArchived: Scalars['Boolean'],
  isHidden: Scalars['QuestionJexl'],
  /** Required expression is only evaluated when question is not hidden. */
  isRequired: Scalars['QuestionJexl'],
  label: Scalars['String'],
  maxValue?: Maybe<Scalars['Float']>,
  meta: Scalars['GenericScalar'],
  minValue?: Maybe<Scalars['Float']>,
  modifiedAt: Scalars['DateTime'],
  placeholder?: Maybe<Scalars['String']>,
  slug: Scalars['String'],
  source?: Maybe<Question>,
};


export type FloatQuestionFormsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  createdByGroup?: Maybe<Scalars['String']>,
  createdByUser?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  isArchived?: Maybe<Scalars['Boolean']>,
  isPublished?: Maybe<Scalars['Boolean']>,
  last?: Maybe<Scalars['Int']>,
  metaHasKey?: Maybe<Scalars['String']>,
  metaValue?: Maybe<Array<Maybe<JsonValueFilterType>>>,
  name?: Maybe<Scalars['String']>,
  orderBy?: Maybe<Array<Maybe<FormOrdering>>>,
  search?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
  slugs?: Maybe<Array<Maybe<Scalars['String']>>>
};

export type Flow = Node & {
   __typename?: 'Flow',
  createdAt: Scalars['DateTime'],
  createdByGroup?: Maybe<Scalars['String']>,
  createdByUser?: Maybe<Scalars['String']>,
  /** The ID of the object. */
  id: Scalars['ID'],
  modifiedAt: Scalars['DateTime'],
  next: Scalars['FlowJexl'],
  tasks: Array<Maybe<Task>>,
};

export type FlowConnection = {
   __typename?: 'FlowConnection',
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<FlowEdge>>,
  /** Pagination data for this connection. */
  pageInfo: PageInfo,
  totalCount?: Maybe<Scalars['Int']>,
};

/** A Relay edge containing a `Flow` and its cursor. */
export type FlowEdge = {
   __typename?: 'FlowEdge',
  /** A cursor for use in pagination */
  cursor: Scalars['String'],
  /** The item at the end of the edge */
  node?: Maybe<Flow>,
};

export type FlowFilterSetType = {
  createdByGroup?: Maybe<Scalars['String']>,
  createdByUser?: Maybe<Scalars['String']>,
  invert?: Maybe<Scalars['Boolean']>,
  task?: Maybe<Scalars['ID']>,
};


export type Form = Node & {
   __typename?: 'Form',
  createdAt: Scalars['DateTime'],
  createdByGroup?: Maybe<Scalars['String']>,
  createdByUser?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  documents: DocumentConnection,
  /** The ID of the object. */
  id: Scalars['ID'],
  isArchived: Scalars['Boolean'],
  isPublished: Scalars['Boolean'],
  meta?: Maybe<Scalars['GenericScalar']>,
  modifiedAt: Scalars['DateTime'],
  name: Scalars['String'],
  questions?: Maybe<QuestionConnection>,
  slug: Scalars['String'],
  /** Reference this form has been copied from */
  source?: Maybe<Form>,
};


export type FormDocumentsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type FormQuestionsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  createdByGroup?: Maybe<Scalars['String']>,
  createdByUser?: Maybe<Scalars['String']>,
  excludeForms?: Maybe<Array<Maybe<Scalars['ID']>>>,
  first?: Maybe<Scalars['Int']>,
  isArchived?: Maybe<Scalars['Boolean']>,
  isHidden?: Maybe<Scalars['String']>,
  isRequired?: Maybe<Scalars['String']>,
  label?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  metaHasKey?: Maybe<Scalars['String']>,
  metaValue?: Maybe<Array<Maybe<JsonValueFilterType>>>,
  orderBy?: Maybe<Array<Maybe<QuestionOrdering>>>,
  search?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
  slugs?: Maybe<Array<Maybe<Scalars['String']>>>
};

export type FormatValidator = {
   __typename?: 'FormatValidator',
  errorMsg: Scalars['String'],
  name: Scalars['String'],
  regex: Scalars['String'],
  slug: Scalars['String'],
};

export type FormatValidatorConnection = {
   __typename?: 'FormatValidatorConnection',
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<FormatValidatorEdge>>,
  /** Pagination data for this connection. */
  pageInfo: PageInfo,
  totalCount?: Maybe<Scalars['Int']>,
};

/** A Relay edge containing a `FormatValidator` and its cursor. */
export type FormatValidatorEdge = {
   __typename?: 'FormatValidatorEdge',
  /** A cursor for use in pagination */
  cursor: Scalars['String'],
  /** The item at the end of the edge */
  node?: Maybe<FormatValidator>,
};

export type FormConnection = {
   __typename?: 'FormConnection',
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<FormEdge>>,
  /** Pagination data for this connection. */
  pageInfo: PageInfo,
  totalCount?: Maybe<Scalars['Int']>,
};

/** A Relay edge containing a `Form` and its cursor. */
export type FormEdge = {
   __typename?: 'FormEdge',
  /** A cursor for use in pagination */
  cursor: Scalars['String'],
  /** The item at the end of the edge */
  node?: Maybe<Form>,
};

export type FormFilterSetType = {
  createdByGroup?: Maybe<Scalars['String']>,
  createdByUser?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  invert?: Maybe<Scalars['Boolean']>,
  isArchived?: Maybe<Scalars['Boolean']>,
  isPublished?: Maybe<Scalars['Boolean']>,
  metaHasKey?: Maybe<Scalars['String']>,
  metaValue?: Maybe<Array<Maybe<JsonValueFilterType>>>,
  name?: Maybe<Scalars['String']>,
  orderBy?: Maybe<Array<Maybe<FormOrdering>>>,
  search?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
  slugs?: Maybe<Array<Maybe<Scalars['String']>>>,
};

/** An enumeration. */
export enum FormOrdering {
  /** Created at */
  CreatedAtAsc = 'CREATED_AT_ASC',
  /** Created at (descending) */
  CreatedAtDesc = 'CREATED_AT_DESC',
  /** Created by group */
  CreatedByGroupAsc = 'CREATED_BY_GROUP_ASC',
  /** Created by group (descending) */
  CreatedByGroupDesc = 'CREATED_BY_GROUP_DESC',
  /** Created by user */
  CreatedByUserAsc = 'CREATED_BY_USER_ASC',
  /** Created by user (descending) */
  CreatedByUserDesc = 'CREATED_BY_USER_DESC',
  /** Modified at */
  ModifiedAtAsc = 'MODIFIED_AT_ASC',
  /** Modified at (descending) */
  ModifiedAtDesc = 'MODIFIED_AT_DESC',
  /** Name */
  NameAsc = 'NAME_ASC',
  /** Name (descending) */
  NameDesc = 'NAME_DESC'
}

export type FormOrderSetType = {
  attribute?: Maybe<SortableFormAttributes>,
  direction?: Maybe<AscDesc>,
  meta?: Maybe<Scalars['String']>,
};

export type FormQuestion = Node & Question & {
   __typename?: 'FormQuestion',
  createdAt: Scalars['DateTime'],
  createdByGroup?: Maybe<Scalars['String']>,
  createdByUser?: Maybe<Scalars['String']>,
  forms?: Maybe<FormConnection>,
  /** The ID of the object. */
  id: Scalars['ID'],
  infoText?: Maybe<Scalars['String']>,
  isArchived: Scalars['Boolean'],
  isHidden: Scalars['QuestionJexl'],
  /** Required expression is only evaluated when question is not hidden. */
  isRequired: Scalars['QuestionJexl'],
  label: Scalars['String'],
  meta: Scalars['GenericScalar'],
  modifiedAt: Scalars['DateTime'],
  slug: Scalars['String'],
  source?: Maybe<Question>,
  /** Form referenced in a FormQuestion */
  subForm?: Maybe<Form>,
};


export type FormQuestionFormsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  createdByGroup?: Maybe<Scalars['String']>,
  createdByUser?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  isArchived?: Maybe<Scalars['Boolean']>,
  isPublished?: Maybe<Scalars['Boolean']>,
  last?: Maybe<Scalars['Int']>,
  metaHasKey?: Maybe<Scalars['String']>,
  metaValue?: Maybe<Array<Maybe<JsonValueFilterType>>>,
  name?: Maybe<Scalars['String']>,
  orderBy?: Maybe<Array<Maybe<FormOrdering>>>,
  search?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
  slugs?: Maybe<Array<Maybe<Scalars['String']>>>
};



/** Lookup type to search document structures. */
export type HasAnswerFilterType = {
  hierarchy?: Maybe<AnswerHierarchyMode>,
  lookup?: Maybe<AnswerLookupMode>,
  question: Scalars['String'],
  value: Scalars['GenericScalar'],
};

/** expression to compare columns of type integer. All fields are combined with logical 'AND'. */
export type Integer_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>,
  _gt?: Maybe<Scalars['Int']>,
  _gte?: Maybe<Scalars['Int']>,
  _in?: Maybe<Array<Maybe<Scalars['Int']>>>,
  _is_null?: Maybe<Scalars['Boolean']>,
  _lt?: Maybe<Scalars['Int']>,
  _lte?: Maybe<Scalars['Int']>,
  _neq?: Maybe<Scalars['Int']>,
  _nin?: Maybe<Array<Maybe<Scalars['Int']>>>,
};

export type IntegerAnswer = Node & Answer & {
   __typename?: 'IntegerAnswer',
  createdAt: Scalars['DateTime'],
  createdByGroup?: Maybe<Scalars['String']>,
  createdByUser?: Maybe<Scalars['String']>,
  /** The ID of the object. */
  id: Scalars['ID'],
  meta: Scalars['GenericScalar'],
  modifiedAt: Scalars['DateTime'],
  question: Question,
  value: Scalars['Int'],
};

export type IntegerQuestion = Node & Question & {
   __typename?: 'IntegerQuestion',
  createdAt: Scalars['DateTime'],
  createdByGroup?: Maybe<Scalars['String']>,
  createdByUser?: Maybe<Scalars['String']>,
  forms?: Maybe<FormConnection>,
  /** The ID of the object. */
  id: Scalars['ID'],
  infoText?: Maybe<Scalars['String']>,
  isArchived: Scalars['Boolean'],
  isHidden: Scalars['QuestionJexl'],
  /** Required expression is only evaluated when question is not hidden. */
  isRequired: Scalars['QuestionJexl'],
  label: Scalars['String'],
  maxValue?: Maybe<Scalars['Int']>,
  meta: Scalars['GenericScalar'],
  minValue?: Maybe<Scalars['Int']>,
  modifiedAt: Scalars['DateTime'],
  placeholder?: Maybe<Scalars['String']>,
  slug: Scalars['String'],
  source?: Maybe<Question>,
};


export type IntegerQuestionFormsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  createdByGroup?: Maybe<Scalars['String']>,
  createdByUser?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  isArchived?: Maybe<Scalars['Boolean']>,
  isPublished?: Maybe<Scalars['Boolean']>,
  last?: Maybe<Scalars['Int']>,
  metaHasKey?: Maybe<Scalars['String']>,
  metaValue?: Maybe<Array<Maybe<JsonValueFilterType>>>,
  name?: Maybe<Scalars['String']>,
  orderBy?: Maybe<Array<Maybe<FormOrdering>>>,
  search?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
  slugs?: Maybe<Array<Maybe<Scalars['String']>>>
};


/** expression to compare columns of type jsonb. All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  /** is the column contained in the given json value */
  _contained_in?: Maybe<Scalars['jsonb']>,
  /** does the column contain the given json value at the top level */
  _contains?: Maybe<Scalars['jsonb']>,
  _eq?: Maybe<Scalars['jsonb']>,
  _gt?: Maybe<Scalars['jsonb']>,
  _gte?: Maybe<Scalars['jsonb']>,
  /** does the string exist as a top-level key in the column */
  _has_key?: Maybe<Scalars['String']>,
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: Maybe<Array<Scalars['String']>>,
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: Maybe<Array<Scalars['String']>>,
  _in?: Maybe<Array<Maybe<Scalars['jsonb']>>>,
  _is_null?: Maybe<Scalars['Boolean']>,
  _lt?: Maybe<Scalars['jsonb']>,
  _lte?: Maybe<Scalars['jsonb']>,
  _neq?: Maybe<Scalars['jsonb']>,
  _nin?: Maybe<Array<Maybe<Scalars['jsonb']>>>,
};

export enum JsonLookupMode {
  Contains = 'CONTAINS',
  Exact = 'EXACT',
  Gt = 'GT',
  Gte = 'GTE',
  Icontains = 'ICONTAINS',
  Lt = 'LT',
  Lte = 'LTE',
  Startswith = 'STARTSWITH'
}


export type JsonValueFilterType = {
  key: Scalars['String'],
  lookup?: Maybe<JsonLookupMode>,
  value: Scalars['GenericScalar'],
};

export type ListAnswer = Node & Answer & {
   __typename?: 'ListAnswer',
  createdAt: Scalars['DateTime'],
  createdByGroup?: Maybe<Scalars['String']>,
  createdByUser?: Maybe<Scalars['String']>,
  /** The ID of the object. */
  id: Scalars['ID'],
  meta: Scalars['GenericScalar'],
  modifiedAt: Scalars['DateTime'],
  question: Question,
  value: Array<Maybe<Scalars['String']>>,
};

export type MultipleChoiceQuestion = Node & Question & {
   __typename?: 'MultipleChoiceQuestion',
  createdAt: Scalars['DateTime'],
  createdByGroup?: Maybe<Scalars['String']>,
  createdByUser?: Maybe<Scalars['String']>,
  forms?: Maybe<FormConnection>,
  /** The ID of the object. */
  id: Scalars['ID'],
  infoText?: Maybe<Scalars['String']>,
  isArchived: Scalars['Boolean'],
  isHidden: Scalars['QuestionJexl'],
  /** Required expression is only evaluated when question is not hidden. */
  isRequired: Scalars['QuestionJexl'],
  label: Scalars['String'],
  meta: Scalars['GenericScalar'],
  modifiedAt: Scalars['DateTime'],
  options?: Maybe<OptionConnection>,
  slug: Scalars['String'],
  source?: Maybe<Question>,
  staticContent?: Maybe<Scalars['String']>,
};


export type MultipleChoiceQuestionFormsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  createdByGroup?: Maybe<Scalars['String']>,
  createdByUser?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  isArchived?: Maybe<Scalars['Boolean']>,
  isPublished?: Maybe<Scalars['Boolean']>,
  last?: Maybe<Scalars['Int']>,
  metaHasKey?: Maybe<Scalars['String']>,
  metaValue?: Maybe<Array<Maybe<JsonValueFilterType>>>,
  name?: Maybe<Scalars['String']>,
  orderBy?: Maybe<Array<Maybe<FormOrdering>>>,
  search?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
  slugs?: Maybe<Array<Maybe<Scalars['String']>>>
};


export type MultipleChoiceQuestionOptionsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  createdByGroup?: Maybe<Scalars['String']>,
  createdByUser?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  isArchived?: Maybe<Scalars['Boolean']>,
  label?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  metaHasKey?: Maybe<Scalars['String']>,
  metaValue?: Maybe<Array<Maybe<JsonValueFilterType>>>,
  orderBy?: Maybe<Array<Maybe<OptionOrdering>>>,
  search?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>
};

export type Mutation = {
   __typename?: 'Mutation',
  /** Add question at the end of form. */
  addFormQuestion?: Maybe<AddFormQuestionPayload>,
  addWorkflowFlow?: Maybe<AddWorkflowFlowPayload>,
  cancelCase?: Maybe<CancelCasePayload>,
  completeWorkItem?: Maybe<CompleteWorkItemPayload>,
  copyForm?: Maybe<CopyFormPayload>,
  copyOption?: Maybe<CopyOptionPayload>,
  copyQuestion?: Maybe<CopyQuestionPayload>,
  createWorkItem?: Maybe<CreateWorkItemPayload>,
  removeAnswer?: Maybe<RemoveAnswerPayload>,
  removeDocument?: Maybe<RemoveDocumentPayload>,
  removeFlow?: Maybe<RemoveFlowPayload>,
  removeFormQuestion?: Maybe<RemoveFormQuestionPayload>,
  reorderFormQuestions?: Maybe<ReorderFormQuestionsPayload>,
  saveCase?: Maybe<SaveCasePayload>,
  saveChoiceQuestion?: Maybe<SaveChoiceQuestionPayload>,
  saveCompleteTaskFormTask?: Maybe<SaveCompleteTaskFormTaskPayload>,
  saveCompleteWorkflowFormTask?: Maybe<SaveCompleteWorkflowFormTaskPayload>,
  saveDateQuestion?: Maybe<SaveDateQuestionPayload>,
  saveDocument?: Maybe<SaveDocumentPayload>,
  saveDocumentDateAnswer?: Maybe<SaveDocumentDateAnswerPayload>,
  saveDocumentFileAnswer?: Maybe<SaveDocumentFileAnswerPayload>,
  saveDocumentFloatAnswer?: Maybe<SaveDocumentFloatAnswerPayload>,
  saveDocumentIntegerAnswer?: Maybe<SaveDocumentIntegerAnswerPayload>,
  saveDocumentListAnswer?: Maybe<SaveDocumentListAnswerPayload>,
  saveDocumentStringAnswer?: Maybe<SaveDocumentStringAnswerPayload>,
  saveDocumentTableAnswer?: Maybe<SaveDocumentTableAnswerPayload>,
  saveDynamicChoiceQuestion?: Maybe<SaveDynamicChoiceQuestionPayload>,
  saveDynamicMultipleChoiceQuestion?: Maybe<SaveDynamicMultipleChoiceQuestionPayload>,
  saveFileQuestion?: Maybe<SaveFileQuestionPayload>,
  saveFloatQuestion?: Maybe<SaveFloatQuestionPayload>,
  saveForm?: Maybe<SaveFormPayload>,
  saveFormQuestion?: Maybe<SaveFormQuestionPayload>,
  saveIntegerQuestion?: Maybe<SaveIntegerQuestionPayload>,
  saveMultipleChoiceQuestion?: Maybe<SaveMultipleChoiceQuestionPayload>,
  saveOption?: Maybe<SaveOptionPayload>,
  saveSimpleTask?: Maybe<SaveSimpleTaskPayload>,
  saveStaticQuestion?: Maybe<SaveStaticQuestionPayload>,
  saveTableQuestion?: Maybe<SaveTableQuestionPayload>,
  saveTextQuestion?: Maybe<SaveTextQuestionPayload>,
  saveTextareaQuestion?: Maybe<SaveTextareaQuestionPayload>,
  saveWorkItem?: Maybe<SaveWorkItemPayload>,
  saveWorkflow?: Maybe<SaveWorkflowPayload>,
  startCase?: Maybe<StartCasePayload>,
};


export type MutationAddFormQuestionArgs = {
  input: AddFormQuestionInput
};


export type MutationAddWorkflowFlowArgs = {
  input: AddWorkflowFlowInput
};


export type MutationCancelCaseArgs = {
  input: CancelCaseInput
};


export type MutationCompleteWorkItemArgs = {
  input: CompleteWorkItemInput
};


export type MutationCopyFormArgs = {
  input: CopyFormInput
};


export type MutationCopyOptionArgs = {
  input: CopyOptionInput
};


export type MutationCopyQuestionArgs = {
  input: CopyQuestionInput
};


export type MutationCreateWorkItemArgs = {
  input: CreateWorkItemInput
};


export type MutationRemoveAnswerArgs = {
  input: RemoveAnswerInput
};


export type MutationRemoveDocumentArgs = {
  input: RemoveDocumentInput
};


export type MutationRemoveFlowArgs = {
  input: RemoveFlowInput
};


export type MutationRemoveFormQuestionArgs = {
  input: RemoveFormQuestionInput
};


export type MutationReorderFormQuestionsArgs = {
  input: ReorderFormQuestionsInput
};


export type MutationSaveCaseArgs = {
  input: SaveCaseInput
};


export type MutationSaveChoiceQuestionArgs = {
  input: SaveChoiceQuestionInput
};


export type MutationSaveCompleteTaskFormTaskArgs = {
  input: SaveCompleteTaskFormTaskInput
};


export type MutationSaveCompleteWorkflowFormTaskArgs = {
  input: SaveCompleteWorkflowFormTaskInput
};


export type MutationSaveDateQuestionArgs = {
  input: SaveDateQuestionInput
};


export type MutationSaveDocumentArgs = {
  input: SaveDocumentInput
};


export type MutationSaveDocumentDateAnswerArgs = {
  input: SaveDocumentDateAnswerInput
};


export type MutationSaveDocumentFileAnswerArgs = {
  input: SaveDocumentFileAnswerInput
};


export type MutationSaveDocumentFloatAnswerArgs = {
  input: SaveDocumentFloatAnswerInput
};


export type MutationSaveDocumentIntegerAnswerArgs = {
  input: SaveDocumentIntegerAnswerInput
};


export type MutationSaveDocumentListAnswerArgs = {
  input: SaveDocumentListAnswerInput
};


export type MutationSaveDocumentStringAnswerArgs = {
  input: SaveDocumentStringAnswerInput
};


export type MutationSaveDocumentTableAnswerArgs = {
  input: SaveDocumentTableAnswerInput
};


export type MutationSaveDynamicChoiceQuestionArgs = {
  input: SaveDynamicChoiceQuestionInput
};


export type MutationSaveDynamicMultipleChoiceQuestionArgs = {
  input: SaveDynamicMultipleChoiceQuestionInput
};


export type MutationSaveFileQuestionArgs = {
  input: SaveFileQuestionInput
};


export type MutationSaveFloatQuestionArgs = {
  input: SaveFloatQuestionInput
};


export type MutationSaveFormArgs = {
  input: SaveFormInput
};


export type MutationSaveFormQuestionArgs = {
  input: SaveFormQuestionInput
};


export type MutationSaveIntegerQuestionArgs = {
  input: SaveIntegerQuestionInput
};


export type MutationSaveMultipleChoiceQuestionArgs = {
  input: SaveMultipleChoiceQuestionInput
};


export type MutationSaveOptionArgs = {
  input: SaveOptionInput
};


export type MutationSaveSimpleTaskArgs = {
  input: SaveSimpleTaskInput
};


export type MutationSaveStaticQuestionArgs = {
  input: SaveStaticQuestionInput
};


export type MutationSaveTableQuestionArgs = {
  input: SaveTableQuestionInput
};


export type MutationSaveTextQuestionArgs = {
  input: SaveTextQuestionInput
};


export type MutationSaveTextareaQuestionArgs = {
  input: SaveTextareaQuestionInput
};


export type MutationSaveWorkItemArgs = {
  input: SaveWorkItemInput
};


export type MutationSaveWorkflowArgs = {
  input: SaveWorkflowInput
};


export type MutationStartCaseArgs = {
  input: StartCaseInput
};

/** mutation root */
export type Mutation_Root = {
   __typename?: 'mutation_root',
  /** Add question at the end of form. */
  addFormQuestion?: Maybe<AddFormQuestionPayload>,
  addWorkflowFlow?: Maybe<AddWorkflowFlowPayload>,
  cancelCase?: Maybe<CancelCasePayload>,
  completeWorkItem?: Maybe<CompleteWorkItemPayload>,
  copyForm?: Maybe<CopyFormPayload>,
  copyOption?: Maybe<CopyOptionPayload>,
  copyQuestion?: Maybe<CopyQuestionPayload>,
  createWorkItem?: Maybe<CreateWorkItemPayload>,
  /** delete data from the table: "observation" */
  delete_observation?: Maybe<Observation_Mutation_Response>,
  /** delete data from the table: "p" */
  delete_p?: Maybe<P_Mutation_Response>,
  /** delete data from the table: "patient" */
  delete_patient?: Maybe<Patient_Mutation_Response>,
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>,
  /** delete data from the table: "vehicle" */
  delete_vehicle?: Maybe<Vehicle_Mutation_Response>,
  /** delete data from the table: "vehicle_location" */
  delete_vehicle_location?: Maybe<Vehicle_Location_Mutation_Response>,
  /** insert data into the table: "observation" */
  insert_observation?: Maybe<Observation_Mutation_Response>,
  /** insert data into the table: "p" */
  insert_p?: Maybe<P_Mutation_Response>,
  /** insert data into the table: "patient" */
  insert_patient?: Maybe<Patient_Mutation_Response>,
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>,
  /** insert data into the table: "vehicle" */
  insert_vehicle?: Maybe<Vehicle_Mutation_Response>,
  /** insert data into the table: "vehicle_location" */
  insert_vehicle_location?: Maybe<Vehicle_Location_Mutation_Response>,
  removeAnswer?: Maybe<RemoveAnswerPayload>,
  removeDocument?: Maybe<RemoveDocumentPayload>,
  removeFlow?: Maybe<RemoveFlowPayload>,
  removeFormQuestion?: Maybe<RemoveFormQuestionPayload>,
  reorderFormQuestions?: Maybe<ReorderFormQuestionsPayload>,
  saveCase?: Maybe<SaveCasePayload>,
  saveChoiceQuestion?: Maybe<SaveChoiceQuestionPayload>,
  saveCompleteTaskFormTask?: Maybe<SaveCompleteTaskFormTaskPayload>,
  saveCompleteWorkflowFormTask?: Maybe<SaveCompleteWorkflowFormTaskPayload>,
  saveDateQuestion?: Maybe<SaveDateQuestionPayload>,
  saveDocument?: Maybe<SaveDocumentPayload>,
  saveDocumentDateAnswer?: Maybe<SaveDocumentDateAnswerPayload>,
  saveDocumentFileAnswer?: Maybe<SaveDocumentFileAnswerPayload>,
  saveDocumentFloatAnswer?: Maybe<SaveDocumentFloatAnswerPayload>,
  saveDocumentIntegerAnswer?: Maybe<SaveDocumentIntegerAnswerPayload>,
  saveDocumentListAnswer?: Maybe<SaveDocumentListAnswerPayload>,
  saveDocumentStringAnswer?: Maybe<SaveDocumentStringAnswerPayload>,
  saveDocumentTableAnswer?: Maybe<SaveDocumentTableAnswerPayload>,
  saveDynamicChoiceQuestion?: Maybe<SaveDynamicChoiceQuestionPayload>,
  saveDynamicMultipleChoiceQuestion?: Maybe<SaveDynamicMultipleChoiceQuestionPayload>,
  saveFileQuestion?: Maybe<SaveFileQuestionPayload>,
  saveFloatQuestion?: Maybe<SaveFloatQuestionPayload>,
  saveForm?: Maybe<SaveFormPayload>,
  saveFormQuestion?: Maybe<SaveFormQuestionPayload>,
  saveIntegerQuestion?: Maybe<SaveIntegerQuestionPayload>,
  saveMultipleChoiceQuestion?: Maybe<SaveMultipleChoiceQuestionPayload>,
  saveOption?: Maybe<SaveOptionPayload>,
  saveSimpleTask?: Maybe<SaveSimpleTaskPayload>,
  saveStaticQuestion?: Maybe<SaveStaticQuestionPayload>,
  saveTableQuestion?: Maybe<SaveTableQuestionPayload>,
  saveTextQuestion?: Maybe<SaveTextQuestionPayload>,
  saveTextareaQuestion?: Maybe<SaveTextareaQuestionPayload>,
  saveWorkItem?: Maybe<SaveWorkItemPayload>,
  saveWorkflow?: Maybe<SaveWorkflowPayload>,
  startCase?: Maybe<StartCasePayload>,
  /** update data of the table: "observation" */
  update_observation?: Maybe<Observation_Mutation_Response>,
  /** update data of the table: "p" */
  update_p?: Maybe<P_Mutation_Response>,
  /** update data of the table: "patient" */
  update_patient?: Maybe<Patient_Mutation_Response>,
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>,
  /** update data of the table: "vehicle" */
  update_vehicle?: Maybe<Vehicle_Mutation_Response>,
  /** update data of the table: "vehicle_location" */
  update_vehicle_location?: Maybe<Vehicle_Location_Mutation_Response>,
};


/** mutation root */
export type Mutation_RootAddFormQuestionArgs = {
  input: AddFormQuestionInput
};


/** mutation root */
export type Mutation_RootAddWorkflowFlowArgs = {
  input: AddWorkflowFlowInput
};


/** mutation root */
export type Mutation_RootCancelCaseArgs = {
  input: CancelCaseInput
};


/** mutation root */
export type Mutation_RootCompleteWorkItemArgs = {
  input: CompleteWorkItemInput
};


/** mutation root */
export type Mutation_RootCopyFormArgs = {
  input: CopyFormInput
};


/** mutation root */
export type Mutation_RootCopyOptionArgs = {
  input: CopyOptionInput
};


/** mutation root */
export type Mutation_RootCopyQuestionArgs = {
  input: CopyQuestionInput
};


/** mutation root */
export type Mutation_RootCreateWorkItemArgs = {
  input: CreateWorkItemInput
};


/** mutation root */
export type Mutation_RootDelete_ObservationArgs = {
  where: Observation_Bool_Exp
};


/** mutation root */
export type Mutation_RootDelete_PArgs = {
  where: P_Bool_Exp
};


/** mutation root */
export type Mutation_RootDelete_PatientArgs = {
  where: Patient_Bool_Exp
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp
};


/** mutation root */
export type Mutation_RootDelete_VehicleArgs = {
  where: Vehicle_Bool_Exp
};


/** mutation root */
export type Mutation_RootDelete_Vehicle_LocationArgs = {
  where: Vehicle_Location_Bool_Exp
};


/** mutation root */
export type Mutation_RootInsert_ObservationArgs = {
  objects: Array<Observation_Insert_Input>,
  on_conflict?: Maybe<Observation_On_Conflict>
};


/** mutation root */
export type Mutation_RootInsert_PArgs = {
  objects: Array<P_Insert_Input>,
  on_conflict?: Maybe<P_On_Conflict>
};


/** mutation root */
export type Mutation_RootInsert_PatientArgs = {
  objects: Array<Patient_Insert_Input>,
  on_conflict?: Maybe<Patient_On_Conflict>
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>,
  on_conflict?: Maybe<Users_On_Conflict>
};


/** mutation root */
export type Mutation_RootInsert_VehicleArgs = {
  objects: Array<Vehicle_Insert_Input>,
  on_conflict?: Maybe<Vehicle_On_Conflict>
};


/** mutation root */
export type Mutation_RootInsert_Vehicle_LocationArgs = {
  objects: Array<Vehicle_Location_Insert_Input>,
  on_conflict?: Maybe<Vehicle_Location_On_Conflict>
};


/** mutation root */
export type Mutation_RootRemoveAnswerArgs = {
  input: RemoveAnswerInput
};


/** mutation root */
export type Mutation_RootRemoveDocumentArgs = {
  input: RemoveDocumentInput
};


/** mutation root */
export type Mutation_RootRemoveFlowArgs = {
  input: RemoveFlowInput
};


/** mutation root */
export type Mutation_RootRemoveFormQuestionArgs = {
  input: RemoveFormQuestionInput
};


/** mutation root */
export type Mutation_RootReorderFormQuestionsArgs = {
  input: ReorderFormQuestionsInput
};


/** mutation root */
export type Mutation_RootSaveCaseArgs = {
  input: SaveCaseInput
};


/** mutation root */
export type Mutation_RootSaveChoiceQuestionArgs = {
  input: SaveChoiceQuestionInput
};


/** mutation root */
export type Mutation_RootSaveCompleteTaskFormTaskArgs = {
  input: SaveCompleteTaskFormTaskInput
};


/** mutation root */
export type Mutation_RootSaveCompleteWorkflowFormTaskArgs = {
  input: SaveCompleteWorkflowFormTaskInput
};


/** mutation root */
export type Mutation_RootSaveDateQuestionArgs = {
  input: SaveDateQuestionInput
};


/** mutation root */
export type Mutation_RootSaveDocumentArgs = {
  input: SaveDocumentInput
};


/** mutation root */
export type Mutation_RootSaveDocumentDateAnswerArgs = {
  input: SaveDocumentDateAnswerInput
};


/** mutation root */
export type Mutation_RootSaveDocumentFileAnswerArgs = {
  input: SaveDocumentFileAnswerInput
};


/** mutation root */
export type Mutation_RootSaveDocumentFloatAnswerArgs = {
  input: SaveDocumentFloatAnswerInput
};


/** mutation root */
export type Mutation_RootSaveDocumentIntegerAnswerArgs = {
  input: SaveDocumentIntegerAnswerInput
};


/** mutation root */
export type Mutation_RootSaveDocumentListAnswerArgs = {
  input: SaveDocumentListAnswerInput
};


/** mutation root */
export type Mutation_RootSaveDocumentStringAnswerArgs = {
  input: SaveDocumentStringAnswerInput
};


/** mutation root */
export type Mutation_RootSaveDocumentTableAnswerArgs = {
  input: SaveDocumentTableAnswerInput
};


/** mutation root */
export type Mutation_RootSaveDynamicChoiceQuestionArgs = {
  input: SaveDynamicChoiceQuestionInput
};


/** mutation root */
export type Mutation_RootSaveDynamicMultipleChoiceQuestionArgs = {
  input: SaveDynamicMultipleChoiceQuestionInput
};


/** mutation root */
export type Mutation_RootSaveFileQuestionArgs = {
  input: SaveFileQuestionInput
};


/** mutation root */
export type Mutation_RootSaveFloatQuestionArgs = {
  input: SaveFloatQuestionInput
};


/** mutation root */
export type Mutation_RootSaveFormArgs = {
  input: SaveFormInput
};


/** mutation root */
export type Mutation_RootSaveFormQuestionArgs = {
  input: SaveFormQuestionInput
};


/** mutation root */
export type Mutation_RootSaveIntegerQuestionArgs = {
  input: SaveIntegerQuestionInput
};


/** mutation root */
export type Mutation_RootSaveMultipleChoiceQuestionArgs = {
  input: SaveMultipleChoiceQuestionInput
};


/** mutation root */
export type Mutation_RootSaveOptionArgs = {
  input: SaveOptionInput
};


/** mutation root */
export type Mutation_RootSaveSimpleTaskArgs = {
  input: SaveSimpleTaskInput
};


/** mutation root */
export type Mutation_RootSaveStaticQuestionArgs = {
  input: SaveStaticQuestionInput
};


/** mutation root */
export type Mutation_RootSaveTableQuestionArgs = {
  input: SaveTableQuestionInput
};


/** mutation root */
export type Mutation_RootSaveTextQuestionArgs = {
  input: SaveTextQuestionInput
};


/** mutation root */
export type Mutation_RootSaveTextareaQuestionArgs = {
  input: SaveTextareaQuestionInput
};


/** mutation root */
export type Mutation_RootSaveWorkItemArgs = {
  input: SaveWorkItemInput
};


/** mutation root */
export type Mutation_RootSaveWorkflowArgs = {
  input: SaveWorkflowInput
};


/** mutation root */
export type Mutation_RootStartCaseArgs = {
  input: StartCaseInput
};


/** mutation root */
export type Mutation_RootUpdate_ObservationArgs = {
  _append?: Maybe<Observation_Append_Input>,
  _delete_at_path?: Maybe<Observation_Delete_At_Path_Input>,
  _delete_elem?: Maybe<Observation_Delete_Elem_Input>,
  _delete_key?: Maybe<Observation_Delete_Key_Input>,
  _prepend?: Maybe<Observation_Prepend_Input>,
  _set?: Maybe<Observation_Set_Input>,
  where: Observation_Bool_Exp
};


/** mutation root */
export type Mutation_RootUpdate_PArgs = {
  _inc?: Maybe<P_Inc_Input>,
  _set?: Maybe<P_Set_Input>,
  where: P_Bool_Exp
};


/** mutation root */
export type Mutation_RootUpdate_PatientArgs = {
  _append?: Maybe<Patient_Append_Input>,
  _delete_at_path?: Maybe<Patient_Delete_At_Path_Input>,
  _delete_elem?: Maybe<Patient_Delete_Elem_Input>,
  _delete_key?: Maybe<Patient_Delete_Key_Input>,
  _prepend?: Maybe<Patient_Prepend_Input>,
  _set?: Maybe<Patient_Set_Input>,
  where: Patient_Bool_Exp
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _inc?: Maybe<Users_Inc_Input>,
  _set?: Maybe<Users_Set_Input>,
  where: Users_Bool_Exp
};


/** mutation root */
export type Mutation_RootUpdate_VehicleArgs = {
  _set?: Maybe<Vehicle_Set_Input>,
  where: Vehicle_Bool_Exp
};


/** mutation root */
export type Mutation_RootUpdate_Vehicle_LocationArgs = {
  _inc?: Maybe<Vehicle_Location_Inc_Input>,
  _set?: Maybe<Vehicle_Location_Set_Input>,
  where: Vehicle_Location_Bool_Exp
};

/** An object with an ID */
export type Node = {
  /** The ID of the object. */
  id: Scalars['ID'],
};

/** columns and relationships of "observation" */
export type Observation = {
   __typename?: 'observation',
  id: Scalars['uuid'],
  resource: Scalars['jsonb'],
};


/** columns and relationships of "observation" */
export type ObservationResourceArgs = {
  path?: Maybe<Scalars['String']>
};

/** aggregated selection of "observation" */
export type Observation_Aggregate = {
   __typename?: 'observation_aggregate',
  aggregate?: Maybe<Observation_Aggregate_Fields>,
  nodes: Array<Observation>,
};

/** aggregate fields of "observation" */
export type Observation_Aggregate_Fields = {
   __typename?: 'observation_aggregate_fields',
  count?: Maybe<Scalars['Int']>,
};


/** aggregate fields of "observation" */
export type Observation_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Observation_Select_Column>>,
  distinct?: Maybe<Scalars['Boolean']>
};

/** order by aggregate values of table "observation" */
export type Observation_Aggregate_Order_By = {
  count?: Maybe<Order_By>,
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Observation_Append_Input = {
  resource?: Maybe<Scalars['jsonb']>,
};

/** input type for inserting array relation for remote table "observation" */
export type Observation_Arr_Rel_Insert_Input = {
  data: Array<Observation_Insert_Input>,
  on_conflict?: Maybe<Observation_On_Conflict>,
};

/** Boolean expression to filter rows from the table "observation". All fields are combined with a logical 'AND'. */
export type Observation_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Observation_Bool_Exp>>>,
  _not?: Maybe<Observation_Bool_Exp>,
  _or?: Maybe<Array<Maybe<Observation_Bool_Exp>>>,
  id?: Maybe<Uuid_Comparison_Exp>,
  resource?: Maybe<Jsonb_Comparison_Exp>,
};

/** unique or primary key constraints on table "observation" */
export enum Observation_Constraint {
  /** unique or primary key constraint */
  ObservationPkey = 'observation_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Observation_Delete_At_Path_Input = {
  resource?: Maybe<Array<Maybe<Scalars['String']>>>,
};

/** 
 * delete the array element with specified index (negative integers count from the
 * end). throws an error if top level container is not an array
 **/
export type Observation_Delete_Elem_Input = {
  resource?: Maybe<Scalars['Int']>,
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Observation_Delete_Key_Input = {
  resource?: Maybe<Scalars['String']>,
};

/** input type for inserting data into table "observation" */
export type Observation_Insert_Input = {
  id?: Maybe<Scalars['uuid']>,
  resource?: Maybe<Scalars['jsonb']>,
};

/** response of any mutation on the table "observation" */
export type Observation_Mutation_Response = {
   __typename?: 'observation_mutation_response',
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'],
  /** data of the affected rows by the mutation */
  returning: Array<Observation>,
};

/** input type for inserting object relation for remote table "observation" */
export type Observation_Obj_Rel_Insert_Input = {
  data: Observation_Insert_Input,
  on_conflict?: Maybe<Observation_On_Conflict>,
};

/** on conflict condition type for table "observation" */
export type Observation_On_Conflict = {
  constraint: Observation_Constraint,
  update_columns: Array<Observation_Update_Column>,
};

/** ordering options when selecting data from "observation" */
export type Observation_Order_By = {
  id?: Maybe<Order_By>,
  resource?: Maybe<Order_By>,
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Observation_Prepend_Input = {
  resource?: Maybe<Scalars['jsonb']>,
};

/** select columns of table "observation" */
export enum Observation_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Resource = 'resource'
}

/** input type for updating data in table "observation" */
export type Observation_Set_Input = {
  id?: Maybe<Scalars['uuid']>,
  resource?: Maybe<Scalars['jsonb']>,
};

/** update columns of table "observation" */
export enum Observation_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Resource = 'resource'
}

export type Option = Node & {
   __typename?: 'Option',
  createdAt: Scalars['DateTime'],
  createdByGroup?: Maybe<Scalars['String']>,
  createdByUser?: Maybe<Scalars['String']>,
  /** The ID of the object. */
  id: Scalars['ID'],
  isArchived: Scalars['Boolean'],
  label: Scalars['String'],
  meta?: Maybe<Scalars['GenericScalar']>,
  modifiedAt: Scalars['DateTime'],
  slug: Scalars['String'],
  /** Reference this option has been copied from */
  source?: Maybe<Option>,
};

export type OptionConnection = {
   __typename?: 'OptionConnection',
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<OptionEdge>>,
  /** Pagination data for this connection. */
  pageInfo: PageInfo,
  totalCount?: Maybe<Scalars['Int']>,
};

/** A Relay edge containing a `Option` and its cursor. */
export type OptionEdge = {
   __typename?: 'OptionEdge',
  /** A cursor for use in pagination */
  cursor: Scalars['String'],
  /** The item at the end of the edge */
  node?: Maybe<Option>,
};

/** An enumeration. */
export enum OptionOrdering {
  /** Created at */
  CreatedAtAsc = 'CREATED_AT_ASC',
  /** Created at (descending) */
  CreatedAtDesc = 'CREATED_AT_DESC',
  /** Created by group */
  CreatedByGroupAsc = 'CREATED_BY_GROUP_ASC',
  /** Created by group (descending) */
  CreatedByGroupDesc = 'CREATED_BY_GROUP_DESC',
  /** Created by user */
  CreatedByUserAsc = 'CREATED_BY_USER_ASC',
  /** Created by user (descending) */
  CreatedByUserDesc = 'CREATED_BY_USER_DESC',
  /** Label */
  LabelAsc = 'LABEL_ASC',
  /** Label (descending) */
  LabelDesc = 'LABEL_DESC',
  /** Modified at */
  ModifiedAtAsc = 'MODIFIED_AT_ASC',
  /** Modified at (descending) */
  ModifiedAtDesc = 'MODIFIED_AT_DESC'
}

/** column ordering options */
export enum Order_By {
  /** in the ascending order, nulls last */
  Asc = 'asc',
  /** in the ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in the descending order, nulls first */
  Desc = 'desc',
  /** in the descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in the descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "p" */
export type P = {
   __typename?: 'p',
  circle: Scalars['circle'],
  id: Scalars['Int'],
  poly: Scalars['polygon'],
};

/** aggregated selection of "p" */
export type P_Aggregate = {
   __typename?: 'p_aggregate',
  aggregate?: Maybe<P_Aggregate_Fields>,
  nodes: Array<P>,
};

/** aggregate fields of "p" */
export type P_Aggregate_Fields = {
   __typename?: 'p_aggregate_fields',
  avg?: Maybe<P_Avg_Fields>,
  count?: Maybe<Scalars['Int']>,
  max?: Maybe<P_Max_Fields>,
  min?: Maybe<P_Min_Fields>,
  stddev?: Maybe<P_Stddev_Fields>,
  stddev_pop?: Maybe<P_Stddev_Pop_Fields>,
  stddev_samp?: Maybe<P_Stddev_Samp_Fields>,
  sum?: Maybe<P_Sum_Fields>,
  var_pop?: Maybe<P_Var_Pop_Fields>,
  var_samp?: Maybe<P_Var_Samp_Fields>,
  variance?: Maybe<P_Variance_Fields>,
};


/** aggregate fields of "p" */
export type P_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<P_Select_Column>>,
  distinct?: Maybe<Scalars['Boolean']>
};

/** order by aggregate values of table "p" */
export type P_Aggregate_Order_By = {
  avg?: Maybe<P_Avg_Order_By>,
  count?: Maybe<Order_By>,
  max?: Maybe<P_Max_Order_By>,
  min?: Maybe<P_Min_Order_By>,
  stddev?: Maybe<P_Stddev_Order_By>,
  stddev_pop?: Maybe<P_Stddev_Pop_Order_By>,
  stddev_samp?: Maybe<P_Stddev_Samp_Order_By>,
  sum?: Maybe<P_Sum_Order_By>,
  var_pop?: Maybe<P_Var_Pop_Order_By>,
  var_samp?: Maybe<P_Var_Samp_Order_By>,
  variance?: Maybe<P_Variance_Order_By>,
};

/** input type for inserting array relation for remote table "p" */
export type P_Arr_Rel_Insert_Input = {
  data: Array<P_Insert_Input>,
  on_conflict?: Maybe<P_On_Conflict>,
};

/** aggregate avg on columns */
export type P_Avg_Fields = {
   __typename?: 'p_avg_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by avg() on columns of table "p" */
export type P_Avg_Order_By = {
  id?: Maybe<Order_By>,
};

/** Boolean expression to filter rows from the table "p". All fields are combined with a logical 'AND'. */
export type P_Bool_Exp = {
  _and?: Maybe<Array<Maybe<P_Bool_Exp>>>,
  _not?: Maybe<P_Bool_Exp>,
  _or?: Maybe<Array<Maybe<P_Bool_Exp>>>,
  circle?: Maybe<Circle_Comparison_Exp>,
  id?: Maybe<Integer_Comparison_Exp>,
  poly?: Maybe<Polygon_Comparison_Exp>,
};

/** unique or primary key constraints on table "p" */
export enum P_Constraint {
  /** unique or primary key constraint */
  PPkey = 'p_pkey'
}

/** input type for incrementing integer columne in table "p" */
export type P_Inc_Input = {
  id?: Maybe<Scalars['Int']>,
};

/** input type for inserting data into table "p" */
export type P_Insert_Input = {
  circle?: Maybe<Scalars['circle']>,
  id?: Maybe<Scalars['Int']>,
  poly?: Maybe<Scalars['polygon']>,
};

/** aggregate max on columns */
export type P_Max_Fields = {
   __typename?: 'p_max_fields',
  id?: Maybe<Scalars['Int']>,
};

/** order by max() on columns of table "p" */
export type P_Max_Order_By = {
  id?: Maybe<Order_By>,
};

/** aggregate min on columns */
export type P_Min_Fields = {
   __typename?: 'p_min_fields',
  id?: Maybe<Scalars['Int']>,
};

/** order by min() on columns of table "p" */
export type P_Min_Order_By = {
  id?: Maybe<Order_By>,
};

/** response of any mutation on the table "p" */
export type P_Mutation_Response = {
   __typename?: 'p_mutation_response',
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'],
  /** data of the affected rows by the mutation */
  returning: Array<P>,
};

/** input type for inserting object relation for remote table "p" */
export type P_Obj_Rel_Insert_Input = {
  data: P_Insert_Input,
  on_conflict?: Maybe<P_On_Conflict>,
};

/** on conflict condition type for table "p" */
export type P_On_Conflict = {
  constraint: P_Constraint,
  update_columns: Array<P_Update_Column>,
};

/** ordering options when selecting data from "p" */
export type P_Order_By = {
  circle?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  poly?: Maybe<Order_By>,
};

/** select columns of table "p" */
export enum P_Select_Column {
  /** column name */
  Circle = 'circle',
  /** column name */
  Id = 'id',
  /** column name */
  Poly = 'poly'
}

/** input type for updating data in table "p" */
export type P_Set_Input = {
  circle?: Maybe<Scalars['circle']>,
  id?: Maybe<Scalars['Int']>,
  poly?: Maybe<Scalars['polygon']>,
};

/** aggregate stddev on columns */
export type P_Stddev_Fields = {
   __typename?: 'p_stddev_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by stddev() on columns of table "p" */
export type P_Stddev_Order_By = {
  id?: Maybe<Order_By>,
};

/** aggregate stddev_pop on columns */
export type P_Stddev_Pop_Fields = {
   __typename?: 'p_stddev_pop_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by stddev_pop() on columns of table "p" */
export type P_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>,
};

/** aggregate stddev_samp on columns */
export type P_Stddev_Samp_Fields = {
   __typename?: 'p_stddev_samp_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by stddev_samp() on columns of table "p" */
export type P_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>,
};

/** aggregate sum on columns */
export type P_Sum_Fields = {
   __typename?: 'p_sum_fields',
  id?: Maybe<Scalars['Int']>,
};

/** order by sum() on columns of table "p" */
export type P_Sum_Order_By = {
  id?: Maybe<Order_By>,
};

/** update columns of table "p" */
export enum P_Update_Column {
  /** column name */
  Circle = 'circle',
  /** column name */
  Id = 'id',
  /** column name */
  Poly = 'poly'
}

/** aggregate var_pop on columns */
export type P_Var_Pop_Fields = {
   __typename?: 'p_var_pop_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by var_pop() on columns of table "p" */
export type P_Var_Pop_Order_By = {
  id?: Maybe<Order_By>,
};

/** aggregate var_samp on columns */
export type P_Var_Samp_Fields = {
   __typename?: 'p_var_samp_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by var_samp() on columns of table "p" */
export type P_Var_Samp_Order_By = {
  id?: Maybe<Order_By>,
};

/** aggregate variance on columns */
export type P_Variance_Fields = {
   __typename?: 'p_variance_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by variance() on columns of table "p" */
export type P_Variance_Order_By = {
  id?: Maybe<Order_By>,
};

/** The Relay compliant `PageInfo` type, containing data necessary to paginate this connection. */
export type PageInfo = {
   __typename?: 'PageInfo',
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>,
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'],
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'],
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>,
};

/** columns and relationships of "patient" */
export type Patient = {
   __typename?: 'patient',
  id: Scalars['uuid'],
  resource: Scalars['jsonb'],
};


/** columns and relationships of "patient" */
export type PatientResourceArgs = {
  path?: Maybe<Scalars['String']>
};

/** aggregated selection of "patient" */
export type Patient_Aggregate = {
   __typename?: 'patient_aggregate',
  aggregate?: Maybe<Patient_Aggregate_Fields>,
  nodes: Array<Patient>,
};

/** aggregate fields of "patient" */
export type Patient_Aggregate_Fields = {
   __typename?: 'patient_aggregate_fields',
  count?: Maybe<Scalars['Int']>,
};


/** aggregate fields of "patient" */
export type Patient_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Patient_Select_Column>>,
  distinct?: Maybe<Scalars['Boolean']>
};

/** order by aggregate values of table "patient" */
export type Patient_Aggregate_Order_By = {
  count?: Maybe<Order_By>,
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Patient_Append_Input = {
  resource?: Maybe<Scalars['jsonb']>,
};

/** input type for inserting array relation for remote table "patient" */
export type Patient_Arr_Rel_Insert_Input = {
  data: Array<Patient_Insert_Input>,
  on_conflict?: Maybe<Patient_On_Conflict>,
};

/** Boolean expression to filter rows from the table "patient". All fields are combined with a logical 'AND'. */
export type Patient_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Patient_Bool_Exp>>>,
  _not?: Maybe<Patient_Bool_Exp>,
  _or?: Maybe<Array<Maybe<Patient_Bool_Exp>>>,
  id?: Maybe<Uuid_Comparison_Exp>,
  resource?: Maybe<Jsonb_Comparison_Exp>,
};

/** unique or primary key constraints on table "patient" */
export enum Patient_Constraint {
  /** unique or primary key constraint */
  PatientPkey = 'patient_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Patient_Delete_At_Path_Input = {
  resource?: Maybe<Array<Maybe<Scalars['String']>>>,
};

/** 
 * delete the array element with specified index (negative integers count from the
 * end). throws an error if top level container is not an array
 **/
export type Patient_Delete_Elem_Input = {
  resource?: Maybe<Scalars['Int']>,
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Patient_Delete_Key_Input = {
  resource?: Maybe<Scalars['String']>,
};

/** input type for inserting data into table "patient" */
export type Patient_Insert_Input = {
  id?: Maybe<Scalars['uuid']>,
  resource?: Maybe<Scalars['jsonb']>,
};

/** response of any mutation on the table "patient" */
export type Patient_Mutation_Response = {
   __typename?: 'patient_mutation_response',
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'],
  /** data of the affected rows by the mutation */
  returning: Array<Patient>,
};

/** input type for inserting object relation for remote table "patient" */
export type Patient_Obj_Rel_Insert_Input = {
  data: Patient_Insert_Input,
  on_conflict?: Maybe<Patient_On_Conflict>,
};

/** on conflict condition type for table "patient" */
export type Patient_On_Conflict = {
  constraint: Patient_Constraint,
  update_columns: Array<Patient_Update_Column>,
};

/** ordering options when selecting data from "patient" */
export type Patient_Order_By = {
  id?: Maybe<Order_By>,
  resource?: Maybe<Order_By>,
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Patient_Prepend_Input = {
  resource?: Maybe<Scalars['jsonb']>,
};

/** select columns of table "patient" */
export enum Patient_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Resource = 'resource'
}

/** input type for updating data in table "patient" */
export type Patient_Set_Input = {
  id?: Maybe<Scalars['uuid']>,
  resource?: Maybe<Scalars['jsonb']>,
};

/** update columns of table "patient" */
export enum Patient_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Resource = 'resource'
}


/** expression to compare columns of type polygon. All fields are combined with logical 'AND'. */
export type Polygon_Comparison_Exp = {
  _eq?: Maybe<Scalars['polygon']>,
  _gt?: Maybe<Scalars['polygon']>,
  _gte?: Maybe<Scalars['polygon']>,
  _in?: Maybe<Array<Maybe<Scalars['polygon']>>>,
  _is_null?: Maybe<Scalars['Boolean']>,
  _lt?: Maybe<Scalars['polygon']>,
  _lte?: Maybe<Scalars['polygon']>,
  _neq?: Maybe<Scalars['polygon']>,
  _nin?: Maybe<Array<Maybe<Scalars['polygon']>>>,
};

export type Query = {
   __typename?: 'Query',
  allCases?: Maybe<CaseConnection>,
  allDataSources?: Maybe<DataSourceConnection>,
  allDocuments?: Maybe<DocumentConnection>,
  allFormatValidators?: Maybe<FormatValidatorConnection>,
  allForms?: Maybe<FormConnection>,
  allQuestions?: Maybe<QuestionConnection>,
  allTasks?: Maybe<TaskConnection>,
  allWorkItems?: Maybe<WorkItemConnection>,
  allWorkflows?: Maybe<WorkflowConnection>,
  dataSource?: Maybe<DataSourceDataConnection>,
  documentValidity?: Maybe<DocumentValidityConnection>,
  /** The ID of the object */
  node?: Maybe<Node>,
};


export type QueryAllCasesArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  createdByGroup?: Maybe<Scalars['String']>,
  createdByUser?: Maybe<Scalars['String']>,
  documentForm?: Maybe<Scalars['String']>,
  filter?: Maybe<Array<Maybe<CaseFilterSetType>>>,
  first?: Maybe<Scalars['Int']>,
  hasAnswer?: Maybe<Array<Maybe<HasAnswerFilterType>>>,
  last?: Maybe<Scalars['Int']>,
  metaHasKey?: Maybe<Scalars['String']>,
  metaValue?: Maybe<Array<Maybe<JsonValueFilterType>>>,
  order?: Maybe<Array<Maybe<CaseOrderSetType>>>,
  orderBy?: Maybe<Array<Maybe<CaseOrdering>>>,
  orderByQuestionAnswerValue?: Maybe<Scalars['String']>,
  searchAnswers?: Maybe<Array<Maybe<SearchAnswersFilterType>>>,
  status?: Maybe<Array<Maybe<CaseStatusArgument>>>,
  workflow?: Maybe<Scalars['ID']>
};


export type QueryAllDataSourcesArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryAllDocumentsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  createdByGroup?: Maybe<Scalars['String']>,
  createdByUser?: Maybe<Scalars['String']>,
  filter?: Maybe<Array<Maybe<DocumentFilterSetType>>>,
  first?: Maybe<Scalars['Int']>,
  form?: Maybe<Scalars['ID']>,
  forms?: Maybe<Array<Maybe<Scalars['ID']>>>,
  hasAnswer?: Maybe<Array<Maybe<HasAnswerFilterType>>>,
  id?: Maybe<Scalars['ID']>,
  last?: Maybe<Scalars['Int']>,
  metaHasKey?: Maybe<Scalars['String']>,
  metaValue?: Maybe<Array<Maybe<JsonValueFilterType>>>,
  order?: Maybe<Array<Maybe<DocumentOrderSetType>>>,
  orderBy?: Maybe<Array<Maybe<DocumentOrdering>>>,
  rootDocument?: Maybe<Scalars['ID']>,
  search?: Maybe<Scalars['String']>,
  searchAnswers?: Maybe<Array<Maybe<SearchAnswersFilterType>>>
};


export type QueryAllFormatValidatorsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryAllFormsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  createdByGroup?: Maybe<Scalars['String']>,
  createdByUser?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  filter?: Maybe<Array<Maybe<FormFilterSetType>>>,
  first?: Maybe<Scalars['Int']>,
  isArchived?: Maybe<Scalars['Boolean']>,
  isPublished?: Maybe<Scalars['Boolean']>,
  last?: Maybe<Scalars['Int']>,
  metaHasKey?: Maybe<Scalars['String']>,
  metaValue?: Maybe<Array<Maybe<JsonValueFilterType>>>,
  name?: Maybe<Scalars['String']>,
  order?: Maybe<Array<Maybe<FormOrderSetType>>>,
  orderBy?: Maybe<Array<Maybe<FormOrdering>>>,
  search?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
  slugs?: Maybe<Array<Maybe<Scalars['String']>>>
};


export type QueryAllQuestionsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  createdByGroup?: Maybe<Scalars['String']>,
  createdByUser?: Maybe<Scalars['String']>,
  excludeForms?: Maybe<Array<Maybe<Scalars['ID']>>>,
  filter?: Maybe<Array<Maybe<QuestionFilterSetType>>>,
  first?: Maybe<Scalars['Int']>,
  isArchived?: Maybe<Scalars['Boolean']>,
  isHidden?: Maybe<Scalars['String']>,
  isRequired?: Maybe<Scalars['String']>,
  label?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  metaHasKey?: Maybe<Scalars['String']>,
  metaValue?: Maybe<Array<Maybe<JsonValueFilterType>>>,
  order?: Maybe<Array<Maybe<QuestionOrderSetType>>>,
  orderBy?: Maybe<Array<Maybe<QuestionOrdering>>>,
  search?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
  slugs?: Maybe<Array<Maybe<Scalars['String']>>>
};


export type QueryAllTasksArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  createdByGroup?: Maybe<Scalars['String']>,
  createdByUser?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  filter?: Maybe<Array<Maybe<TaskFilterSetType>>>,
  first?: Maybe<Scalars['Int']>,
  isArchived?: Maybe<Scalars['Boolean']>,
  last?: Maybe<Scalars['Int']>,
  metaHasKey?: Maybe<Scalars['String']>,
  metaValue?: Maybe<Array<Maybe<JsonValueFilterType>>>,
  name?: Maybe<Scalars['String']>,
  order?: Maybe<Array<Maybe<TaskOrderSetType>>>,
  orderBy?: Maybe<Array<Maybe<TaskOrdering>>>,
  search?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
  type?: Maybe<TaskTypeArgument>
};


export type QueryAllWorkItemsArgs = {
  addressedGroups?: Maybe<Array<Maybe<Scalars['String']>>>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  case?: Maybe<Scalars['ID']>,
  caseDocumentHasAnswer?: Maybe<Array<Maybe<HasAnswerFilterType>>>,
  caseMetaValue?: Maybe<Array<Maybe<JsonValueFilterType>>>,
  createdByGroup?: Maybe<Scalars['String']>,
  createdByUser?: Maybe<Scalars['String']>,
  documentHasAnswer?: Maybe<Array<Maybe<HasAnswerFilterType>>>,
  filter?: Maybe<Array<Maybe<WorkItemFilterSetType>>>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  metaHasKey?: Maybe<Scalars['String']>,
  metaValue?: Maybe<Array<Maybe<JsonValueFilterType>>>,
  order?: Maybe<Array<Maybe<WorkItemOrderSetType>>>,
  orderBy?: Maybe<Array<Maybe<WorkItemOrdering>>>,
  status?: Maybe<WorkItemStatusArgument>,
  task?: Maybe<Scalars['ID']>
};


export type QueryAllWorkflowsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  createdByGroup?: Maybe<Scalars['String']>,
  createdByUser?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  filter?: Maybe<Array<Maybe<WorkflowFilterSetType>>>,
  first?: Maybe<Scalars['Int']>,
  isArchived?: Maybe<Scalars['Boolean']>,
  isPublished?: Maybe<Scalars['Boolean']>,
  last?: Maybe<Scalars['Int']>,
  metaHasKey?: Maybe<Scalars['String']>,
  metaValue?: Maybe<Array<Maybe<JsonValueFilterType>>>,
  name?: Maybe<Scalars['String']>,
  order?: Maybe<Array<Maybe<WorkflowOrderSetType>>>,
  orderBy?: Maybe<Array<Maybe<WorkflowOrdering>>>,
  search?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>
};


export type QueryDataSourceArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>
};


export type QueryDocumentValidityArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  id: Scalars['ID'],
  last?: Maybe<Scalars['Int']>
};


export type QueryNodeArgs = {
  id: Scalars['ID']
};

/** query root */
export type Query_Root = {
   __typename?: 'query_root',
  allCases?: Maybe<CaseConnection>,
  allDataSources?: Maybe<DataSourceConnection>,
  allDocuments?: Maybe<DocumentConnection>,
  allFormatValidators?: Maybe<FormatValidatorConnection>,
  allForms?: Maybe<FormConnection>,
  allQuestions?: Maybe<QuestionConnection>,
  allTasks?: Maybe<TaskConnection>,
  allWorkItems?: Maybe<WorkItemConnection>,
  allWorkflows?: Maybe<WorkflowConnection>,
  dataSource?: Maybe<DataSourceDataConnection>,
  documentValidity?: Maybe<DocumentValidityConnection>,
  hello?: Maybe<Scalars['String']>,
  /** The ID of the object */
  node?: Maybe<Node>,
  /** fetch data from the table: "observation" */
  observation: Array<Observation>,
  /** fetch aggregated fields from the table: "observation" */
  observation_aggregate: Observation_Aggregate,
  /** fetch data from the table: "observation" using primary key columns */
  observation_by_pk?: Maybe<Observation>,
  /** fetch data from the table: "p" */
  p: Array<P>,
  /** fetch aggregated fields from the table: "p" */
  p_aggregate: P_Aggregate,
  /** fetch data from the table: "p" using primary key columns */
  p_by_pk?: Maybe<P>,
  /** fetch data from the table: "patient" */
  patient: Array<Patient>,
  /** fetch aggregated fields from the table: "patient" */
  patient_aggregate: Patient_Aggregate,
  /** fetch data from the table: "patient" using primary key columns */
  patient_by_pk?: Maybe<Patient>,
  /** fetch data from the table: "users" */
  users: Array<Users>,
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate,
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>,
  /** fetch data from the table: "vehicle" */
  vehicle: Array<Vehicle>,
  /** fetch aggregated fields from the table: "vehicle" */
  vehicle_aggregate: Vehicle_Aggregate,
  /** fetch data from the table: "vehicle" using primary key columns */
  vehicle_by_pk?: Maybe<Vehicle>,
  /** fetch data from the table: "vehicle_location" */
  vehicle_location: Array<Vehicle_Location>,
  /** fetch aggregated fields from the table: "vehicle_location" */
  vehicle_location_aggregate: Vehicle_Location_Aggregate,
  /** fetch data from the table: "vehicle_location" using primary key columns */
  vehicle_location_by_pk?: Maybe<Vehicle_Location>,
};


/** query root */
export type Query_RootAllCasesArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  createdByGroup?: Maybe<Scalars['String']>,
  createdByUser?: Maybe<Scalars['String']>,
  documentForm?: Maybe<Scalars['String']>,
  filter?: Maybe<Array<Maybe<CaseFilterSetType>>>,
  first?: Maybe<Scalars['Int']>,
  hasAnswer?: Maybe<Array<Maybe<HasAnswerFilterType>>>,
  last?: Maybe<Scalars['Int']>,
  metaHasKey?: Maybe<Scalars['String']>,
  metaValue?: Maybe<Array<Maybe<JsonValueFilterType>>>,
  order?: Maybe<Array<Maybe<CaseOrderSetType>>>,
  orderBy?: Maybe<Array<Maybe<CaseOrdering>>>,
  orderByQuestionAnswerValue?: Maybe<Scalars['String']>,
  searchAnswers?: Maybe<Array<Maybe<SearchAnswersFilterType>>>,
  status?: Maybe<Array<Maybe<CaseStatusArgument>>>,
  workflow?: Maybe<Scalars['ID']>
};


/** query root */
export type Query_RootAllDataSourcesArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


/** query root */
export type Query_RootAllDocumentsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  createdByGroup?: Maybe<Scalars['String']>,
  createdByUser?: Maybe<Scalars['String']>,
  filter?: Maybe<Array<Maybe<DocumentFilterSetType>>>,
  first?: Maybe<Scalars['Int']>,
  form?: Maybe<Scalars['ID']>,
  forms?: Maybe<Array<Maybe<Scalars['ID']>>>,
  hasAnswer?: Maybe<Array<Maybe<HasAnswerFilterType>>>,
  id?: Maybe<Scalars['ID']>,
  last?: Maybe<Scalars['Int']>,
  metaHasKey?: Maybe<Scalars['String']>,
  metaValue?: Maybe<Array<Maybe<JsonValueFilterType>>>,
  order?: Maybe<Array<Maybe<DocumentOrderSetType>>>,
  orderBy?: Maybe<Array<Maybe<DocumentOrdering>>>,
  rootDocument?: Maybe<Scalars['ID']>,
  search?: Maybe<Scalars['String']>,
  searchAnswers?: Maybe<Array<Maybe<SearchAnswersFilterType>>>
};


/** query root */
export type Query_RootAllFormatValidatorsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


/** query root */
export type Query_RootAllFormsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  createdByGroup?: Maybe<Scalars['String']>,
  createdByUser?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  filter?: Maybe<Array<Maybe<FormFilterSetType>>>,
  first?: Maybe<Scalars['Int']>,
  isArchived?: Maybe<Scalars['Boolean']>,
  isPublished?: Maybe<Scalars['Boolean']>,
  last?: Maybe<Scalars['Int']>,
  metaHasKey?: Maybe<Scalars['String']>,
  metaValue?: Maybe<Array<Maybe<JsonValueFilterType>>>,
  name?: Maybe<Scalars['String']>,
  order?: Maybe<Array<Maybe<FormOrderSetType>>>,
  orderBy?: Maybe<Array<Maybe<FormOrdering>>>,
  search?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
  slugs?: Maybe<Array<Maybe<Scalars['String']>>>
};


/** query root */
export type Query_RootAllQuestionsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  createdByGroup?: Maybe<Scalars['String']>,
  createdByUser?: Maybe<Scalars['String']>,
  excludeForms?: Maybe<Array<Maybe<Scalars['ID']>>>,
  filter?: Maybe<Array<Maybe<QuestionFilterSetType>>>,
  first?: Maybe<Scalars['Int']>,
  isArchived?: Maybe<Scalars['Boolean']>,
  isHidden?: Maybe<Scalars['String']>,
  isRequired?: Maybe<Scalars['String']>,
  label?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  metaHasKey?: Maybe<Scalars['String']>,
  metaValue?: Maybe<Array<Maybe<JsonValueFilterType>>>,
  order?: Maybe<Array<Maybe<QuestionOrderSetType>>>,
  orderBy?: Maybe<Array<Maybe<QuestionOrdering>>>,
  search?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
  slugs?: Maybe<Array<Maybe<Scalars['String']>>>
};


/** query root */
export type Query_RootAllTasksArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  createdByGroup?: Maybe<Scalars['String']>,
  createdByUser?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  filter?: Maybe<Array<Maybe<TaskFilterSetType>>>,
  first?: Maybe<Scalars['Int']>,
  isArchived?: Maybe<Scalars['Boolean']>,
  last?: Maybe<Scalars['Int']>,
  metaHasKey?: Maybe<Scalars['String']>,
  metaValue?: Maybe<Array<Maybe<JsonValueFilterType>>>,
  name?: Maybe<Scalars['String']>,
  order?: Maybe<Array<Maybe<TaskOrderSetType>>>,
  orderBy?: Maybe<Array<Maybe<TaskOrdering>>>,
  search?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
  type?: Maybe<TaskTypeArgument>
};


/** query root */
export type Query_RootAllWorkItemsArgs = {
  addressedGroups?: Maybe<Array<Maybe<Scalars['String']>>>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  case?: Maybe<Scalars['ID']>,
  caseDocumentHasAnswer?: Maybe<Array<Maybe<HasAnswerFilterType>>>,
  caseMetaValue?: Maybe<Array<Maybe<JsonValueFilterType>>>,
  createdByGroup?: Maybe<Scalars['String']>,
  createdByUser?: Maybe<Scalars['String']>,
  documentHasAnswer?: Maybe<Array<Maybe<HasAnswerFilterType>>>,
  filter?: Maybe<Array<Maybe<WorkItemFilterSetType>>>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  metaHasKey?: Maybe<Scalars['String']>,
  metaValue?: Maybe<Array<Maybe<JsonValueFilterType>>>,
  order?: Maybe<Array<Maybe<WorkItemOrderSetType>>>,
  orderBy?: Maybe<Array<Maybe<WorkItemOrdering>>>,
  status?: Maybe<WorkItemStatusArgument>,
  task?: Maybe<Scalars['ID']>
};


/** query root */
export type Query_RootAllWorkflowsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  createdByGroup?: Maybe<Scalars['String']>,
  createdByUser?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  filter?: Maybe<Array<Maybe<WorkflowFilterSetType>>>,
  first?: Maybe<Scalars['Int']>,
  isArchived?: Maybe<Scalars['Boolean']>,
  isPublished?: Maybe<Scalars['Boolean']>,
  last?: Maybe<Scalars['Int']>,
  metaHasKey?: Maybe<Scalars['String']>,
  metaValue?: Maybe<Array<Maybe<JsonValueFilterType>>>,
  name?: Maybe<Scalars['String']>,
  order?: Maybe<Array<Maybe<WorkflowOrderSetType>>>,
  orderBy?: Maybe<Array<Maybe<WorkflowOrdering>>>,
  search?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>
};


/** query root */
export type Query_RootDataSourceArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>
};


/** query root */
export type Query_RootDocumentValidityArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  id: Scalars['ID'],
  last?: Maybe<Scalars['Int']>
};


/** query root */
export type Query_RootNodeArgs = {
  id: Scalars['ID']
};


/** query root */
export type Query_RootObservationArgs = {
  distinct_on?: Maybe<Array<Observation_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Observation_Order_By>>,
  where?: Maybe<Observation_Bool_Exp>
};


/** query root */
export type Query_RootObservation_AggregateArgs = {
  distinct_on?: Maybe<Array<Observation_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Observation_Order_By>>,
  where?: Maybe<Observation_Bool_Exp>
};


/** query root */
export type Query_RootObservation_By_PkArgs = {
  id: Scalars['uuid']
};


/** query root */
export type Query_RootPArgs = {
  distinct_on?: Maybe<Array<P_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<P_Order_By>>,
  where?: Maybe<P_Bool_Exp>
};


/** query root */
export type Query_RootP_AggregateArgs = {
  distinct_on?: Maybe<Array<P_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<P_Order_By>>,
  where?: Maybe<P_Bool_Exp>
};


/** query root */
export type Query_RootP_By_PkArgs = {
  id: Scalars['Int']
};


/** query root */
export type Query_RootPatientArgs = {
  distinct_on?: Maybe<Array<Patient_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Patient_Order_By>>,
  where?: Maybe<Patient_Bool_Exp>
};


/** query root */
export type Query_RootPatient_AggregateArgs = {
  distinct_on?: Maybe<Array<Patient_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Patient_Order_By>>,
  where?: Maybe<Patient_Bool_Exp>
};


/** query root */
export type Query_RootPatient_By_PkArgs = {
  id: Scalars['uuid']
};


/** query root */
export type Query_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Users_Order_By>>,
  where?: Maybe<Users_Bool_Exp>
};


/** query root */
export type Query_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Users_Order_By>>,
  where?: Maybe<Users_Bool_Exp>
};


/** query root */
export type Query_RootUsers_By_PkArgs = {
  id: Scalars['Int']
};


/** query root */
export type Query_RootVehicleArgs = {
  distinct_on?: Maybe<Array<Vehicle_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Vehicle_Order_By>>,
  where?: Maybe<Vehicle_Bool_Exp>
};


/** query root */
export type Query_RootVehicle_AggregateArgs = {
  distinct_on?: Maybe<Array<Vehicle_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Vehicle_Order_By>>,
  where?: Maybe<Vehicle_Bool_Exp>
};


/** query root */
export type Query_RootVehicle_By_PkArgs = {
  id: Scalars['String']
};


/** query root */
export type Query_RootVehicle_LocationArgs = {
  distinct_on?: Maybe<Array<Vehicle_Location_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Vehicle_Location_Order_By>>,
  where?: Maybe<Vehicle_Location_Bool_Exp>
};


/** query root */
export type Query_RootVehicle_Location_AggregateArgs = {
  distinct_on?: Maybe<Array<Vehicle_Location_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Vehicle_Location_Order_By>>,
  where?: Maybe<Vehicle_Location_Bool_Exp>
};


/** query root */
export type Query_RootVehicle_Location_By_PkArgs = {
  id: Scalars['Int']
};

export type Question = {
  createdAt: Scalars['DateTime'],
  createdByGroup?: Maybe<Scalars['String']>,
  createdByUser?: Maybe<Scalars['String']>,
  forms?: Maybe<FormConnection>,
  id: Scalars['ID'],
  infoText?: Maybe<Scalars['String']>,
  isArchived: Scalars['Boolean'],
  isHidden: Scalars['QuestionJexl'],
  /** Required expression is only evaluated when question is not hidden. */
  isRequired: Scalars['QuestionJexl'],
  label: Scalars['String'],
  meta: Scalars['GenericScalar'],
  modifiedAt: Scalars['DateTime'],
  slug: Scalars['String'],
  source?: Maybe<Question>,
};


export type QuestionFormsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  createdByGroup?: Maybe<Scalars['String']>,
  createdByUser?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  isArchived?: Maybe<Scalars['Boolean']>,
  isPublished?: Maybe<Scalars['Boolean']>,
  last?: Maybe<Scalars['Int']>,
  metaHasKey?: Maybe<Scalars['String']>,
  metaValue?: Maybe<Array<Maybe<JsonValueFilterType>>>,
  name?: Maybe<Scalars['String']>,
  orderBy?: Maybe<Array<Maybe<FormOrdering>>>,
  search?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
  slugs?: Maybe<Array<Maybe<Scalars['String']>>>
};

export type QuestionConnection = {
   __typename?: 'QuestionConnection',
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<QuestionEdge>>,
  /** Pagination data for this connection. */
  pageInfo: PageInfo,
  totalCount?: Maybe<Scalars['Int']>,
};

/** A Relay edge containing a `Question` and its cursor. */
export type QuestionEdge = {
   __typename?: 'QuestionEdge',
  /** A cursor for use in pagination */
  cursor: Scalars['String'],
  /** The item at the end of the edge */
  node?: Maybe<Question>,
};

export type QuestionFilterSetType = {
  createdByGroup?: Maybe<Scalars['String']>,
  createdByUser?: Maybe<Scalars['String']>,
  excludeForms?: Maybe<Array<Maybe<Scalars['ID']>>>,
  invert?: Maybe<Scalars['Boolean']>,
  isArchived?: Maybe<Scalars['Boolean']>,
  isHidden?: Maybe<Scalars['String']>,
  isRequired?: Maybe<Scalars['String']>,
  label?: Maybe<Scalars['String']>,
  metaHasKey?: Maybe<Scalars['String']>,
  metaValue?: Maybe<Array<Maybe<JsonValueFilterType>>>,
  orderBy?: Maybe<Array<Maybe<QuestionOrdering>>>,
  search?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
  slugs?: Maybe<Array<Maybe<Scalars['String']>>>,
};


/** An enumeration. */
export enum QuestionOrdering {
  /** Created at */
  CreatedAtAsc = 'CREATED_AT_ASC',
  /** Created at (descending) */
  CreatedAtDesc = 'CREATED_AT_DESC',
  /** Created by group */
  CreatedByGroupAsc = 'CREATED_BY_GROUP_ASC',
  /** Created by group (descending) */
  CreatedByGroupDesc = 'CREATED_BY_GROUP_DESC',
  /** Created by user */
  CreatedByUserAsc = 'CREATED_BY_USER_ASC',
  /** Created by user (descending) */
  CreatedByUserDesc = 'CREATED_BY_USER_DESC',
  /** Label */
  LabelAsc = 'LABEL_ASC',
  /** Label (descending) */
  LabelDesc = 'LABEL_DESC',
  /** Modified at */
  ModifiedAtAsc = 'MODIFIED_AT_ASC',
  /** Modified at (descending) */
  ModifiedAtDesc = 'MODIFIED_AT_DESC'
}

export type QuestionOrderSetType = {
  attribute?: Maybe<SortableQuestionAttributes>,
  direction?: Maybe<AscDesc>,
  meta?: Maybe<Scalars['String']>,
};

export type RemoveAnswerInput = {
  answer: Scalars['ID'],
  clientMutationId?: Maybe<Scalars['String']>,
};

export type RemoveAnswerPayload = {
   __typename?: 'RemoveAnswerPayload',
  answer?: Maybe<Answer>,
  clientMutationId?: Maybe<Scalars['String']>,
};

export type RemoveDocumentInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  document: Scalars['ID'],
};

export type RemoveDocumentPayload = {
   __typename?: 'RemoveDocumentPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  document?: Maybe<Document>,
};

export type RemoveFlowInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  flow: Scalars['ID'],
};

export type RemoveFlowPayload = {
   __typename?: 'RemoveFlowPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  flow?: Maybe<Flow>,
};

export type RemoveFormQuestionInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  form: Scalars['ID'],
  question: Scalars['ID'],
};

export type RemoveFormQuestionPayload = {
   __typename?: 'RemoveFormQuestionPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  form?: Maybe<Form>,
};

export type ReorderFormQuestionsInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  form: Scalars['ID'],
  questions: Array<Maybe<Scalars['ID']>>,
};

export type ReorderFormQuestionsPayload = {
   __typename?: 'ReorderFormQuestionsPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  form?: Maybe<Form>,
};

export type SaveCaseInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  form?: Maybe<Scalars['ID']>,
  id?: Maybe<Scalars['String']>,
  meta?: Maybe<Scalars['JSONString']>,
  parentWorkItem?: Maybe<Scalars['ID']>,
  workflow: Scalars['ID'],
};

export type SaveCasePayload = {
   __typename?: 'SaveCasePayload',
  case?: Maybe<Case>,
  clientMutationId?: Maybe<Scalars['String']>,
};

export type SaveChoiceQuestionInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  infoText?: Maybe<Scalars['String']>,
  isArchived?: Maybe<Scalars['Boolean']>,
  isHidden?: Maybe<Scalars['QuestionJexl']>,
  isRequired?: Maybe<Scalars['QuestionJexl']>,
  label: Scalars['String'],
  meta?: Maybe<Scalars['JSONString']>,
  options: Array<Maybe<Scalars['ID']>>,
  slug: Scalars['String'],
};

export type SaveChoiceQuestionPayload = {
   __typename?: 'SaveChoiceQuestionPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  question?: Maybe<Question>,
};

export type SaveCompleteTaskFormTaskInput = {
  /** Group jexl returning what group(s) derived work items will be addressed to. */
  addressGroups?: Maybe<Scalars['GroupJexl']>,
  clientMutationId?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  form: Scalars['ID'],
  isArchived?: Maybe<Scalars['Boolean']>,
  /** 
 * Allows creating multiple work items for this task using the `CreateWorkItem`
   * mutation. If true, one work item will be created for each entry in
   * `address_groups`.
 **/
  isMultipleInstance?: Maybe<Scalars['Boolean']>,
  /** Time in seconds task may take to be processed. */
  leadTime?: Maybe<Scalars['Int']>,
  meta?: Maybe<Scalars['JSONString']>,
  name: Scalars['String'],
  slug: Scalars['String'],
};

export type SaveCompleteTaskFormTaskPayload = {
   __typename?: 'SaveCompleteTaskFormTaskPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  task?: Maybe<Task>,
};

export type SaveCompleteWorkflowFormTaskInput = {
  /** Group jexl returning what group(s) derived work items will be addressed to. */
  addressGroups?: Maybe<Scalars['GroupJexl']>,
  clientMutationId?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  isArchived?: Maybe<Scalars['Boolean']>,
  /** 
 * Allows creating multiple work items for this task using the `CreateWorkItem`
   * mutation. If true, one work item will be created for each entry in
   * `address_groups`.
 **/
  isMultipleInstance?: Maybe<Scalars['Boolean']>,
  /** Time in seconds task may take to be processed. */
  leadTime?: Maybe<Scalars['Int']>,
  meta?: Maybe<Scalars['JSONString']>,
  name: Scalars['String'],
  slug: Scalars['String'],
};

export type SaveCompleteWorkflowFormTaskPayload = {
   __typename?: 'SaveCompleteWorkflowFormTaskPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  task?: Maybe<Task>,
};

export type SaveDateQuestionInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  infoText?: Maybe<Scalars['String']>,
  isArchived?: Maybe<Scalars['Boolean']>,
  isHidden?: Maybe<Scalars['QuestionJexl']>,
  isRequired?: Maybe<Scalars['QuestionJexl']>,
  label: Scalars['String'],
  meta?: Maybe<Scalars['JSONString']>,
  slug: Scalars['String'],
};

export type SaveDateQuestionPayload = {
   __typename?: 'SaveDateQuestionPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  question?: Maybe<Question>,
};

export type SaveDocumentDateAnswerInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  document: Scalars['ID'],
  meta?: Maybe<Scalars['JSONString']>,
  question: Scalars['ID'],
  value: Scalars['Date'],
};

export type SaveDocumentDateAnswerPayload = {
   __typename?: 'SaveDocumentDateAnswerPayload',
  answer?: Maybe<Answer>,
  clientMutationId?: Maybe<Scalars['String']>,
};

export type SaveDocumentFileAnswerInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  document: Scalars['ID'],
  meta?: Maybe<Scalars['JSONString']>,
  question: Scalars['ID'],
  value: Scalars['String'],
  valueId?: Maybe<Scalars['ID']>,
};

export type SaveDocumentFileAnswerPayload = {
   __typename?: 'SaveDocumentFileAnswerPayload',
  answer?: Maybe<Answer>,
  clientMutationId?: Maybe<Scalars['String']>,
};

export type SaveDocumentFloatAnswerInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  document: Scalars['ID'],
  meta?: Maybe<Scalars['JSONString']>,
  question: Scalars['ID'],
  value: Scalars['Float'],
};

export type SaveDocumentFloatAnswerPayload = {
   __typename?: 'SaveDocumentFloatAnswerPayload',
  answer?: Maybe<Answer>,
  clientMutationId?: Maybe<Scalars['String']>,
};

export type SaveDocumentInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  form: Scalars['ID'],
  id?: Maybe<Scalars['String']>,
  meta?: Maybe<Scalars['JSONString']>,
};

export type SaveDocumentIntegerAnswerInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  document: Scalars['ID'],
  meta?: Maybe<Scalars['JSONString']>,
  question: Scalars['ID'],
  value: Scalars['Int'],
};

export type SaveDocumentIntegerAnswerPayload = {
   __typename?: 'SaveDocumentIntegerAnswerPayload',
  answer?: Maybe<Answer>,
  clientMutationId?: Maybe<Scalars['String']>,
};

export type SaveDocumentListAnswerInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  document: Scalars['ID'],
  meta?: Maybe<Scalars['JSONString']>,
  question: Scalars['ID'],
  value: Array<Maybe<Scalars['String']>>,
};

export type SaveDocumentListAnswerPayload = {
   __typename?: 'SaveDocumentListAnswerPayload',
  answer?: Maybe<Answer>,
  clientMutationId?: Maybe<Scalars['String']>,
};

export type SaveDocumentPayload = {
   __typename?: 'SaveDocumentPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  document?: Maybe<Document>,
};

export type SaveDocumentStringAnswerInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  document: Scalars['ID'],
  meta?: Maybe<Scalars['JSONString']>,
  question: Scalars['ID'],
  value: Scalars['String'],
};

export type SaveDocumentStringAnswerPayload = {
   __typename?: 'SaveDocumentStringAnswerPayload',
  answer?: Maybe<Answer>,
  clientMutationId?: Maybe<Scalars['String']>,
};

export type SaveDocumentTableAnswerInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  document: Scalars['ID'],
  meta?: Maybe<Scalars['JSONString']>,
  question: Scalars['ID'],
  /** List of document IDs representing the rows in the table. */
  value: Array<Maybe<Scalars['ID']>>,
};

export type SaveDocumentTableAnswerPayload = {
   __typename?: 'SaveDocumentTableAnswerPayload',
  answer?: Maybe<Answer>,
  clientMutationId?: Maybe<Scalars['String']>,
};

export type SaveDynamicChoiceQuestionInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  dataSource: Scalars['String'],
  infoText?: Maybe<Scalars['String']>,
  isArchived?: Maybe<Scalars['Boolean']>,
  isHidden?: Maybe<Scalars['QuestionJexl']>,
  isRequired?: Maybe<Scalars['QuestionJexl']>,
  label: Scalars['String'],
  meta?: Maybe<Scalars['JSONString']>,
  slug: Scalars['String'],
};

export type SaveDynamicChoiceQuestionPayload = {
   __typename?: 'SaveDynamicChoiceQuestionPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  question?: Maybe<Question>,
};

export type SaveDynamicMultipleChoiceQuestionInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  dataSource: Scalars['String'],
  infoText?: Maybe<Scalars['String']>,
  isArchived?: Maybe<Scalars['Boolean']>,
  isHidden?: Maybe<Scalars['QuestionJexl']>,
  isRequired?: Maybe<Scalars['QuestionJexl']>,
  label: Scalars['String'],
  meta?: Maybe<Scalars['JSONString']>,
  slug: Scalars['String'],
};

export type SaveDynamicMultipleChoiceQuestionPayload = {
   __typename?: 'SaveDynamicMultipleChoiceQuestionPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  question?: Maybe<Question>,
};

export type SaveFileQuestionInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  infoText?: Maybe<Scalars['String']>,
  isArchived?: Maybe<Scalars['Boolean']>,
  isHidden?: Maybe<Scalars['QuestionJexl']>,
  isRequired?: Maybe<Scalars['QuestionJexl']>,
  label: Scalars['String'],
  meta?: Maybe<Scalars['JSONString']>,
  slug: Scalars['String'],
};

export type SaveFileQuestionPayload = {
   __typename?: 'SaveFileQuestionPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  question?: Maybe<Question>,
};

export type SaveFloatQuestionInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  infoText?: Maybe<Scalars['String']>,
  isArchived?: Maybe<Scalars['Boolean']>,
  isHidden?: Maybe<Scalars['QuestionJexl']>,
  isRequired?: Maybe<Scalars['QuestionJexl']>,
  label: Scalars['String'],
  maxValue?: Maybe<Scalars['Float']>,
  meta?: Maybe<Scalars['JSONString']>,
  minValue?: Maybe<Scalars['Float']>,
  placeholder?: Maybe<Scalars['String']>,
  slug: Scalars['String'],
};

export type SaveFloatQuestionPayload = {
   __typename?: 'SaveFloatQuestionPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  question?: Maybe<Question>,
};

export type SaveFormInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  isArchived?: Maybe<Scalars['Boolean']>,
  isPublished?: Maybe<Scalars['Boolean']>,
  meta?: Maybe<Scalars['JSONString']>,
  name: Scalars['String'],
  slug: Scalars['String'],
};

export type SaveFormPayload = {
   __typename?: 'SaveFormPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  form?: Maybe<Form>,
};

export type SaveFormQuestionInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  infoText?: Maybe<Scalars['String']>,
  isArchived?: Maybe<Scalars['Boolean']>,
  isHidden?: Maybe<Scalars['QuestionJexl']>,
  isRequired?: Maybe<Scalars['QuestionJexl']>,
  label: Scalars['String'],
  meta?: Maybe<Scalars['JSONString']>,
  slug: Scalars['String'],
  subForm: Scalars['ID'],
};

export type SaveFormQuestionPayload = {
   __typename?: 'SaveFormQuestionPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  question?: Maybe<Question>,
};

export type SaveIntegerQuestionInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  infoText?: Maybe<Scalars['String']>,
  isArchived?: Maybe<Scalars['Boolean']>,
  isHidden?: Maybe<Scalars['QuestionJexl']>,
  isRequired?: Maybe<Scalars['QuestionJexl']>,
  label: Scalars['String'],
  maxValue?: Maybe<Scalars['Int']>,
  meta?: Maybe<Scalars['JSONString']>,
  minValue?: Maybe<Scalars['Int']>,
  placeholder?: Maybe<Scalars['String']>,
  slug: Scalars['String'],
};

export type SaveIntegerQuestionPayload = {
   __typename?: 'SaveIntegerQuestionPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  question?: Maybe<Question>,
};

export type SaveMultipleChoiceQuestionInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  infoText?: Maybe<Scalars['String']>,
  isArchived?: Maybe<Scalars['Boolean']>,
  isHidden?: Maybe<Scalars['QuestionJexl']>,
  isRequired?: Maybe<Scalars['QuestionJexl']>,
  label: Scalars['String'],
  meta?: Maybe<Scalars['JSONString']>,
  options: Array<Maybe<Scalars['ID']>>,
  slug: Scalars['String'],
};

export type SaveMultipleChoiceQuestionPayload = {
   __typename?: 'SaveMultipleChoiceQuestionPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  question?: Maybe<Question>,
};

export type SaveOptionInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  isArchived?: Maybe<Scalars['Boolean']>,
  label: Scalars['String'],
  meta?: Maybe<Scalars['JSONString']>,
  slug: Scalars['String'],
};

export type SaveOptionPayload = {
   __typename?: 'SaveOptionPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  option?: Maybe<Option>,
};

export type SaveSimpleTaskInput = {
  /** Group jexl returning what group(s) derived work items will be addressed to. */
  addressGroups?: Maybe<Scalars['GroupJexl']>,
  clientMutationId?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  isArchived?: Maybe<Scalars['Boolean']>,
  /** 
 * Allows creating multiple work items for this task using the `CreateWorkItem`
   * mutation. If true, one work item will be created for each entry in
   * `address_groups`.
 **/
  isMultipleInstance?: Maybe<Scalars['Boolean']>,
  /** Time in seconds task may take to be processed. */
  leadTime?: Maybe<Scalars['Int']>,
  meta?: Maybe<Scalars['JSONString']>,
  name: Scalars['String'],
  slug: Scalars['String'],
};

export type SaveSimpleTaskPayload = {
   __typename?: 'SaveSimpleTaskPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  task?: Maybe<Task>,
};

export type SaveStaticQuestionInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  infoText?: Maybe<Scalars['String']>,
  isArchived?: Maybe<Scalars['Boolean']>,
  isHidden?: Maybe<Scalars['QuestionJexl']>,
  label: Scalars['String'],
  meta?: Maybe<Scalars['JSONString']>,
  slug: Scalars['String'],
  staticContent?: Maybe<Scalars['String']>,
};

export type SaveStaticQuestionPayload = {
   __typename?: 'SaveStaticQuestionPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  question?: Maybe<Question>,
};

export type SaveTableQuestionInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  infoText?: Maybe<Scalars['String']>,
  isArchived?: Maybe<Scalars['Boolean']>,
  isHidden?: Maybe<Scalars['QuestionJexl']>,
  isRequired?: Maybe<Scalars['QuestionJexl']>,
  label: Scalars['String'],
  meta?: Maybe<Scalars['JSONString']>,
  /** Form that represents rows of a TableQuestion */
  rowForm: Scalars['ID'],
  slug: Scalars['String'],
};

export type SaveTableQuestionPayload = {
   __typename?: 'SaveTableQuestionPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  question?: Maybe<Question>,
};

export type SaveTextareaQuestionInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  formatValidators?: Maybe<Array<Maybe<Scalars['String']>>>,
  infoText?: Maybe<Scalars['String']>,
  isArchived?: Maybe<Scalars['Boolean']>,
  isHidden?: Maybe<Scalars['QuestionJexl']>,
  isRequired?: Maybe<Scalars['QuestionJexl']>,
  label: Scalars['String'],
  maxLength?: Maybe<Scalars['Int']>,
  meta?: Maybe<Scalars['JSONString']>,
  placeholder?: Maybe<Scalars['String']>,
  slug: Scalars['String'],
};

export type SaveTextareaQuestionPayload = {
   __typename?: 'SaveTextareaQuestionPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  question?: Maybe<Question>,
};

export type SaveTextQuestionInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  formatValidators?: Maybe<Array<Maybe<Scalars['String']>>>,
  infoText?: Maybe<Scalars['String']>,
  isArchived?: Maybe<Scalars['Boolean']>,
  isHidden?: Maybe<Scalars['QuestionJexl']>,
  isRequired?: Maybe<Scalars['QuestionJexl']>,
  label: Scalars['String'],
  maxLength?: Maybe<Scalars['Int']>,
  meta?: Maybe<Scalars['JSONString']>,
  placeholder?: Maybe<Scalars['String']>,
  slug: Scalars['String'],
};

export type SaveTextQuestionPayload = {
   __typename?: 'SaveTextQuestionPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  question?: Maybe<Question>,
};

export type SaveWorkflowInput = {
  /** Allow workflow to be started with any form */
  allowAllForms?: Maybe<Scalars['Boolean']>,
  /** List of forms which are allowed to start workflow with */
  allowForms?: Maybe<Array<Maybe<Scalars['ID']>>>,
  clientMutationId?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  isArchived?: Maybe<Scalars['Boolean']>,
  isPublished?: Maybe<Scalars['Boolean']>,
  meta?: Maybe<Scalars['JSONString']>,
  name: Scalars['String'],
  slug: Scalars['String'],
  /** Starting task(s) of the workflow. */
  startTasks: Array<Maybe<Scalars['ID']>>,
};

export type SaveWorkflowPayload = {
   __typename?: 'SaveWorkflowPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  workflow?: Maybe<Workflow>,
};

export type SaveWorkItemInput = {
  /** Users responsible to undertake given work item. */
  assignedUsers?: Maybe<Array<Maybe<Scalars['String']>>>,
  clientMutationId?: Maybe<Scalars['String']>,
  deadline?: Maybe<Scalars['DateTime']>,
  meta?: Maybe<Scalars['JSONString']>,
  workItem: Scalars['ID'],
};

export type SaveWorkItemPayload = {
   __typename?: 'SaveWorkItemPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  workItem?: Maybe<WorkItem>,
};

/** Lookup type to search in answers. */
export type SearchAnswersFilterType = {
  lookup?: Maybe<SearchLookupMode>,
  questions?: Maybe<Array<Maybe<Scalars['String']>>>,
  value: Scalars['GenericScalar'],
};

export enum SearchLookupMode {
  Contains = 'CONTAINS',
  Startswith = 'STARTSWITH',
  Text = 'TEXT'
}

export type SimpleTask = Node & Task & {
   __typename?: 'SimpleTask',
  addressGroups?: Maybe<Scalars['GroupJexl']>,
  createdAt: Scalars['DateTime'],
  createdByGroup?: Maybe<Scalars['String']>,
  createdByUser?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  /** The ID of the object. */
  id: Scalars['ID'],
  isArchived: Scalars['Boolean'],
  isMultipleInstance: Scalars['Boolean'],
  /** Time in seconds task may take to be processed. */
  leadTime?: Maybe<Scalars['Int']>,
  meta: Scalars['GenericScalar'],
  modifiedAt: Scalars['DateTime'],
  name: Scalars['String'],
  slug: Scalars['String'],
  type: TaskType,
};

export enum SortableAnswerAttributes {
  CreatedAt = 'CREATED_AT',
  CreatedByGroup = 'CREATED_BY_GROUP',
  CreatedByUser = 'CREATED_BY_USER',
  Date = 'DATE',
  Document = 'DOCUMENT',
  File = 'FILE',
  ModifiedAt = 'MODIFIED_AT',
  Question = 'QUESTION',
  Value = 'VALUE'
}

export enum SortableCaseAttributes {
  AllowAllForms = 'ALLOW_ALL_FORMS',
  CreatedByGroup = 'CREATED_BY_GROUP',
  CreatedByUser = 'CREATED_BY_USER',
  Description = 'DESCRIPTION',
  IsArchived = 'IS_ARCHIVED',
  IsPublished = 'IS_PUBLISHED',
  Name = 'NAME',
  Slug = 'SLUG',
  Status = 'STATUS'
}

export enum SortableDocumentAttributes {
  CreatedAt = 'CREATED_AT',
  CreatedByGroup = 'CREATED_BY_GROUP',
  CreatedByUser = 'CREATED_BY_USER',
  Form = 'FORM',
  ModifiedAt = 'MODIFIED_AT'
}

export enum SortableFormAttributes {
  CreatedAt = 'CREATED_AT',
  CreatedByGroup = 'CREATED_BY_GROUP',
  CreatedByUser = 'CREATED_BY_USER',
  Description = 'DESCRIPTION',
  IsArchived = 'IS_ARCHIVED',
  IsPublished = 'IS_PUBLISHED',
  ModifiedAt = 'MODIFIED_AT',
  Name = 'NAME',
  Slug = 'SLUG'
}

export enum SortableQuestionAttributes {
  CreatedAt = 'CREATED_AT',
  CreatedByGroup = 'CREATED_BY_GROUP',
  CreatedByUser = 'CREATED_BY_USER',
  InfoText = 'INFO_TEXT',
  IsArchived = 'IS_ARCHIVED',
  IsHidden = 'IS_HIDDEN',
  IsRequired = 'IS_REQUIRED',
  Label = 'LABEL',
  ModifiedAt = 'MODIFIED_AT',
  Placeholder = 'PLACEHOLDER',
  Slug = 'SLUG',
  Type = 'TYPE'
}

export enum SortableTaskAttributes {
  AddressGroups = 'ADDRESS_GROUPS',
  AllowAllForms = 'ALLOW_ALL_FORMS',
  CreatedByGroup = 'CREATED_BY_GROUP',
  CreatedByUser = 'CREATED_BY_USER',
  Description = 'DESCRIPTION',
  IsArchived = 'IS_ARCHIVED',
  IsPublished = 'IS_PUBLISHED',
  LeadTime = 'LEAD_TIME',
  Name = 'NAME',
  Slug = 'SLUG',
  Type = 'TYPE'
}

export enum SortableWorkflowAttributes {
  AllowAllForms = 'ALLOW_ALL_FORMS',
  CreatedByGroup = 'CREATED_BY_GROUP',
  CreatedByUser = 'CREATED_BY_USER',
  Description = 'DESCRIPTION',
  IsArchived = 'IS_ARCHIVED',
  IsPublished = 'IS_PUBLISHED',
  Name = 'NAME',
  Slug = 'SLUG'
}

export enum SortableWorkItemAttributes {
  AllowAllForms = 'ALLOW_ALL_FORMS',
  CreatedByGroup = 'CREATED_BY_GROUP',
  CreatedByUser = 'CREATED_BY_USER',
  Description = 'DESCRIPTION',
  IsArchived = 'IS_ARCHIVED',
  IsPublished = 'IS_PUBLISHED',
  Name = 'NAME',
  Slug = 'SLUG',
  Status = 'STATUS'
}

export type StartCaseInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  form?: Maybe<Scalars['ID']>,
  meta?: Maybe<Scalars['JSONString']>,
  parentWorkItem?: Maybe<Scalars['ID']>,
  workflow: Scalars['ID'],
};

export type StartCasePayload = {
   __typename?: 'StartCasePayload',
  case?: Maybe<Case>,
  clientMutationId?: Maybe<Scalars['String']>,
};

export type StaticQuestion = Node & Question & {
   __typename?: 'StaticQuestion',
  createdAt: Scalars['DateTime'],
  createdByGroup?: Maybe<Scalars['String']>,
  createdByUser?: Maybe<Scalars['String']>,
  dataSource?: Maybe<Scalars['String']>,
  forms?: Maybe<FormConnection>,
  /** The ID of the object. */
  id: Scalars['ID'],
  infoText?: Maybe<Scalars['String']>,
  isArchived: Scalars['Boolean'],
  isHidden: Scalars['QuestionJexl'],
  /** Required expression is only evaluated when question is not hidden. */
  isRequired: Scalars['QuestionJexl'],
  label: Scalars['String'],
  meta: Scalars['GenericScalar'],
  modifiedAt: Scalars['DateTime'],
  slug: Scalars['String'],
  source?: Maybe<Question>,
  staticContent?: Maybe<Scalars['String']>,
};


export type StaticQuestionFormsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  createdByGroup?: Maybe<Scalars['String']>,
  createdByUser?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  isArchived?: Maybe<Scalars['Boolean']>,
  isPublished?: Maybe<Scalars['Boolean']>,
  last?: Maybe<Scalars['Int']>,
  metaHasKey?: Maybe<Scalars['String']>,
  metaValue?: Maybe<Array<Maybe<JsonValueFilterType>>>,
  name?: Maybe<Scalars['String']>,
  orderBy?: Maybe<Array<Maybe<FormOrdering>>>,
  search?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
  slugs?: Maybe<Array<Maybe<Scalars['String']>>>
};

/** An enumeration. */
export enum Status {
  /** Task is cancelled. */
  Canceled = 'CANCELED',
  /** Task is done. */
  Completed = 'COMPLETED',
  /** Task is ready to be processed. */
  Ready = 'READY'
}

export type StringAnswer = Node & Answer & {
   __typename?: 'StringAnswer',
  createdAt: Scalars['DateTime'],
  createdByGroup?: Maybe<Scalars['String']>,
  createdByUser?: Maybe<Scalars['String']>,
  /** The ID of the object. */
  id: Scalars['ID'],
  meta: Scalars['GenericScalar'],
  modifiedAt: Scalars['DateTime'],
  question: Question,
  value: Scalars['String'],
};

/** subscription root */
export type Subscription_Root = {
   __typename?: 'subscription_root',
  /** fetch data from the table: "observation" */
  observation: Array<Observation>,
  /** fetch aggregated fields from the table: "observation" */
  observation_aggregate: Observation_Aggregate,
  /** fetch data from the table: "observation" using primary key columns */
  observation_by_pk?: Maybe<Observation>,
  /** fetch data from the table: "p" */
  p: Array<P>,
  /** fetch aggregated fields from the table: "p" */
  p_aggregate: P_Aggregate,
  /** fetch data from the table: "p" using primary key columns */
  p_by_pk?: Maybe<P>,
  /** fetch data from the table: "patient" */
  patient: Array<Patient>,
  /** fetch aggregated fields from the table: "patient" */
  patient_aggregate: Patient_Aggregate,
  /** fetch data from the table: "patient" using primary key columns */
  patient_by_pk?: Maybe<Patient>,
  /** fetch data from the table: "users" */
  users: Array<Users>,
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate,
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>,
  /** fetch data from the table: "vehicle" */
  vehicle: Array<Vehicle>,
  /** fetch aggregated fields from the table: "vehicle" */
  vehicle_aggregate: Vehicle_Aggregate,
  /** fetch data from the table: "vehicle" using primary key columns */
  vehicle_by_pk?: Maybe<Vehicle>,
  /** fetch data from the table: "vehicle_location" */
  vehicle_location: Array<Vehicle_Location>,
  /** fetch aggregated fields from the table: "vehicle_location" */
  vehicle_location_aggregate: Vehicle_Location_Aggregate,
  /** fetch data from the table: "vehicle_location" using primary key columns */
  vehicle_location_by_pk?: Maybe<Vehicle_Location>,
};


/** subscription root */
export type Subscription_RootObservationArgs = {
  distinct_on?: Maybe<Array<Observation_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Observation_Order_By>>,
  where?: Maybe<Observation_Bool_Exp>
};


/** subscription root */
export type Subscription_RootObservation_AggregateArgs = {
  distinct_on?: Maybe<Array<Observation_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Observation_Order_By>>,
  where?: Maybe<Observation_Bool_Exp>
};


/** subscription root */
export type Subscription_RootObservation_By_PkArgs = {
  id: Scalars['uuid']
};


/** subscription root */
export type Subscription_RootPArgs = {
  distinct_on?: Maybe<Array<P_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<P_Order_By>>,
  where?: Maybe<P_Bool_Exp>
};


/** subscription root */
export type Subscription_RootP_AggregateArgs = {
  distinct_on?: Maybe<Array<P_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<P_Order_By>>,
  where?: Maybe<P_Bool_Exp>
};


/** subscription root */
export type Subscription_RootP_By_PkArgs = {
  id: Scalars['Int']
};


/** subscription root */
export type Subscription_RootPatientArgs = {
  distinct_on?: Maybe<Array<Patient_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Patient_Order_By>>,
  where?: Maybe<Patient_Bool_Exp>
};


/** subscription root */
export type Subscription_RootPatient_AggregateArgs = {
  distinct_on?: Maybe<Array<Patient_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Patient_Order_By>>,
  where?: Maybe<Patient_Bool_Exp>
};


/** subscription root */
export type Subscription_RootPatient_By_PkArgs = {
  id: Scalars['uuid']
};


/** subscription root */
export type Subscription_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Users_Order_By>>,
  where?: Maybe<Users_Bool_Exp>
};


/** subscription root */
export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Users_Order_By>>,
  where?: Maybe<Users_Bool_Exp>
};


/** subscription root */
export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['Int']
};


/** subscription root */
export type Subscription_RootVehicleArgs = {
  distinct_on?: Maybe<Array<Vehicle_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Vehicle_Order_By>>,
  where?: Maybe<Vehicle_Bool_Exp>
};


/** subscription root */
export type Subscription_RootVehicle_AggregateArgs = {
  distinct_on?: Maybe<Array<Vehicle_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Vehicle_Order_By>>,
  where?: Maybe<Vehicle_Bool_Exp>
};


/** subscription root */
export type Subscription_RootVehicle_By_PkArgs = {
  id: Scalars['String']
};


/** subscription root */
export type Subscription_RootVehicle_LocationArgs = {
  distinct_on?: Maybe<Array<Vehicle_Location_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Vehicle_Location_Order_By>>,
  where?: Maybe<Vehicle_Location_Bool_Exp>
};


/** subscription root */
export type Subscription_RootVehicle_Location_AggregateArgs = {
  distinct_on?: Maybe<Array<Vehicle_Location_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Vehicle_Location_Order_By>>,
  where?: Maybe<Vehicle_Location_Bool_Exp>
};


/** subscription root */
export type Subscription_RootVehicle_Location_By_PkArgs = {
  id: Scalars['Int']
};

export type TableAnswer = Node & Answer & {
   __typename?: 'TableAnswer',
  createdAt: Scalars['DateTime'],
  createdByGroup?: Maybe<Scalars['String']>,
  createdByUser?: Maybe<Scalars['String']>,
  document: Document,
  /** The ID of the object. */
  id: Scalars['ID'],
  meta: Scalars['GenericScalar'],
  modifiedAt: Scalars['DateTime'],
  question: Question,
  value: Array<Maybe<Document>>,
};

export type TableQuestion = Node & Question & {
   __typename?: 'TableQuestion',
  createdAt: Scalars['DateTime'],
  createdByGroup?: Maybe<Scalars['String']>,
  createdByUser?: Maybe<Scalars['String']>,
  forms?: Maybe<FormConnection>,
  /** The ID of the object. */
  id: Scalars['ID'],
  infoText?: Maybe<Scalars['String']>,
  isArchived: Scalars['Boolean'],
  isHidden: Scalars['QuestionJexl'],
  /** Required expression is only evaluated when question is not hidden. */
  isRequired: Scalars['QuestionJexl'],
  label: Scalars['String'],
  meta: Scalars['GenericScalar'],
  modifiedAt: Scalars['DateTime'],
  /** Form that represents rows of a TableQuestion */
  rowForm?: Maybe<Form>,
  slug: Scalars['String'],
  source?: Maybe<Question>,
};


export type TableQuestionFormsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  createdByGroup?: Maybe<Scalars['String']>,
  createdByUser?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  isArchived?: Maybe<Scalars['Boolean']>,
  isPublished?: Maybe<Scalars['Boolean']>,
  last?: Maybe<Scalars['Int']>,
  metaHasKey?: Maybe<Scalars['String']>,
  metaValue?: Maybe<Array<Maybe<JsonValueFilterType>>>,
  name?: Maybe<Scalars['String']>,
  orderBy?: Maybe<Array<Maybe<FormOrdering>>>,
  search?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
  slugs?: Maybe<Array<Maybe<Scalars['String']>>>
};

export type Task = {
  addressGroups?: Maybe<Scalars['GroupJexl']>,
  createdAt: Scalars['DateTime'],
  createdByGroup?: Maybe<Scalars['String']>,
  createdByUser?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  isArchived: Scalars['Boolean'],
  isMultipleInstance: Scalars['Boolean'],
  meta: Scalars['GenericScalar'],
  modifiedAt: Scalars['DateTime'],
  name: Scalars['String'],
  slug: Scalars['String'],
};

export type TaskConnection = {
   __typename?: 'TaskConnection',
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<TaskEdge>>,
  /** Pagination data for this connection. */
  pageInfo: PageInfo,
  totalCount?: Maybe<Scalars['Int']>,
};

/** A Relay edge containing a `Task` and its cursor. */
export type TaskEdge = {
   __typename?: 'TaskEdge',
  /** A cursor for use in pagination */
  cursor: Scalars['String'],
  /** The item at the end of the edge */
  node?: Maybe<Task>,
};

export type TaskFilterSetType = {
  createdByGroup?: Maybe<Scalars['String']>,
  createdByUser?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  invert?: Maybe<Scalars['Boolean']>,
  isArchived?: Maybe<Scalars['Boolean']>,
  metaHasKey?: Maybe<Scalars['String']>,
  metaValue?: Maybe<Array<Maybe<JsonValueFilterType>>>,
  name?: Maybe<Scalars['String']>,
  orderBy?: Maybe<Array<Maybe<TaskOrdering>>>,
  search?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
  type?: Maybe<Type>,
};

/** An enumeration. */
export enum TaskOrdering {
  /** Created at */
  CreatedAtAsc = 'CREATED_AT_ASC',
  /** Created at (descending) */
  CreatedAtDesc = 'CREATED_AT_DESC',
  /** Created by group */
  CreatedByGroupAsc = 'CREATED_BY_GROUP_ASC',
  /** Created by group (descending) */
  CreatedByGroupDesc = 'CREATED_BY_GROUP_DESC',
  /** Created by user */
  CreatedByUserAsc = 'CREATED_BY_USER_ASC',
  /** Created by user (descending) */
  CreatedByUserDesc = 'CREATED_BY_USER_DESC',
  /** Description */
  DescriptionAsc = 'DESCRIPTION_ASC',
  /** Description (descending) */
  DescriptionDesc = 'DESCRIPTION_DESC',
  /** Modified at */
  ModifiedAtAsc = 'MODIFIED_AT_ASC',
  /** Modified at (descending) */
  ModifiedAtDesc = 'MODIFIED_AT_DESC',
  /** Name */
  NameAsc = 'NAME_ASC',
  /** Name (descending) */
  NameDesc = 'NAME_DESC',
  /** Type */
  TypeAsc = 'TYPE_ASC',
  /** Type (descending) */
  TypeDesc = 'TYPE_DESC'
}

export type TaskOrderSetType = {
  attribute?: Maybe<SortableTaskAttributes>,
  direction?: Maybe<AscDesc>,
  meta?: Maybe<Scalars['String']>,
};

/** An enumeration. */
export enum TaskType {
  /** Task to complete a defined task form. */
  CompleteTaskForm = 'COMPLETE_TASK_FORM',
  /** Task to complete a defined workflow form. */
  CompleteWorkflowForm = 'COMPLETE_WORKFLOW_FORM',
  /** Task which can simply be marked as completed. */
  Simple = 'SIMPLE'
}

/** An enumeration. */
export enum TaskTypeArgument {
  /** Task to complete a defined task form. */
  CompleteTaskForm = 'COMPLETE_TASK_FORM',
  /** Task to complete a defined workflow form. */
  CompleteWorkflowForm = 'COMPLETE_WORKFLOW_FORM',
  /** Task which can simply be marked as completed. */
  Simple = 'SIMPLE'
}

/** expression to compare columns of type text. All fields are combined with logical 'AND'. */
export type Text_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>,
  _gt?: Maybe<Scalars['String']>,
  _gte?: Maybe<Scalars['String']>,
  _ilike?: Maybe<Scalars['String']>,
  _in?: Maybe<Array<Maybe<Scalars['String']>>>,
  _is_null?: Maybe<Scalars['Boolean']>,
  _like?: Maybe<Scalars['String']>,
  _lt?: Maybe<Scalars['String']>,
  _lte?: Maybe<Scalars['String']>,
  _neq?: Maybe<Scalars['String']>,
  _nilike?: Maybe<Scalars['String']>,
  _nin?: Maybe<Array<Maybe<Scalars['String']>>>,
  _nlike?: Maybe<Scalars['String']>,
  _nsimilar?: Maybe<Scalars['String']>,
  _similar?: Maybe<Scalars['String']>,
};

export type TextareaQuestion = Node & Question & {
   __typename?: 'TextareaQuestion',
  createdAt: Scalars['DateTime'],
  createdByGroup?: Maybe<Scalars['String']>,
  createdByUser?: Maybe<Scalars['String']>,
  formatValidators?: Maybe<FormatValidatorConnection>,
  forms?: Maybe<FormConnection>,
  /** The ID of the object. */
  id: Scalars['ID'],
  infoText?: Maybe<Scalars['String']>,
  isArchived: Scalars['Boolean'],
  isHidden: Scalars['QuestionJexl'],
  /** Required expression is only evaluated when question is not hidden. */
  isRequired: Scalars['QuestionJexl'],
  label: Scalars['String'],
  maxLength?: Maybe<Scalars['Int']>,
  meta: Scalars['GenericScalar'],
  modifiedAt: Scalars['DateTime'],
  placeholder?: Maybe<Scalars['String']>,
  slug: Scalars['String'],
  source?: Maybe<Question>,
};


export type TextareaQuestionFormatValidatorsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type TextareaQuestionFormsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  createdByGroup?: Maybe<Scalars['String']>,
  createdByUser?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  isArchived?: Maybe<Scalars['Boolean']>,
  isPublished?: Maybe<Scalars['Boolean']>,
  last?: Maybe<Scalars['Int']>,
  metaHasKey?: Maybe<Scalars['String']>,
  metaValue?: Maybe<Array<Maybe<JsonValueFilterType>>>,
  name?: Maybe<Scalars['String']>,
  orderBy?: Maybe<Array<Maybe<FormOrdering>>>,
  search?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
  slugs?: Maybe<Array<Maybe<Scalars['String']>>>
};

export type TextQuestion = Node & Question & {
   __typename?: 'TextQuestion',
  createdAt: Scalars['DateTime'],
  createdByGroup?: Maybe<Scalars['String']>,
  createdByUser?: Maybe<Scalars['String']>,
  formatValidators?: Maybe<FormatValidatorConnection>,
  forms?: Maybe<FormConnection>,
  /** The ID of the object. */
  id: Scalars['ID'],
  infoText?: Maybe<Scalars['String']>,
  isArchived: Scalars['Boolean'],
  isHidden: Scalars['QuestionJexl'],
  /** Required expression is only evaluated when question is not hidden. */
  isRequired: Scalars['QuestionJexl'],
  label: Scalars['String'],
  maxLength?: Maybe<Scalars['Int']>,
  meta: Scalars['GenericScalar'],
  modifiedAt: Scalars['DateTime'],
  placeholder?: Maybe<Scalars['String']>,
  slug: Scalars['String'],
  source?: Maybe<Question>,
};


export type TextQuestionFormatValidatorsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type TextQuestionFormsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  createdByGroup?: Maybe<Scalars['String']>,
  createdByUser?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  isArchived?: Maybe<Scalars['Boolean']>,
  isPublished?: Maybe<Scalars['Boolean']>,
  last?: Maybe<Scalars['Int']>,
  metaHasKey?: Maybe<Scalars['String']>,
  metaValue?: Maybe<Array<Maybe<JsonValueFilterType>>>,
  name?: Maybe<Scalars['String']>,
  orderBy?: Maybe<Array<Maybe<FormOrdering>>>,
  search?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
  slugs?: Maybe<Array<Maybe<Scalars['String']>>>
};


/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>,
  _gt?: Maybe<Scalars['timestamptz']>,
  _gte?: Maybe<Scalars['timestamptz']>,
  _in?: Maybe<Array<Maybe<Scalars['timestamptz']>>>,
  _is_null?: Maybe<Scalars['Boolean']>,
  _lt?: Maybe<Scalars['timestamptz']>,
  _lte?: Maybe<Scalars['timestamptz']>,
  _neq?: Maybe<Scalars['timestamptz']>,
  _nin?: Maybe<Array<Maybe<Scalars['timestamptz']>>>,
};

/** An enumeration. */
export enum Type {
  /** Task to complete a defined task form. */
  CompleteTaskForm = 'COMPLETE_TASK_FORM',
  /** Task to complete a defined workflow form. */
  CompleteWorkflowForm = 'COMPLETE_WORKFLOW_FORM',
  /** Task which can simply be marked as completed. */
  Simple = 'SIMPLE'
}


/** columns and relationships of "users" */
export type Users = {
   __typename?: 'users',
  created_at: Scalars['timestamptz'],
  id: Scalars['Int'],
  name: Scalars['String'],
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
   __typename?: 'users_aggregate',
  aggregate?: Maybe<Users_Aggregate_Fields>,
  nodes: Array<Users>,
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
   __typename?: 'users_aggregate_fields',
  avg?: Maybe<Users_Avg_Fields>,
  count?: Maybe<Scalars['Int']>,
  max?: Maybe<Users_Max_Fields>,
  min?: Maybe<Users_Min_Fields>,
  stddev?: Maybe<Users_Stddev_Fields>,
  stddev_pop?: Maybe<Users_Stddev_Pop_Fields>,
  stddev_samp?: Maybe<Users_Stddev_Samp_Fields>,
  sum?: Maybe<Users_Sum_Fields>,
  var_pop?: Maybe<Users_Var_Pop_Fields>,
  var_samp?: Maybe<Users_Var_Samp_Fields>,
  variance?: Maybe<Users_Variance_Fields>,
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Users_Select_Column>>,
  distinct?: Maybe<Scalars['Boolean']>
};

/** order by aggregate values of table "users" */
export type Users_Aggregate_Order_By = {
  avg?: Maybe<Users_Avg_Order_By>,
  count?: Maybe<Order_By>,
  max?: Maybe<Users_Max_Order_By>,
  min?: Maybe<Users_Min_Order_By>,
  stddev?: Maybe<Users_Stddev_Order_By>,
  stddev_pop?: Maybe<Users_Stddev_Pop_Order_By>,
  stddev_samp?: Maybe<Users_Stddev_Samp_Order_By>,
  sum?: Maybe<Users_Sum_Order_By>,
  var_pop?: Maybe<Users_Var_Pop_Order_By>,
  var_samp?: Maybe<Users_Var_Samp_Order_By>,
  variance?: Maybe<Users_Variance_Order_By>,
};

/** input type for inserting array relation for remote table "users" */
export type Users_Arr_Rel_Insert_Input = {
  data: Array<Users_Insert_Input>,
  on_conflict?: Maybe<Users_On_Conflict>,
};

/** aggregate avg on columns */
export type Users_Avg_Fields = {
   __typename?: 'users_avg_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by avg() on columns of table "users" */
export type Users_Avg_Order_By = {
  id?: Maybe<Order_By>,
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Users_Bool_Exp>>>,
  _not?: Maybe<Users_Bool_Exp>,
  _or?: Maybe<Array<Maybe<Users_Bool_Exp>>>,
  created_at?: Maybe<Timestamptz_Comparison_Exp>,
  id?: Maybe<Integer_Comparison_Exp>,
  name?: Maybe<Text_Comparison_Exp>,
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint */
  UsersPkey = 'users_pkey'
}

/** input type for incrementing integer columne in table "users" */
export type Users_Inc_Input = {
  id?: Maybe<Scalars['Int']>,
};

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>,
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
};

/** aggregate max on columns */
export type Users_Max_Fields = {
   __typename?: 'users_max_fields',
  created_at?: Maybe<Scalars['timestamptz']>,
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
};

/** order by max() on columns of table "users" */
export type Users_Max_Order_By = {
  created_at?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  name?: Maybe<Order_By>,
};

/** aggregate min on columns */
export type Users_Min_Fields = {
   __typename?: 'users_min_fields',
  created_at?: Maybe<Scalars['timestamptz']>,
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
};

/** order by min() on columns of table "users" */
export type Users_Min_Order_By = {
  created_at?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  name?: Maybe<Order_By>,
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
   __typename?: 'users_mutation_response',
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'],
  /** data of the affected rows by the mutation */
  returning: Array<Users>,
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input,
  on_conflict?: Maybe<Users_On_Conflict>,
};

/** on conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint,
  update_columns: Array<Users_Update_Column>,
};

/** ordering options when selecting data from "users" */
export type Users_Order_By = {
  created_at?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  name?: Maybe<Order_By>,
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>,
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
};

/** aggregate stddev on columns */
export type Users_Stddev_Fields = {
   __typename?: 'users_stddev_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by stddev() on columns of table "users" */
export type Users_Stddev_Order_By = {
  id?: Maybe<Order_By>,
};

/** aggregate stddev_pop on columns */
export type Users_Stddev_Pop_Fields = {
   __typename?: 'users_stddev_pop_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by stddev_pop() on columns of table "users" */
export type Users_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>,
};

/** aggregate stddev_samp on columns */
export type Users_Stddev_Samp_Fields = {
   __typename?: 'users_stddev_samp_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by stddev_samp() on columns of table "users" */
export type Users_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>,
};

/** aggregate sum on columns */
export type Users_Sum_Fields = {
   __typename?: 'users_sum_fields',
  id?: Maybe<Scalars['Int']>,
};

/** order by sum() on columns of table "users" */
export type Users_Sum_Order_By = {
  id?: Maybe<Order_By>,
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** aggregate var_pop on columns */
export type Users_Var_Pop_Fields = {
   __typename?: 'users_var_pop_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by var_pop() on columns of table "users" */
export type Users_Var_Pop_Order_By = {
  id?: Maybe<Order_By>,
};

/** aggregate var_samp on columns */
export type Users_Var_Samp_Fields = {
   __typename?: 'users_var_samp_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by var_samp() on columns of table "users" */
export type Users_Var_Samp_Order_By = {
  id?: Maybe<Order_By>,
};

/** aggregate variance on columns */
export type Users_Variance_Fields = {
   __typename?: 'users_variance_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by variance() on columns of table "users" */
export type Users_Variance_Order_By = {
  id?: Maybe<Order_By>,
};


/** expression to compare columns of type uuid. All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: Maybe<Scalars['uuid']>,
  _gt?: Maybe<Scalars['uuid']>,
  _gte?: Maybe<Scalars['uuid']>,
  _in?: Maybe<Array<Maybe<Scalars['uuid']>>>,
  _is_null?: Maybe<Scalars['Boolean']>,
  _lt?: Maybe<Scalars['uuid']>,
  _lte?: Maybe<Scalars['uuid']>,
  _neq?: Maybe<Scalars['uuid']>,
  _nin?: Maybe<Array<Maybe<Scalars['uuid']>>>,
};

export type ValidationEntry = {
   __typename?: 'ValidationEntry',
  errorMsg: Scalars['String'],
  slug: Scalars['String'],
};

export type ValidationResult = {
   __typename?: 'ValidationResult',
  errors?: Maybe<Array<Maybe<ValidationEntry>>>,
  id?: Maybe<Scalars['ID']>,
  isValid?: Maybe<Scalars['Boolean']>,
};

/** columns and relationships of "vehicle" */
export type Vehicle = {
   __typename?: 'vehicle',
  id: Scalars['String'],
  /** An array relationship */
  locations: Array<Vehicle_Location>,
  /** An aggregated array relationship */
  locations_aggregate: Vehicle_Location_Aggregate,
  name: Scalars['String'],
};


/** columns and relationships of "vehicle" */
export type VehicleLocationsArgs = {
  distinct_on?: Maybe<Array<Vehicle_Location_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Vehicle_Location_Order_By>>,
  where?: Maybe<Vehicle_Location_Bool_Exp>
};


/** columns and relationships of "vehicle" */
export type VehicleLocations_AggregateArgs = {
  distinct_on?: Maybe<Array<Vehicle_Location_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Vehicle_Location_Order_By>>,
  where?: Maybe<Vehicle_Location_Bool_Exp>
};

/** aggregated selection of "vehicle" */
export type Vehicle_Aggregate = {
   __typename?: 'vehicle_aggregate',
  aggregate?: Maybe<Vehicle_Aggregate_Fields>,
  nodes: Array<Vehicle>,
};

/** aggregate fields of "vehicle" */
export type Vehicle_Aggregate_Fields = {
   __typename?: 'vehicle_aggregate_fields',
  count?: Maybe<Scalars['Int']>,
  max?: Maybe<Vehicle_Max_Fields>,
  min?: Maybe<Vehicle_Min_Fields>,
};


/** aggregate fields of "vehicle" */
export type Vehicle_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Vehicle_Select_Column>>,
  distinct?: Maybe<Scalars['Boolean']>
};

/** order by aggregate values of table "vehicle" */
export type Vehicle_Aggregate_Order_By = {
  count?: Maybe<Order_By>,
  max?: Maybe<Vehicle_Max_Order_By>,
  min?: Maybe<Vehicle_Min_Order_By>,
};

/** input type for inserting array relation for remote table "vehicle" */
export type Vehicle_Arr_Rel_Insert_Input = {
  data: Array<Vehicle_Insert_Input>,
  on_conflict?: Maybe<Vehicle_On_Conflict>,
};

/** Boolean expression to filter rows from the table "vehicle". All fields are combined with a logical 'AND'. */
export type Vehicle_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Vehicle_Bool_Exp>>>,
  _not?: Maybe<Vehicle_Bool_Exp>,
  _or?: Maybe<Array<Maybe<Vehicle_Bool_Exp>>>,
  id?: Maybe<Text_Comparison_Exp>,
  locations?: Maybe<Vehicle_Location_Bool_Exp>,
  name?: Maybe<Text_Comparison_Exp>,
};

/** unique or primary key constraints on table "vehicle" */
export enum Vehicle_Constraint {
  /** unique or primary key constraint */
  VehiclePkey = 'vehicle_pkey'
}

/** input type for inserting data into table "vehicle" */
export type Vehicle_Insert_Input = {
  id?: Maybe<Scalars['String']>,
  locations?: Maybe<Vehicle_Location_Arr_Rel_Insert_Input>,
  name?: Maybe<Scalars['String']>,
};

/** columns and relationships of "vehicle_location" */
export type Vehicle_Location = {
   __typename?: 'vehicle_location',
  id: Scalars['Int'],
  location: Scalars['String'],
  timestamp: Scalars['timestamptz'],
  /** An object relationship */
  vehicle: Vehicle,
  vehicle_id: Scalars['String'],
};

/** aggregated selection of "vehicle_location" */
export type Vehicle_Location_Aggregate = {
   __typename?: 'vehicle_location_aggregate',
  aggregate?: Maybe<Vehicle_Location_Aggregate_Fields>,
  nodes: Array<Vehicle_Location>,
};

/** aggregate fields of "vehicle_location" */
export type Vehicle_Location_Aggregate_Fields = {
   __typename?: 'vehicle_location_aggregate_fields',
  avg?: Maybe<Vehicle_Location_Avg_Fields>,
  count?: Maybe<Scalars['Int']>,
  max?: Maybe<Vehicle_Location_Max_Fields>,
  min?: Maybe<Vehicle_Location_Min_Fields>,
  stddev?: Maybe<Vehicle_Location_Stddev_Fields>,
  stddev_pop?: Maybe<Vehicle_Location_Stddev_Pop_Fields>,
  stddev_samp?: Maybe<Vehicle_Location_Stddev_Samp_Fields>,
  sum?: Maybe<Vehicle_Location_Sum_Fields>,
  var_pop?: Maybe<Vehicle_Location_Var_Pop_Fields>,
  var_samp?: Maybe<Vehicle_Location_Var_Samp_Fields>,
  variance?: Maybe<Vehicle_Location_Variance_Fields>,
};


/** aggregate fields of "vehicle_location" */
export type Vehicle_Location_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Vehicle_Location_Select_Column>>,
  distinct?: Maybe<Scalars['Boolean']>
};

/** order by aggregate values of table "vehicle_location" */
export type Vehicle_Location_Aggregate_Order_By = {
  avg?: Maybe<Vehicle_Location_Avg_Order_By>,
  count?: Maybe<Order_By>,
  max?: Maybe<Vehicle_Location_Max_Order_By>,
  min?: Maybe<Vehicle_Location_Min_Order_By>,
  stddev?: Maybe<Vehicle_Location_Stddev_Order_By>,
  stddev_pop?: Maybe<Vehicle_Location_Stddev_Pop_Order_By>,
  stddev_samp?: Maybe<Vehicle_Location_Stddev_Samp_Order_By>,
  sum?: Maybe<Vehicle_Location_Sum_Order_By>,
  var_pop?: Maybe<Vehicle_Location_Var_Pop_Order_By>,
  var_samp?: Maybe<Vehicle_Location_Var_Samp_Order_By>,
  variance?: Maybe<Vehicle_Location_Variance_Order_By>,
};

/** input type for inserting array relation for remote table "vehicle_location" */
export type Vehicle_Location_Arr_Rel_Insert_Input = {
  data: Array<Vehicle_Location_Insert_Input>,
  on_conflict?: Maybe<Vehicle_Location_On_Conflict>,
};

/** aggregate avg on columns */
export type Vehicle_Location_Avg_Fields = {
   __typename?: 'vehicle_location_avg_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by avg() on columns of table "vehicle_location" */
export type Vehicle_Location_Avg_Order_By = {
  id?: Maybe<Order_By>,
};

/** Boolean expression to filter rows from the table "vehicle_location". All fields are combined with a logical 'AND'. */
export type Vehicle_Location_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Vehicle_Location_Bool_Exp>>>,
  _not?: Maybe<Vehicle_Location_Bool_Exp>,
  _or?: Maybe<Array<Maybe<Vehicle_Location_Bool_Exp>>>,
  id?: Maybe<Integer_Comparison_Exp>,
  location?: Maybe<Text_Comparison_Exp>,
  timestamp?: Maybe<Timestamptz_Comparison_Exp>,
  vehicle?: Maybe<Vehicle_Bool_Exp>,
  vehicle_id?: Maybe<Text_Comparison_Exp>,
};

/** unique or primary key constraints on table "vehicle_location" */
export enum Vehicle_Location_Constraint {
  /** unique or primary key constraint */
  VehicleLocationPkey = 'vehicle_location_pkey'
}

/** input type for incrementing integer columne in table "vehicle_location" */
export type Vehicle_Location_Inc_Input = {
  id?: Maybe<Scalars['Int']>,
};

/** input type for inserting data into table "vehicle_location" */
export type Vehicle_Location_Insert_Input = {
  id?: Maybe<Scalars['Int']>,
  location?: Maybe<Scalars['String']>,
  timestamp?: Maybe<Scalars['timestamptz']>,
  vehicle?: Maybe<Vehicle_Obj_Rel_Insert_Input>,
  vehicle_id?: Maybe<Scalars['String']>,
};

/** aggregate max on columns */
export type Vehicle_Location_Max_Fields = {
   __typename?: 'vehicle_location_max_fields',
  id?: Maybe<Scalars['Int']>,
  location?: Maybe<Scalars['String']>,
  timestamp?: Maybe<Scalars['timestamptz']>,
  vehicle_id?: Maybe<Scalars['String']>,
};

/** order by max() on columns of table "vehicle_location" */
export type Vehicle_Location_Max_Order_By = {
  id?: Maybe<Order_By>,
  location?: Maybe<Order_By>,
  timestamp?: Maybe<Order_By>,
  vehicle_id?: Maybe<Order_By>,
};

/** aggregate min on columns */
export type Vehicle_Location_Min_Fields = {
   __typename?: 'vehicle_location_min_fields',
  id?: Maybe<Scalars['Int']>,
  location?: Maybe<Scalars['String']>,
  timestamp?: Maybe<Scalars['timestamptz']>,
  vehicle_id?: Maybe<Scalars['String']>,
};

/** order by min() on columns of table "vehicle_location" */
export type Vehicle_Location_Min_Order_By = {
  id?: Maybe<Order_By>,
  location?: Maybe<Order_By>,
  timestamp?: Maybe<Order_By>,
  vehicle_id?: Maybe<Order_By>,
};

/** response of any mutation on the table "vehicle_location" */
export type Vehicle_Location_Mutation_Response = {
   __typename?: 'vehicle_location_mutation_response',
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'],
  /** data of the affected rows by the mutation */
  returning: Array<Vehicle_Location>,
};

/** input type for inserting object relation for remote table "vehicle_location" */
export type Vehicle_Location_Obj_Rel_Insert_Input = {
  data: Vehicle_Location_Insert_Input,
  on_conflict?: Maybe<Vehicle_Location_On_Conflict>,
};

/** on conflict condition type for table "vehicle_location" */
export type Vehicle_Location_On_Conflict = {
  constraint: Vehicle_Location_Constraint,
  update_columns: Array<Vehicle_Location_Update_Column>,
};

/** ordering options when selecting data from "vehicle_location" */
export type Vehicle_Location_Order_By = {
  id?: Maybe<Order_By>,
  location?: Maybe<Order_By>,
  timestamp?: Maybe<Order_By>,
  vehicle?: Maybe<Vehicle_Order_By>,
  vehicle_id?: Maybe<Order_By>,
};

/** select columns of table "vehicle_location" */
export enum Vehicle_Location_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Location = 'location',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  VehicleId = 'vehicle_id'
}

/** input type for updating data in table "vehicle_location" */
export type Vehicle_Location_Set_Input = {
  id?: Maybe<Scalars['Int']>,
  location?: Maybe<Scalars['String']>,
  timestamp?: Maybe<Scalars['timestamptz']>,
  vehicle_id?: Maybe<Scalars['String']>,
};

/** aggregate stddev on columns */
export type Vehicle_Location_Stddev_Fields = {
   __typename?: 'vehicle_location_stddev_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by stddev() on columns of table "vehicle_location" */
export type Vehicle_Location_Stddev_Order_By = {
  id?: Maybe<Order_By>,
};

/** aggregate stddev_pop on columns */
export type Vehicle_Location_Stddev_Pop_Fields = {
   __typename?: 'vehicle_location_stddev_pop_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by stddev_pop() on columns of table "vehicle_location" */
export type Vehicle_Location_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>,
};

/** aggregate stddev_samp on columns */
export type Vehicle_Location_Stddev_Samp_Fields = {
   __typename?: 'vehicle_location_stddev_samp_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by stddev_samp() on columns of table "vehicle_location" */
export type Vehicle_Location_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>,
};

/** aggregate sum on columns */
export type Vehicle_Location_Sum_Fields = {
   __typename?: 'vehicle_location_sum_fields',
  id?: Maybe<Scalars['Int']>,
};

/** order by sum() on columns of table "vehicle_location" */
export type Vehicle_Location_Sum_Order_By = {
  id?: Maybe<Order_By>,
};

/** update columns of table "vehicle_location" */
export enum Vehicle_Location_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Location = 'location',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  VehicleId = 'vehicle_id'
}

/** aggregate var_pop on columns */
export type Vehicle_Location_Var_Pop_Fields = {
   __typename?: 'vehicle_location_var_pop_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by var_pop() on columns of table "vehicle_location" */
export type Vehicle_Location_Var_Pop_Order_By = {
  id?: Maybe<Order_By>,
};

/** aggregate var_samp on columns */
export type Vehicle_Location_Var_Samp_Fields = {
   __typename?: 'vehicle_location_var_samp_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by var_samp() on columns of table "vehicle_location" */
export type Vehicle_Location_Var_Samp_Order_By = {
  id?: Maybe<Order_By>,
};

/** aggregate variance on columns */
export type Vehicle_Location_Variance_Fields = {
   __typename?: 'vehicle_location_variance_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by variance() on columns of table "vehicle_location" */
export type Vehicle_Location_Variance_Order_By = {
  id?: Maybe<Order_By>,
};

/** aggregate max on columns */
export type Vehicle_Max_Fields = {
   __typename?: 'vehicle_max_fields',
  id?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
};

/** order by max() on columns of table "vehicle" */
export type Vehicle_Max_Order_By = {
  id?: Maybe<Order_By>,
  name?: Maybe<Order_By>,
};

/** aggregate min on columns */
export type Vehicle_Min_Fields = {
   __typename?: 'vehicle_min_fields',
  id?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
};

/** order by min() on columns of table "vehicle" */
export type Vehicle_Min_Order_By = {
  id?: Maybe<Order_By>,
  name?: Maybe<Order_By>,
};

/** response of any mutation on the table "vehicle" */
export type Vehicle_Mutation_Response = {
   __typename?: 'vehicle_mutation_response',
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'],
  /** data of the affected rows by the mutation */
  returning: Array<Vehicle>,
};

/** input type for inserting object relation for remote table "vehicle" */
export type Vehicle_Obj_Rel_Insert_Input = {
  data: Vehicle_Insert_Input,
  on_conflict?: Maybe<Vehicle_On_Conflict>,
};

/** on conflict condition type for table "vehicle" */
export type Vehicle_On_Conflict = {
  constraint: Vehicle_Constraint,
  update_columns: Array<Vehicle_Update_Column>,
};

/** ordering options when selecting data from "vehicle" */
export type Vehicle_Order_By = {
  id?: Maybe<Order_By>,
  locations_aggregate?: Maybe<Vehicle_Location_Aggregate_Order_By>,
  name?: Maybe<Order_By>,
};

/** select columns of table "vehicle" */
export enum Vehicle_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "vehicle" */
export type Vehicle_Set_Input = {
  id?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
};

/** update columns of table "vehicle" */
export enum Vehicle_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

export type Workflow = Node & {
   __typename?: 'Workflow',
  /** Allow workflow to be started with any form */
  allowAllForms: Scalars['Boolean'],
  /** List of forms which are allowed to start workflow with */
  allowForms: FormConnection,
  createdAt: Scalars['DateTime'],
  createdByGroup?: Maybe<Scalars['String']>,
  createdByUser?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  flows?: Maybe<FlowConnection>,
  /** The ID of the object. */
  id: Scalars['ID'],
  isArchived: Scalars['Boolean'],
  isPublished: Scalars['Boolean'],
  meta?: Maybe<Scalars['GenericScalar']>,
  modifiedAt: Scalars['DateTime'],
  name: Scalars['String'],
  slug: Scalars['String'],
  startTasks: Array<Maybe<Task>>,
  /** List of tasks referenced in workflow */
  tasks: Array<Maybe<Task>>,
};


export type WorkflowAllowFormsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type WorkflowFlowsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  createdByGroup?: Maybe<Scalars['String']>,
  createdByUser?: Maybe<Scalars['String']>,
  filter?: Maybe<Array<Maybe<FlowFilterSetType>>>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  task?: Maybe<Scalars['ID']>
};

export type WorkflowConnection = {
   __typename?: 'WorkflowConnection',
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<WorkflowEdge>>,
  /** Pagination data for this connection. */
  pageInfo: PageInfo,
  totalCount?: Maybe<Scalars['Int']>,
};

/** A Relay edge containing a `Workflow` and its cursor. */
export type WorkflowEdge = {
   __typename?: 'WorkflowEdge',
  /** A cursor for use in pagination */
  cursor: Scalars['String'],
  /** The item at the end of the edge */
  node?: Maybe<Workflow>,
};

export type WorkflowFilterSetType = {
  createdByGroup?: Maybe<Scalars['String']>,
  createdByUser?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  invert?: Maybe<Scalars['Boolean']>,
  isArchived?: Maybe<Scalars['Boolean']>,
  isPublished?: Maybe<Scalars['Boolean']>,
  metaHasKey?: Maybe<Scalars['String']>,
  metaValue?: Maybe<Array<Maybe<JsonValueFilterType>>>,
  name?: Maybe<Scalars['String']>,
  orderBy?: Maybe<Array<Maybe<WorkflowOrdering>>>,
  search?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
};

/** An enumeration. */
export enum WorkflowOrdering {
  /** Created at */
  CreatedAtAsc = 'CREATED_AT_ASC',
  /** Created at (descending) */
  CreatedAtDesc = 'CREATED_AT_DESC',
  /** Created by group */
  CreatedByGroupAsc = 'CREATED_BY_GROUP_ASC',
  /** Created by group (descending) */
  CreatedByGroupDesc = 'CREATED_BY_GROUP_DESC',
  /** Created by user */
  CreatedByUserAsc = 'CREATED_BY_USER_ASC',
  /** Created by user (descending) */
  CreatedByUserDesc = 'CREATED_BY_USER_DESC',
  /** Description */
  DescriptionAsc = 'DESCRIPTION_ASC',
  /** Description (descending) */
  DescriptionDesc = 'DESCRIPTION_DESC',
  /** Modified at */
  ModifiedAtAsc = 'MODIFIED_AT_ASC',
  /** Modified at (descending) */
  ModifiedAtDesc = 'MODIFIED_AT_DESC',
  /** Name */
  NameAsc = 'NAME_ASC',
  /** Name (descending) */
  NameDesc = 'NAME_DESC'
}

export type WorkflowOrderSetType = {
  attribute?: Maybe<SortableWorkflowAttributes>,
  direction?: Maybe<AscDesc>,
  meta?: Maybe<Scalars['String']>,
};

export type WorkItem = Node & {
   __typename?: 'WorkItem',
  /** Offer work item to be processed by a group of users, such are not committed to process it though. */
  addressedGroups: Array<Maybe<Scalars['String']>>,
  /** Users responsible to undertake given work item. */
  assignedUsers: Array<Maybe<Scalars['String']>>,
  case: Case,
  /** Defines case of a sub-workflow */
  childCase?: Maybe<Case>,
  /** Time when work item has either been canceled or completed */
  closedAt?: Maybe<Scalars['DateTime']>,
  closedByGroup?: Maybe<Scalars['String']>,
  closedByUser?: Maybe<Scalars['String']>,
  createdAt: Scalars['DateTime'],
  createdByGroup?: Maybe<Scalars['String']>,
  createdByUser?: Maybe<Scalars['String']>,
  deadline?: Maybe<Scalars['DateTime']>,
  document?: Maybe<Document>,
  /** The ID of the object. */
  id: Scalars['ID'],
  meta?: Maybe<Scalars['GenericScalar']>,
  modifiedAt: Scalars['DateTime'],
  status: WorkItemStatus,
  task: Task,
};

export type WorkItemConnection = {
   __typename?: 'WorkItemConnection',
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<WorkItemEdge>>,
  /** Pagination data for this connection. */
  pageInfo: PageInfo,
  totalCount?: Maybe<Scalars['Int']>,
};

/** A Relay edge containing a `WorkItem` and its cursor. */
export type WorkItemEdge = {
   __typename?: 'WorkItemEdge',
  /** A cursor for use in pagination */
  cursor: Scalars['String'],
  /** The item at the end of the edge */
  node?: Maybe<WorkItem>,
};

export type WorkItemFilterSetType = {
  addressedGroups?: Maybe<Array<Maybe<Scalars['String']>>>,
  case?: Maybe<Scalars['ID']>,
  caseDocumentHasAnswer?: Maybe<Array<Maybe<HasAnswerFilterType>>>,
  caseMetaValue?: Maybe<Array<Maybe<JsonValueFilterType>>>,
  createdByGroup?: Maybe<Scalars['String']>,
  createdByUser?: Maybe<Scalars['String']>,
  documentHasAnswer?: Maybe<Array<Maybe<HasAnswerFilterType>>>,
  invert?: Maybe<Scalars['Boolean']>,
  metaHasKey?: Maybe<Scalars['String']>,
  metaValue?: Maybe<Array<Maybe<JsonValueFilterType>>>,
  orderBy?: Maybe<Array<Maybe<WorkItemOrdering>>>,
  status?: Maybe<Status>,
  task?: Maybe<Scalars['ID']>,
};

/** An enumeration. */
export enum WorkItemOrdering {
  /** Created at */
  CreatedAtAsc = 'CREATED_AT_ASC',
  /** Created at (descending) */
  CreatedAtDesc = 'CREATED_AT_DESC',
  /** Created by group */
  CreatedByGroupAsc = 'CREATED_BY_GROUP_ASC',
  /** Created by group (descending) */
  CreatedByGroupDesc = 'CREATED_BY_GROUP_DESC',
  /** Created by user */
  CreatedByUserAsc = 'CREATED_BY_USER_ASC',
  /** Created by user (descending) */
  CreatedByUserDesc = 'CREATED_BY_USER_DESC',
  /** Deadline */
  DeadlineAsc = 'DEADLINE_ASC',
  /** Deadline (descending) */
  DeadlineDesc = 'DEADLINE_DESC',
  /** Modified at */
  ModifiedAtAsc = 'MODIFIED_AT_ASC',
  /** Modified at (descending) */
  ModifiedAtDesc = 'MODIFIED_AT_DESC',
  /** Status */
  StatusAsc = 'STATUS_ASC',
  /** Status (descending) */
  StatusDesc = 'STATUS_DESC'
}

export type WorkItemOrderSetType = {
  attribute?: Maybe<SortableWorkItemAttributes>,
  caseDocumentAnswer?: Maybe<Scalars['String']>,
  caseMeta?: Maybe<Scalars['String']>,
  direction?: Maybe<AscDesc>,
  documentAnswer?: Maybe<Scalars['String']>,
  meta?: Maybe<Scalars['String']>,
};

/** An enumeration. */
export enum WorkItemStatus {
  /** Task is cancelled. */
  Canceled = 'CANCELED',
  /** Task is done. */
  Completed = 'COMPLETED',
  /** Task is ready to be processed. */
  Ready = 'READY'
}

/** An enumeration. */
export enum WorkItemStatusArgument {
  /** Task is cancelled. */
  Canceled = 'CANCELED',
  /** Task is done. */
  Completed = 'COMPLETED',
  /** Task is ready to be processed. */
  Ready = 'READY'
}

export type ObservationModelFieldsFragment = (
  { __typename?: 'observation' }
  & Pick<Observation, 'id' | 'resource'>
);

export type InsertobservationModelMutationVariables = {
  objects: Array<Observation_Insert_Input>,
  onConflict?: Maybe<Observation_On_Conflict>
};


export type InsertobservationModelMutation = (
  { __typename?: 'mutation_root' }
  & { insert_observation: Maybe<(
    { __typename?: 'observation_mutation_response' }
    & Pick<Observation_Mutation_Response, 'affected_rows'>
    & { returning: Array<(
      { __typename?: 'observation' }
      & ObservationModelFieldsFragment
    )> }
  )> }
);

export type FetchobservationModelByIdQueryVariables = {
  observationId: Scalars['uuid']
};


export type FetchobservationModelByIdQuery = (
  { __typename?: 'query_root' }
  & { observation_by_pk: Maybe<(
    { __typename?: 'observation' }
    & ObservationModelFieldsFragment
  )> }
);

export type FetchobservationModelQueryVariables = {
  distinct_on?: Maybe<Array<Observation_Select_Column>>,
  where?: Maybe<Observation_Bool_Exp>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Observation_Order_By>>
};


export type FetchobservationModelQuery = (
  { __typename?: 'query_root' }
  & { observation: Array<(
    { __typename?: 'observation' }
    & ObservationModelFieldsFragment
  )> }
);

export type UpdateobservationModelByIdMutationVariables = {
  id?: Maybe<Scalars['uuid']>,
  set?: Maybe<Observation_Set_Input>
};


export type UpdateobservationModelByIdMutation = (
  { __typename?: 'mutation_root' }
  & { update_observation: Maybe<(
    { __typename?: 'observation_mutation_response' }
    & Pick<Observation_Mutation_Response, 'affected_rows'>
    & { returning: Array<(
      { __typename?: 'observation' }
      & ObservationModelFieldsFragment
    )> }
  )> }
);

export type UpdateobservationModelMutationVariables = {
  set?: Maybe<Observation_Set_Input>,
  where: Observation_Bool_Exp
};


export type UpdateobservationModelMutation = (
  { __typename?: 'mutation_root' }
  & { update_observation: Maybe<(
    { __typename?: 'observation_mutation_response' }
    & Pick<Observation_Mutation_Response, 'affected_rows'>
    & { returning: Array<(
      { __typename?: 'observation' }
      & ObservationModelFieldsFragment
    )> }
  )> }
);

export type RemoveobservationModelByIdMutationVariables = {
  id?: Maybe<Scalars['uuid']>
};


export type RemoveobservationModelByIdMutation = (
  { __typename?: 'mutation_root' }
  & { delete_observation: Maybe<(
    { __typename?: 'observation_mutation_response' }
    & Pick<Observation_Mutation_Response, 'affected_rows'>
  )> }
);

export type RemoveobservationModelMutationVariables = {
  where: Observation_Bool_Exp
};


export type RemoveobservationModelMutation = (
  { __typename?: 'mutation_root' }
  & { delete_observation: Maybe<(
    { __typename?: 'observation_mutation_response' }
    & Pick<Observation_Mutation_Response, 'affected_rows'>
  )> }
);

export type PModelFieldsFragment = (
  { __typename?: 'p' }
  & Pick<P, 'circle' | 'id' | 'poly'>
);

export type InsertpModelMutationVariables = {
  objects: Array<P_Insert_Input>,
  onConflict?: Maybe<P_On_Conflict>
};


export type InsertpModelMutation = (
  { __typename?: 'mutation_root' }
  & { insert_p: Maybe<(
    { __typename?: 'p_mutation_response' }
    & Pick<P_Mutation_Response, 'affected_rows'>
    & { returning: Array<(
      { __typename?: 'p' }
      & PModelFieldsFragment
    )> }
  )> }
);

export type FetchpModelByIdQueryVariables = {
  pId: Scalars['Int']
};


export type FetchpModelByIdQuery = (
  { __typename?: 'query_root' }
  & { p_by_pk: Maybe<(
    { __typename?: 'p' }
    & PModelFieldsFragment
  )> }
);

export type FetchpModelQueryVariables = {
  distinct_on?: Maybe<Array<P_Select_Column>>,
  where?: Maybe<P_Bool_Exp>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<P_Order_By>>
};


export type FetchpModelQuery = (
  { __typename?: 'query_root' }
  & { p: Array<(
    { __typename?: 'p' }
    & PModelFieldsFragment
  )> }
);

export type UpdatepModelByIdMutationVariables = {
  id?: Maybe<Scalars['Int']>,
  set?: Maybe<P_Set_Input>
};


export type UpdatepModelByIdMutation = (
  { __typename?: 'mutation_root' }
  & { update_p: Maybe<(
    { __typename?: 'p_mutation_response' }
    & Pick<P_Mutation_Response, 'affected_rows'>
    & { returning: Array<(
      { __typename?: 'p' }
      & PModelFieldsFragment
    )> }
  )> }
);

export type UpdatepModelMutationVariables = {
  set?: Maybe<P_Set_Input>,
  where: P_Bool_Exp
};


export type UpdatepModelMutation = (
  { __typename?: 'mutation_root' }
  & { update_p: Maybe<(
    { __typename?: 'p_mutation_response' }
    & Pick<P_Mutation_Response, 'affected_rows'>
    & { returning: Array<(
      { __typename?: 'p' }
      & PModelFieldsFragment
    )> }
  )> }
);

export type RemovepModelByIdMutationVariables = {
  id?: Maybe<Scalars['Int']>
};


export type RemovepModelByIdMutation = (
  { __typename?: 'mutation_root' }
  & { delete_p: Maybe<(
    { __typename?: 'p_mutation_response' }
    & Pick<P_Mutation_Response, 'affected_rows'>
  )> }
);

export type RemovepModelMutationVariables = {
  where: P_Bool_Exp
};


export type RemovepModelMutation = (
  { __typename?: 'mutation_root' }
  & { delete_p: Maybe<(
    { __typename?: 'p_mutation_response' }
    & Pick<P_Mutation_Response, 'affected_rows'>
  )> }
);

export type PatientModelFieldsFragment = (
  { __typename?: 'patient' }
  & Pick<Patient, 'id' | 'resource'>
);

export type InsertpatientModelMutationVariables = {
  objects: Array<Patient_Insert_Input>,
  onConflict?: Maybe<Patient_On_Conflict>
};


export type InsertpatientModelMutation = (
  { __typename?: 'mutation_root' }
  & { insert_patient: Maybe<(
    { __typename?: 'patient_mutation_response' }
    & Pick<Patient_Mutation_Response, 'affected_rows'>
    & { returning: Array<(
      { __typename?: 'patient' }
      & PatientModelFieldsFragment
    )> }
  )> }
);

export type FetchpatientModelByIdQueryVariables = {
  patientId: Scalars['uuid']
};


export type FetchpatientModelByIdQuery = (
  { __typename?: 'query_root' }
  & { patient_by_pk: Maybe<(
    { __typename?: 'patient' }
    & PatientModelFieldsFragment
  )> }
);

export type FetchpatientModelQueryVariables = {
  distinct_on?: Maybe<Array<Patient_Select_Column>>,
  where?: Maybe<Patient_Bool_Exp>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Patient_Order_By>>
};


export type FetchpatientModelQuery = (
  { __typename?: 'query_root' }
  & { patient: Array<(
    { __typename?: 'patient' }
    & PatientModelFieldsFragment
  )> }
);

export type UpdatepatientModelByIdMutationVariables = {
  id?: Maybe<Scalars['uuid']>,
  set?: Maybe<Patient_Set_Input>
};


export type UpdatepatientModelByIdMutation = (
  { __typename?: 'mutation_root' }
  & { update_patient: Maybe<(
    { __typename?: 'patient_mutation_response' }
    & Pick<Patient_Mutation_Response, 'affected_rows'>
    & { returning: Array<(
      { __typename?: 'patient' }
      & PatientModelFieldsFragment
    )> }
  )> }
);

export type UpdatepatientModelMutationVariables = {
  set?: Maybe<Patient_Set_Input>,
  where: Patient_Bool_Exp
};


export type UpdatepatientModelMutation = (
  { __typename?: 'mutation_root' }
  & { update_patient: Maybe<(
    { __typename?: 'patient_mutation_response' }
    & Pick<Patient_Mutation_Response, 'affected_rows'>
    & { returning: Array<(
      { __typename?: 'patient' }
      & PatientModelFieldsFragment
    )> }
  )> }
);

export type RemovepatientModelByIdMutationVariables = {
  id?: Maybe<Scalars['uuid']>
};


export type RemovepatientModelByIdMutation = (
  { __typename?: 'mutation_root' }
  & { delete_patient: Maybe<(
    { __typename?: 'patient_mutation_response' }
    & Pick<Patient_Mutation_Response, 'affected_rows'>
  )> }
);

export type RemovepatientModelMutationVariables = {
  where: Patient_Bool_Exp
};


export type RemovepatientModelMutation = (
  { __typename?: 'mutation_root' }
  & { delete_patient: Maybe<(
    { __typename?: 'patient_mutation_response' }
    & Pick<Patient_Mutation_Response, 'affected_rows'>
  )> }
);

export type UsersModelFieldsFragment = (
  { __typename?: 'users' }
  & Pick<Users, 'created_at' | 'id' | 'name'>
);

export type InsertusersModelMutationVariables = {
  objects: Array<Users_Insert_Input>,
  onConflict?: Maybe<Users_On_Conflict>
};


export type InsertusersModelMutation = (
  { __typename?: 'mutation_root' }
  & { insert_users: Maybe<(
    { __typename?: 'users_mutation_response' }
    & Pick<Users_Mutation_Response, 'affected_rows'>
    & { returning: Array<(
      { __typename?: 'users' }
      & UsersModelFieldsFragment
    )> }
  )> }
);

export type FetchusersModelByIdQueryVariables = {
  usersId: Scalars['Int']
};


export type FetchusersModelByIdQuery = (
  { __typename?: 'query_root' }
  & { users_by_pk: Maybe<(
    { __typename?: 'users' }
    & UsersModelFieldsFragment
  )> }
);

export type FetchusersModelQueryVariables = {
  distinct_on?: Maybe<Array<Users_Select_Column>>,
  where?: Maybe<Users_Bool_Exp>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Users_Order_By>>
};


export type FetchusersModelQuery = (
  { __typename?: 'query_root' }
  & { users: Array<(
    { __typename?: 'users' }
    & UsersModelFieldsFragment
  )> }
);

export type UpdateusersModelByIdMutationVariables = {
  id?: Maybe<Scalars['Int']>,
  set?: Maybe<Users_Set_Input>
};


export type UpdateusersModelByIdMutation = (
  { __typename?: 'mutation_root' }
  & { update_users: Maybe<(
    { __typename?: 'users_mutation_response' }
    & Pick<Users_Mutation_Response, 'affected_rows'>
    & { returning: Array<(
      { __typename?: 'users' }
      & UsersModelFieldsFragment
    )> }
  )> }
);

export type UpdateusersModelMutationVariables = {
  set?: Maybe<Users_Set_Input>,
  where: Users_Bool_Exp
};


export type UpdateusersModelMutation = (
  { __typename?: 'mutation_root' }
  & { update_users: Maybe<(
    { __typename?: 'users_mutation_response' }
    & Pick<Users_Mutation_Response, 'affected_rows'>
    & { returning: Array<(
      { __typename?: 'users' }
      & UsersModelFieldsFragment
    )> }
  )> }
);

export type RemoveusersModelByIdMutationVariables = {
  id?: Maybe<Scalars['Int']>
};


export type RemoveusersModelByIdMutation = (
  { __typename?: 'mutation_root' }
  & { delete_users: Maybe<(
    { __typename?: 'users_mutation_response' }
    & Pick<Users_Mutation_Response, 'affected_rows'>
  )> }
);

export type RemoveusersModelMutationVariables = {
  where: Users_Bool_Exp
};


export type RemoveusersModelMutation = (
  { __typename?: 'mutation_root' }
  & { delete_users: Maybe<(
    { __typename?: 'users_mutation_response' }
    & Pick<Users_Mutation_Response, 'affected_rows'>
  )> }
);

export type VehicleModelFieldsFragment = (
  { __typename?: 'vehicle' }
  & Pick<Vehicle, 'id' | 'name'>
);

export type InsertvehicleModelMutationVariables = {
  objects: Array<Vehicle_Insert_Input>,
  onConflict?: Maybe<Vehicle_On_Conflict>
};


export type InsertvehicleModelMutation = (
  { __typename?: 'mutation_root' }
  & { insert_vehicle: Maybe<(
    { __typename?: 'vehicle_mutation_response' }
    & Pick<Vehicle_Mutation_Response, 'affected_rows'>
    & { returning: Array<(
      { __typename?: 'vehicle' }
      & VehicleModelFieldsFragment
    )> }
  )> }
);

export type FetchvehicleModelByIdQueryVariables = {
  vehicleId: Scalars['String']
};


export type FetchvehicleModelByIdQuery = (
  { __typename?: 'query_root' }
  & { vehicle_by_pk: Maybe<(
    { __typename?: 'vehicle' }
    & VehicleModelFieldsFragment
  )> }
);

export type FetchvehicleModelQueryVariables = {
  distinct_on?: Maybe<Array<Vehicle_Select_Column>>,
  where?: Maybe<Vehicle_Bool_Exp>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Vehicle_Order_By>>
};


export type FetchvehicleModelQuery = (
  { __typename?: 'query_root' }
  & { vehicle: Array<(
    { __typename?: 'vehicle' }
    & VehicleModelFieldsFragment
  )> }
);

export type UpdatevehicleModelByIdMutationVariables = {
  id?: Maybe<Scalars['String']>,
  set?: Maybe<Vehicle_Set_Input>
};


export type UpdatevehicleModelByIdMutation = (
  { __typename?: 'mutation_root' }
  & { update_vehicle: Maybe<(
    { __typename?: 'vehicle_mutation_response' }
    & Pick<Vehicle_Mutation_Response, 'affected_rows'>
    & { returning: Array<(
      { __typename?: 'vehicle' }
      & VehicleModelFieldsFragment
    )> }
  )> }
);

export type UpdatevehicleModelMutationVariables = {
  set?: Maybe<Vehicle_Set_Input>,
  where: Vehicle_Bool_Exp
};


export type UpdatevehicleModelMutation = (
  { __typename?: 'mutation_root' }
  & { update_vehicle: Maybe<(
    { __typename?: 'vehicle_mutation_response' }
    & Pick<Vehicle_Mutation_Response, 'affected_rows'>
    & { returning: Array<(
      { __typename?: 'vehicle' }
      & VehicleModelFieldsFragment
    )> }
  )> }
);

export type RemovevehicleModelByIdMutationVariables = {
  id?: Maybe<Scalars['String']>
};


export type RemovevehicleModelByIdMutation = (
  { __typename?: 'mutation_root' }
  & { delete_vehicle: Maybe<(
    { __typename?: 'vehicle_mutation_response' }
    & Pick<Vehicle_Mutation_Response, 'affected_rows'>
  )> }
);

export type RemovevehicleModelMutationVariables = {
  where: Vehicle_Bool_Exp
};


export type RemovevehicleModelMutation = (
  { __typename?: 'mutation_root' }
  & { delete_vehicle: Maybe<(
    { __typename?: 'vehicle_mutation_response' }
    & Pick<Vehicle_Mutation_Response, 'affected_rows'>
  )> }
);

export type Vehicle_LocationModelFieldsFragment = (
  { __typename?: 'vehicle_location' }
  & Pick<Vehicle_Location, 'id' | 'location' | 'timestamp' | 'vehicle_id'>
);

export type Insertvehicle_LocationModelMutationVariables = {
  objects: Array<Vehicle_Location_Insert_Input>,
  onConflict?: Maybe<Vehicle_Location_On_Conflict>
};


export type Insertvehicle_LocationModelMutation = (
  { __typename?: 'mutation_root' }
  & { insert_vehicle_location: Maybe<(
    { __typename?: 'vehicle_location_mutation_response' }
    & Pick<Vehicle_Location_Mutation_Response, 'affected_rows'>
    & { returning: Array<(
      { __typename?: 'vehicle_location' }
      & Vehicle_LocationModelFieldsFragment
    )> }
  )> }
);

export type Fetchvehicle_LocationModelByIdQueryVariables = {
  vehicle_locationId: Scalars['Int']
};


export type Fetchvehicle_LocationModelByIdQuery = (
  { __typename?: 'query_root' }
  & { vehicle_location_by_pk: Maybe<(
    { __typename?: 'vehicle_location' }
    & Vehicle_LocationModelFieldsFragment
  )> }
);

export type Fetchvehicle_LocationModelQueryVariables = {
  distinct_on?: Maybe<Array<Vehicle_Location_Select_Column>>,
  where?: Maybe<Vehicle_Location_Bool_Exp>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Vehicle_Location_Order_By>>
};


export type Fetchvehicle_LocationModelQuery = (
  { __typename?: 'query_root' }
  & { vehicle_location: Array<(
    { __typename?: 'vehicle_location' }
    & Vehicle_LocationModelFieldsFragment
  )> }
);

export type Updatevehicle_LocationModelByIdMutationVariables = {
  id?: Maybe<Scalars['Int']>,
  set?: Maybe<Vehicle_Location_Set_Input>
};


export type Updatevehicle_LocationModelByIdMutation = (
  { __typename?: 'mutation_root' }
  & { update_vehicle_location: Maybe<(
    { __typename?: 'vehicle_location_mutation_response' }
    & Pick<Vehicle_Location_Mutation_Response, 'affected_rows'>
    & { returning: Array<(
      { __typename?: 'vehicle_location' }
      & Vehicle_LocationModelFieldsFragment
    )> }
  )> }
);

export type Updatevehicle_LocationModelMutationVariables = {
  set?: Maybe<Vehicle_Location_Set_Input>,
  where: Vehicle_Location_Bool_Exp
};


export type Updatevehicle_LocationModelMutation = (
  { __typename?: 'mutation_root' }
  & { update_vehicle_location: Maybe<(
    { __typename?: 'vehicle_location_mutation_response' }
    & Pick<Vehicle_Location_Mutation_Response, 'affected_rows'>
    & { returning: Array<(
      { __typename?: 'vehicle_location' }
      & Vehicle_LocationModelFieldsFragment
    )> }
  )> }
);

export type Removevehicle_LocationModelByIdMutationVariables = {
  id?: Maybe<Scalars['Int']>
};


export type Removevehicle_LocationModelByIdMutation = (
  { __typename?: 'mutation_root' }
  & { delete_vehicle_location: Maybe<(
    { __typename?: 'vehicle_location_mutation_response' }
    & Pick<Vehicle_Location_Mutation_Response, 'affected_rows'>
  )> }
);

export type Removevehicle_LocationModelMutationVariables = {
  where: Vehicle_Location_Bool_Exp
};


export type Removevehicle_LocationModelMutation = (
  { __typename?: 'mutation_root' }
  & { delete_vehicle_location: Maybe<(
    { __typename?: 'vehicle_location_mutation_response' }
    & Pick<Vehicle_Location_Mutation_Response, 'affected_rows'>
  )> }
);

export const ObservationModelFieldsFragmentDoc = gql`
    fragment observationModelFields on observation {
  id
  resource
}
    `;
export const PModelFieldsFragmentDoc = gql`
    fragment pModelFields on p {
  circle
  id
  poly
}
    `;
export const PatientModelFieldsFragmentDoc = gql`
    fragment patientModelFields on patient {
  id
  resource
}
    `;
export const UsersModelFieldsFragmentDoc = gql`
    fragment usersModelFields on users {
  created_at
  id
  name
}
    `;
export const VehicleModelFieldsFragmentDoc = gql`
    fragment vehicleModelFields on vehicle {
  id
  name
}
    `;
export const Vehicle_LocationModelFieldsFragmentDoc = gql`
    fragment vehicle_locationModelFields on vehicle_location {
  id
  location
  timestamp
  vehicle_id
}
    `;
export const InsertobservationModelDocument = gql`
    mutation insertobservationModel($objects: [observation_insert_input!]!, $onConflict: observation_on_conflict) {
  insert_observation(objects: $objects, on_conflict: $onConflict) {
    affected_rows
    returning {
      ...observationModelFields
    }
  }
}
    ${ObservationModelFieldsFragmentDoc}`;
export type InsertobservationModelMutationFn = ApolloReactCommon.MutationFunction<InsertobservationModelMutation, InsertobservationModelMutationVariables>;

/**
 * __useInsertobservationModelMutation__
 *
 * To run a mutation, you first call `useInsertobservationModelMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertobservationModelMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertobservationModelMutation, { data, loading, error }] = useInsertobservationModelMutation({
 *   variables: {
 *      objects: // value for 'objects'
 *      onConflict: // value for 'onConflict'
 *   },
 * });
 */
export function useInsertobservationModelMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<InsertobservationModelMutation, InsertobservationModelMutationVariables>) {
        return ApolloReactHooks.useMutation<InsertobservationModelMutation, InsertobservationModelMutationVariables>(InsertobservationModelDocument, baseOptions);
      }
export type InsertobservationModelMutationHookResult = ReturnType<typeof useInsertobservationModelMutation>;
export type InsertobservationModelMutationResult = ApolloReactCommon.MutationResult<InsertobservationModelMutation>;
export type InsertobservationModelMutationOptions = ApolloReactCommon.BaseMutationOptions<InsertobservationModelMutation, InsertobservationModelMutationVariables>;
export const FetchobservationModelByIdDocument = gql`
    query fetchobservationModelById($observationId: uuid!) {
  observation_by_pk(id: $observationId) {
    ...observationModelFields
  }
}
    ${ObservationModelFieldsFragmentDoc}`;

/**
 * __useFetchobservationModelByIdQuery__
 *
 * To run a query within a React component, call `useFetchobservationModelByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchobservationModelByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchobservationModelByIdQuery({
 *   variables: {
 *      observationId: // value for 'observationId'
 *   },
 * });
 */
export function useFetchobservationModelByIdQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FetchobservationModelByIdQuery, FetchobservationModelByIdQueryVariables>) {
        return ApolloReactHooks.useQuery<FetchobservationModelByIdQuery, FetchobservationModelByIdQueryVariables>(FetchobservationModelByIdDocument, baseOptions);
      }
export function useFetchobservationModelByIdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FetchobservationModelByIdQuery, FetchobservationModelByIdQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<FetchobservationModelByIdQuery, FetchobservationModelByIdQueryVariables>(FetchobservationModelByIdDocument, baseOptions);
        }
export type FetchobservationModelByIdQueryHookResult = ReturnType<typeof useFetchobservationModelByIdQuery>;
export type FetchobservationModelByIdLazyQueryHookResult = ReturnType<typeof useFetchobservationModelByIdLazyQuery>;
export type FetchobservationModelByIdQueryResult = ApolloReactCommon.QueryResult<FetchobservationModelByIdQuery, FetchobservationModelByIdQueryVariables>;
export const FetchobservationModelDocument = gql`
    query fetchobservationModel($distinct_on: [observation_select_column!], $where: observation_bool_exp, $limit: Int, $offset: Int, $order_by: [observation_order_by!]) {
  observation(distinct_on: $distinct_on, where: $where, limit: $limit, offset: $offset, order_by: $order_by) {
    ...observationModelFields
  }
}
    ${ObservationModelFieldsFragmentDoc}`;

/**
 * __useFetchobservationModelQuery__
 *
 * To run a query within a React component, call `useFetchobservationModelQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchobservationModelQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchobservationModelQuery({
 *   variables: {
 *      distinct_on: // value for 'distinct_on'
 *      where: // value for 'where'
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *      order_by: // value for 'order_by'
 *   },
 * });
 */
export function useFetchobservationModelQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FetchobservationModelQuery, FetchobservationModelQueryVariables>) {
        return ApolloReactHooks.useQuery<FetchobservationModelQuery, FetchobservationModelQueryVariables>(FetchobservationModelDocument, baseOptions);
      }
export function useFetchobservationModelLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FetchobservationModelQuery, FetchobservationModelQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<FetchobservationModelQuery, FetchobservationModelQueryVariables>(FetchobservationModelDocument, baseOptions);
        }
export type FetchobservationModelQueryHookResult = ReturnType<typeof useFetchobservationModelQuery>;
export type FetchobservationModelLazyQueryHookResult = ReturnType<typeof useFetchobservationModelLazyQuery>;
export type FetchobservationModelQueryResult = ApolloReactCommon.QueryResult<FetchobservationModelQuery, FetchobservationModelQueryVariables>;
export const UpdateobservationModelByIdDocument = gql`
    mutation updateobservationModelById($id: uuid, $set: observation_set_input) {
  update_observation(_set: $set, where: {id: {_eq: $id}}) {
    affected_rows
    returning {
      ...observationModelFields
    }
  }
}
    ${ObservationModelFieldsFragmentDoc}`;
export type UpdateobservationModelByIdMutationFn = ApolloReactCommon.MutationFunction<UpdateobservationModelByIdMutation, UpdateobservationModelByIdMutationVariables>;

/**
 * __useUpdateobservationModelByIdMutation__
 *
 * To run a mutation, you first call `useUpdateobservationModelByIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateobservationModelByIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateobservationModelByIdMutation, { data, loading, error }] = useUpdateobservationModelByIdMutation({
 *   variables: {
 *      id: // value for 'id'
 *      set: // value for 'set'
 *   },
 * });
 */
export function useUpdateobservationModelByIdMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateobservationModelByIdMutation, UpdateobservationModelByIdMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateobservationModelByIdMutation, UpdateobservationModelByIdMutationVariables>(UpdateobservationModelByIdDocument, baseOptions);
      }
export type UpdateobservationModelByIdMutationHookResult = ReturnType<typeof useUpdateobservationModelByIdMutation>;
export type UpdateobservationModelByIdMutationResult = ApolloReactCommon.MutationResult<UpdateobservationModelByIdMutation>;
export type UpdateobservationModelByIdMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateobservationModelByIdMutation, UpdateobservationModelByIdMutationVariables>;
export const UpdateobservationModelDocument = gql`
    mutation updateobservationModel($set: observation_set_input, $where: observation_bool_exp!) {
  update_observation(_set: $set, where: $where) {
    affected_rows
    returning {
      ...observationModelFields
    }
  }
}
    ${ObservationModelFieldsFragmentDoc}`;
export type UpdateobservationModelMutationFn = ApolloReactCommon.MutationFunction<UpdateobservationModelMutation, UpdateobservationModelMutationVariables>;

/**
 * __useUpdateobservationModelMutation__
 *
 * To run a mutation, you first call `useUpdateobservationModelMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateobservationModelMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateobservationModelMutation, { data, loading, error }] = useUpdateobservationModelMutation({
 *   variables: {
 *      set: // value for 'set'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useUpdateobservationModelMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateobservationModelMutation, UpdateobservationModelMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateobservationModelMutation, UpdateobservationModelMutationVariables>(UpdateobservationModelDocument, baseOptions);
      }
export type UpdateobservationModelMutationHookResult = ReturnType<typeof useUpdateobservationModelMutation>;
export type UpdateobservationModelMutationResult = ApolloReactCommon.MutationResult<UpdateobservationModelMutation>;
export type UpdateobservationModelMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateobservationModelMutation, UpdateobservationModelMutationVariables>;
export const RemoveobservationModelByIdDocument = gql`
    mutation removeobservationModelById($id: uuid) {
  delete_observation(where: {id: {_eq: $id}}) {
    affected_rows
  }
}
    `;
export type RemoveobservationModelByIdMutationFn = ApolloReactCommon.MutationFunction<RemoveobservationModelByIdMutation, RemoveobservationModelByIdMutationVariables>;

/**
 * __useRemoveobservationModelByIdMutation__
 *
 * To run a mutation, you first call `useRemoveobservationModelByIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveobservationModelByIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeobservationModelByIdMutation, { data, loading, error }] = useRemoveobservationModelByIdMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRemoveobservationModelByIdMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<RemoveobservationModelByIdMutation, RemoveobservationModelByIdMutationVariables>) {
        return ApolloReactHooks.useMutation<RemoveobservationModelByIdMutation, RemoveobservationModelByIdMutationVariables>(RemoveobservationModelByIdDocument, baseOptions);
      }
export type RemoveobservationModelByIdMutationHookResult = ReturnType<typeof useRemoveobservationModelByIdMutation>;
export type RemoveobservationModelByIdMutationResult = ApolloReactCommon.MutationResult<RemoveobservationModelByIdMutation>;
export type RemoveobservationModelByIdMutationOptions = ApolloReactCommon.BaseMutationOptions<RemoveobservationModelByIdMutation, RemoveobservationModelByIdMutationVariables>;
export const RemoveobservationModelDocument = gql`
    mutation removeobservationModel($where: observation_bool_exp!) {
  delete_observation(where: $where) {
    affected_rows
  }
}
    `;
export type RemoveobservationModelMutationFn = ApolloReactCommon.MutationFunction<RemoveobservationModelMutation, RemoveobservationModelMutationVariables>;

/**
 * __useRemoveobservationModelMutation__
 *
 * To run a mutation, you first call `useRemoveobservationModelMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveobservationModelMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeobservationModelMutation, { data, loading, error }] = useRemoveobservationModelMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useRemoveobservationModelMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<RemoveobservationModelMutation, RemoveobservationModelMutationVariables>) {
        return ApolloReactHooks.useMutation<RemoveobservationModelMutation, RemoveobservationModelMutationVariables>(RemoveobservationModelDocument, baseOptions);
      }
export type RemoveobservationModelMutationHookResult = ReturnType<typeof useRemoveobservationModelMutation>;
export type RemoveobservationModelMutationResult = ApolloReactCommon.MutationResult<RemoveobservationModelMutation>;
export type RemoveobservationModelMutationOptions = ApolloReactCommon.BaseMutationOptions<RemoveobservationModelMutation, RemoveobservationModelMutationVariables>;
export const InsertpModelDocument = gql`
    mutation insertpModel($objects: [p_insert_input!]!, $onConflict: p_on_conflict) {
  insert_p(objects: $objects, on_conflict: $onConflict) {
    affected_rows
    returning {
      ...pModelFields
    }
  }
}
    ${PModelFieldsFragmentDoc}`;
export type InsertpModelMutationFn = ApolloReactCommon.MutationFunction<InsertpModelMutation, InsertpModelMutationVariables>;

/**
 * __useInsertpModelMutation__
 *
 * To run a mutation, you first call `useInsertpModelMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertpModelMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertpModelMutation, { data, loading, error }] = useInsertpModelMutation({
 *   variables: {
 *      objects: // value for 'objects'
 *      onConflict: // value for 'onConflict'
 *   },
 * });
 */
export function useInsertpModelMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<InsertpModelMutation, InsertpModelMutationVariables>) {
        return ApolloReactHooks.useMutation<InsertpModelMutation, InsertpModelMutationVariables>(InsertpModelDocument, baseOptions);
      }
export type InsertpModelMutationHookResult = ReturnType<typeof useInsertpModelMutation>;
export type InsertpModelMutationResult = ApolloReactCommon.MutationResult<InsertpModelMutation>;
export type InsertpModelMutationOptions = ApolloReactCommon.BaseMutationOptions<InsertpModelMutation, InsertpModelMutationVariables>;
export const FetchpModelByIdDocument = gql`
    query fetchpModelById($pId: Int!) {
  p_by_pk(id: $pId) {
    ...pModelFields
  }
}
    ${PModelFieldsFragmentDoc}`;

/**
 * __useFetchpModelByIdQuery__
 *
 * To run a query within a React component, call `useFetchpModelByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchpModelByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchpModelByIdQuery({
 *   variables: {
 *      pId: // value for 'pId'
 *   },
 * });
 */
export function useFetchpModelByIdQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FetchpModelByIdQuery, FetchpModelByIdQueryVariables>) {
        return ApolloReactHooks.useQuery<FetchpModelByIdQuery, FetchpModelByIdQueryVariables>(FetchpModelByIdDocument, baseOptions);
      }
export function useFetchpModelByIdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FetchpModelByIdQuery, FetchpModelByIdQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<FetchpModelByIdQuery, FetchpModelByIdQueryVariables>(FetchpModelByIdDocument, baseOptions);
        }
export type FetchpModelByIdQueryHookResult = ReturnType<typeof useFetchpModelByIdQuery>;
export type FetchpModelByIdLazyQueryHookResult = ReturnType<typeof useFetchpModelByIdLazyQuery>;
export type FetchpModelByIdQueryResult = ApolloReactCommon.QueryResult<FetchpModelByIdQuery, FetchpModelByIdQueryVariables>;
export const FetchpModelDocument = gql`
    query fetchpModel($distinct_on: [p_select_column!], $where: p_bool_exp, $limit: Int, $offset: Int, $order_by: [p_order_by!]) {
  p(distinct_on: $distinct_on, where: $where, limit: $limit, offset: $offset, order_by: $order_by) {
    ...pModelFields
  }
}
    ${PModelFieldsFragmentDoc}`;

/**
 * __useFetchpModelQuery__
 *
 * To run a query within a React component, call `useFetchpModelQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchpModelQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchpModelQuery({
 *   variables: {
 *      distinct_on: // value for 'distinct_on'
 *      where: // value for 'where'
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *      order_by: // value for 'order_by'
 *   },
 * });
 */
export function useFetchpModelQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FetchpModelQuery, FetchpModelQueryVariables>) {
        return ApolloReactHooks.useQuery<FetchpModelQuery, FetchpModelQueryVariables>(FetchpModelDocument, baseOptions);
      }
export function useFetchpModelLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FetchpModelQuery, FetchpModelQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<FetchpModelQuery, FetchpModelQueryVariables>(FetchpModelDocument, baseOptions);
        }
export type FetchpModelQueryHookResult = ReturnType<typeof useFetchpModelQuery>;
export type FetchpModelLazyQueryHookResult = ReturnType<typeof useFetchpModelLazyQuery>;
export type FetchpModelQueryResult = ApolloReactCommon.QueryResult<FetchpModelQuery, FetchpModelQueryVariables>;
export const UpdatepModelByIdDocument = gql`
    mutation updatepModelById($id: Int, $set: p_set_input) {
  update_p(_set: $set, where: {id: {_eq: $id}}) {
    affected_rows
    returning {
      ...pModelFields
    }
  }
}
    ${PModelFieldsFragmentDoc}`;
export type UpdatepModelByIdMutationFn = ApolloReactCommon.MutationFunction<UpdatepModelByIdMutation, UpdatepModelByIdMutationVariables>;

/**
 * __useUpdatepModelByIdMutation__
 *
 * To run a mutation, you first call `useUpdatepModelByIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatepModelByIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatepModelByIdMutation, { data, loading, error }] = useUpdatepModelByIdMutation({
 *   variables: {
 *      id: // value for 'id'
 *      set: // value for 'set'
 *   },
 * });
 */
export function useUpdatepModelByIdMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdatepModelByIdMutation, UpdatepModelByIdMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdatepModelByIdMutation, UpdatepModelByIdMutationVariables>(UpdatepModelByIdDocument, baseOptions);
      }
export type UpdatepModelByIdMutationHookResult = ReturnType<typeof useUpdatepModelByIdMutation>;
export type UpdatepModelByIdMutationResult = ApolloReactCommon.MutationResult<UpdatepModelByIdMutation>;
export type UpdatepModelByIdMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdatepModelByIdMutation, UpdatepModelByIdMutationVariables>;
export const UpdatepModelDocument = gql`
    mutation updatepModel($set: p_set_input, $where: p_bool_exp!) {
  update_p(_set: $set, where: $where) {
    affected_rows
    returning {
      ...pModelFields
    }
  }
}
    ${PModelFieldsFragmentDoc}`;
export type UpdatepModelMutationFn = ApolloReactCommon.MutationFunction<UpdatepModelMutation, UpdatepModelMutationVariables>;

/**
 * __useUpdatepModelMutation__
 *
 * To run a mutation, you first call `useUpdatepModelMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatepModelMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatepModelMutation, { data, loading, error }] = useUpdatepModelMutation({
 *   variables: {
 *      set: // value for 'set'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useUpdatepModelMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdatepModelMutation, UpdatepModelMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdatepModelMutation, UpdatepModelMutationVariables>(UpdatepModelDocument, baseOptions);
      }
export type UpdatepModelMutationHookResult = ReturnType<typeof useUpdatepModelMutation>;
export type UpdatepModelMutationResult = ApolloReactCommon.MutationResult<UpdatepModelMutation>;
export type UpdatepModelMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdatepModelMutation, UpdatepModelMutationVariables>;
export const RemovepModelByIdDocument = gql`
    mutation removepModelById($id: Int) {
  delete_p(where: {id: {_eq: $id}}) {
    affected_rows
  }
}
    `;
export type RemovepModelByIdMutationFn = ApolloReactCommon.MutationFunction<RemovepModelByIdMutation, RemovepModelByIdMutationVariables>;

/**
 * __useRemovepModelByIdMutation__
 *
 * To run a mutation, you first call `useRemovepModelByIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemovepModelByIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removepModelByIdMutation, { data, loading, error }] = useRemovepModelByIdMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRemovepModelByIdMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<RemovepModelByIdMutation, RemovepModelByIdMutationVariables>) {
        return ApolloReactHooks.useMutation<RemovepModelByIdMutation, RemovepModelByIdMutationVariables>(RemovepModelByIdDocument, baseOptions);
      }
export type RemovepModelByIdMutationHookResult = ReturnType<typeof useRemovepModelByIdMutation>;
export type RemovepModelByIdMutationResult = ApolloReactCommon.MutationResult<RemovepModelByIdMutation>;
export type RemovepModelByIdMutationOptions = ApolloReactCommon.BaseMutationOptions<RemovepModelByIdMutation, RemovepModelByIdMutationVariables>;
export const RemovepModelDocument = gql`
    mutation removepModel($where: p_bool_exp!) {
  delete_p(where: $where) {
    affected_rows
  }
}
    `;
export type RemovepModelMutationFn = ApolloReactCommon.MutationFunction<RemovepModelMutation, RemovepModelMutationVariables>;

/**
 * __useRemovepModelMutation__
 *
 * To run a mutation, you first call `useRemovepModelMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemovepModelMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removepModelMutation, { data, loading, error }] = useRemovepModelMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useRemovepModelMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<RemovepModelMutation, RemovepModelMutationVariables>) {
        return ApolloReactHooks.useMutation<RemovepModelMutation, RemovepModelMutationVariables>(RemovepModelDocument, baseOptions);
      }
export type RemovepModelMutationHookResult = ReturnType<typeof useRemovepModelMutation>;
export type RemovepModelMutationResult = ApolloReactCommon.MutationResult<RemovepModelMutation>;
export type RemovepModelMutationOptions = ApolloReactCommon.BaseMutationOptions<RemovepModelMutation, RemovepModelMutationVariables>;
export const InsertpatientModelDocument = gql`
    mutation insertpatientModel($objects: [patient_insert_input!]!, $onConflict: patient_on_conflict) {
  insert_patient(objects: $objects, on_conflict: $onConflict) {
    affected_rows
    returning {
      ...patientModelFields
    }
  }
}
    ${PatientModelFieldsFragmentDoc}`;
export type InsertpatientModelMutationFn = ApolloReactCommon.MutationFunction<InsertpatientModelMutation, InsertpatientModelMutationVariables>;

/**
 * __useInsertpatientModelMutation__
 *
 * To run a mutation, you first call `useInsertpatientModelMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertpatientModelMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertpatientModelMutation, { data, loading, error }] = useInsertpatientModelMutation({
 *   variables: {
 *      objects: // value for 'objects'
 *      onConflict: // value for 'onConflict'
 *   },
 * });
 */
export function useInsertpatientModelMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<InsertpatientModelMutation, InsertpatientModelMutationVariables>) {
        return ApolloReactHooks.useMutation<InsertpatientModelMutation, InsertpatientModelMutationVariables>(InsertpatientModelDocument, baseOptions);
      }
export type InsertpatientModelMutationHookResult = ReturnType<typeof useInsertpatientModelMutation>;
export type InsertpatientModelMutationResult = ApolloReactCommon.MutationResult<InsertpatientModelMutation>;
export type InsertpatientModelMutationOptions = ApolloReactCommon.BaseMutationOptions<InsertpatientModelMutation, InsertpatientModelMutationVariables>;
export const FetchpatientModelByIdDocument = gql`
    query fetchpatientModelById($patientId: uuid!) {
  patient_by_pk(id: $patientId) {
    ...patientModelFields
  }
}
    ${PatientModelFieldsFragmentDoc}`;

/**
 * __useFetchpatientModelByIdQuery__
 *
 * To run a query within a React component, call `useFetchpatientModelByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchpatientModelByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchpatientModelByIdQuery({
 *   variables: {
 *      patientId: // value for 'patientId'
 *   },
 * });
 */
export function useFetchpatientModelByIdQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FetchpatientModelByIdQuery, FetchpatientModelByIdQueryVariables>) {
        return ApolloReactHooks.useQuery<FetchpatientModelByIdQuery, FetchpatientModelByIdQueryVariables>(FetchpatientModelByIdDocument, baseOptions);
      }
export function useFetchpatientModelByIdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FetchpatientModelByIdQuery, FetchpatientModelByIdQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<FetchpatientModelByIdQuery, FetchpatientModelByIdQueryVariables>(FetchpatientModelByIdDocument, baseOptions);
        }
export type FetchpatientModelByIdQueryHookResult = ReturnType<typeof useFetchpatientModelByIdQuery>;
export type FetchpatientModelByIdLazyQueryHookResult = ReturnType<typeof useFetchpatientModelByIdLazyQuery>;
export type FetchpatientModelByIdQueryResult = ApolloReactCommon.QueryResult<FetchpatientModelByIdQuery, FetchpatientModelByIdQueryVariables>;
export const FetchpatientModelDocument = gql`
    query fetchpatientModel($distinct_on: [patient_select_column!], $where: patient_bool_exp, $limit: Int, $offset: Int, $order_by: [patient_order_by!]) {
  patient(distinct_on: $distinct_on, where: $where, limit: $limit, offset: $offset, order_by: $order_by) {
    ...patientModelFields
  }
}
    ${PatientModelFieldsFragmentDoc}`;

/**
 * __useFetchpatientModelQuery__
 *
 * To run a query within a React component, call `useFetchpatientModelQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchpatientModelQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchpatientModelQuery({
 *   variables: {
 *      distinct_on: // value for 'distinct_on'
 *      where: // value for 'where'
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *      order_by: // value for 'order_by'
 *   },
 * });
 */
export function useFetchpatientModelQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FetchpatientModelQuery, FetchpatientModelQueryVariables>) {
        return ApolloReactHooks.useQuery<FetchpatientModelQuery, FetchpatientModelQueryVariables>(FetchpatientModelDocument, baseOptions);
      }
export function useFetchpatientModelLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FetchpatientModelQuery, FetchpatientModelQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<FetchpatientModelQuery, FetchpatientModelQueryVariables>(FetchpatientModelDocument, baseOptions);
        }
export type FetchpatientModelQueryHookResult = ReturnType<typeof useFetchpatientModelQuery>;
export type FetchpatientModelLazyQueryHookResult = ReturnType<typeof useFetchpatientModelLazyQuery>;
export type FetchpatientModelQueryResult = ApolloReactCommon.QueryResult<FetchpatientModelQuery, FetchpatientModelQueryVariables>;
export const UpdatepatientModelByIdDocument = gql`
    mutation updatepatientModelById($id: uuid, $set: patient_set_input) {
  update_patient(_set: $set, where: {id: {_eq: $id}}) {
    affected_rows
    returning {
      ...patientModelFields
    }
  }
}
    ${PatientModelFieldsFragmentDoc}`;
export type UpdatepatientModelByIdMutationFn = ApolloReactCommon.MutationFunction<UpdatepatientModelByIdMutation, UpdatepatientModelByIdMutationVariables>;

/**
 * __useUpdatepatientModelByIdMutation__
 *
 * To run a mutation, you first call `useUpdatepatientModelByIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatepatientModelByIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatepatientModelByIdMutation, { data, loading, error }] = useUpdatepatientModelByIdMutation({
 *   variables: {
 *      id: // value for 'id'
 *      set: // value for 'set'
 *   },
 * });
 */
export function useUpdatepatientModelByIdMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdatepatientModelByIdMutation, UpdatepatientModelByIdMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdatepatientModelByIdMutation, UpdatepatientModelByIdMutationVariables>(UpdatepatientModelByIdDocument, baseOptions);
      }
export type UpdatepatientModelByIdMutationHookResult = ReturnType<typeof useUpdatepatientModelByIdMutation>;
export type UpdatepatientModelByIdMutationResult = ApolloReactCommon.MutationResult<UpdatepatientModelByIdMutation>;
export type UpdatepatientModelByIdMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdatepatientModelByIdMutation, UpdatepatientModelByIdMutationVariables>;
export const UpdatepatientModelDocument = gql`
    mutation updatepatientModel($set: patient_set_input, $where: patient_bool_exp!) {
  update_patient(_set: $set, where: $where) {
    affected_rows
    returning {
      ...patientModelFields
    }
  }
}
    ${PatientModelFieldsFragmentDoc}`;
export type UpdatepatientModelMutationFn = ApolloReactCommon.MutationFunction<UpdatepatientModelMutation, UpdatepatientModelMutationVariables>;

/**
 * __useUpdatepatientModelMutation__
 *
 * To run a mutation, you first call `useUpdatepatientModelMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatepatientModelMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatepatientModelMutation, { data, loading, error }] = useUpdatepatientModelMutation({
 *   variables: {
 *      set: // value for 'set'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useUpdatepatientModelMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdatepatientModelMutation, UpdatepatientModelMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdatepatientModelMutation, UpdatepatientModelMutationVariables>(UpdatepatientModelDocument, baseOptions);
      }
export type UpdatepatientModelMutationHookResult = ReturnType<typeof useUpdatepatientModelMutation>;
export type UpdatepatientModelMutationResult = ApolloReactCommon.MutationResult<UpdatepatientModelMutation>;
export type UpdatepatientModelMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdatepatientModelMutation, UpdatepatientModelMutationVariables>;
export const RemovepatientModelByIdDocument = gql`
    mutation removepatientModelById($id: uuid) {
  delete_patient(where: {id: {_eq: $id}}) {
    affected_rows
  }
}
    `;
export type RemovepatientModelByIdMutationFn = ApolloReactCommon.MutationFunction<RemovepatientModelByIdMutation, RemovepatientModelByIdMutationVariables>;

/**
 * __useRemovepatientModelByIdMutation__
 *
 * To run a mutation, you first call `useRemovepatientModelByIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemovepatientModelByIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removepatientModelByIdMutation, { data, loading, error }] = useRemovepatientModelByIdMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRemovepatientModelByIdMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<RemovepatientModelByIdMutation, RemovepatientModelByIdMutationVariables>) {
        return ApolloReactHooks.useMutation<RemovepatientModelByIdMutation, RemovepatientModelByIdMutationVariables>(RemovepatientModelByIdDocument, baseOptions);
      }
export type RemovepatientModelByIdMutationHookResult = ReturnType<typeof useRemovepatientModelByIdMutation>;
export type RemovepatientModelByIdMutationResult = ApolloReactCommon.MutationResult<RemovepatientModelByIdMutation>;
export type RemovepatientModelByIdMutationOptions = ApolloReactCommon.BaseMutationOptions<RemovepatientModelByIdMutation, RemovepatientModelByIdMutationVariables>;
export const RemovepatientModelDocument = gql`
    mutation removepatientModel($where: patient_bool_exp!) {
  delete_patient(where: $where) {
    affected_rows
  }
}
    `;
export type RemovepatientModelMutationFn = ApolloReactCommon.MutationFunction<RemovepatientModelMutation, RemovepatientModelMutationVariables>;

/**
 * __useRemovepatientModelMutation__
 *
 * To run a mutation, you first call `useRemovepatientModelMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemovepatientModelMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removepatientModelMutation, { data, loading, error }] = useRemovepatientModelMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useRemovepatientModelMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<RemovepatientModelMutation, RemovepatientModelMutationVariables>) {
        return ApolloReactHooks.useMutation<RemovepatientModelMutation, RemovepatientModelMutationVariables>(RemovepatientModelDocument, baseOptions);
      }
export type RemovepatientModelMutationHookResult = ReturnType<typeof useRemovepatientModelMutation>;
export type RemovepatientModelMutationResult = ApolloReactCommon.MutationResult<RemovepatientModelMutation>;
export type RemovepatientModelMutationOptions = ApolloReactCommon.BaseMutationOptions<RemovepatientModelMutation, RemovepatientModelMutationVariables>;
export const InsertusersModelDocument = gql`
    mutation insertusersModel($objects: [users_insert_input!]!, $onConflict: users_on_conflict) {
  insert_users(objects: $objects, on_conflict: $onConflict) {
    affected_rows
    returning {
      ...usersModelFields
    }
  }
}
    ${UsersModelFieldsFragmentDoc}`;
export type InsertusersModelMutationFn = ApolloReactCommon.MutationFunction<InsertusersModelMutation, InsertusersModelMutationVariables>;

/**
 * __useInsertusersModelMutation__
 *
 * To run a mutation, you first call `useInsertusersModelMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertusersModelMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertusersModelMutation, { data, loading, error }] = useInsertusersModelMutation({
 *   variables: {
 *      objects: // value for 'objects'
 *      onConflict: // value for 'onConflict'
 *   },
 * });
 */
export function useInsertusersModelMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<InsertusersModelMutation, InsertusersModelMutationVariables>) {
        return ApolloReactHooks.useMutation<InsertusersModelMutation, InsertusersModelMutationVariables>(InsertusersModelDocument, baseOptions);
      }
export type InsertusersModelMutationHookResult = ReturnType<typeof useInsertusersModelMutation>;
export type InsertusersModelMutationResult = ApolloReactCommon.MutationResult<InsertusersModelMutation>;
export type InsertusersModelMutationOptions = ApolloReactCommon.BaseMutationOptions<InsertusersModelMutation, InsertusersModelMutationVariables>;
export const FetchusersModelByIdDocument = gql`
    query fetchusersModelById($usersId: Int!) {
  users_by_pk(id: $usersId) {
    ...usersModelFields
  }
}
    ${UsersModelFieldsFragmentDoc}`;

/**
 * __useFetchusersModelByIdQuery__
 *
 * To run a query within a React component, call `useFetchusersModelByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchusersModelByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchusersModelByIdQuery({
 *   variables: {
 *      usersId: // value for 'usersId'
 *   },
 * });
 */
export function useFetchusersModelByIdQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FetchusersModelByIdQuery, FetchusersModelByIdQueryVariables>) {
        return ApolloReactHooks.useQuery<FetchusersModelByIdQuery, FetchusersModelByIdQueryVariables>(FetchusersModelByIdDocument, baseOptions);
      }
export function useFetchusersModelByIdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FetchusersModelByIdQuery, FetchusersModelByIdQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<FetchusersModelByIdQuery, FetchusersModelByIdQueryVariables>(FetchusersModelByIdDocument, baseOptions);
        }
export type FetchusersModelByIdQueryHookResult = ReturnType<typeof useFetchusersModelByIdQuery>;
export type FetchusersModelByIdLazyQueryHookResult = ReturnType<typeof useFetchusersModelByIdLazyQuery>;
export type FetchusersModelByIdQueryResult = ApolloReactCommon.QueryResult<FetchusersModelByIdQuery, FetchusersModelByIdQueryVariables>;
export const FetchusersModelDocument = gql`
    query fetchusersModel($distinct_on: [users_select_column!], $where: users_bool_exp, $limit: Int, $offset: Int, $order_by: [users_order_by!]) {
  users(distinct_on: $distinct_on, where: $where, limit: $limit, offset: $offset, order_by: $order_by) {
    ...usersModelFields
  }
}
    ${UsersModelFieldsFragmentDoc}`;

/**
 * __useFetchusersModelQuery__
 *
 * To run a query within a React component, call `useFetchusersModelQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchusersModelQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchusersModelQuery({
 *   variables: {
 *      distinct_on: // value for 'distinct_on'
 *      where: // value for 'where'
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *      order_by: // value for 'order_by'
 *   },
 * });
 */
export function useFetchusersModelQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FetchusersModelQuery, FetchusersModelQueryVariables>) {
        return ApolloReactHooks.useQuery<FetchusersModelQuery, FetchusersModelQueryVariables>(FetchusersModelDocument, baseOptions);
      }
export function useFetchusersModelLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FetchusersModelQuery, FetchusersModelQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<FetchusersModelQuery, FetchusersModelQueryVariables>(FetchusersModelDocument, baseOptions);
        }
export type FetchusersModelQueryHookResult = ReturnType<typeof useFetchusersModelQuery>;
export type FetchusersModelLazyQueryHookResult = ReturnType<typeof useFetchusersModelLazyQuery>;
export type FetchusersModelQueryResult = ApolloReactCommon.QueryResult<FetchusersModelQuery, FetchusersModelQueryVariables>;
export const UpdateusersModelByIdDocument = gql`
    mutation updateusersModelById($id: Int, $set: users_set_input) {
  update_users(_set: $set, where: {id: {_eq: $id}}) {
    affected_rows
    returning {
      ...usersModelFields
    }
  }
}
    ${UsersModelFieldsFragmentDoc}`;
export type UpdateusersModelByIdMutationFn = ApolloReactCommon.MutationFunction<UpdateusersModelByIdMutation, UpdateusersModelByIdMutationVariables>;

/**
 * __useUpdateusersModelByIdMutation__
 *
 * To run a mutation, you first call `useUpdateusersModelByIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateusersModelByIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateusersModelByIdMutation, { data, loading, error }] = useUpdateusersModelByIdMutation({
 *   variables: {
 *      id: // value for 'id'
 *      set: // value for 'set'
 *   },
 * });
 */
export function useUpdateusersModelByIdMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateusersModelByIdMutation, UpdateusersModelByIdMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateusersModelByIdMutation, UpdateusersModelByIdMutationVariables>(UpdateusersModelByIdDocument, baseOptions);
      }
export type UpdateusersModelByIdMutationHookResult = ReturnType<typeof useUpdateusersModelByIdMutation>;
export type UpdateusersModelByIdMutationResult = ApolloReactCommon.MutationResult<UpdateusersModelByIdMutation>;
export type UpdateusersModelByIdMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateusersModelByIdMutation, UpdateusersModelByIdMutationVariables>;
export const UpdateusersModelDocument = gql`
    mutation updateusersModel($set: users_set_input, $where: users_bool_exp!) {
  update_users(_set: $set, where: $where) {
    affected_rows
    returning {
      ...usersModelFields
    }
  }
}
    ${UsersModelFieldsFragmentDoc}`;
export type UpdateusersModelMutationFn = ApolloReactCommon.MutationFunction<UpdateusersModelMutation, UpdateusersModelMutationVariables>;

/**
 * __useUpdateusersModelMutation__
 *
 * To run a mutation, you first call `useUpdateusersModelMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateusersModelMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateusersModelMutation, { data, loading, error }] = useUpdateusersModelMutation({
 *   variables: {
 *      set: // value for 'set'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useUpdateusersModelMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateusersModelMutation, UpdateusersModelMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateusersModelMutation, UpdateusersModelMutationVariables>(UpdateusersModelDocument, baseOptions);
      }
export type UpdateusersModelMutationHookResult = ReturnType<typeof useUpdateusersModelMutation>;
export type UpdateusersModelMutationResult = ApolloReactCommon.MutationResult<UpdateusersModelMutation>;
export type UpdateusersModelMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateusersModelMutation, UpdateusersModelMutationVariables>;
export const RemoveusersModelByIdDocument = gql`
    mutation removeusersModelById($id: Int) {
  delete_users(where: {id: {_eq: $id}}) {
    affected_rows
  }
}
    `;
export type RemoveusersModelByIdMutationFn = ApolloReactCommon.MutationFunction<RemoveusersModelByIdMutation, RemoveusersModelByIdMutationVariables>;

/**
 * __useRemoveusersModelByIdMutation__
 *
 * To run a mutation, you first call `useRemoveusersModelByIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveusersModelByIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeusersModelByIdMutation, { data, loading, error }] = useRemoveusersModelByIdMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRemoveusersModelByIdMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<RemoveusersModelByIdMutation, RemoveusersModelByIdMutationVariables>) {
        return ApolloReactHooks.useMutation<RemoveusersModelByIdMutation, RemoveusersModelByIdMutationVariables>(RemoveusersModelByIdDocument, baseOptions);
      }
export type RemoveusersModelByIdMutationHookResult = ReturnType<typeof useRemoveusersModelByIdMutation>;
export type RemoveusersModelByIdMutationResult = ApolloReactCommon.MutationResult<RemoveusersModelByIdMutation>;
export type RemoveusersModelByIdMutationOptions = ApolloReactCommon.BaseMutationOptions<RemoveusersModelByIdMutation, RemoveusersModelByIdMutationVariables>;
export const RemoveusersModelDocument = gql`
    mutation removeusersModel($where: users_bool_exp!) {
  delete_users(where: $where) {
    affected_rows
  }
}
    `;
export type RemoveusersModelMutationFn = ApolloReactCommon.MutationFunction<RemoveusersModelMutation, RemoveusersModelMutationVariables>;

/**
 * __useRemoveusersModelMutation__
 *
 * To run a mutation, you first call `useRemoveusersModelMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveusersModelMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeusersModelMutation, { data, loading, error }] = useRemoveusersModelMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useRemoveusersModelMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<RemoveusersModelMutation, RemoveusersModelMutationVariables>) {
        return ApolloReactHooks.useMutation<RemoveusersModelMutation, RemoveusersModelMutationVariables>(RemoveusersModelDocument, baseOptions);
      }
export type RemoveusersModelMutationHookResult = ReturnType<typeof useRemoveusersModelMutation>;
export type RemoveusersModelMutationResult = ApolloReactCommon.MutationResult<RemoveusersModelMutation>;
export type RemoveusersModelMutationOptions = ApolloReactCommon.BaseMutationOptions<RemoveusersModelMutation, RemoveusersModelMutationVariables>;
export const InsertvehicleModelDocument = gql`
    mutation insertvehicleModel($objects: [vehicle_insert_input!]!, $onConflict: vehicle_on_conflict) {
  insert_vehicle(objects: $objects, on_conflict: $onConflict) {
    affected_rows
    returning {
      ...vehicleModelFields
    }
  }
}
    ${VehicleModelFieldsFragmentDoc}`;
export type InsertvehicleModelMutationFn = ApolloReactCommon.MutationFunction<InsertvehicleModelMutation, InsertvehicleModelMutationVariables>;

/**
 * __useInsertvehicleModelMutation__
 *
 * To run a mutation, you first call `useInsertvehicleModelMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertvehicleModelMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertvehicleModelMutation, { data, loading, error }] = useInsertvehicleModelMutation({
 *   variables: {
 *      objects: // value for 'objects'
 *      onConflict: // value for 'onConflict'
 *   },
 * });
 */
export function useInsertvehicleModelMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<InsertvehicleModelMutation, InsertvehicleModelMutationVariables>) {
        return ApolloReactHooks.useMutation<InsertvehicleModelMutation, InsertvehicleModelMutationVariables>(InsertvehicleModelDocument, baseOptions);
      }
export type InsertvehicleModelMutationHookResult = ReturnType<typeof useInsertvehicleModelMutation>;
export type InsertvehicleModelMutationResult = ApolloReactCommon.MutationResult<InsertvehicleModelMutation>;
export type InsertvehicleModelMutationOptions = ApolloReactCommon.BaseMutationOptions<InsertvehicleModelMutation, InsertvehicleModelMutationVariables>;
export const FetchvehicleModelByIdDocument = gql`
    query fetchvehicleModelById($vehicleId: String!) {
  vehicle_by_pk(id: $vehicleId) {
    ...vehicleModelFields
  }
}
    ${VehicleModelFieldsFragmentDoc}`;

/**
 * __useFetchvehicleModelByIdQuery__
 *
 * To run a query within a React component, call `useFetchvehicleModelByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchvehicleModelByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchvehicleModelByIdQuery({
 *   variables: {
 *      vehicleId: // value for 'vehicleId'
 *   },
 * });
 */
export function useFetchvehicleModelByIdQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FetchvehicleModelByIdQuery, FetchvehicleModelByIdQueryVariables>) {
        return ApolloReactHooks.useQuery<FetchvehicleModelByIdQuery, FetchvehicleModelByIdQueryVariables>(FetchvehicleModelByIdDocument, baseOptions);
      }
export function useFetchvehicleModelByIdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FetchvehicleModelByIdQuery, FetchvehicleModelByIdQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<FetchvehicleModelByIdQuery, FetchvehicleModelByIdQueryVariables>(FetchvehicleModelByIdDocument, baseOptions);
        }
export type FetchvehicleModelByIdQueryHookResult = ReturnType<typeof useFetchvehicleModelByIdQuery>;
export type FetchvehicleModelByIdLazyQueryHookResult = ReturnType<typeof useFetchvehicleModelByIdLazyQuery>;
export type FetchvehicleModelByIdQueryResult = ApolloReactCommon.QueryResult<FetchvehicleModelByIdQuery, FetchvehicleModelByIdQueryVariables>;
export const FetchvehicleModelDocument = gql`
    query fetchvehicleModel($distinct_on: [vehicle_select_column!], $where: vehicle_bool_exp, $limit: Int, $offset: Int, $order_by: [vehicle_order_by!]) {
  vehicle(distinct_on: $distinct_on, where: $where, limit: $limit, offset: $offset, order_by: $order_by) {
    ...vehicleModelFields
  }
}
    ${VehicleModelFieldsFragmentDoc}`;

/**
 * __useFetchvehicleModelQuery__
 *
 * To run a query within a React component, call `useFetchvehicleModelQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchvehicleModelQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchvehicleModelQuery({
 *   variables: {
 *      distinct_on: // value for 'distinct_on'
 *      where: // value for 'where'
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *      order_by: // value for 'order_by'
 *   },
 * });
 */
export function useFetchvehicleModelQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FetchvehicleModelQuery, FetchvehicleModelQueryVariables>) {
        return ApolloReactHooks.useQuery<FetchvehicleModelQuery, FetchvehicleModelQueryVariables>(FetchvehicleModelDocument, baseOptions);
      }
export function useFetchvehicleModelLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FetchvehicleModelQuery, FetchvehicleModelQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<FetchvehicleModelQuery, FetchvehicleModelQueryVariables>(FetchvehicleModelDocument, baseOptions);
        }
export type FetchvehicleModelQueryHookResult = ReturnType<typeof useFetchvehicleModelQuery>;
export type FetchvehicleModelLazyQueryHookResult = ReturnType<typeof useFetchvehicleModelLazyQuery>;
export type FetchvehicleModelQueryResult = ApolloReactCommon.QueryResult<FetchvehicleModelQuery, FetchvehicleModelQueryVariables>;
export const UpdatevehicleModelByIdDocument = gql`
    mutation updatevehicleModelById($id: String, $set: vehicle_set_input) {
  update_vehicle(_set: $set, where: {id: {_eq: $id}}) {
    affected_rows
    returning {
      ...vehicleModelFields
    }
  }
}
    ${VehicleModelFieldsFragmentDoc}`;
export type UpdatevehicleModelByIdMutationFn = ApolloReactCommon.MutationFunction<UpdatevehicleModelByIdMutation, UpdatevehicleModelByIdMutationVariables>;

/**
 * __useUpdatevehicleModelByIdMutation__
 *
 * To run a mutation, you first call `useUpdatevehicleModelByIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatevehicleModelByIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatevehicleModelByIdMutation, { data, loading, error }] = useUpdatevehicleModelByIdMutation({
 *   variables: {
 *      id: // value for 'id'
 *      set: // value for 'set'
 *   },
 * });
 */
export function useUpdatevehicleModelByIdMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdatevehicleModelByIdMutation, UpdatevehicleModelByIdMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdatevehicleModelByIdMutation, UpdatevehicleModelByIdMutationVariables>(UpdatevehicleModelByIdDocument, baseOptions);
      }
export type UpdatevehicleModelByIdMutationHookResult = ReturnType<typeof useUpdatevehicleModelByIdMutation>;
export type UpdatevehicleModelByIdMutationResult = ApolloReactCommon.MutationResult<UpdatevehicleModelByIdMutation>;
export type UpdatevehicleModelByIdMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdatevehicleModelByIdMutation, UpdatevehicleModelByIdMutationVariables>;
export const UpdatevehicleModelDocument = gql`
    mutation updatevehicleModel($set: vehicle_set_input, $where: vehicle_bool_exp!) {
  update_vehicle(_set: $set, where: $where) {
    affected_rows
    returning {
      ...vehicleModelFields
    }
  }
}
    ${VehicleModelFieldsFragmentDoc}`;
export type UpdatevehicleModelMutationFn = ApolloReactCommon.MutationFunction<UpdatevehicleModelMutation, UpdatevehicleModelMutationVariables>;

/**
 * __useUpdatevehicleModelMutation__
 *
 * To run a mutation, you first call `useUpdatevehicleModelMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatevehicleModelMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatevehicleModelMutation, { data, loading, error }] = useUpdatevehicleModelMutation({
 *   variables: {
 *      set: // value for 'set'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useUpdatevehicleModelMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdatevehicleModelMutation, UpdatevehicleModelMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdatevehicleModelMutation, UpdatevehicleModelMutationVariables>(UpdatevehicleModelDocument, baseOptions);
      }
export type UpdatevehicleModelMutationHookResult = ReturnType<typeof useUpdatevehicleModelMutation>;
export type UpdatevehicleModelMutationResult = ApolloReactCommon.MutationResult<UpdatevehicleModelMutation>;
export type UpdatevehicleModelMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdatevehicleModelMutation, UpdatevehicleModelMutationVariables>;
export const RemovevehicleModelByIdDocument = gql`
    mutation removevehicleModelById($id: String) {
  delete_vehicle(where: {id: {_eq: $id}}) {
    affected_rows
  }
}
    `;
export type RemovevehicleModelByIdMutationFn = ApolloReactCommon.MutationFunction<RemovevehicleModelByIdMutation, RemovevehicleModelByIdMutationVariables>;

/**
 * __useRemovevehicleModelByIdMutation__
 *
 * To run a mutation, you first call `useRemovevehicleModelByIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemovevehicleModelByIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removevehicleModelByIdMutation, { data, loading, error }] = useRemovevehicleModelByIdMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRemovevehicleModelByIdMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<RemovevehicleModelByIdMutation, RemovevehicleModelByIdMutationVariables>) {
        return ApolloReactHooks.useMutation<RemovevehicleModelByIdMutation, RemovevehicleModelByIdMutationVariables>(RemovevehicleModelByIdDocument, baseOptions);
      }
export type RemovevehicleModelByIdMutationHookResult = ReturnType<typeof useRemovevehicleModelByIdMutation>;
export type RemovevehicleModelByIdMutationResult = ApolloReactCommon.MutationResult<RemovevehicleModelByIdMutation>;
export type RemovevehicleModelByIdMutationOptions = ApolloReactCommon.BaseMutationOptions<RemovevehicleModelByIdMutation, RemovevehicleModelByIdMutationVariables>;
export const RemovevehicleModelDocument = gql`
    mutation removevehicleModel($where: vehicle_bool_exp!) {
  delete_vehicle(where: $where) {
    affected_rows
  }
}
    `;
export type RemovevehicleModelMutationFn = ApolloReactCommon.MutationFunction<RemovevehicleModelMutation, RemovevehicleModelMutationVariables>;

/**
 * __useRemovevehicleModelMutation__
 *
 * To run a mutation, you first call `useRemovevehicleModelMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemovevehicleModelMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removevehicleModelMutation, { data, loading, error }] = useRemovevehicleModelMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useRemovevehicleModelMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<RemovevehicleModelMutation, RemovevehicleModelMutationVariables>) {
        return ApolloReactHooks.useMutation<RemovevehicleModelMutation, RemovevehicleModelMutationVariables>(RemovevehicleModelDocument, baseOptions);
      }
export type RemovevehicleModelMutationHookResult = ReturnType<typeof useRemovevehicleModelMutation>;
export type RemovevehicleModelMutationResult = ApolloReactCommon.MutationResult<RemovevehicleModelMutation>;
export type RemovevehicleModelMutationOptions = ApolloReactCommon.BaseMutationOptions<RemovevehicleModelMutation, RemovevehicleModelMutationVariables>;
export const Insertvehicle_LocationModelDocument = gql`
    mutation insertvehicle_locationModel($objects: [vehicle_location_insert_input!]!, $onConflict: vehicle_location_on_conflict) {
  insert_vehicle_location(objects: $objects, on_conflict: $onConflict) {
    affected_rows
    returning {
      ...vehicle_locationModelFields
    }
  }
}
    ${Vehicle_LocationModelFieldsFragmentDoc}`;
export type Insertvehicle_LocationModelMutationFn = ApolloReactCommon.MutationFunction<Insertvehicle_LocationModelMutation, Insertvehicle_LocationModelMutationVariables>;

/**
 * __useInsertvehicle_LocationModelMutation__
 *
 * To run a mutation, you first call `useInsertvehicle_LocationModelMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertvehicle_LocationModelMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertvehicleLocationModelMutation, { data, loading, error }] = useInsertvehicle_LocationModelMutation({
 *   variables: {
 *      objects: // value for 'objects'
 *      onConflict: // value for 'onConflict'
 *   },
 * });
 */
export function useInsertvehicle_LocationModelMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<Insertvehicle_LocationModelMutation, Insertvehicle_LocationModelMutationVariables>) {
        return ApolloReactHooks.useMutation<Insertvehicle_LocationModelMutation, Insertvehicle_LocationModelMutationVariables>(Insertvehicle_LocationModelDocument, baseOptions);
      }
export type Insertvehicle_LocationModelMutationHookResult = ReturnType<typeof useInsertvehicle_LocationModelMutation>;
export type Insertvehicle_LocationModelMutationResult = ApolloReactCommon.MutationResult<Insertvehicle_LocationModelMutation>;
export type Insertvehicle_LocationModelMutationOptions = ApolloReactCommon.BaseMutationOptions<Insertvehicle_LocationModelMutation, Insertvehicle_LocationModelMutationVariables>;
export const Fetchvehicle_LocationModelByIdDocument = gql`
    query fetchvehicle_locationModelById($vehicle_locationId: Int!) {
  vehicle_location_by_pk(id: $vehicle_locationId) {
    ...vehicle_locationModelFields
  }
}
    ${Vehicle_LocationModelFieldsFragmentDoc}`;

/**
 * __useFetchvehicle_LocationModelByIdQuery__
 *
 * To run a query within a React component, call `useFetchvehicle_LocationModelByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchvehicle_LocationModelByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchvehicle_LocationModelByIdQuery({
 *   variables: {
 *      vehicle_locationId: // value for 'vehicle_locationId'
 *   },
 * });
 */
export function useFetchvehicle_LocationModelByIdQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<Fetchvehicle_LocationModelByIdQuery, Fetchvehicle_LocationModelByIdQueryVariables>) {
        return ApolloReactHooks.useQuery<Fetchvehicle_LocationModelByIdQuery, Fetchvehicle_LocationModelByIdQueryVariables>(Fetchvehicle_LocationModelByIdDocument, baseOptions);
      }
export function useFetchvehicle_LocationModelByIdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<Fetchvehicle_LocationModelByIdQuery, Fetchvehicle_LocationModelByIdQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<Fetchvehicle_LocationModelByIdQuery, Fetchvehicle_LocationModelByIdQueryVariables>(Fetchvehicle_LocationModelByIdDocument, baseOptions);
        }
export type Fetchvehicle_LocationModelByIdQueryHookResult = ReturnType<typeof useFetchvehicle_LocationModelByIdQuery>;
export type Fetchvehicle_LocationModelByIdLazyQueryHookResult = ReturnType<typeof useFetchvehicle_LocationModelByIdLazyQuery>;
export type Fetchvehicle_LocationModelByIdQueryResult = ApolloReactCommon.QueryResult<Fetchvehicle_LocationModelByIdQuery, Fetchvehicle_LocationModelByIdQueryVariables>;
export const Fetchvehicle_LocationModelDocument = gql`
    query fetchvehicle_locationModel($distinct_on: [vehicle_location_select_column!], $where: vehicle_location_bool_exp, $limit: Int, $offset: Int, $order_by: [vehicle_location_order_by!]) {
  vehicle_location(distinct_on: $distinct_on, where: $where, limit: $limit, offset: $offset, order_by: $order_by) {
    ...vehicle_locationModelFields
  }
}
    ${Vehicle_LocationModelFieldsFragmentDoc}`;

/**
 * __useFetchvehicle_LocationModelQuery__
 *
 * To run a query within a React component, call `useFetchvehicle_LocationModelQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchvehicle_LocationModelQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchvehicle_LocationModelQuery({
 *   variables: {
 *      distinct_on: // value for 'distinct_on'
 *      where: // value for 'where'
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *      order_by: // value for 'order_by'
 *   },
 * });
 */
export function useFetchvehicle_LocationModelQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<Fetchvehicle_LocationModelQuery, Fetchvehicle_LocationModelQueryVariables>) {
        return ApolloReactHooks.useQuery<Fetchvehicle_LocationModelQuery, Fetchvehicle_LocationModelQueryVariables>(Fetchvehicle_LocationModelDocument, baseOptions);
      }
export function useFetchvehicle_LocationModelLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<Fetchvehicle_LocationModelQuery, Fetchvehicle_LocationModelQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<Fetchvehicle_LocationModelQuery, Fetchvehicle_LocationModelQueryVariables>(Fetchvehicle_LocationModelDocument, baseOptions);
        }
export type Fetchvehicle_LocationModelQueryHookResult = ReturnType<typeof useFetchvehicle_LocationModelQuery>;
export type Fetchvehicle_LocationModelLazyQueryHookResult = ReturnType<typeof useFetchvehicle_LocationModelLazyQuery>;
export type Fetchvehicle_LocationModelQueryResult = ApolloReactCommon.QueryResult<Fetchvehicle_LocationModelQuery, Fetchvehicle_LocationModelQueryVariables>;
export const Updatevehicle_LocationModelByIdDocument = gql`
    mutation updatevehicle_locationModelById($id: Int, $set: vehicle_location_set_input) {
  update_vehicle_location(_set: $set, where: {id: {_eq: $id}}) {
    affected_rows
    returning {
      ...vehicle_locationModelFields
    }
  }
}
    ${Vehicle_LocationModelFieldsFragmentDoc}`;
export type Updatevehicle_LocationModelByIdMutationFn = ApolloReactCommon.MutationFunction<Updatevehicle_LocationModelByIdMutation, Updatevehicle_LocationModelByIdMutationVariables>;

/**
 * __useUpdatevehicle_LocationModelByIdMutation__
 *
 * To run a mutation, you first call `useUpdatevehicle_LocationModelByIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatevehicle_LocationModelByIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatevehicleLocationModelByIdMutation, { data, loading, error }] = useUpdatevehicle_LocationModelByIdMutation({
 *   variables: {
 *      id: // value for 'id'
 *      set: // value for 'set'
 *   },
 * });
 */
export function useUpdatevehicle_LocationModelByIdMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<Updatevehicle_LocationModelByIdMutation, Updatevehicle_LocationModelByIdMutationVariables>) {
        return ApolloReactHooks.useMutation<Updatevehicle_LocationModelByIdMutation, Updatevehicle_LocationModelByIdMutationVariables>(Updatevehicle_LocationModelByIdDocument, baseOptions);
      }
export type Updatevehicle_LocationModelByIdMutationHookResult = ReturnType<typeof useUpdatevehicle_LocationModelByIdMutation>;
export type Updatevehicle_LocationModelByIdMutationResult = ApolloReactCommon.MutationResult<Updatevehicle_LocationModelByIdMutation>;
export type Updatevehicle_LocationModelByIdMutationOptions = ApolloReactCommon.BaseMutationOptions<Updatevehicle_LocationModelByIdMutation, Updatevehicle_LocationModelByIdMutationVariables>;
export const Updatevehicle_LocationModelDocument = gql`
    mutation updatevehicle_locationModel($set: vehicle_location_set_input, $where: vehicle_location_bool_exp!) {
  update_vehicle_location(_set: $set, where: $where) {
    affected_rows
    returning {
      ...vehicle_locationModelFields
    }
  }
}
    ${Vehicle_LocationModelFieldsFragmentDoc}`;
export type Updatevehicle_LocationModelMutationFn = ApolloReactCommon.MutationFunction<Updatevehicle_LocationModelMutation, Updatevehicle_LocationModelMutationVariables>;

/**
 * __useUpdatevehicle_LocationModelMutation__
 *
 * To run a mutation, you first call `useUpdatevehicle_LocationModelMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatevehicle_LocationModelMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatevehicleLocationModelMutation, { data, loading, error }] = useUpdatevehicle_LocationModelMutation({
 *   variables: {
 *      set: // value for 'set'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useUpdatevehicle_LocationModelMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<Updatevehicle_LocationModelMutation, Updatevehicle_LocationModelMutationVariables>) {
        return ApolloReactHooks.useMutation<Updatevehicle_LocationModelMutation, Updatevehicle_LocationModelMutationVariables>(Updatevehicle_LocationModelDocument, baseOptions);
      }
export type Updatevehicle_LocationModelMutationHookResult = ReturnType<typeof useUpdatevehicle_LocationModelMutation>;
export type Updatevehicle_LocationModelMutationResult = ApolloReactCommon.MutationResult<Updatevehicle_LocationModelMutation>;
export type Updatevehicle_LocationModelMutationOptions = ApolloReactCommon.BaseMutationOptions<Updatevehicle_LocationModelMutation, Updatevehicle_LocationModelMutationVariables>;
export const Removevehicle_LocationModelByIdDocument = gql`
    mutation removevehicle_locationModelById($id: Int) {
  delete_vehicle_location(where: {id: {_eq: $id}}) {
    affected_rows
  }
}
    `;
export type Removevehicle_LocationModelByIdMutationFn = ApolloReactCommon.MutationFunction<Removevehicle_LocationModelByIdMutation, Removevehicle_LocationModelByIdMutationVariables>;

/**
 * __useRemovevehicle_LocationModelByIdMutation__
 *
 * To run a mutation, you first call `useRemovevehicle_LocationModelByIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemovevehicle_LocationModelByIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removevehicleLocationModelByIdMutation, { data, loading, error }] = useRemovevehicle_LocationModelByIdMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRemovevehicle_LocationModelByIdMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<Removevehicle_LocationModelByIdMutation, Removevehicle_LocationModelByIdMutationVariables>) {
        return ApolloReactHooks.useMutation<Removevehicle_LocationModelByIdMutation, Removevehicle_LocationModelByIdMutationVariables>(Removevehicle_LocationModelByIdDocument, baseOptions);
      }
export type Removevehicle_LocationModelByIdMutationHookResult = ReturnType<typeof useRemovevehicle_LocationModelByIdMutation>;
export type Removevehicle_LocationModelByIdMutationResult = ApolloReactCommon.MutationResult<Removevehicle_LocationModelByIdMutation>;
export type Removevehicle_LocationModelByIdMutationOptions = ApolloReactCommon.BaseMutationOptions<Removevehicle_LocationModelByIdMutation, Removevehicle_LocationModelByIdMutationVariables>;
export const Removevehicle_LocationModelDocument = gql`
    mutation removevehicle_locationModel($where: vehicle_location_bool_exp!) {
  delete_vehicle_location(where: $where) {
    affected_rows
  }
}
    `;
export type Removevehicle_LocationModelMutationFn = ApolloReactCommon.MutationFunction<Removevehicle_LocationModelMutation, Removevehicle_LocationModelMutationVariables>;

/**
 * __useRemovevehicle_LocationModelMutation__
 *
 * To run a mutation, you first call `useRemovevehicle_LocationModelMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemovevehicle_LocationModelMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removevehicleLocationModelMutation, { data, loading, error }] = useRemovevehicle_LocationModelMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useRemovevehicle_LocationModelMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<Removevehicle_LocationModelMutation, Removevehicle_LocationModelMutationVariables>) {
        return ApolloReactHooks.useMutation<Removevehicle_LocationModelMutation, Removevehicle_LocationModelMutationVariables>(Removevehicle_LocationModelDocument, baseOptions);
      }
export type Removevehicle_LocationModelMutationHookResult = ReturnType<typeof useRemovevehicle_LocationModelMutation>;
export type Removevehicle_LocationModelMutationResult = ApolloReactCommon.MutationResult<Removevehicle_LocationModelMutation>;
export type Removevehicle_LocationModelMutationOptions = ApolloReactCommon.BaseMutationOptions<Removevehicle_LocationModelMutation, Removevehicle_LocationModelMutationVariables>;