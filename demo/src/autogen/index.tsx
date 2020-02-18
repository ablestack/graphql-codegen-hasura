import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
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
  date: any,
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
  visibleInContext?: Maybe<Scalars['Boolean']>,
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
  Isnull = 'ISNULL',
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

/** expression to compare columns of type boolean. All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: Maybe<Scalars['Boolean']>,
  _gt?: Maybe<Scalars['Boolean']>,
  _gte?: Maybe<Scalars['Boolean']>,
  _in?: Maybe<Array<Maybe<Scalars['Boolean']>>>,
  _is_null?: Maybe<Scalars['Boolean']>,
  _lt?: Maybe<Scalars['Boolean']>,
  _lte?: Maybe<Scalars['Boolean']>,
  _neq?: Maybe<Scalars['Boolean']>,
  _nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>,
};

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
  assignedUsers?: Maybe<Array<Maybe<Scalars['String']>>>,
  before?: Maybe<Scalars['String']>,
  case?: Maybe<Scalars['ID']>,
  caseDocumentHasAnswer?: Maybe<Array<Maybe<HasAnswerFilterType>>>,
  caseMetaValue?: Maybe<Array<Maybe<JsonValueFilterType>>>,
  closedAt?: Maybe<Scalars['DateTime']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdByGroup?: Maybe<Scalars['String']>,
  createdByUser?: Maybe<Scalars['String']>,
  documentHasAnswer?: Maybe<Array<Maybe<HasAnswerFilterType>>>,
  filter?: Maybe<Array<Maybe<WorkItemFilterSetType>>>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  metaHasKey?: Maybe<Scalars['String']>,
  metaValue?: Maybe<Array<Maybe<JsonValueFilterType>>>,
  modifiedAt?: Maybe<Scalars['DateTime']>,
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
  workItemDocumentHasAnswer?: Maybe<Array<Maybe<HasAnswerFilterType>>>,
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



/** expression to compare columns of type date. All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: Maybe<Scalars['date']>,
  _gt?: Maybe<Scalars['date']>,
  _gte?: Maybe<Scalars['date']>,
  _in?: Maybe<Array<Maybe<Scalars['date']>>>,
  _is_null?: Maybe<Scalars['Boolean']>,
  _lt?: Maybe<Scalars['date']>,
  _lte?: Maybe<Scalars['date']>,
  _neq?: Maybe<Scalars['date']>,
  _nin?: Maybe<Array<Maybe<Scalars['date']>>>,
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
  value?: Maybe<Scalars['Date']>,
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
  search?: Maybe<Scalars['String']>,
  visibleInContext?: Maybe<Scalars['Boolean']>
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

/** columns and relationships of "dogs" */
export type Dogs = {
   __typename?: 'dogs',
  breed: Scalars['String'],
  id: Scalars['uuid'],
  pretentious: Scalars['Boolean'],
  shovel_faced: Scalars['Boolean'],
};

/** aggregated selection of "dogs" */
export type Dogs_Aggregate = {
   __typename?: 'dogs_aggregate',
  aggregate?: Maybe<Dogs_Aggregate_Fields>,
  nodes: Array<Dogs>,
};

/** aggregate fields of "dogs" */
export type Dogs_Aggregate_Fields = {
   __typename?: 'dogs_aggregate_fields',
  count?: Maybe<Scalars['Int']>,
  max?: Maybe<Dogs_Max_Fields>,
  min?: Maybe<Dogs_Min_Fields>,
};


/** aggregate fields of "dogs" */
export type Dogs_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Dogs_Select_Column>>,
  distinct?: Maybe<Scalars['Boolean']>
};

/** order by aggregate values of table "dogs" */
export type Dogs_Aggregate_Order_By = {
  count?: Maybe<Order_By>,
  max?: Maybe<Dogs_Max_Order_By>,
  min?: Maybe<Dogs_Min_Order_By>,
};

/** input type for inserting array relation for remote table "dogs" */
export type Dogs_Arr_Rel_Insert_Input = {
  data: Array<Dogs_Insert_Input>,
  on_conflict?: Maybe<Dogs_On_Conflict>,
};

/** Boolean expression to filter rows from the table "dogs". All fields are combined with a logical 'AND'. */
export type Dogs_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Dogs_Bool_Exp>>>,
  _not?: Maybe<Dogs_Bool_Exp>,
  _or?: Maybe<Array<Maybe<Dogs_Bool_Exp>>>,
  breed?: Maybe<Text_Comparison_Exp>,
  id?: Maybe<Uuid_Comparison_Exp>,
  pretentious?: Maybe<Boolean_Comparison_Exp>,
  shovel_faced?: Maybe<Boolean_Comparison_Exp>,
};

/** unique or primary key constraints on table "dogs" */
export enum Dogs_Constraint {
  /** unique or primary key constraint */
  DogsBreedKey = 'dogs_breed_key',
  /** unique or primary key constraint */
  DogsPkey = 'dogs_pkey'
}

/** input type for inserting data into table "dogs" */
export type Dogs_Insert_Input = {
  breed?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['uuid']>,
  pretentious?: Maybe<Scalars['Boolean']>,
  shovel_faced?: Maybe<Scalars['Boolean']>,
};

/** aggregate max on columns */
export type Dogs_Max_Fields = {
   __typename?: 'dogs_max_fields',
  breed?: Maybe<Scalars['String']>,
};

/** order by max() on columns of table "dogs" */
export type Dogs_Max_Order_By = {
  breed?: Maybe<Order_By>,
};

/** aggregate min on columns */
export type Dogs_Min_Fields = {
   __typename?: 'dogs_min_fields',
  breed?: Maybe<Scalars['String']>,
};

/** order by min() on columns of table "dogs" */
export type Dogs_Min_Order_By = {
  breed?: Maybe<Order_By>,
};

/** response of any mutation on the table "dogs" */
export type Dogs_Mutation_Response = {
   __typename?: 'dogs_mutation_response',
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'],
  /** data of the affected rows by the mutation */
  returning: Array<Dogs>,
};

/** input type for inserting object relation for remote table "dogs" */
export type Dogs_Obj_Rel_Insert_Input = {
  data: Dogs_Insert_Input,
  on_conflict?: Maybe<Dogs_On_Conflict>,
};

/** on conflict condition type for table "dogs" */
export type Dogs_On_Conflict = {
  constraint: Dogs_Constraint,
  update_columns: Array<Dogs_Update_Column>,
};

/** ordering options when selecting data from "dogs" */
export type Dogs_Order_By = {
  breed?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  pretentious?: Maybe<Order_By>,
  shovel_faced?: Maybe<Order_By>,
};

/** select columns of table "dogs" */
export enum Dogs_Select_Column {
  /** column name */
  Breed = 'breed',
  /** column name */
  Id = 'id',
  /** column name */
  Pretentious = 'pretentious',
  /** column name */
  ShovelFaced = 'shovel_faced'
}

/** input type for updating data in table "dogs" */
export type Dogs_Set_Input = {
  breed?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['uuid']>,
  pretentious?: Maybe<Scalars['Boolean']>,
  shovel_faced?: Maybe<Scalars['Boolean']>,
};

/** update columns of table "dogs" */
export enum Dogs_Update_Column {
  /** column name */
  Breed = 'breed',
  /** column name */
  Id = 'id',
  /** column name */
  Pretentious = 'pretentious',
  /** column name */
  ShovelFaced = 'shovel_faced'
}

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

export type DynamicOption = Node & {
   __typename?: 'DynamicOption',
  createdAt: Scalars['DateTime'],
  createdByGroup?: Maybe<Scalars['String']>,
  createdByUser?: Maybe<Scalars['String']>,
  document: Document,
  /** The ID of the object. */
  id: Scalars['ID'],
  label: Scalars['String'],
  modifiedAt: Scalars['DateTime'],
  question: StaticQuestion,
  slug: Scalars['String'],
};

export type DynamicOptionConnection = {
   __typename?: 'DynamicOptionConnection',
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<DynamicOptionEdge>>,
  /** Pagination data for this connection. */
  pageInfo: PageInfo,
  totalCount?: Maybe<Scalars['Int']>,
};

/** A Relay edge containing a `DynamicOption` and its cursor. */
export type DynamicOptionEdge = {
   __typename?: 'DynamicOptionEdge',
  /** A cursor for use in pagination */
  cursor: Scalars['String'],
  /** The item at the end of the edge */
  node?: Maybe<DynamicOption>,
};

export type DynamicOptionFilterSetType = {
  document?: Maybe<Scalars['ID']>,
  invert?: Maybe<Scalars['Boolean']>,
  question?: Maybe<Scalars['ID']>,
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
  value?: Maybe<Scalars['Float']>,
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



/** 
 * Lookup type to search document structures.
 * 
 * When using lookup `ISNULL`, the provided `value` will be ignored.
 **/
export type HasAnswerFilterType = {
  hierarchy?: Maybe<AnswerHierarchyMode>,
  lookup?: Maybe<AnswerLookupMode>,
  question: Scalars['ID'],
  value?: Maybe<Scalars['GenericScalar']>,
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
  value?: Maybe<Scalars['Int']>,
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
  value?: Maybe<Array<Maybe<Scalars['String']>>>,
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
  skipWorkItem?: Maybe<SkipWorkItemPayload>,
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


export type MutationSkipWorkItemArgs = {
  input: SkipWorkItemInput
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
  /** delete data from the table: "dogs" */
  delete_dogs?: Maybe<Dogs_Mutation_Response>,
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
  /** insert data into the table: "dogs" */
  insert_dogs?: Maybe<Dogs_Mutation_Response>,
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
  skipWorkItem?: Maybe<SkipWorkItemPayload>,
  startCase?: Maybe<StartCasePayload>,
  /** update data of the table: "dogs" */
  update_dogs?: Maybe<Dogs_Mutation_Response>,
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
export type Mutation_RootDelete_DogsArgs = {
  where: Dogs_Bool_Exp
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
export type Mutation_RootInsert_DogsArgs = {
  objects: Array<Dogs_Insert_Input>,
  on_conflict?: Maybe<Dogs_On_Conflict>
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
export type Mutation_RootSkipWorkItemArgs = {
  input: SkipWorkItemInput
};


/** mutation root */
export type Mutation_RootStartCaseArgs = {
  input: StartCaseInput
};


/** mutation root */
export type Mutation_RootUpdate_DogsArgs = {
  _set?: Maybe<Dogs_Set_Input>,
  where: Dogs_Bool_Exp
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
  allUsedDynamicOptions?: Maybe<DynamicOptionConnection>,
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
  workItemDocumentHasAnswer?: Maybe<Array<Maybe<HasAnswerFilterType>>>,
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


export type QueryAllUsedDynamicOptionsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  createdByGroup?: Maybe<Scalars['String']>,
  createdByUser?: Maybe<Scalars['String']>,
  document?: Maybe<Scalars['ID']>,
  filter?: Maybe<Array<Maybe<DynamicOptionFilterSetType>>>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  question?: Maybe<Scalars['ID']>
};


export type QueryAllWorkItemsArgs = {
  addressedGroups?: Maybe<Array<Maybe<Scalars['String']>>>,
  after?: Maybe<Scalars['String']>,
  assignedUsers?: Maybe<Array<Maybe<Scalars['String']>>>,
  before?: Maybe<Scalars['String']>,
  case?: Maybe<Scalars['ID']>,
  caseDocumentHasAnswer?: Maybe<Array<Maybe<HasAnswerFilterType>>>,
  caseMetaValue?: Maybe<Array<Maybe<JsonValueFilterType>>>,
  closedAt?: Maybe<Scalars['DateTime']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdByGroup?: Maybe<Scalars['String']>,
  createdByUser?: Maybe<Scalars['String']>,
  documentHasAnswer?: Maybe<Array<Maybe<HasAnswerFilterType>>>,
  filter?: Maybe<Array<Maybe<WorkItemFilterSetType>>>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  metaHasKey?: Maybe<Scalars['String']>,
  metaValue?: Maybe<Array<Maybe<JsonValueFilterType>>>,
  modifiedAt?: Maybe<Scalars['DateTime']>,
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
  name: Scalars['String']
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
  allUsedDynamicOptions?: Maybe<DynamicOptionConnection>,
  allWorkItems?: Maybe<WorkItemConnection>,
  allWorkflows?: Maybe<WorkflowConnection>,
  dataSource?: Maybe<DataSourceDataConnection>,
  documentValidity?: Maybe<DocumentValidityConnection>,
  /** fetch data from the table: "dogs" */
  dogs: Array<Dogs>,
  /** fetch aggregated fields from the table: "dogs" */
  dogs_aggregate: Dogs_Aggregate,
  /** fetch data from the table: "dogs" using primary key columns */
  dogs_by_pk?: Maybe<Dogs>,
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
  workItemDocumentHasAnswer?: Maybe<Array<Maybe<HasAnswerFilterType>>>,
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
export type Query_RootAllUsedDynamicOptionsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  createdByGroup?: Maybe<Scalars['String']>,
  createdByUser?: Maybe<Scalars['String']>,
  document?: Maybe<Scalars['ID']>,
  filter?: Maybe<Array<Maybe<DynamicOptionFilterSetType>>>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  question?: Maybe<Scalars['ID']>
};


/** query root */
export type Query_RootAllWorkItemsArgs = {
  addressedGroups?: Maybe<Array<Maybe<Scalars['String']>>>,
  after?: Maybe<Scalars['String']>,
  assignedUsers?: Maybe<Array<Maybe<Scalars['String']>>>,
  before?: Maybe<Scalars['String']>,
  case?: Maybe<Scalars['ID']>,
  caseDocumentHasAnswer?: Maybe<Array<Maybe<HasAnswerFilterType>>>,
  caseMetaValue?: Maybe<Array<Maybe<JsonValueFilterType>>>,
  closedAt?: Maybe<Scalars['DateTime']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdByGroup?: Maybe<Scalars['String']>,
  createdByUser?: Maybe<Scalars['String']>,
  documentHasAnswer?: Maybe<Array<Maybe<HasAnswerFilterType>>>,
  filter?: Maybe<Array<Maybe<WorkItemFilterSetType>>>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  metaHasKey?: Maybe<Scalars['String']>,
  metaValue?: Maybe<Array<Maybe<JsonValueFilterType>>>,
  modifiedAt?: Maybe<Scalars['DateTime']>,
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
  name: Scalars['String']
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
export type Query_RootDogsArgs = {
  distinct_on?: Maybe<Array<Dogs_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Dogs_Order_By>>,
  where?: Maybe<Dogs_Bool_Exp>
};


/** query root */
export type Query_RootDogs_AggregateArgs = {
  distinct_on?: Maybe<Array<Dogs_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Dogs_Order_By>>,
  where?: Maybe<Dogs_Bool_Exp>
};


/** query root */
export type Query_RootDogs_By_PkArgs = {
  id: Scalars['uuid']
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
  value?: Maybe<Scalars['Date']>,
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
  value?: Maybe<Scalars['String']>,
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
  value?: Maybe<Scalars['Float']>,
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
  value?: Maybe<Scalars['Int']>,
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
  value?: Maybe<Array<Maybe<Scalars['String']>>>,
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
  value?: Maybe<Scalars['String']>,
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
  value?: Maybe<Array<Maybe<Scalars['ID']>>>,
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
  questions?: Maybe<Array<Maybe<Scalars['ID']>>>,
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

export type SkipWorkItemInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
};

export type SkipWorkItemPayload = {
   __typename?: 'SkipWorkItemPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  workItem?: Maybe<WorkItem>,
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
  ClosedAt = 'CLOSED_AT',
  CreatedAt = 'CREATED_AT',
  CreatedByGroup = 'CREATED_BY_GROUP',
  CreatedByUser = 'CREATED_BY_USER',
  Deadline = 'DEADLINE',
  Description = 'DESCRIPTION',
  IsArchived = 'IS_ARCHIVED',
  IsPublished = 'IS_PUBLISHED',
  ModifiedAt = 'MODIFIED_AT',
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
  /** 
 * Required expression is only evaluated when question is not hidden. This should
   * not be used for `StaticQuestion`, because it can never be satisfied.
 **/
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
  Ready = 'READY',
  /** Task is skipped. */
  Skipped = 'SKIPPED'
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
  value?: Maybe<Scalars['String']>,
};

/** subscription root */
export type Subscription_Root = {
   __typename?: 'subscription_root',
  /** fetch data from the table: "dogs" */
  dogs: Array<Dogs>,
  /** fetch aggregated fields from the table: "dogs" */
  dogs_aggregate: Dogs_Aggregate,
  /** fetch data from the table: "dogs" using primary key columns */
  dogs_by_pk?: Maybe<Dogs>,
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
export type Subscription_RootDogsArgs = {
  distinct_on?: Maybe<Array<Dogs_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Dogs_Order_By>>,
  where?: Maybe<Dogs_Bool_Exp>
};


/** subscription root */
export type Subscription_RootDogs_AggregateArgs = {
  distinct_on?: Maybe<Array<Dogs_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Dogs_Order_By>>,
  where?: Maybe<Dogs_Bool_Exp>
};


/** subscription root */
export type Subscription_RootDogs_By_PkArgs = {
  id: Scalars['uuid']
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
  value?: Maybe<Array<Maybe<Document>>>,
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
  active?: Maybe<Scalars['Boolean']>,
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
  active?: Maybe<Boolean_Comparison_Exp>,
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
  active?: Maybe<Scalars['Boolean']>,
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
  active?: Maybe<Order_By>,
  created_at?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  name?: Maybe<Order_By>,
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  Active = 'active',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  active?: Maybe<Scalars['Boolean']>,
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
  Active = 'active',
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
  timestamp: Scalars['date'],
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
  timestamp?: Maybe<Date_Comparison_Exp>,
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
  timestamp?: Maybe<Scalars['date']>,
  vehicle?: Maybe<Vehicle_Obj_Rel_Insert_Input>,
  vehicle_id?: Maybe<Scalars['String']>,
};

/** aggregate max on columns */
export type Vehicle_Location_Max_Fields = {
   __typename?: 'vehicle_location_max_fields',
  id?: Maybe<Scalars['Int']>,
  location?: Maybe<Scalars['String']>,
  timestamp?: Maybe<Scalars['date']>,
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
  timestamp?: Maybe<Scalars['date']>,
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
  timestamp?: Maybe<Scalars['date']>,
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
  assignedUsers?: Maybe<Array<Maybe<Scalars['String']>>>,
  case?: Maybe<Scalars['ID']>,
  caseDocumentHasAnswer?: Maybe<Array<Maybe<HasAnswerFilterType>>>,
  caseMetaValue?: Maybe<Array<Maybe<JsonValueFilterType>>>,
  closedAt?: Maybe<Scalars['DateTime']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdByGroup?: Maybe<Scalars['String']>,
  createdByUser?: Maybe<Scalars['String']>,
  documentHasAnswer?: Maybe<Array<Maybe<HasAnswerFilterType>>>,
  invert?: Maybe<Scalars['Boolean']>,
  metaHasKey?: Maybe<Scalars['String']>,
  metaValue?: Maybe<Array<Maybe<JsonValueFilterType>>>,
  modifiedAt?: Maybe<Scalars['DateTime']>,
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
  Ready = 'READY',
  /** Task is skipped. */
  Skipped = 'SKIPPED'
}

/** An enumeration. */
export enum WorkItemStatusArgument {
  /** Task is cancelled. */
  Canceled = 'CANCELED',
  /** Task is done. */
  Completed = 'COMPLETED',
  /** Task is ready to be processed. */
  Ready = 'READY',
  /** Task is skipped. */
  Skipped = 'SKIPPED'
}

export type QueryVehicleByIdQueryVariables = {
  vehicleId: Scalars['String']
};


export type QueryVehicleByIdQuery = (
  { __typename?: 'query_root' }
  & { vehicle_by_pk: Maybe<(
    { __typename?: 'vehicle' }
    & VehicleFragment
  )> }
);

export type QueryVehicleObjectsQueryVariables = {
  distinct_on?: Maybe<Array<Vehicle_Select_Column>>,
  where?: Maybe<Vehicle_Bool_Exp>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Vehicle_Order_By>>
};


export type QueryVehicleObjectsQuery = (
  { __typename?: 'query_root' }
  & { vehicle: Array<(
    { __typename?: 'vehicle' }
    & VehicleFragment
  )> }
);

export type SubscribeToVehicleByIdSubscriptionVariables = {
  vehicleId: Scalars['String']
};


export type SubscribeToVehicleByIdSubscription = (
  { __typename?: 'subscription_root' }
  & { vehicle_by_pk: Maybe<(
    { __typename?: 'vehicle' }
    & VehicleFragment
  )> }
);

export type SubscribeToVehicleObjectsSubscriptionVariables = {
  distinct_on?: Maybe<Array<Vehicle_Select_Column>>,
  where?: Maybe<Vehicle_Bool_Exp>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Vehicle_Order_By>>
};


export type SubscribeToVehicleObjectsSubscription = (
  { __typename?: 'subscription_root' }
  & { vehicle: Array<(
    { __typename?: 'vehicle' }
    & VehicleFragment
  )> }
);

export type InsertVehicleMutationVariables = {
  objects: Array<Vehicle_Insert_Input>
};


export type InsertVehicleMutation = (
  { __typename?: 'mutation_root' }
  & { insert_vehicle: Maybe<(
    { __typename?: 'vehicle_mutation_response' }
    & Pick<Vehicle_Mutation_Response, 'affected_rows'>
    & { returning: Array<(
      { __typename?: 'vehicle' }
      & VehicleFragment
    )> }
  )> }
);

export type InsertVehicleWithOnConflictMutationVariables = {
  objects: Array<Vehicle_Insert_Input>,
  onConflict?: Maybe<Vehicle_On_Conflict>
};


export type InsertVehicleWithOnConflictMutation = (
  { __typename?: 'mutation_root' }
  & { insert_vehicle: Maybe<(
    { __typename?: 'vehicle_mutation_response' }
    & Pick<Vehicle_Mutation_Response, 'affected_rows'>
    & { returning: Array<(
      { __typename?: 'vehicle' }
      & VehicleFragment
    )> }
  )> }
);

export type UpdateVehicleByIdMutationVariables = {
  id?: Maybe<Scalars['String']>,
  set?: Maybe<Vehicle_Set_Input>
};


export type UpdateVehicleByIdMutation = (
  { __typename?: 'mutation_root' }
  & { update_vehicle: Maybe<(
    { __typename?: 'vehicle_mutation_response' }
    & Pick<Vehicle_Mutation_Response, 'affected_rows'>
    & { returning: Array<(
      { __typename?: 'vehicle' }
      & VehicleFragment
    )> }
  )> }
);

export type UpdateVehicleMutationVariables = {
  set?: Maybe<Vehicle_Set_Input>,
  where: Vehicle_Bool_Exp
};


export type UpdateVehicleMutation = (
  { __typename?: 'mutation_root' }
  & { update_vehicle: Maybe<(
    { __typename?: 'vehicle_mutation_response' }
    & Pick<Vehicle_Mutation_Response, 'affected_rows'>
    & { returning: Array<(
      { __typename?: 'vehicle' }
      & VehicleFragment
    )> }
  )> }
);

export type RemoveVehicleModelByIdMutationVariables = {
  id?: Maybe<Scalars['String']>
};


export type RemoveVehicleModelByIdMutation = (
  { __typename?: 'mutation_root' }
  & { delete_vehicle: Maybe<(
    { __typename?: 'vehicle_mutation_response' }
    & Pick<Vehicle_Mutation_Response, 'affected_rows'>
  )> }
);

export type RemoveVehicleModelMutationVariables = {
  where: Vehicle_Bool_Exp
};


export type RemoveVehicleModelMutation = (
  { __typename?: 'mutation_root' }
  & { delete_vehicle: Maybe<(
    { __typename?: 'vehicle_mutation_response' }
    & Pick<Vehicle_Mutation_Response, 'affected_rows'>
  )> }
);

export type QueryVehicleLocationOnlyByIdQueryVariables = {
  vehicleId: Scalars['String']
};


export type QueryVehicleLocationOnlyByIdQuery = (
  { __typename?: 'query_root' }
  & { vehicle_by_pk: Maybe<(
    { __typename?: 'vehicle' }
    & VehicleLocationOnlyFragment
  )> }
);

export type QueryVehicleLocationOnlyObjectsQueryVariables = {
  distinct_on?: Maybe<Array<Vehicle_Select_Column>>,
  where?: Maybe<Vehicle_Bool_Exp>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Vehicle_Order_By>>
};


export type QueryVehicleLocationOnlyObjectsQuery = (
  { __typename?: 'query_root' }
  & { vehicle: Array<(
    { __typename?: 'vehicle' }
    & VehicleLocationOnlyFragment
  )> }
);

export type SubscribeToVehicleLocationOnlyByIdSubscriptionVariables = {
  vehicleId: Scalars['String']
};


export type SubscribeToVehicleLocationOnlyByIdSubscription = (
  { __typename?: 'subscription_root' }
  & { vehicle_by_pk: Maybe<(
    { __typename?: 'vehicle' }
    & VehicleLocationOnlyFragment
  )> }
);

export type SubscribeToVehicleLocationOnlyObjectsSubscriptionVariables = {
  distinct_on?: Maybe<Array<Vehicle_Select_Column>>,
  where?: Maybe<Vehicle_Bool_Exp>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Vehicle_Order_By>>
};


export type SubscribeToVehicleLocationOnlyObjectsSubscription = (
  { __typename?: 'subscription_root' }
  & { vehicle: Array<(
    { __typename?: 'vehicle' }
    & VehicleLocationOnlyFragment
  )> }
);

export type InsertVehicleLocationOnlyMutationVariables = {
  objects: Array<Vehicle_Insert_Input>
};


export type InsertVehicleLocationOnlyMutation = (
  { __typename?: 'mutation_root' }
  & { insert_vehicle: Maybe<(
    { __typename?: 'vehicle_mutation_response' }
    & Pick<Vehicle_Mutation_Response, 'affected_rows'>
    & { returning: Array<(
      { __typename?: 'vehicle' }
      & VehicleLocationOnlyFragment
    )> }
  )> }
);

export type InsertVehicleLocationOnlyWithOnConflictMutationVariables = {
  objects: Array<Vehicle_Insert_Input>,
  onConflict?: Maybe<Vehicle_On_Conflict>
};


export type InsertVehicleLocationOnlyWithOnConflictMutation = (
  { __typename?: 'mutation_root' }
  & { insert_vehicle: Maybe<(
    { __typename?: 'vehicle_mutation_response' }
    & Pick<Vehicle_Mutation_Response, 'affected_rows'>
    & { returning: Array<(
      { __typename?: 'vehicle' }
      & VehicleLocationOnlyFragment
    )> }
  )> }
);

export type UpdateVehicleLocationOnlyByIdMutationVariables = {
  id?: Maybe<Scalars['String']>,
  set?: Maybe<Vehicle_Set_Input>
};


export type UpdateVehicleLocationOnlyByIdMutation = (
  { __typename?: 'mutation_root' }
  & { update_vehicle: Maybe<(
    { __typename?: 'vehicle_mutation_response' }
    & Pick<Vehicle_Mutation_Response, 'affected_rows'>
    & { returning: Array<(
      { __typename?: 'vehicle' }
      & VehicleLocationOnlyFragment
    )> }
  )> }
);

export type UpdateVehicleLocationOnlyMutationVariables = {
  set?: Maybe<Vehicle_Set_Input>,
  where: Vehicle_Bool_Exp
};


export type UpdateVehicleLocationOnlyMutation = (
  { __typename?: 'mutation_root' }
  & { update_vehicle: Maybe<(
    { __typename?: 'vehicle_mutation_response' }
    & Pick<Vehicle_Mutation_Response, 'affected_rows'>
    & { returning: Array<(
      { __typename?: 'vehicle' }
      & VehicleLocationOnlyFragment
    )> }
  )> }
);

export type QueryDogByIdQueryVariables = {
  dogsId: Scalars['uuid']
};


export type QueryDogByIdQuery = (
  { __typename?: 'query_root' }
  & { dogs_by_pk: Maybe<(
    { __typename?: 'dogs' }
    & DogFragment
  )> }
);

export type QueryDogObjectsQueryVariables = {
  distinct_on?: Maybe<Array<Dogs_Select_Column>>,
  where?: Maybe<Dogs_Bool_Exp>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Dogs_Order_By>>
};


export type QueryDogObjectsQuery = (
  { __typename?: 'query_root' }
  & { dogs: Array<(
    { __typename?: 'dogs' }
    & DogFragment
  )> }
);

export type SubscribeToDogByIdSubscriptionVariables = {
  dogsId: Scalars['uuid']
};


export type SubscribeToDogByIdSubscription = (
  { __typename?: 'subscription_root' }
  & { dogs_by_pk: Maybe<(
    { __typename?: 'dogs' }
    & DogFragment
  )> }
);

export type SubscribeToDogObjectsSubscriptionVariables = {
  distinct_on?: Maybe<Array<Dogs_Select_Column>>,
  where?: Maybe<Dogs_Bool_Exp>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Dogs_Order_By>>
};


export type SubscribeToDogObjectsSubscription = (
  { __typename?: 'subscription_root' }
  & { dogs: Array<(
    { __typename?: 'dogs' }
    & DogFragment
  )> }
);

export type InsertDogMutationVariables = {
  objects: Array<Dogs_Insert_Input>
};


export type InsertDogMutation = (
  { __typename?: 'mutation_root' }
  & { insert_dogs: Maybe<(
    { __typename?: 'dogs_mutation_response' }
    & Pick<Dogs_Mutation_Response, 'affected_rows'>
    & { returning: Array<(
      { __typename?: 'dogs' }
      & DogFragment
    )> }
  )> }
);

export type InsertDogWithOnConflictMutationVariables = {
  objects: Array<Dogs_Insert_Input>,
  onConflict?: Maybe<Dogs_On_Conflict>
};


export type InsertDogWithOnConflictMutation = (
  { __typename?: 'mutation_root' }
  & { insert_dogs: Maybe<(
    { __typename?: 'dogs_mutation_response' }
    & Pick<Dogs_Mutation_Response, 'affected_rows'>
    & { returning: Array<(
      { __typename?: 'dogs' }
      & DogFragment
    )> }
  )> }
);

export type UpdateDogByIdMutationVariables = {
  id?: Maybe<Scalars['uuid']>,
  set?: Maybe<Dogs_Set_Input>
};


export type UpdateDogByIdMutation = (
  { __typename?: 'mutation_root' }
  & { update_dogs: Maybe<(
    { __typename?: 'dogs_mutation_response' }
    & Pick<Dogs_Mutation_Response, 'affected_rows'>
    & { returning: Array<(
      { __typename?: 'dogs' }
      & DogFragment
    )> }
  )> }
);

export type UpdateDogMutationVariables = {
  set?: Maybe<Dogs_Set_Input>,
  where: Dogs_Bool_Exp
};


export type UpdateDogMutation = (
  { __typename?: 'mutation_root' }
  & { update_dogs: Maybe<(
    { __typename?: 'dogs_mutation_response' }
    & Pick<Dogs_Mutation_Response, 'affected_rows'>
    & { returning: Array<(
      { __typename?: 'dogs' }
      & DogFragment
    )> }
  )> }
);

export type RemoveDogsModelByIdMutationVariables = {
  id?: Maybe<Scalars['uuid']>
};


export type RemoveDogsModelByIdMutation = (
  { __typename?: 'mutation_root' }
  & { delete_dogs: Maybe<(
    { __typename?: 'dogs_mutation_response' }
    & Pick<Dogs_Mutation_Response, 'affected_rows'>
  )> }
);

export type RemoveDogsModelMutationVariables = {
  where: Dogs_Bool_Exp
};


export type RemoveDogsModelMutation = (
  { __typename?: 'mutation_root' }
  & { delete_dogs: Maybe<(
    { __typename?: 'dogs_mutation_response' }
    & Pick<Dogs_Mutation_Response, 'affected_rows'>
  )> }
);

export type VehicleFragment = (
  { __typename?: 'vehicle' }
  & Pick<Vehicle, 'id' | 'name'>
  & { locations: Array<(
    { __typename?: 'vehicle_location' }
    & Pick<Vehicle_Location, 'location'>
  )> }
);

export type VehicleLocationOnlyFragment = (
  { __typename?: 'vehicle' }
  & Pick<Vehicle, 'id'>
  & { locations: Array<(
    { __typename?: 'vehicle_location' }
    & Pick<Vehicle_Location, 'location'>
  )> }
);

export type DogFragment = (
  { __typename?: 'dogs' }
  & Pick<Dogs, 'breed' | 'id'>
);

export const VehicleFragmentDoc = gql`
    fragment Vehicle on vehicle {
  id
  name
  locations {
    location
  }
}
    `;
export const VehicleLocationOnlyFragmentDoc = gql`
    fragment VehicleLocationOnly on vehicle {
  id
  locations {
    location
  }
}
    `;
export const DogFragmentDoc = gql`
    fragment Dog on dogs {
  breed
  id
}
    `;
export const QueryVehicleByIdDocument = gql`
    query queryVehicleById($vehicleId: String!) {
  vehicle_by_pk(id: $vehicleId) {
    ...Vehicle
  }
}
    ${VehicleFragmentDoc}`;
export type QueryVehicleByIdQueryResult = ApolloReactCommon.QueryResult<QueryVehicleByIdQuery, QueryVehicleByIdQueryVariables>;
export const QueryVehicleObjectsDocument = gql`
    query queryVehicleObjects($distinct_on: [vehicle_select_column!], $where: vehicle_bool_exp, $limit: Int, $offset: Int, $order_by: [vehicle_order_by!]) {
  vehicle(distinct_on: $distinct_on, where: $where, limit: $limit, offset: $offset, order_by: $order_by) {
    ...Vehicle
  }
}
    ${VehicleFragmentDoc}`;
export type QueryVehicleObjectsQueryResult = ApolloReactCommon.QueryResult<QueryVehicleObjectsQuery, QueryVehicleObjectsQueryVariables>;
export const SubscribeToVehicleByIdDocument = gql`
    subscription subscribeToVehicleById($vehicleId: String!) {
  vehicle_by_pk(id: $vehicleId) {
    ...Vehicle
  }
}
    ${VehicleFragmentDoc}`;
export type SubscribeToVehicleByIdSubscriptionResult = ApolloReactCommon.SubscriptionResult<SubscribeToVehicleByIdSubscription>;
export const SubscribeToVehicleObjectsDocument = gql`
    subscription subscribeToVehicleObjects($distinct_on: [vehicle_select_column!], $where: vehicle_bool_exp, $limit: Int, $offset: Int, $order_by: [vehicle_order_by!]) {
  vehicle(distinct_on: $distinct_on, where: $where, limit: $limit, offset: $offset, order_by: $order_by) {
    ...Vehicle
  }
}
    ${VehicleFragmentDoc}`;
export type SubscribeToVehicleObjectsSubscriptionResult = ApolloReactCommon.SubscriptionResult<SubscribeToVehicleObjectsSubscription>;
export const InsertVehicleDocument = gql`
    mutation insertVehicle($objects: [vehicle_insert_input!]!) {
  insert_vehicle(objects: $objects) {
    affected_rows
    returning {
      ...Vehicle
    }
  }
}
    ${VehicleFragmentDoc}`;
export type InsertVehicleMutationFn = ApolloReactCommon.MutationFunction<InsertVehicleMutation, InsertVehicleMutationVariables>;
export type InsertVehicleMutationResult = ApolloReactCommon.MutationResult<InsertVehicleMutation>;
export type InsertVehicleMutationOptions = ApolloReactCommon.BaseMutationOptions<InsertVehicleMutation, InsertVehicleMutationVariables>;
export const InsertVehicleWithOnConflictDocument = gql`
    mutation insertVehicleWithOnConflict($objects: [vehicle_insert_input!]!, $onConflict: vehicle_on_conflict) {
  insert_vehicle(objects: $objects, on_conflict: $onConflict) {
    affected_rows
    returning {
      ...Vehicle
    }
  }
}
    ${VehicleFragmentDoc}`;
export type InsertVehicleWithOnConflictMutationFn = ApolloReactCommon.MutationFunction<InsertVehicleWithOnConflictMutation, InsertVehicleWithOnConflictMutationVariables>;
export type InsertVehicleWithOnConflictMutationResult = ApolloReactCommon.MutationResult<InsertVehicleWithOnConflictMutation>;
export type InsertVehicleWithOnConflictMutationOptions = ApolloReactCommon.BaseMutationOptions<InsertVehicleWithOnConflictMutation, InsertVehicleWithOnConflictMutationVariables>;
export const UpdateVehicleByIdDocument = gql`
    mutation updateVehicleById($id: String, $set: vehicle_set_input) {
  update_vehicle(_set: $set, where: {id: {_eq: $id}}) {
    affected_rows
    returning {
      ...Vehicle
    }
  }
}
    ${VehicleFragmentDoc}`;
export type UpdateVehicleByIdMutationFn = ApolloReactCommon.MutationFunction<UpdateVehicleByIdMutation, UpdateVehicleByIdMutationVariables>;
export type UpdateVehicleByIdMutationResult = ApolloReactCommon.MutationResult<UpdateVehicleByIdMutation>;
export type UpdateVehicleByIdMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateVehicleByIdMutation, UpdateVehicleByIdMutationVariables>;
export const UpdateVehicleDocument = gql`
    mutation updateVehicle($set: vehicle_set_input, $where: vehicle_bool_exp!) {
  update_vehicle(_set: $set, where: $where) {
    affected_rows
    returning {
      ...Vehicle
    }
  }
}
    ${VehicleFragmentDoc}`;
export type UpdateVehicleMutationFn = ApolloReactCommon.MutationFunction<UpdateVehicleMutation, UpdateVehicleMutationVariables>;
export type UpdateVehicleMutationResult = ApolloReactCommon.MutationResult<UpdateVehicleMutation>;
export type UpdateVehicleMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateVehicleMutation, UpdateVehicleMutationVariables>;
export const RemoveVehicleModelByIdDocument = gql`
    mutation removeVehicleModelById($id: String) {
  delete_vehicle(where: {id: {_eq: $id}}) {
    affected_rows
  }
}
    `;
export type RemoveVehicleModelByIdMutationFn = ApolloReactCommon.MutationFunction<RemoveVehicleModelByIdMutation, RemoveVehicleModelByIdMutationVariables>;
export type RemoveVehicleModelByIdMutationResult = ApolloReactCommon.MutationResult<RemoveVehicleModelByIdMutation>;
export type RemoveVehicleModelByIdMutationOptions = ApolloReactCommon.BaseMutationOptions<RemoveVehicleModelByIdMutation, RemoveVehicleModelByIdMutationVariables>;
export const RemoveVehicleModelDocument = gql`
    mutation removeVehicleModel($where: vehicle_bool_exp!) {
  delete_vehicle(where: $where) {
    affected_rows
  }
}
    `;
export type RemoveVehicleModelMutationFn = ApolloReactCommon.MutationFunction<RemoveVehicleModelMutation, RemoveVehicleModelMutationVariables>;
export type RemoveVehicleModelMutationResult = ApolloReactCommon.MutationResult<RemoveVehicleModelMutation>;
export type RemoveVehicleModelMutationOptions = ApolloReactCommon.BaseMutationOptions<RemoveVehicleModelMutation, RemoveVehicleModelMutationVariables>;
export const QueryVehicleLocationOnlyByIdDocument = gql`
    query queryVehicleLocationOnlyById($vehicleId: String!) {
  vehicle_by_pk(id: $vehicleId) {
    ...VehicleLocationOnly
  }
}
    ${VehicleLocationOnlyFragmentDoc}`;
export type QueryVehicleLocationOnlyByIdQueryResult = ApolloReactCommon.QueryResult<QueryVehicleLocationOnlyByIdQuery, QueryVehicleLocationOnlyByIdQueryVariables>;
export const QueryVehicleLocationOnlyObjectsDocument = gql`
    query queryVehicleLocationOnlyObjects($distinct_on: [vehicle_select_column!], $where: vehicle_bool_exp, $limit: Int, $offset: Int, $order_by: [vehicle_order_by!]) {
  vehicle(distinct_on: $distinct_on, where: $where, limit: $limit, offset: $offset, order_by: $order_by) {
    ...VehicleLocationOnly
  }
}
    ${VehicleLocationOnlyFragmentDoc}`;
export type QueryVehicleLocationOnlyObjectsQueryResult = ApolloReactCommon.QueryResult<QueryVehicleLocationOnlyObjectsQuery, QueryVehicleLocationOnlyObjectsQueryVariables>;
export const SubscribeToVehicleLocationOnlyByIdDocument = gql`
    subscription subscribeToVehicleLocationOnlyById($vehicleId: String!) {
  vehicle_by_pk(id: $vehicleId) {
    ...VehicleLocationOnly
  }
}
    ${VehicleLocationOnlyFragmentDoc}`;
export type SubscribeToVehicleLocationOnlyByIdSubscriptionResult = ApolloReactCommon.SubscriptionResult<SubscribeToVehicleLocationOnlyByIdSubscription>;
export const SubscribeToVehicleLocationOnlyObjectsDocument = gql`
    subscription subscribeToVehicleLocationOnlyObjects($distinct_on: [vehicle_select_column!], $where: vehicle_bool_exp, $limit: Int, $offset: Int, $order_by: [vehicle_order_by!]) {
  vehicle(distinct_on: $distinct_on, where: $where, limit: $limit, offset: $offset, order_by: $order_by) {
    ...VehicleLocationOnly
  }
}
    ${VehicleLocationOnlyFragmentDoc}`;
export type SubscribeToVehicleLocationOnlyObjectsSubscriptionResult = ApolloReactCommon.SubscriptionResult<SubscribeToVehicleLocationOnlyObjectsSubscription>;
export const InsertVehicleLocationOnlyDocument = gql`
    mutation insertVehicleLocationOnly($objects: [vehicle_insert_input!]!) {
  insert_vehicle(objects: $objects) {
    affected_rows
    returning {
      ...VehicleLocationOnly
    }
  }
}
    ${VehicleLocationOnlyFragmentDoc}`;
export type InsertVehicleLocationOnlyMutationFn = ApolloReactCommon.MutationFunction<InsertVehicleLocationOnlyMutation, InsertVehicleLocationOnlyMutationVariables>;
export type InsertVehicleLocationOnlyMutationResult = ApolloReactCommon.MutationResult<InsertVehicleLocationOnlyMutation>;
export type InsertVehicleLocationOnlyMutationOptions = ApolloReactCommon.BaseMutationOptions<InsertVehicleLocationOnlyMutation, InsertVehicleLocationOnlyMutationVariables>;
export const InsertVehicleLocationOnlyWithOnConflictDocument = gql`
    mutation insertVehicleLocationOnlyWithOnConflict($objects: [vehicle_insert_input!]!, $onConflict: vehicle_on_conflict) {
  insert_vehicle(objects: $objects, on_conflict: $onConflict) {
    affected_rows
    returning {
      ...VehicleLocationOnly
    }
  }
}
    ${VehicleLocationOnlyFragmentDoc}`;
export type InsertVehicleLocationOnlyWithOnConflictMutationFn = ApolloReactCommon.MutationFunction<InsertVehicleLocationOnlyWithOnConflictMutation, InsertVehicleLocationOnlyWithOnConflictMutationVariables>;
export type InsertVehicleLocationOnlyWithOnConflictMutationResult = ApolloReactCommon.MutationResult<InsertVehicleLocationOnlyWithOnConflictMutation>;
export type InsertVehicleLocationOnlyWithOnConflictMutationOptions = ApolloReactCommon.BaseMutationOptions<InsertVehicleLocationOnlyWithOnConflictMutation, InsertVehicleLocationOnlyWithOnConflictMutationVariables>;
export const UpdateVehicleLocationOnlyByIdDocument = gql`
    mutation updateVehicleLocationOnlyById($id: String, $set: vehicle_set_input) {
  update_vehicle(_set: $set, where: {id: {_eq: $id}}) {
    affected_rows
    returning {
      ...VehicleLocationOnly
    }
  }
}
    ${VehicleLocationOnlyFragmentDoc}`;
export type UpdateVehicleLocationOnlyByIdMutationFn = ApolloReactCommon.MutationFunction<UpdateVehicleLocationOnlyByIdMutation, UpdateVehicleLocationOnlyByIdMutationVariables>;
export type UpdateVehicleLocationOnlyByIdMutationResult = ApolloReactCommon.MutationResult<UpdateVehicleLocationOnlyByIdMutation>;
export type UpdateVehicleLocationOnlyByIdMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateVehicleLocationOnlyByIdMutation, UpdateVehicleLocationOnlyByIdMutationVariables>;
export const UpdateVehicleLocationOnlyDocument = gql`
    mutation updateVehicleLocationOnly($set: vehicle_set_input, $where: vehicle_bool_exp!) {
  update_vehicle(_set: $set, where: $where) {
    affected_rows
    returning {
      ...VehicleLocationOnly
    }
  }
}
    ${VehicleLocationOnlyFragmentDoc}`;
export type UpdateVehicleLocationOnlyMutationFn = ApolloReactCommon.MutationFunction<UpdateVehicleLocationOnlyMutation, UpdateVehicleLocationOnlyMutationVariables>;
export type UpdateVehicleLocationOnlyMutationResult = ApolloReactCommon.MutationResult<UpdateVehicleLocationOnlyMutation>;
export type UpdateVehicleLocationOnlyMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateVehicleLocationOnlyMutation, UpdateVehicleLocationOnlyMutationVariables>;
export const QueryDogByIdDocument = gql`
    query queryDogById($dogsId: uuid!) {
  dogs_by_pk(id: $dogsId) {
    ...Dog
  }
}
    ${DogFragmentDoc}`;
export type QueryDogByIdQueryResult = ApolloReactCommon.QueryResult<QueryDogByIdQuery, QueryDogByIdQueryVariables>;
export const QueryDogObjectsDocument = gql`
    query queryDogObjects($distinct_on: [dogs_select_column!], $where: dogs_bool_exp, $limit: Int, $offset: Int, $order_by: [dogs_order_by!]) {
  dogs(distinct_on: $distinct_on, where: $where, limit: $limit, offset: $offset, order_by: $order_by) {
    ...Dog
  }
}
    ${DogFragmentDoc}`;
export type QueryDogObjectsQueryResult = ApolloReactCommon.QueryResult<QueryDogObjectsQuery, QueryDogObjectsQueryVariables>;
export const SubscribeToDogByIdDocument = gql`
    subscription subscribeToDogById($dogsId: uuid!) {
  dogs_by_pk(id: $dogsId) {
    ...Dog
  }
}
    ${DogFragmentDoc}`;
export type SubscribeToDogByIdSubscriptionResult = ApolloReactCommon.SubscriptionResult<SubscribeToDogByIdSubscription>;
export const SubscribeToDogObjectsDocument = gql`
    subscription subscribeToDogObjects($distinct_on: [dogs_select_column!], $where: dogs_bool_exp, $limit: Int, $offset: Int, $order_by: [dogs_order_by!]) {
  dogs(distinct_on: $distinct_on, where: $where, limit: $limit, offset: $offset, order_by: $order_by) {
    ...Dog
  }
}
    ${DogFragmentDoc}`;
export type SubscribeToDogObjectsSubscriptionResult = ApolloReactCommon.SubscriptionResult<SubscribeToDogObjectsSubscription>;
export const InsertDogDocument = gql`
    mutation insertDog($objects: [dogs_insert_input!]!) {
  insert_dogs(objects: $objects) {
    affected_rows
    returning {
      ...Dog
    }
  }
}
    ${DogFragmentDoc}`;
export type InsertDogMutationFn = ApolloReactCommon.MutationFunction<InsertDogMutation, InsertDogMutationVariables>;
export type InsertDogMutationResult = ApolloReactCommon.MutationResult<InsertDogMutation>;
export type InsertDogMutationOptions = ApolloReactCommon.BaseMutationOptions<InsertDogMutation, InsertDogMutationVariables>;
export const InsertDogWithOnConflictDocument = gql`
    mutation insertDogWithOnConflict($objects: [dogs_insert_input!]!, $onConflict: dogs_on_conflict) {
  insert_dogs(objects: $objects, on_conflict: $onConflict) {
    affected_rows
    returning {
      ...Dog
    }
  }
}
    ${DogFragmentDoc}`;
export type InsertDogWithOnConflictMutationFn = ApolloReactCommon.MutationFunction<InsertDogWithOnConflictMutation, InsertDogWithOnConflictMutationVariables>;
export type InsertDogWithOnConflictMutationResult = ApolloReactCommon.MutationResult<InsertDogWithOnConflictMutation>;
export type InsertDogWithOnConflictMutationOptions = ApolloReactCommon.BaseMutationOptions<InsertDogWithOnConflictMutation, InsertDogWithOnConflictMutationVariables>;
export const UpdateDogByIdDocument = gql`
    mutation updateDogById($id: uuid, $set: dogs_set_input) {
  update_dogs(_set: $set, where: {id: {_eq: $id}}) {
    affected_rows
    returning {
      ...Dog
    }
  }
}
    ${DogFragmentDoc}`;
export type UpdateDogByIdMutationFn = ApolloReactCommon.MutationFunction<UpdateDogByIdMutation, UpdateDogByIdMutationVariables>;
export type UpdateDogByIdMutationResult = ApolloReactCommon.MutationResult<UpdateDogByIdMutation>;
export type UpdateDogByIdMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateDogByIdMutation, UpdateDogByIdMutationVariables>;
export const UpdateDogDocument = gql`
    mutation updateDog($set: dogs_set_input, $where: dogs_bool_exp!) {
  update_dogs(_set: $set, where: $where) {
    affected_rows
    returning {
      ...Dog
    }
  }
}
    ${DogFragmentDoc}`;
export type UpdateDogMutationFn = ApolloReactCommon.MutationFunction<UpdateDogMutation, UpdateDogMutationVariables>;
export type UpdateDogMutationResult = ApolloReactCommon.MutationResult<UpdateDogMutation>;
export type UpdateDogMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateDogMutation, UpdateDogMutationVariables>;
export const RemoveDogsModelByIdDocument = gql`
    mutation removeDogsModelById($id: uuid) {
  delete_dogs(where: {id: {_eq: $id}}) {
    affected_rows
  }
}
    `;
export type RemoveDogsModelByIdMutationFn = ApolloReactCommon.MutationFunction<RemoveDogsModelByIdMutation, RemoveDogsModelByIdMutationVariables>;
export type RemoveDogsModelByIdMutationResult = ApolloReactCommon.MutationResult<RemoveDogsModelByIdMutation>;
export type RemoveDogsModelByIdMutationOptions = ApolloReactCommon.BaseMutationOptions<RemoveDogsModelByIdMutation, RemoveDogsModelByIdMutationVariables>;
export const RemoveDogsModelDocument = gql`
    mutation removeDogsModel($where: dogs_bool_exp!) {
  delete_dogs(where: $where) {
    affected_rows
  }
}
    `;
export type RemoveDogsModelMutationFn = ApolloReactCommon.MutationFunction<RemoveDogsModelMutation, RemoveDogsModelMutationVariables>;
export type RemoveDogsModelMutationResult = ApolloReactCommon.MutationResult<RemoveDogsModelMutation>;
export type RemoveDogsModelMutationOptions = ApolloReactCommon.BaseMutationOptions<RemoveDogsModelMutation, RemoveDogsModelMutationVariables>;